import {ReactNode} from 'react'
import IJZNavbarItem from "./IJZNavbarItem";

/** Interface IJZNavbar
 *  @description Interface that describes the navbar component
 *  @author Jordan Zimmitti
 *  @property {boolean}                 [isExpandedDefault] - Whether the default state of the navbar should be expanded. This value is only used when no toggle preference is saved by the user
 *  @property {string}                  [backgroundColor]   - The background color of the navbar (hex)
 *  @property {string}                  [borderRadius]      - The amount of rounded corners the navbar should have (top, right, bottom, left)
 *  @property {string}                  [boxShadow]         - The amount of shadow the navbar should have
 *  @property {string}                  [margin]            - The navbar margins (top, right, bottom, left)
 *  @property {string}                  [padding]           - The navbar paddings (top, right, bottom, left)
 *  @property {'vertical'|'horizontal'} [type]              - The type of navigation bar to display
 *  @property {Function}                [bottomItems]       - Function that shows the bottom/right items in the navbar
 *  @property {Function}                [topItems]          - Function that shows the top/left items in the navbar
 */
interface IJZNavbar {

    /** Property isExpandedDefault
     *  @description Whether the default state of the navbar should be expanded. This value is only used when no toggle preference is saved by the user
     *  @default true
     */
    isExpandedDefault?: boolean

    /** Property backgroundColor
     *  @description The background color of the navbar (hex)
     *  @default '#AA3036'
     */
    backgroundColor?: string

    /** Property borderRadius
     *  @description The amount of rounded corners the navbar should have (top, right, bottom, left)
     *  @default '0'
     */
    borderRadius?: string

    /** Property boxShadow
     *  @description The amount of shadow the navbar should have
     *  @default '0'
     */
    boxShadow?: string

    /** Property margin
     *  @description The margins of the navbar (top, right, bottom, left)
     *  @default '0'
     */
    margin?: string

    /** Property padding
     *  @description The navbar paddings (top, right, bottom, left)
     *  @default '0'
     */
    padding?: string

    /** Property type
     *  @description The type of navigation bar to display
     *  @default 'vertical'
     */
    type?: 'vertical' | 'horizontal'

    /** Function bottomItems
     *  @description Function that shows the bottom/right items in the navbar
     *  @param {boolean} isExpanded - Whether the navbar is expanded or not
     *  @return {ReactNode[]} The different menu item components
     */
    bottomItems?(isExpanded: boolean): ReactNode[]

    /** Function topItems
     *  @description Function that shows the top/left items in the navbar
     *  @param {boolean} isExpanded - Whether the navbar is expanded or not
     *  @return {ReactNode[]} The different menu item components
     */
    topItems?(isExpanded: boolean): ReactNode[]
}

// Makes IJZNavbar The Default Interface//
export default IJZNavbar