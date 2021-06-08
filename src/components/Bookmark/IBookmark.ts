/** Interface IBookmark
 *  @description Interface that describes the bookmark component
 *  @author Jordan Zimmitti
 *  @property {string}   description  - description of the bookmark
 *  @property {string}   name         - The name of the bookmark
 *  @property {string}   linkBookmark - The link associated with the bookmark
 *  @property {string}   linkFavicon  - The favicon link for the associated with the bookmark
 *  @property {string}   headingId    - The id of the heading that the bookmark belongs to
 *  @property {function} onClick      - Function that handles when the bookmark is clicked
 */
interface IBookmark {

    /** Property description
     *  @description description of the bookmark
     */
    description: string

    /** Property name
     *  @description The name of the bookmark
     */
    name: string

    /** Property link
     *  @description The link associated with the bookmark
     */
    linkBookmark: string

    /** Property linkFavicon
     *  @description The favicon link for the associated with the bookmark
     */
    linkFavicon: string

    /** Property headingId
     *  @description The id of the heading that the bookmark belongs to
     */
    headingId: string

    /** Function onClick
     *  @description Function that handles when the bookmark is clicked
     *  @param {string} name - The name of the bookmark
     *  @param {string} link - The link associated with the bookmark
     */
    onClick(name: string, link: string): void
}

// Makes IBookmark The Default Interface//
export default IBookmark