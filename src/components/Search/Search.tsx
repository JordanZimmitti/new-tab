import Axios       from 'axios'
import {ReactNode} from 'react'
import {useEffect} from 'react'
import {useState}  from 'react'
import useSWR      from 'swr'
import styles      from './search.module.sass'

/** Component Search
 *  @description Component that creates a search bar for searching a variety of content
 *  @author Jordan Zimmitti
 *  @return {JSX.Element} The search bar component
 */
const Search = (): JSX.Element => {

    //<editor-fold desc="Component Setup">

    // Defines The State Variables//
    const [stateIsCommand   , setStateIsCommand  ] = useState(false)
    const [stateSuggestion  , setStateSuggestion ] = useState<JSX.Element[]>([<div/>])
    const [stateSearch      , setStateSearch     ] = useState('')
    const [stateSearchQuery , setStateSearchQuery] = useState('')

    // Gets The Realtime Google Search Suggestions Response//
    const {data} = useSWR(`/api/google-search/:${stateSearchQuery}`, (url: string) => Axios.get(url))

    // When The Component Is First Rendered Or The Value Of data Changes//
    useEffect(() => {

        // Whether The Query Is A Command Query//
        if (stateIsCommand) {
            setStateSuggestion([commandSuggestions()])
            return
        }

        // When The Suggestion Data Is Loading//
        if (!data) return

        // Gets The List Of Suggestions//
        const suggestions: string[] = data.data[1]

        // When No Suggestions Are Found//
        if (suggestions.length === 0) {
            setStateSuggestion([<div/>])
            return
        }

        // Filters Out Any Web URLs//
        const filteredSuggestions = suggestions.filter((value) => !value.includes('http'))

        // Creates The Suggestions Element//
        const suggestionsElement = filteredSuggestions.map((suggestion) => {
            return <span
                className = {styles.text}
                onClick   = {()=> {clickSuggestion(suggestion)}}>
                {suggestion}
            </span>
        })

        // Sets The Suggestions//
        setStateSuggestion([
            <div className={styles.suggestions}>
                {suggestionsElement}
            </div>
        ])

    }, [data])

    //</editor-fold>

    //<editor-fold desc="On Change Functions">

    /** Function changeSearchText
     *  @description Function that handles when text is being entered into the search box
     *  @param {any} event - Event data from the change listener
     */
    const changeSearchText = (event: any) => {

        // Gets And Sets The Text As Its Entered Into The Search Bar//
        const {value: text} = event.target
        setStateSearch(text)

        // Whether The Search Text Begins With A '\'//
        const words = text.trim().split(' ')
        setStateIsCommand(words[0][0] === '\\')

        if (text.length === 0) {setStateSearchQuery('')}

        // When A Command Is Not Entered Query Search Suggestions//
        else if (!stateIsCommand) {setStateSearchQuery(text)}
    }

    /** Function clickSuggestion
     *  @description Function that handles when a suggestion is clicked
     *  @param {string} suggestion - The suggestion text
     */
    const clickSuggestion = (suggestion: string) => {
        setStateSearch(suggestion)
    }

    /** Function keyPressSearch
     *  @description Function that handles when the enter key is pressed in the search box
     *  @param {any} event - Event data from the key press listener
     */
    const keyPressSearch = (event: any) => {

        // Checks Whether The Enter key Was Pressed//
        if (event.key !== 'Enter') return

        // Splits Each Word Up By Space//
        const words = stateSearch.trim().split(' ')

        // Parses The Words Into A Google Search String//
        let searchWords = ''
        words.forEach((word, index) => {
            if (index === 0 && word[0] === '\\') return
            searchWords = searchWords.concat(`${word}+`)
        })

        // Searches The Search Text In The Selected Site//
        switch (words[0]) {
            case '\\a'  : location.href = `https://www.amazon.com/s?k=${searchWords.slice(0, -1)}`                  ; break
            case '\\d'  : location.href = `https://drive.google.com/drive/search?q=${stateSearch.substring(3)}`     ; break
            case '\\i'  : location.href = `https://www.google.com/search?tbm=isch&q=${searchWords.slice(0, -1)}`    ; break
            case '\\m'  : location.href = `https://www.google.com/maps/search/${searchWords.slice(0, -1)}`          ; break
            case '\\ph' : location.href = `https://photos.google.com/search/${stateSearch.substring(3)}`            ; break
            case '\\pl' : location.href = `https://app.plex.tv/desktop/#!/search?query=${stateSearch.substring(4)}` ; break
            case '\\r'  : location.href = `https://robinhood.com/stocks/${stateSearch.substring(3)}`                ; break
            case '\\w'  : location.href = `https://${stateSearch.substring(3)}`                                     ; break
            case '\\y'  : location.href = `https://youtube.com/results?search_query=${searchWords.slice(0, -1)}`    ; break
            default     : location.href = `https://google.com/search?q=${searchWords.slice(0, -1)}`                 ; break
        }
    }

    //</editor-fold>

    //<editor-fold desc="Views">

    /** View commandSuggestions
     *  @description Creates the command suggestions for showing various commands and what they do
     *  @return {JSX.Element} The command suggestion view
     */
    const commandSuggestions = (): JSX.Element => {
        return <div className={styles.suggestions}>
            <div
                className = {styles.suggestionCommand}
                onClick   = {()=> {clickSuggestion('\\a')}}>
                <span className = {styles.text}>\a</span>
                <span style = {{padding: '0 0 0 1.25rem'}} className = {styles.text}>Amazon</span>
            </div>
            <div
                className = {styles.suggestionCommand}
                onClick   = {()=> {clickSuggestion('\\d')}}>
                <span className = {styles.text}>\d</span>
                <span style = {{padding: '0 0 0 1.2rem'}} className = {styles.text}>Google Drive</span>
            </div>
            <div
                className = {styles.suggestionCommand}
                onClick   = {()=> {clickSuggestion('\\i')}}>
                <span className = {styles.text}>\i</span>
                <span style = {{padding: '0 0 0 1.6rem'}} className = {styles.text}>Google Images</span>
            </div>
            <div
                className = {styles.suggestionCommand}
                onClick   = {()=> {clickSuggestion('\\m')}}>
                <span className = {styles.text}>\m</span>
                <span style = {{padding: '0 0 0 .8rem'}} className = {styles.text}>Google Maps</span>
            </div>
            <div
                className = {styles.suggestionCommand}
                onClick   = {()=> {clickSuggestion('\\ph')}}>
                <span className = {styles.text}>\ph</span>
                <span style = {{padding: '0 0 0 .45rem'}} className = {styles.text}>Google Photos</span>
            </div>
            <div
                className = {styles.suggestionCommand}
                onClick   = {()=> {clickSuggestion('\\pl')}}>
                <span className = {styles.text}>\pl</span>
                <span style = {{padding: '0 0 0 .89rem'}} className = {styles.text}>Plex</span>
            </div>
            <div
                className = {styles.suggestionCommand}
                onClick   = {()=> {clickSuggestion('\\r')}}>
                <span className = {styles.text}>\r</span>
                <span style = {{padding: '0 0 0 1.41rem'}} className = {styles.text}>Robinhood Stocks</span>
            </div>
            <div
                className = {styles.suggestionCommand}
                onClick   = {()=> {clickSuggestion('\\w')}}>
                <span className = {styles.text}>\w</span>
                <span style = {{padding: '0 0 0 .97rem'}} className = {styles.text}>Website</span>
            </div>
            <div
                className = {styles.suggestionCommand}
                onClick   = {()=> {clickSuggestion('\\y')}}>
                <span className = {styles.text}>\y</span>
                <span style = {{padding: '0 0 0 1.27rem'}} className = {styles.text}>Youtube</span>
            </div>
        </div>
    }

    /** View search
     *  @description Creates the search bar for searching content in various sites
     *  @return {ReactNode} The search view
     */
    const search = (): ReactNode => {
        return <div className={styles.search}>
            <input
                className   = {styles.input}
                placeholder = {'Search'}
                value       = {stateSearch}
                onChange    = {changeSearchText}
                onKeyPress  = {keyPressSearch}
            />
        </div>
    }

    //</editor-fold>

    // Returns The Search Component//
    return <div className={styles.container}>
        {search()}
        {stateSuggestion}
    </div>
}

// Makes Search The Default Function//
export default Search