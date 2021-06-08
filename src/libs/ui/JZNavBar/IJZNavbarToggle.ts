
/** Interface IJZNavbarToggle
 *  @description Interface for describing the navbar toggle button component
 *  @author Jordan Zimmitti
 *  @property {boolean}  isExpanded  - Whether the navbar is expanded or not
 *  @property {boolean}  [isVisible] - Whether the navbar toggle button should be visible or not
 *  @property {object}   [style]     - The css styles for the bounding box of the navbar toggle button
 *  @property {function} [onClick]   - Function that handles when the navbar button component is clicked
 */
interface IJZNavbarToggle {

    /** Property isExpanded
     *  @description Whether the navbar is expanded or not
     */
    isExpanded: boolean

    /** Property isVisible
     *  @description Whether the navbar toggle button should be visible or not
     *  @default true
     */
    isVisible?: boolean

    /** Property styles
     *  @description The css styles for the bounding box of the navbar toggle button
     *  @default {}
     */
    styles?: object

    /** Function onClick
     *  @description Function that handles when the navbar button component is clicked
     */
    onClick?(): void
}

// Makes IJZNavbarToggle The Default Interface//
export default IJZNavbarToggle