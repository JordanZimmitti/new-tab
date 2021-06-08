import {JZIconType} from '../JZIcon/IJZIcon';

/** Interface IJZNavbarItem
 *  @description Interface that describes the navbar item component
 *  @author Jordan Zimmitti
 *  @property {string}                itemId             - The unique identifier of the navbar item
 *  @property {string}                name               - The name of the navbar item
 *  @property {boolean}               [isExpanded]       - Whether the icon and title or just the icon should be shown
 *  @property {boolean}               [isVertical]       - Whether the navbar item is in a vertical or horizontal navbar
 *  @property {JZIconType}            [iconType]         - The type of icon to show
 *  @property {number}                [fontSize]         - The font-size of the title (em)
 *  @property {number}                [iconSize]         - The size of the icon (rem)
 *  @property {number}                [imageHeight]      - The height of the image (px)
 *  @property {number}                [imageWidth]       - The width of the image (px)
 *  @property {string}                [colorDefault]     - The default color of the icon and text (hex)
 *  @property {string}                [colorHover]       - The color of the icon and text when the user is hovering over it (hex)
 *  @property {string}                [imageDir]         - The directory of the image resource
 *  @property {string}                [marginTitle]      - The margin of title (top, right, bottom, left)
 *  @property {string}                [paddingCollapsed] - The padding of the navbar item when it is collapsed (top, right, bottom, left)
 *  @property {string}                [paddingExpanded]  - The padding of the navbar item when it is expanded  (top, right, bottom, left)
 *  @property {'icon'|'image'|'none'} [type]             - Whether an icon, image, or nothing should be shown
 */
interface IJZNavbarItem {

    /** Property itemId
     *  @description The unique identifier of the navbar item
     */
    itemId: string

    /** Property name
     *  @description The title of the navbar item
     */
    name: string

    /** Property isExpanded
     *  @description Whether the icon and title or just the icon should be shown
     *  @default true
     */
    isExpanded?: boolean

    /** Property isVertical
     *  @description Whether the navbar item is in a vertical or horizontal navbar
     *  @default true
     */
    isVertical?: boolean

    /** Property iconType
     *  @description The type of icon to show
     *  @default JZIconType.NO_ICON
     */
    iconType?: JZIconType

    /** Property fontSize
     *  @description The font-size of the title (em)
     *  @default 1.2
     */
    fontSize?: number

    /** Property iconSize
     *  @description The size of the icon (rem)
     *  @default 1.8
     */
    iconSize?: number

    /** Property imageHeight
     *  @description The height of the image (px)
     *  @default 50
     */
    imageHeight?: number

    /** Property imageWidth
     *  @description The width of the image (px)
     *  @default 50
     */
    imageWidth?: number

    /** Property colorDefault
     *  @description The default color of the icon and text (hex)
     *  @default '#000000'
     */
    colorDefault?: string

    /** Property colorHover
     *  @description The color of the icon and text when the user is hovering over it (hex)
     *  @default '#000000'
     */
    colorHover?: string

    /** Property imageDir
     *  @description The directory of the image resource
     *  @default ''
     */
    imageDir?: string

    /** property marginName
     *  @description The margin of the name (top, right, bottom, left)
     *  @default '0 0 0 1rem'
     */
    marginName?: string

    /** property paddingCollapsed
     *  @description The padding of the navbar item when it is collapsed (top, right, bottom, left)
     *  @default '0'
     */
    paddingCollapsed?: string

    /** property paddingExpanded
     *  @description The padding of the navbar item when it is expanded  (top, right, bottom, left)
     *  @default '0'
     */
    paddingExpanded?  : string

    /** Property type
     *  @description Whether an icon, image, or nothing should be shown
     *  @default 'none'
     */
    type?: 'icon' | 'image' | 'none'

    /** Function onClick
     *  @description Function that handles when the navbar item is clicked
     *  @param {string} itemId - The unique identifier of the navbar item
     */
    onClick?(itemId: string): void
}

// Makes IJZNavbarItem The Default Interface//
export default IJZNavbarItem