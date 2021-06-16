import IBookmark from '../../components/Bookmark/IBookmark'
import IBookmarkHeading from '../../components/BookmarkHeading/IBookmarkHeading'

/** Interface IBookmarks
 *  @description Interface that describes the bookmarks page
 *  @author Jordan Zimmitti
 *  @property {IBookmarkHeading[]} dataBookmarkHeadings - The json data for all of the heading categories that the bookmarks belong to
 *  @property {IBookmark[]}        dataBookmarks        - The json data for all of the bookmarks
 */
export interface IBookmarks {

    /** Property dataBookmarkHeadings
     *  @description The json data for all of the heading categories that the bookmarks belong to
     */
    dataBookmarkHeadings: IBookmarkHeading[]

    /** Property dataBookmarks
     *  @description The json data for all of the bookmarks
     */
    dataBookmarks: IBookmark[]
}

// Makes IBookmarks The Default Function//
export default IBookmarks