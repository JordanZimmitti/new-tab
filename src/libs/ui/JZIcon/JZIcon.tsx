import {ReactNode}  from 'react'
import {useEffect}  from 'react'
import {useState}   from 'react'
import IJZIcon      from './IJZIcon'
import {JZIconType} from './IJZIcon'

/** Component JZIcon
 * @description Component that creates an icon
 * @param {IJZIcon} props - the icon component properties
 * @return {JSX.Element} The JZIcon component
 */
const JZIcon = (props: IJZIcon) => {

    //<editor-fold desc="Component Setup">

    // Defines The State Variables//
    const [stateColor, setStateColor] = useState('')

    // Gets The Attributes From The Props//
    const {
        iconType,
        isClickable  = false,
        size         = 1.5,
        colorDefault = '#000000',
        colorHover   = '#000000',
        padding      = '0',
        onClick      = () => {}
    } = props

    // When The Component Is First Rendered Or The Default Color Property Changes//
    useEffect(() => {
        setStateColor(colorDefault)
    }, [colorDefault])

    //</editor-fold>

    //<editor-fold desc="On Change Functions">

    // When The Icon Is Clicked//
    const click = () => {
        isClickable ? onClick(iconType) : null
    }

    // When The Icon Is Hovered Upon//
    const mouseEnter = () => {
        isClickable ? setStateColor(colorHover) : null
    }

    // When The Icon Is Not Being Hovered Upon//
    const mouseLeave = () => {
        isClickable ? setStateColor(colorDefault) : null
    }

    //</editor-fold>

    //<editor-fold desc="Icon Views">

    // Creates The Accessibility JZIcon//
    const iconAccessibility = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M20.75 6.99c-.14-.55-.69-.87-1.24-.75-2.38.53-5.03.76-7.51.76s-5.13-.23-7.51-.76c-.55-.12-1.1.2-1.24.75-.14.56.2 1.13.75 1.26 1.61.36 3.35.61 5 .75v12c0 .55.45 1 1 1s1-.45 1-1v-5h2v5c0 .55.45 1 1 1s1-.45 1-1V9c1.65-.14 3.39-.39 4.99-.75.56-.13.9-.7.76-1.26zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'}
            />
        </svg>
    }

    // Creates The Account JZIcon//
    const iconAccount = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'}
            />
        </svg>
    }

    // Creates The Add JZIcon//
    const iconAdd = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'5 5 14 14'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z'}
            />
        </svg>
    }

    // Creates The Archive JZIcon//
    const iconArchive = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'3 3 18 18'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zm-8.89 11.92L6.5 12H10v-2h4v2h3.5l-5.15 5.15c-.19.19-.51.19-.7 0zM5.12 5l.81-1h12l.94 1H5.12z'}
            />
        </svg>
    }

    // Creates The Backup JZIcon//
    const iconBackup = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 1 1 22 22'}
            viewBox           = {'1 1 22 22'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <g>
                <path
                    d    = {'M0,0h24v24H0V0z'}
                    fill = {'none'}
                />
            </g>
            <g>
                <path
                    d = {'M19,11c0-3.87-3.13-7-7-7C8.78,4,6.07,6.18,5.26,9.15C2.82,9.71,1,11.89,1,14.5C1,17.54,3.46,20,6.5,20 c1.76,0,10.25,0,12,0l0,0c2.49-0.01,4.5-2.03,4.5-4.52C23,13.15,21.25,11.26,19,11z M13,13v2c0,0.55-0.45,1-1,1h0 c-0.55,0-1-0.45-1-1v-2H9.21c-0.45,0-0.67-0.54-0.35-0.85l2.79-2.79c0.2-0.2,0.51-0.2,0.71,0l2.79,2.79 c0.31,0.31,0.09,0.85-0.35,0.85H13z'}
                />
            </g>
        </svg>
    }

    // Creates The Bookmark JZIcon//
    const iconBookmark = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'3 3 18 18'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z'}
            />
        </svg>
    }

    // Creates The Add Bookmark JZIcon//
    const iconBookmarkAdd = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 3.48 2.73 13.8 13.8'}
            viewBox           = {'3.48 2.73 13.8 13.8'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <rect
                fill = {'none'}
            />
            <path
                d = {'M15,7.25c0.41,0,0.75-0.34,0.75-0.75V5.75h0.75c0.41,0,0.75-0.34,0.75-0.75s-0.34-0.75-0.75-0.75h-0.75V3.5 c0-0.41-0.34-0.75-0.75-0.75s-0.75,0.34-0.75,0.75v0.75H13.5c-0.41,0-0.75,0.34-0.75,0.75s0.34,0.75,0.75,0.75h0.75V6.5 C14.25,6.91,14.59,7.25,15,7.25z M15,15.52c0,0.71-0.71,1.19-1.37,0.93L10,15l-3.63,1.45C5.71,16.71,5,16.23,5,15.52V4.5 C5,3.67,5.67,3,6.5,3l5.04,0C11.19,3.59,11,4.27,11,5c0,2.21,1.79,4,4,4V15.52z'}
            />
        </svg>
    }

    // Creates The Bookmarks JZIcon//
    const iconBookmarks = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'1 1 22 22'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M19 18l2 1V3c0-1.1-.9-2-2-2H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13zM15 5H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z'}
            />
        </svg>
    }

    // Creates The Bug Report JZIcon//
    const iconBugReport = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'3.3 3.4 17.6 17.6'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M19 8h-1.81c-.45-.78-1.07-1.45-1.82-1.96l.93-.93c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.47 1.47C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L9.11 3.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l.92.93C7.88 6.55 7.26 7.22 6.81 8H5c-.55 0-1 .45-1 1s.45 1 1 1h1.09c-.05.33-.09.66-.09 1v1H5c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .34.04.67.09 1H5c-.55 0-1 .45-1 1s.45 1 1 1h1.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H19c.55 0 1-.45 1-1s-.45-1-1-1h-1.09c.05-.33.09-.66.09-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-1c0-.34-.04-.67-.09-1H19c.55 0 1-.45 1-1s-.45-1-1-1zm-6 8h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1zm0-4h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1z'}
            />
        </svg>
    }

    // Creates The Calendar JZIcon//
    const iconCalendar = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 1 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M19 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V8h14v10c0 .55-.45 1-1 1zM8 10h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1z'}
            />
        </svg>
    }

    // Creates The Check JZIcon//
    const iconCheck = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'3.8 3.6 16.8 16.8'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z'}
            />
        </svg>
    }

    // Creates The Clear JZIcon//
    const iconClear = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'3 3 18 18'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z'}
            />
        </svg>
    }

    // Creates The Comment JZIcon//
    const iconComment = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM17 14H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z'}
            />
        </svg>
    }

    // Creates The Add Comment JZIcon//
    const iconCommentAdd = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-6 7h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V6c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z'}
            />
        </svg>
    }

    // Creates The Contact JZIcon//
    const iconContact = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm.4-4.78c-.01.01-.02.03-.03.05-.05.08-.1.16-.14.24-.02.03-.03.07-.04.11-.03.07-.06.14-.08.21-.07.21-.1.43-.1.68H10.5c0-.51.08-.94.2-1.3 0-.01 0-.02.01-.03.01-.04.04-.06.05-.1.06-.16.13-.3.22-.44.03-.05.07-.1.1-.15.03-.04.05-.09.08-.12l.01.01c.84-1.1 2.21-1.44 2.32-2.68.09-.98-.61-1.93-1.57-2.13-1.04-.22-1.98.39-2.3 1.28-.14.36-.47.65-.88.65h-.2c-.6 0-1.04-.59-.87-1.17.55-1.82 2.37-3.09 4.43-2.79 1.69.25 3.04 1.64 3.33 3.33.44 2.44-1.63 3.03-2.53 4.35z'}
            />
        </svg>
    }

    // Creates The Copy JZIcon//
    const iconCopy = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 2 2 20 20'}
            viewBox           = {'2 2 20 20'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <g>
                <rect
                    fill = {'none'}
                />
            </g>
            <g>
                <path
                    d = {'M15,20H5V7c0-0.55-0.45-1-1-1h0C3.45,6,3,6.45,3,7v13c0,1.1,0.9,2,2,2h10c0.55,0,1-0.45,1-1v0C16,20.45,15.55,20,15,20z M20,16V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9C19.1,18,20,17.1,20,16z M18,16H9V4h9V16z'}
                />
            </g>
        </svg>
    }

    // Creates The Cut JZIcon//
    const iconCut = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M9.64 7.64c.29-.62.42-1.33.34-2.09-.19-1.73-1.54-3.2-3.26-3.49-2.77-.48-5.14 1.89-4.66 4.65.3 1.72 1.76 3.07 3.49 3.26.76.08 1.46-.05 2.09-.34L10 12l-2.36 2.36c-.62-.29-1.33-.42-2.09-.34-1.73.19-3.2 1.54-3.49 3.26-.48 2.77 1.89 5.13 4.65 4.65 1.72-.3 3.07-1.76 3.26-3.49.08-.76-.05-1.46-.34-2.09L12 14l7.59 7.59c.89.89 2.41.26 2.41-1v-.01c0-.37-.15-.73-.41-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm7.59-10.09L13 9l2 2 6.59-6.59c.26-.26.41-.62.41-1V3.4c0-1.25-1.52-1.88-2.41-.99z'}
            />
        </svg>
    }

    // Creates The Delete JZIcon//
    const iconDelete = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'3 3 18 18'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z'}
            />
        </svg>
    }

    // Creates The Auto Delete JZIcon//
    const iconDeleteAuto = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 3 3 14 14'}
            viewBox           = {'3 3 14 14'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <g>
                <rect
                    fill = {'none'}
                />
            </g>
            <g>
                <g>
                    <path
                        d = {'M13,4.5C13,4.22,12.78,4,12.5,4H11l-0.85-0.85C10.05,3.05,9.93,3,9.79,3H6.21C6.07,3,5.95,3.05,5.85,3.15L5,4H3.5 C3.22,4,3,4.22,3,4.5C3,4.78,3.22,5,3.5,5h9C12.78,5,13,4.78,13,4.5z'}
                    />
                    <path
                        d = {'M12.5,8c-0.17,0-0.33,0.03-0.5,0.05V7c0-0.55-0.45-1-1-1H5C4.45,6,4,6.45,4,7v7c0,0.55,0.45,1,1,1h3.76 c0.81,1.21,2.18,2,3.74,2c2.49,0,4.5-2.01,4.5-4.5S14.99,8,12.5,8z M12.5,16C10.57,16,9,14.43,9,12.5S10.57,9,12.5,9 s3.5,1.57,3.5,3.5S14.43,16,12.5,16z'}
                    />
                    <path
                        d = {'M13,12.42V10.5c0-0.28-0.22-0.5-0.5-0.5h0c-0.28,0-0.5,0.22-0.5,0.5v2.21c0,0.18,0.1,0.34,0.25,0.43l1.92,1.11 c0.24,0.14,0.54,0.06,0.68-0.18v0c0.14-0.24,0.06-0.54-0.18-0.68L13,12.42z'}
                    />
                </g>
            </g>
        </svg>
    }

    // Creates The Delete Forever JZIcon//
    const iconDeleteForever = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 0 0 24 24'}
            viewBox           = {'3 3 18 18'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <g>
                <path
                    d    = {'M0,0h24v24H0V0z'}
                    fill = {'none'}
                />
            </g>
            <g>
                <path
                    d = {'M6,19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V7H6V19z M9.17,12.59c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0 L12,12.59l1.41-1.41c0.39-0.39,1.02-0.39,1.41,0s0.39,1.02,0,1.41L13.41,14l1.41,1.41c0.39,0.39,0.39,1.02,0,1.41 s-1.02,0.39-1.41,0L12,15.41l-1.41,1.41c-0.39,0.39-1.02,0.39-1.41,0c-0.39-0.39-0.39-1.02,0-1.41L10.59,14L9.17,12.59z M18,4h-2.5 l-0.71-0.71C14.61,3.11,14.35,3,14.09,3H9.91c-0.26,0-0.52,0.11-0.7,0.29L8.5,4H6C5.45,4,5,4.45,5,5s0.45,1,1,1h12 c0.55,0,1-0.45,1-1S18.55,4,18,4z'}
                />
            </g>
        </svg>
    }

    // Creates The Sweep Delete JZIcon//
    const iconDeleteSweep = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M16 16h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1zm0-8h5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1zm0 4h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM13 5h-2l-.71-.71c-.18-.18-.44-.29-.7-.29H6.41c-.26 0-.52.11-.7.29L5 5H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z'}
            />
        </svg>
    }

    // Creates The Edit JZIcon//
    const iconEdit = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2.99 2.9 18.1 18.1'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'}
            />
        </svg>
    }

    // Creates The Email JZIcon//
    const iconEmail = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M12.72 2.03C6.63 1.6 1.6 6.63 2.03 12.72 2.39 18.01 7.01 22 12.31 22H16c.55 0 1-.45 1-1s-.45-1-1-1h-3.67c-3.73 0-7.15-2.42-8.08-6.03-1.49-5.8 3.91-11.21 9.71-9.71C17.58 5.18 20 8.6 20 12.33v1.1c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.25c0-2.51-1.78-4.77-4.26-5.12-3.4-.49-6.27 2.45-5.66 5.87.34 1.91 1.83 3.49 3.72 3.94 1.84.43 3.59-.16 4.74-1.33.89 1.22 2.67 1.86 4.3 1.21 1.34-.53 2.16-1.9 2.16-3.34v-1.09c0-5.31-3.99-9.93-9.28-10.29zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'}
            />
        </svg>
    }

    // Creates The Favorite JZIcon//
    const iconFavorite = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 1.5 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z'}
            />
        </svg>
    }

    // Creates The Feedback JZIcon//
    const iconFeedback = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M20 2H4.01c-1.1 0-2 .9-2 2v18L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-5c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1v2z'}
            />
        </svg>
    }

    // Creates The File JZIcon//
    const iconFile = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M14.59 2.59c-.38-.38-.89-.59-1.42-.59H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.82-4.83zM15 18H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm-2-6V3.5L18.5 9H14c-.55 0-1-.45-1-1z'}
            />
        </svg>
    }

    // Creates Attach File JZIcon//
    const iconFileAttach = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'1.7 1 22 22'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M16.5 6.75v10.58c0 2.09-1.53 3.95-3.61 4.15-2.39.23-4.39-1.64-4.39-3.98V5.14c0-1.31.94-2.5 2.24-2.63 1.5-.15 2.76 1.02 2.76 2.49v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v8.61c0 1.31.94 2.5 2.24 2.63 1.5.15 2.76-1.02 2.76-2.49V5.17c0-2.09-1.53-3.95-3.61-4.15C9.01.79 7 2.66 7 5v12.27c0 2.87 2.1 5.44 4.96 5.71 3.29.3 6.04-2.26 6.04-5.48V6.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75z'}
            />
        </svg>
    }

    // Creates The Download File JZIcon//
    const iconFileDownload = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 3.5 3 17 17'}
            viewBox           = {'3.5 3 17 17'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <g>
                <rect
                    fill = {'none'}
                />
            </g>
            <g>
                <path
                    d = {'M16.59,9H15V4c0-0.55-0.45-1-1-1h-4C9.45,3,9,3.45,9,4v5H7.41c-0.89,0-1.34,1.08-0.71,1.71l4.59,4.59 c0.39,0.39,1.02,0.39,1.41,0l4.59-4.59C17.92,10.08,17.48,9,16.59,9z M5,19c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1s-0.45-1-1-1H6 C5.45,18,5,18.45,5,19z'}
                />
            </g>
        </svg>
    }

    // Creates The Preview File JZIcon//
    const iconFilePreview = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'1 1 22 22'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'}
            />
        </svg>
    }

    // Creates The Upload File JZIcon//
    const iconFileUpload = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 3.7 3.4 16.6 16.6'}
            viewBox           = {'3.7 3.4 16.6 16.6'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <g>
                <rect
                    fill = {'none'}
                />
            </g>
            <g>
                <path
                    d = {'M7.4,10h1.59v5c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-5h1.59c0.89,0,1.34-1.08,0.71-1.71L12.7,3.7 c-0.39-0.39-1.02-0.39-1.41,0L6.7,8.29C6.07,8.92,6.51,10,7.4,10z M5,19c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1s-0.45-1-1-1H6 C5.45,18,5,18.45,5,19z'}
                />
            </g>
        </svg>
    }

    // Creates The Filter icon//
    const iconFilter = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 4 4 16 16'}
            viewBox           = {'4 4 16 16'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <g>
                <path
                    d    = {'M0,0h24 M24,24H0'}
                    fill = {'none'}
                />
                <path
                    d = {'M4.25,5.61C6.57,8.59,10,13,10,13v5c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2v-5c0,0,3.43-4.41,5.75-7.39 C20.26,4.95,19.79,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z'}
                />
                <path
                    d    = {'M0,0h24v24H0V0z'}
                    fill = {'none'}
                />
            </g>
        </svg>
    }

    // Creates The Folder JZIcon//
    const iconFolder = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 2 2 20 20'}
            viewBox           = {'2 2 20 20'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M10.59 4.59C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-1.41-1.41z'}
            />
        </svg>
    }

    // Creates The Add Folder JZIcon//
    const iconFolderAdd = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 2 2 20 20'}
            viewBox           = {'2 2 20 20'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2 8h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1z'}
            />
        </svg>
    }

    // Creates The Help JZIcon//
    const iconHelp = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5c0-.46.08-.9.22-1.31.2-.58.53-1.1.95-1.52l1.24-1.26c.46-.44.68-1.1.55-1.8-.13-.72-.69-1.33-1.39-1.53-1.11-.31-2.14.32-2.47 1.27-.12.37-.43.65-.82.65h-.3C8.4 9 8 8.44 8.16 7.88c.43-1.47 1.68-2.59 3.23-2.83 1.52-.24 2.97.55 3.87 1.8 1.18 1.63.83 3.38-.19 4.4z'}
            />
        </svg>
    }

    // Creates The History JZIcon//
    const iconHistory = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'1.7 1.8 20.4 20.4'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M13.26 3C8.17 2.86 4 6.95 4 12H2.21c-.45 0-.67.54-.35.85l2.79 2.8c.2.2.51.2.71 0l2.79-2.8c.31-.31.09-.85-.36-.85H6c0-3.9 3.18-7.05 7.1-7 3.72.05 6.85 3.18 6.9 6.9.05 3.91-3.1 7.1-7 7.1-1.61 0-3.1-.55-4.28-1.48-.4-.31-.96-.28-1.32.08-.42.42-.39 1.13.08 1.49C9 20.29 10.91 21 13 21c5.05 0 9.14-4.17 9-9.26-.13-4.69-4.05-8.61-8.74-8.74zm-.51 5c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26.21-.36.09-.82-.26-1.03l-2.88-1.71v-3.4c0-.4-.34-.74-.75-.74z'}
            />
        </svg>
    }

    // Creates The Home JZIcon//
    const iconHome = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2.73 2.5 18.5 18.5'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z'}
            />
        </svg>
    }

    // Creates The Image JZIcon//
    const iconImage = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'3 3 18 18'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02z'}
            />
        </svg>
    }

    // Creates The Add Image JZIcon//
    const iconImageAdd = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'3 2 19 19'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M21.02 5H19V2.98c0-.54-.44-.98-.98-.98h-.03c-.55 0-.99.44-.99.98V5h-2.01c-.54 0-.98.44-.99.98v.03c0 .55.44.99.99.99H17v2.01c0 .54.44.99.99.98h.03c.54 0 .98-.44.98-.98V7h2.02c.54 0 .98-.44.98-.98v-.04c0-.54-.44-.98-.98-.98zM16 9.01V8h-1.01c-.53 0-1.03-.21-1.41-.58-.37-.38-.58-.88-.58-1.44 0-.36.1-.69.27-.98H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.28c-.3.17-.64.28-1.02.28-1.09-.01-1.98-.9-1.98-1.99zM15.96 19H6c-.41 0-.65-.47-.4-.8l1.98-2.63c.21-.28.62-.26.82.02L10 18l2.61-3.48c.2-.26.59-.27.79-.01l2.95 3.68c.26.33.03.81-.39.81z'}
            />
        </svg>
    }

    // Creates The Info JZIcon//
    const iconInfo = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z'}
            />
        </svg>
    }

    // Creates The Link JZIcon//
    const iconLink = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M3.96 11.38C4.24 9.91 5.62 8.9 7.12 8.9h2.93c.52 0 .95-.43.95-.95S10.57 7 10.05 7H7.22c-2.61 0-4.94 1.91-5.19 4.51C1.74 14.49 4.08 17 7 17h3.05c.52 0 .95-.43.95-.95s-.43-.95-.95-.95H7c-1.91 0-3.42-1.74-3.04-3.72zM9 13h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1zm7.78-6h-2.83c-.52 0-.95.43-.95.95s.43.95.95.95h2.93c1.5 0 2.88 1.01 3.16 2.48.38 1.98-1.13 3.72-3.04 3.72h-3.05c-.52 0-.95.43-.95.95s.43.95.95.95H17c2.92 0 5.26-2.51 4.98-5.49-.25-2.6-2.59-4.51-5.2-4.51z'}
            />
        </svg>
    }

    // Creates The Add Link JZIcon//
    const iconLinkAdd = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 0 0 24 24'}
            viewBox           = {'2 2 20 20'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <g>
                <rect
                    fill = {'none'}
                />
            </g>
            <g>
                <path
                    d = {'M9,11h6c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H9c-0.55,0-1-0.45-1-1v0C8,11.45,8.45,11,9,11z M20.93,12L20.93,12 c0.62,0,1.07-0.59,0.93-1.19C21.32,8.62,19.35,7,17,7h-3.05C13.43,7,13,7.43,13,7.95v0c0,0.52,0.43,0.95,0.95,0.95H17 c1.45,0,2.67,1,3.01,2.34C20.12,11.68,20.48,12,20.93,12z M3.96,11.38C4.24,9.91,5.62,8.9,7.12,8.9l2.93,0 C10.57,8.9,11,8.47,11,7.95v0C11,7.43,10.57,7,10.05,7L7.22,7c-2.61,0-4.94,1.91-5.19,4.51C1.74,14.49,4.08,17,7,17h3.05 c0.52,0,0.95-0.43,0.95-0.95v0c0-0.52-0.43-0.95-0.95-0.95H7C5.09,15.1,3.58,13.36,3.96,11.38z M18,12L18,12c-0.55,0-1,0.45-1,1v2 h-2c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h2v2c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2h2c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1h-2v-2C19,12.45,18.55,12,18,12z'}
                />
            </g>
        </svg>
    }

    // Creates The List JZIcon//
    const iconList = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'3 3 18 18'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <g
                fill = {'none'}>
                <path
                    d = {'M0 0h24v24H0V0z'}
                />
                <path
                    d       = {'M0 0h24v24H0V0z'}
                    opacity = {'.87'}
                />
            </g>
            <path
                d = {'M4 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM7 8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1zm-3 5c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM7 8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1z'}
            />
        </svg>
    }

    // Creates The Location JZIcon//
    const iconLocation = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 2 2 20 20'}
            viewBox           = {'2 2 20 20'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <g>
                <rect
                    fill = {'none'}
                />
            </g>
            <g>
                <path
                    d = {'M12,2c-4.2,0-8,3.22-8,8.2c0,3.18,2.45,6.92,7.34,11.23c0.38,0.33,0.95,0.33,1.33,0C17.55,17.12,20,13.38,20,10.2 C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C14,11.1,13.1,12,12,12z'}
                />
            </g>
        </svg>
    }

    // Creates The Closed Lock JZIcon//
    const iconLockClosed = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'1.6 1 21 21'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <g
                fill = {'none'}>
                <path
                    d = {'M0 0h24v24H0V0z'}
                />
                <path
                    d       = {'M0 0h24v24H0V0z'}
                    opacity = {'.87'}
                />
            </g>
            <path
                d = {'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z'}
            />
        </svg>
    }

    // Creates The Open Lock JZIcon//
    const iconLockOpen = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'1.6 1 21 21'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-5h-1V6c0-2.76-2.24-5-5-5-2.28 0-4.27 1.54-4.84 3.75-.14.54.18 1.08.72 1.22.53.14 1.08-.18 1.22-.72C9.44 3.93 10.63 3 12 3c1.65 0 3 1.35 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 11c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v8z'}
            />
        </svg>
    }

    // Creates The Login JZIcon//
    const iconLogin = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 3 3 14 14'}
            viewBox           = {'3 3 14 14'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <g>
                <rect
                    fill = {'none'}
                />
            </g>
            <g>
                <g>
                    <path
                        d = {'M16,4h-5.5C10.22,4,10,4.22,10,4.5v0C10,4.78,10.22,5,10.5,5H16v10h-5.5c-0.28,0-0.5,0.22-0.5,0.5v0 c0,0.28,0.22,0.5,0.5,0.5H16c0.55,0,1-0.45,1-1V5C17,4.45,16.55,4,16,4z'}
                    />
                    <path
                        d = {'M9.15,6.85L9.15,6.85c-0.2,0.2-0.2,0.51,0,0.71l1.94,1.94H3.5C3.22,9.5,3,9.72,3,10v0c0,0.28,0.22,0.5,0.5,0.5h7.59 l-1.94,1.94c-0.2,0.2-0.2,0.51,0,0.71l0,0c0.2,0.2,0.51,0.2,0.71,0l2.79-2.79c0.2-0.2,0.2-0.51,0-0.71L9.85,6.85 C9.66,6.66,9.34,6.66,9.15,6.85z'}
                    />
                </g>
            </g>
        </svg>
    }

    // Creates The Logout JZIcon//
    const iconLogout = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 3 3 14 14'}
            viewBox           = {'1.5 1.5 21 21'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <g>
                <path
                    d    = {'M0,0h24v24H0V0z'}
                    fill = {'none'}
                />
            </g>
            <g>
                <g>
                    <path
                        d = {'M5,5h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h6c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H5V5z'}
                    />
                    <path
                        d = {'M20.65,11.65l-2.79-2.79C17.54,8.54,17,8.76,17,9.21V11h-7c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C20.84,12.16,20.84,11.84,20.65,11.65z'}
                    />
                </g>
            </g>
        </svg>
    }

    // Creates The Menu JZIcon//
    const iconMenu = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'4 4 16 16'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'}
            />
        </svg>
    }

    // Creates The Message JZIcon//
    const iconMessage = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z'}
            />
        </svg>
    }

    // Creates The Movie JZIcon//
    const iconMovie = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'3 3 18 18'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z'}
            />
        </svg>
    }

    // Creates The Notifications JZIcon//
    const iconNotifications = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2.2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71L18 16z'}
            />
        </svg>
    }

    // Creates The Paste JZIcon//
    const iconPaste = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'1 0 22 22'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 18H6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h1v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V4h1c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1z'}
            />
        </svg>
    }

    // Creates The PDF JZIcon//
    const iconPdf = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-.55.45-1 1-1H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h2c.83 0 1.5.67 1.5 1.5v3zm4-3.75c0 .41-.34.75-.75.75H19v1h.75c.41 0 .75.34.75.75s-.34.75-.75.75H19v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-.55.45-1 1-1h1.25c.41 0 .75.34.75.75zM9 9.5h1v-1H9v1zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm11 5.5h1v-3h-1v3z'}
            />
        </svg>
    }

    // Creates The People JZIcon//
    const iconPeople = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'1 1 22 22'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z'}
            />
        </svg>
    }

    // Creates The Person JZIcon//
    const iconPerson = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'4 4 16 16'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z'}
            />
        </svg>
    }

    // Creates The Add Person JZIcon//
    const iconPersonAdd = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'1 1 22 22'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V8c0-.55-.45-1-1-1s-1 .45-1 1v2H2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1H6zm9 4c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z'}
            />
        </svg>
    }

    // Creates The Print JZIcon//
    const iconPrint = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M19 8H5c-1.66 0-3 1.34-3 3v4c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2h2c1.1 0 2-.9 2-2v-4c0-1.66-1.34-3-3-3zm-4 11H9c-.55 0-1-.45-1-1v-4h8v4c0 .55-.45 1-1 1zm4-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2-9H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z'}
            />
        </svg>
    }

    // Creates The QR Code JZIcon//
    const iconQRCode = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 3 3 18 18'}
            viewBox           = {'3 3 18 18'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <g>
                <rect
                    fill = {'none'}
                />
            </g>
            <path
                d = {'M15,21h-2v-2h2V21z M13,14h-2v5h2V14z M21,12h-2v4h2V12z M19,10h-2v2h2V10z M7,12H5v2h2V12z M5,10H3v2h2V10z M12,5h2V3h-2V5 z M4.5,4.5v3h3v-3H4.5z M8,9H4C3.45,9,3,8.55,3,8V4c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v4C9,8.55,8.55,9,8,9z M4.5,16.5v3h3v-3 H4.5z M8,21H4c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v4C9,20.55,8.55,21,8,21z M16.5,4.5v3h3v-3H16.5z M20,9 h-4c-0.55,0-1-0.45-1-1V4c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v4C21,8.55,20.55,9,20,9z M19,19v-3l-4,0v2h2v3h4v-2H19z M17,12 l-4,0v2h4V12z M13,10H7v2h2v2h2v-2h2V10z M14,9V7h-2V5h-2v4L14,9z M6.75,5.25h-1.5v1.5h1.5V5.25z M6.75,17.25h-1.5v1.5h1.5V17.25z M18.75,5.25h-1.5v1.5h1.5V5.25z'}
            />
        </svg>
    }

    // Creates The Refresh JZIcon//
    const iconRefresh = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'4 4 16 16'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M17.65 6.35c-1.63-1.63-3.94-2.57-6.48-2.31-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20c3.19 0 5.93-1.87 7.21-4.56.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53-1.13 2.43-3.84 3.97-6.8 3.31-2.22-.49-4.01-2.3-4.48-4.52C5.31 9.44 8.26 6 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71l-.64.65z'}
            />
        </svg>
    }

    // Creates The Router JZIcon//
    const iconRouter = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'3 3 18 18'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d = {'M11.45 5.55c.19.19.5.21.72.04C13.3 4.69 14.65 4.2 16 4.2s2.7.49 3.84 1.39c.21.17.52.15.72-.04l.04-.05c.22-.22.21-.59-.03-.8C19.24 3.57 17.62 3 16 3s-3.24.57-4.57 1.7c-.24.21-.26.57-.03.8l.05.05zm1.7.76c-.25.2-.26.58-.04.8l.04.04c.2.2.5.2.72.04.63-.48 1.38-.69 2.13-.69s1.5.21 2.13.68c.22.17.53.16.72-.04l.04-.04c.23-.23.21-.6-.04-.8-.83-.64-1.84-1-2.85-1s-2.02.36-2.85 1.01zM19 13h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z'}
            />
        </svg>
    }

    // Creates The Save JZIcon//
    const iconSave = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'3 3 18 18'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M17.59 3.59c-.38-.38-.89-.59-1.42-.59H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7.83c0-.53-.21-1.04-.59-1.41l-2.82-2.83zM12 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm1-10H7c-1.1 0-2-.9-2-2s.9-2 2-2h6c1.1 0 2 .9 2 2s-.9 2-2 2z'}
            />
        </svg>
    }

    // Creates The Search JZIcon//
    const iconSearch = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'3 3 17 17'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'}
            />
        </svg>
    }

    // Creates The Send JZIcon//
    const iconSend = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2 2.1 19.5 19.5'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z'}
            />
        </svg>
    }

    // Creates The Settings JZIcon//
    const iconSettings = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 2 2 20 20'}
            viewBox           = {'2 2 20 20'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <rect
                fill = {'none'}
            />
            <path
                d = {'M19.5,12c0-0.23-0.01-0.45-0.03-0.68l1.86-1.41c0.4-0.3,0.51-0.86,0.26-1.3l-1.87-3.23c-0.25-0.44-0.79-0.62-1.25-0.42 l-2.15,0.91c-0.37-0.26-0.76-0.49-1.17-0.68l-0.29-2.31C14.8,2.38,14.37,2,13.87,2h-3.73C9.63,2,9.2,2.38,9.14,2.88L8.85,5.19 c-0.41,0.19-0.8,0.42-1.17,0.68L5.53,4.96c-0.46-0.2-1-0.02-1.25,0.42L2.41,8.62c-0.25,0.44-0.14,0.99,0.26,1.3l1.86,1.41 C4.51,11.55,4.5,11.77,4.5,12s0.01,0.45,0.03,0.68l-1.86,1.41c-0.4,0.3-0.51,0.86-0.26,1.3l1.87,3.23c0.25,0.44,0.79,0.62,1.25,0.42 l2.15-0.91c0.37,0.26,0.76,0.49,1.17,0.68l0.29,2.31C9.2,21.62,9.63,22,10.13,22h3.73c0.5,0,0.93-0.38,0.99-0.88l0.29-2.31 c0.41-0.19,0.8-0.42,1.17-0.68l2.15,0.91c0.46,0.2,1,0.02,1.25-0.42l1.87-3.23c0.25-0.44,0.14-0.99-0.26-1.3l-1.86-1.41 C19.49,12.45,19.5,12.23,19.5,12z M12.04,15.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.97,15.5,12.04,15.5z'}
            />
        </svg>
    }

    // Creates The Accessibility Settings JZIcon
    const iconSettingsAccessibility = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 0 0 24 24'}
            viewBox           = {'0 0 24 24'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <g>
                <rect
                    fill = {'none'}
                />
            </g>
            <g>
                <path
                    d = {'M20.74,4.96c-0.13-0.53-0.67-0.85-1.2-0.73C17.16,4.77,14.49,5,12,5S6.84,4.77,4.46,4.24c-0.54-0.12-1.07,0.19-1.2,0.73 L3.24,5.02C3.11,5.56,3.43,6.12,3.97,6.24C5.59,6.61,7.34,6.86,9,7v11c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-5h2v5 c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V7c1.66-0.14,3.41-0.39,5.03-0.76c0.54-0.12,0.86-0.68,0.73-1.22L20.74,4.96z M12,4 c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,4,12,4z M8,24L8,24c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0 C7,23.55,7.45,24,8,24z M12,24L12,24c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C11,23.55,11.45,24,12,24z M16,24L16,24c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v0C15,23.55,15.45,24,16,24z'}
                />
            </g>
        </svg>
    }

    // Creates The Admin Settings JZIcon//
    const iconSettingsAdmin = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 4 4 12 12'}
            viewBox           = {'4 4 12 12'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <g>
                <rect
                    fill = {'none'}
                />
            </g>
            <g>
                <g>
                    <path
                        d = {'M10.14,10.45c1.57-1.58,2.77-1.59,3.86-1.31v-2.3c0-0.4-0.24-0.76-0.6-0.92l-4-1.75c-0.26-0.11-0.54-0.11-0.8,0l-4,1.75 C4.24,6.08,4,6.44,4,6.84v2.62c0,3.03,2.13,5.86,5,6.55c0.35-0.08,0.7-0.2,1.02-0.35C9.42,14.98,9.04,14.1,9,13.14 C8.97,12.12,9.43,11.17,10.14,10.45z'}
                    />
                    <path
                        d = {'M13,10c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3C16,11.34,14.66,10,13,10z M13,11.03c0.47,0,0.84,0.38,0.84,0.84 c0,0.46-0.38,0.84-0.84,0.84s-0.84-0.38-0.84-0.84C12.16,11.41,12.53,11.03,13,11.03z M13,15.06c-0.7,0-1.31-0.35-1.68-0.87 c0.04-0.54,1.13-0.81,1.68-0.81s1.64,0.27,1.68,0.81C14.31,14.72,13.7,15.06,13,15.06z'}
                    />
                </g>
            </g>
        </svg>
    }

    // Creates The Add To Cart JZIcon//
    const iconShoppingAdd = (): ReactNode => {
        return <svg
            xmlns             = {'https://www.w3.org/2000/svg'}
            enableBackground  = {'new 0 0 24 24'}
            viewBox           = {'.5 1 21 21'}
            height            = {'100%'}
            width             = {'100%'}
            fill              = {stateColor}>
            <rect
                fill = {'none'}
            />
            <path
                d = {'M12,9L12,9c0.55,0,1-0.45,1-1V6h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-2V2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2H9 C8.45,4,8,4.45,8,5v0c0,0.55,0.45,1,1,1h2v2C11,8.55,11.45,9,12,9z M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22s2-0.9,2-2S8.1,18,7,18 z M17,18c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2S18.1,18,17,18z M8.1,13h7.45c0.75,0,1.41-0.41,1.75-1.03l3.24-6.14 c0.25-0.48,0.08-1.08-0.4-1.34v0c-0.49-0.27-1.1-0.08-1.36,0.41L15.55,11H8.53L4.27,2H2C1.45,2,1,2.45,1,3v0c0,0.55,0.45,1,1,1h1 l3.6,7.59l-1.35,2.44C4.52,15.37,5.48,17,7,17h11c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H7L8.1,13z'}
            />
        </svg>
    }

    // Creates The Delete From Cart JZIcon
    const iconShoppingDelete = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'.3 .3 23.5 23.5'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M.71 1.83c-.39.39-.39 1.02 0 1.41l3.68 3.68 2.21 4.66-1.35 2.45c-.19.33-.28.73-.24 1.15.1 1.06 1.06 1.82 2.12 1.82h7.33l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84l2.13 2.13c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L2.12 1.83c-.39-.39-1.02-.39-1.41 0zM7 15l1.1-2h2.36l2 2H7zm9.05-2.06c.54-.14.99-.49 1.25-.97l3.58-6.49C21.25 4.82 20.76 4 20 4H7.12l8.93 8.94zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z'}
            />
        </svg>
    }

    // Creates The Shopping Cart JZIcon//
    const iconShoppingView = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'1 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z'}
            />
        </svg>
    }

    // Creates The Sort JZIcon//
    const iconSort = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'3 3 18 18'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M4 18h4c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm1 6h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z'}
            />
        </svg>
    }

    // Creates The Alphanumeric Sort JZIcon//
    const iconSortAlpha = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'1.9 2 20 20'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d = {'M12.93 2.65c-.2-.2-.51-.2-.71 0l-2.01 2.01h4.72l-2-2.01zm-.7 18.7c.2.2.51.2.71 0l1.98-1.98h-4.66l1.97 1.98zm-1.25-3.62c.6 0 1.01-.6.79-1.16L8.04 7.03c-.18-.46-.63-.76-1.12-.76-.49 0-.94.3-1.12.76l-3.74 9.53c-.22.56.19 1.16.79 1.16.35 0 .67-.22.8-.55l.71-1.9h5.11l.71 1.9c.13.34.45.56.8.56zm-6.01-4.09l1.94-5.18 1.94 5.18H4.97zm16.08 2.5h-5.33l5.72-8.29c.46-.66-.02-1.57-.82-1.57h-6.48c-.44 0-.79.36-.79.8v.01c0 .44.36.8.79.8h5.09l-5.73 8.28c-.46.66.02 1.57.82 1.57h6.72c.44 0 .79-.36.79-.79.02-.45-.34-.81-.78-.81z'}
            />
        </svg>
    }

    // Creates The Categorical Sort JZIcon//
    const iconSortCategory = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'2.8 2.8 19.3 19.3'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d    = {'M0 0h24v24H0V0z'}
                fill = {'none'}
            />
            <path
                d = {'M11.15 3.4L7.43 9.48c-.41.66.07 1.52.85 1.52h7.43c.78 0 1.26-.86.85-1.52L12.85 3.4c-.39-.64-1.31-.64-1.7 0z'}
            />
            <circle
                cx = {'17.5'}
                cy = {'17.5'}
                r  = {'4.5'}
            />
            <path
                d = {'M4 21.5h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1z'}
            />
        </svg>
    }

    // Creates The Video JZIcon//
    const iconVideo = (): ReactNode => {
        return <svg
            xmlns   = {'https://www.w3.org/2000/svg'}
            viewBox = {'3 3 18 18'}
            height  = {'100%'}
            width   = {'100%'}
            fill    = {stateColor}>
            <path
                d = {'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l2.29 2.29c.63.63 1.71.18 1.71-.71V8.91c0-.89-1.08-1.34-1.71-.71L17 10.5z'}
            />
        </svg>
    }

    //</editor-fold>

    // The Styles For The Div Container//
    const styleContainer = {
        display        : 'flex',
        flexFlow       : 'row nowrap',
        position       : 'relative',
        justifyContent : 'center',
        alignContent   : 'center',
        alignItems     : 'center',
        cursor         : isClickable ? 'pointer' : '',
        margin         : '0',
        padding        : padding,
        height         : `${size}rem`,
        width          : `${size}rem`
    } as const

    // Returns The JZIcon Component//
    return <div
        style        = {styleContainer}
        onClick      = {click}
        onMouseEnter = {mouseEnter}
        onMouseLeave = {mouseLeave}>
        {iconType === JZIconType.ACCESSIBILITY          ? iconAccessibility()         : null}
        {iconType === JZIconType.ACCOUNT                ? iconAccount()               : null}
        {iconType === JZIconType.ADD                    ? iconAdd()                   : null}
        {iconType === JZIconType.ARCHIVE                ? iconArchive()               : null}
        {iconType === JZIconType.BACKUP                 ? iconBackup()                : null}
        {iconType === JZIconType.BOOKMARK               ? iconBookmark()              : null}
        {iconType === JZIconType.BOOKMARK_ADD           ? iconBookmarkAdd()           : null}
        {iconType === JZIconType.BOOKMARKS              ? iconBookmarks()             : null}
        {iconType === JZIconType.BUG_REPORT             ? iconBugReport()             : null}
        {iconType === JZIconType.CALENDAR               ? iconCalendar()              : null}
        {iconType === JZIconType.CHECK                  ? iconCheck()                 : null}
        {iconType === JZIconType.CLEAR                  ? iconClear()                 : null}
        {iconType === JZIconType.COMMENT                ? iconComment()               : null}
        {iconType === JZIconType.COMMENT_ADD            ? iconCommentAdd()            : null}
        {iconType === JZIconType.CONTACT                ? iconContact()               : null}
        {iconType === JZIconType.COPY                   ? iconCopy()                  : null}
        {iconType === JZIconType.CUT                    ? iconCut()                   : null}
        {iconType === JZIconType.DELETE                 ? iconDelete()                : null}
        {iconType === JZIconType.DELETE_AUTO            ? iconDeleteAuto()            : null}
        {iconType === JZIconType.DELETE_FOREVER         ? iconDeleteForever()         : null}
        {iconType === JZIconType.DELETE_SWEEP           ? iconDeleteSweep()           : null}
        {iconType === JZIconType.EDIT                   ? iconEdit()                  : null}
        {iconType === JZIconType.EMAIL                  ? iconEmail()                 : null}
        {iconType === JZIconType.FAVORITE               ? iconFavorite()              : null}
        {iconType === JZIconType.FEEDBACK               ? iconFeedback()              : null}
        {iconType === JZIconType.FILE                   ? iconFile()                  : null}
        {iconType === JZIconType.FILE_ATTACH            ? iconFileAttach()            : null}
        {iconType === JZIconType.FILE_DOWNLOAD          ? iconFileDownload()          : null}
        {iconType === JZIconType.FILE_PREVIEW           ? iconFilePreview()           : null}
        {iconType === JZIconType.FILE_UPLOAD            ? iconFileUpload()            : null}
        {iconType === JZIconType.FILTER                 ? iconFilter()                : null}
        {iconType === JZIconType.FOLDER                 ? iconFolder()                : null}
        {iconType === JZIconType.FOLDER_ADD             ? iconFolderAdd()             : null}
        {iconType === JZIconType.HELP                   ? iconHelp()                  : null}
        {iconType === JZIconType.HISTORY                ? iconHistory()               : null}
        {iconType === JZIconType.HOME                   ? iconHome()                  : null}
        {iconType === JZIconType.IMAGE                  ? iconImage()                 : null}
        {iconType === JZIconType.IMAGE_ADD              ? iconImageAdd()              : null}
        {iconType === JZIconType.INFO                   ? iconInfo()                  : null}
        {iconType === JZIconType.LINK                   ? iconLink()                  : null}
        {iconType === JZIconType.LINK_ADD               ? iconLinkAdd()               : null}
        {iconType === JZIconType.LIST                   ? iconList()                  : null}
        {iconType === JZIconType.LOCATION               ? iconLocation()              : null}
        {iconType === JZIconType.LOCK_CLOSED            ? iconLockClosed()            : null}
        {iconType === JZIconType.LOCK_OPEN              ? iconLockOpen()              : null}
        {iconType === JZIconType.LOGIN                  ? iconLogin()                 : null}
        {iconType === JZIconType.LOGOUT                 ? iconLogout()                : null}
        {iconType === JZIconType.MENU                   ? iconMenu()                  : null}
        {iconType === JZIconType.MESSAGE                ? iconMessage()               : null}
        {iconType === JZIconType.MOVIE                  ? iconMovie()                 : null}
        {iconType === JZIconType.NOTIFICATIONS          ? iconNotifications()         : null}
        {iconType === JZIconType.PASTE                  ? iconPaste()                 : null}
        {iconType === JZIconType.PDF                    ? iconPdf()                   : null}
        {iconType === JZIconType.PEOPLE                 ? iconPeople()                : null}
        {iconType === JZIconType.PERSON                 ? iconPerson()                : null}
        {iconType === JZIconType.PERSON_ADD             ? iconPersonAdd()             : null}
        {iconType === JZIconType.PRINT                  ? iconPrint()                 : null}
        {iconType === JZIconType.QR_CODE                ? iconQRCode()                : null}
        {iconType === JZIconType.REFRESH                ? iconRefresh()               : null}
        {iconType === JZIconType.ROUTER                 ? iconRouter()                : null}
        {iconType === JZIconType.SAVE                   ? iconSave()                  : null}
        {iconType === JZIconType.SEARCH                 ? iconSearch()                : null}
        {iconType === JZIconType.SEND                   ? iconSend()                  : null}
        {iconType === JZIconType.SETTINGS               ? iconSettings()              : null}
        {iconType === JZIconType.SETTINGS_ACCESSIBILITY ? iconSettingsAccessibility() : null}
        {iconType === JZIconType.SETTINGS_ADMIN         ? iconSettingsAdmin()         : null}
        {iconType === JZIconType.SHOPPING_ADD           ? iconShoppingAdd()           : null}
        {iconType === JZIconType.SHOPPING_DELETE        ? iconShoppingDelete()        : null}
        {iconType === JZIconType.SHOPPING_VIEW          ? iconShoppingView()          : null}
        {iconType === JZIconType.SORT                   ? iconSort()                  : null}
        {iconType === JZIconType.SORT_ALPHA             ? iconSortAlpha()             : null}
        {iconType === JZIconType.SORT_CATEGORY          ? iconSortCategory()          : null}
        {iconType === JZIconType.VIDEO                  ? iconVideo()                 : null}
    </div>
}

// Makes JZIcon The Default Function//
export default JZIcon