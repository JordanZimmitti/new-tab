/** Interface IBookmarkHeading
 *  @description Interface that describes the bookmark heading component
 *  @author Jordan Zimmitti
 *  @property {boolean} isSelected - Whether the bookmark heading is selected to show the bookmarks associated with it
 *  @property {string}  headingId  - The unique identifier of the bookmark heading
 *  @property {string}  name       - The name of the bookmark heading
 */
interface IBookmarkHeading {

    /** Property isSelected
     *  @description Whether the bookmark heading is selected to show the bookmarks associated with it
     */
    isSelected: boolean

    /** Property headingId
     *  @description The unique identifier of the bookmark heading
     */
    headingId: string

    /** Property name
     *  @description The name of the bookmark heading
     */
    name: string

    /** Function onClick
     *  @description Function that handles when the bookmark heading is clicked
     *  @param {string} headingId - The unique identifier of the bookmark heading
     */
    onClick(headingId: string): void
}

// Makes IBookmarkHeading The Default Interface//
export default IBookmarkHeading