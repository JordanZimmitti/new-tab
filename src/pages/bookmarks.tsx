import {GetStaticProps}     from 'next'
import {NextPage}           from 'next'
import {ReactNode}          from 'react'
import {useEffect}          from 'react'
import {useState}           from 'react'
import Head                 from 'next/head'
import Bookmark             from '@/components/Bookmark/Bookmark'
import IBookmark            from '@/components/Bookmark/IBookmark'
import BookmarkHeading      from '@/components/BookmarkHeading/BookmarkHeading'
import Navbar               from '@/components/Navbar/Navbar'
import dataBookmarks        from '@/data/bookmarks.json'
import dataBookmarkHeadings from '@/data/bookmark-headings.json'
import JZPage               from '@/libs/ui/JZPage/JZPage'
import JZTile               from '@/libs/ui/JZTile/JZTile'
import styles               from '@/pages-lib/bookmarks/bookmarks.module.sass'
import IBookmarks           from '@/pages-lib/bookmarks/IBookmarks'

/** Function getStaticProps
 *  @description Function that gets the static data to populate on the site
 */
export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            dataBookmarkHeadings,
            dataBookmarks
        }
    }
}

/** Page Bookmarks
 *  @description Page that shows the bookmark heading categories and their associated bookmarks to the user
 *  @author Jordan Zimmitti
 *  @param {IBookmarks} props - The bookmark page properties
 *  @return {JSX.Element} The bookmarks page
 */
