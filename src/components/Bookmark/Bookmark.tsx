import {ReactNode}         from 'react'
import {useMediaPredicate} from 'react-media-hook'
import styles              from './bookmark.module.sass'
import IBookmark           from './IBookmark'

/** Component Bookmark
 *  @description Component that creates a website bookmark
 *  @author Jordan Zimmitti
 *  @param {IBookmark} props - The bookmark component properties
 *  @return {JSX.Element} The bookmark component
 */
const Bookmark = (props: IBookmark): JSX.Element => {

    //<editor-fold desc="Component Setup">

    // Whether The Screen Size Is A Tablet Or Smaller//
    const isTablet = useMediaPredicate('(max-width: 48rem)')

    // Gets The Attributes From The Props//
    const {
        name,
        description,
        linkBookmark,
        linkFavicon,
        onClick,
    } = props

    //</editor-fold>

    //<editor-fold desc="On Change Functions">

    /** Function clickBookmark
     *  @description Function that handles when the bookmark is clicked
     */
    const clickBookmark = () => {
        onClick(name, linkBookmark)
        location.href = linkBookmark
    }

    //</editor-fold>

    //<editor-fold desc="Views">

    /** View favicon
     *  @description Creates the favicon icon for the bookmark
     *  @return {ReactNode} The favicon component
     */
    const favicon = (): ReactNode => {
        return <img
            src    = {linkFavicon}
            height = {20}
            width  = {20}
        />
    }

    /** View bookmarkText
     *  @description Creates the bookmark name and description text
     *  @return {ReactNode} The bookmark-text component
     */
    const bookmarkText = (): ReactNode => {
        return <span>
            {`${name}${isTablet ? '' : `: ${description}`}`}
        </span>
    }

    //</editor-fold>

    // Returns The Bookmark Component//
    return <div
        className = {styles.bookmark}
        onClick   = {clickBookmark}>
        {favicon()}
        {bookmarkText()}
    </div>
}

// Makes Bookmark The Default Function//
export default Bookmark