const Bookmarks: NextPage<IBookmarks> = (props: IBookmarks): JSX.Element => {

    //<editor-fold desc="Component Setup">

    // Defines The State Hooks//
    const [stateHeadingIdSelected , setStateHeadingIdSelected] = useState('ALL')
    const [stateBookmarks         , setStateBookmarks        ] = useState<IBookmark[]>([])
    const [stateRecentBookmarks   , setStateRecentBookmarks  ] = useState<[any]>([{}])

    // Gets The Attributes From The Props//
    const {dataBookmarks, dataBookmarkHeadings} = props

    // When The Component Is First Rendered Or The Value Of dataBookmarks Changes//
    useEffect(()=> {

        // Sets The Array Of Bookmarks//
        setStateBookmarks(dataBookmarks)

        // Sets The Array Of Recent Bookmarks//
        const recentBookmarks: [any] = JSON.parse(localStorage.getItem('RECENT_BOOKMARK') ?? JSON.stringify([
            {
                bookmarkName : '',
                bookmarkLink : ''
            },
            {
                bookmarkName : '',
                bookmarkLink : ''
            },
            {
                bookmarkName : '',
                bookmarkLink : ''
            },
            {
                bookmarkName : '',
                bookmarkLink : ''
            }
        ]))
        setStateRecentBookmarks(recentBookmarks)

    }, [dataBookmarks])

    //</editor-fold>

    //<editor-fold desc="On Change Functions">

    /** Function clickBookmark
     *  @description Function that handles when a bookmark is clicked
     *  @param {string} name - The name of the bookmark
     *  @param {string} link - The link associated with the bookmark
     */
    const clickBookmark = (name: string, link: string) => {

        // Gets The Array Of Recent Bookmarks//
        const recentBookmarks: [any] = JSON.parse(localStorage.getItem('RECENT_BOOKMARK') ?? JSON.stringify([
            {
                bookmarkName : '',
                bookmarkLink : ''
            },
            {
                bookmarkName : '',
                bookmarkLink : ''
            },
            {
                bookmarkName : '',
                bookmarkLink : ''
            },
            {
                bookmarkName : '',
                bookmarkLink : ''
            }
        ]))

        // Whether The Clicked Bookmark Is Already A Recent Bookmark//
        if (recentBookmarks.some((recentBookmark) => recentBookmark.bookmarkName === name)) return

        // Removes The Oldest Recent Bookmark//
        recentBookmarks.pop()

        // Adds The Clicked Bookmark To The Beginning Of The List
        recentBookmarks.unshift({
            bookmarkName : name,
            bookmarkLink : link
        })

        // Sets The Updated Array Of Recent Bookmarks//
        setStateRecentBookmarks(recentBookmarks)

        // Saves The New Recent Bookmark//
        localStorage.setItem('RECENT_BOOKMARK', JSON.stringify(recentBookmarks))
    }

    /** Function clickBookmarkHeading
     *  @description Function that handles when a bookmark heading is clicked
     *  @param {string} headingId - The id of the heading that was clicked
     */
    const clickBookmarkHeading = (headingId: string) => {

        // Selects The Bookmark Heading That Was Clicked//
        setStateHeadingIdSelected(headingId)
    }

    /** Function clickRecentBookmark
     *  @description Function that handles when a recent bookmark is clicked
     *  @param {string}             headingId - The unique identifier of the tile
     *  @param {[key: string]: any} data      - Any data passed along to the tile
     */
    const clickRecentBookmark = (headingId: string, data: {[key: string]: any}) => {

        // Opens The Link//
        location.href = data.link
    }

    //</editor-fold>

    //<editor-fold desc="Views">

    /** View head
     *  @description Creates the page-specific metadata for browser and search-engines to use
     *  @return {ReactNode} The head component
     */
    const head = (): ReactNode => {
        return <Head>
            <title>New Tab</title>
            <meta name={'keywords'} content={'bookmark, bookmarks'}/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap" rel="stylesheet"/>
        </Head>
    }

    /** View bookmarkHeadings
     *  @description Creates the bookmark heading categories view where all of the bookmarks are organized under
     *  @return {ReactNode} A component comprised of all of the bookmark headings
     */
    const bookmarkHeadings = (): ReactNode => {
        return dataBookmarkHeadings.map((bookmarkHeading) => {
            return <BookmarkHeading
                key        = {bookmarkHeading.headingId}
                headingId  = {bookmarkHeading.headingId}
                isSelected = {stateHeadingIdSelected === bookmarkHeading.headingId}
                name       = {bookmarkHeading.name}
                onClick    = {clickBookmarkHeading}
            />
        })
    }

    /** View bookmarks
     *  @description Creates the bookmarks view
     *  @return {ReactNode} A component comprised of all of the bookmarks
     */
    const bookmarks = (): ReactNode => {

        // Filters The Bookmarks Based On The Bookmark Heading Picked//
        const bookmarks = stateBookmarks.filter((bookmark) => {

            // When All Bookmarks Should Be Shown//
            if (stateHeadingIdSelected === 'ALL') return true

            // When Certain Bookmarks Should Be Shown//
            return bookmark.headingId === stateHeadingIdSelected
        })
        bookmarks.sort((b1, b2) => b1.name > b2.name? 1 : -1)

        // Maps The Bookmarks To The Bookmark Component//
        return bookmarks.map((bookmark, index) => {
            return <Bookmark
                key          = {`BOOKMARK_${index}`}
                description  = {bookmark.description}
                name         = {bookmark.name}
                linkBookmark = {bookmark.linkBookmark}
                linkFavicon  = {bookmark.linkFavicon}
                headingId    = {bookmark.headingId}
                onClick      = {clickBookmark}
            />
        })
    }

    /** View recents
     *  @description Creates the recent bookmarks view
     *  @return {ReactNode} A component comprised of the last four bookmarks clicked
     */
    const recents = (): ReactNode => {
        return stateRecentBookmarks.map((recentBookmark, index) => {
            return <JZTile
                key         = {`RECENT_BOOKMARK_${index}`}
                tileId      = {`RECENT_BOOKMARK_${index}`}
                isShadow    = {false}
                className   = {styles.recentTile}
                colorRipple = {'#EF9A9A'}
                data        = {{link: recentBookmark.bookmarkLink}}
                onClick     = {clickRecentBookmark}>
                <span>{recentBookmark.bookmarkName}</span>
            </JZTile>
        })
    }

    //</editor-fold>

    // Returns The Bookmarks Page//
    return <JZPage
        isScroll  = {false}
        navbar    = {<Navbar/>}
        direction = {'row'}>
        {head()}
        <div className={styles.bookmarkHeadings}>
            {bookmarkHeadings()}
        </div>
        <div className={styles.bookmarksContainer}>
            <div className={styles.bookmarks}>
                {bookmarks()}
            </div>
            <div className={styles.bookmarksRecent}>
                {recents()}
            </div>
        </div>
    </JZPage>
}

// Makes Bookmarks The Default Function//
export default Bookmarks