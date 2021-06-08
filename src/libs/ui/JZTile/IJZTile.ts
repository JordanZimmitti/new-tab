import {ReactNode} from 'react'

/** Interface IJZTile
 *  @description Interface that describes the tile component
 *  @author Jordan Zimmitti
 *  @property {string}               tileId         - The unique identifier of the tile]
 *  @property {boolean}              [isShadow]     - Whether an elevation shadow should be added to the tile
 *  @property {boolean}              [isClickable]  - Whether the tile can be clicked
 *  @property {number}               [spacing]      - The amount of spacing between each child component (rem)
 *  @property {ReactNode}            [children]     - The components inside the tile component body
 *  @property {string}               [borderRadius] - The amount of rounded corners the tile should have (top, right, bottom, left)
 *  @property {string}               [className]    - The css styles for the tile component
 *  @property {string}               [colorTile]    - The color of the tile (hex)
 *  @property {string}               [colorRipple]  - The color of the ripple when a tile is clicked (hex)
 *  @property {{[key: string]: any}} [data]         - Any data passed into the tile that should be available when the tile is clicked
 *  @property {'flex-start' | 'flex-end' | 'center'} [alignX] - How the child components are aligned on the x-axis
 *  @property {'flex-start' | 'flex-end' | 'center' | 'space-evenly' | 'space-between'} [alignY] - How the child components are aligned on the y-axis
 *  @property {Function} onClick - Function that handles when the tile is clicked
 */
interface IJZTile {

    /** Property tileId
     *  @description The unique identifier of the tile
     */
    tileId: string

    /** Property isClickable
     *  @description Whether the tile can be clicked
     *  @default true
     */
    isClickable?: boolean

    /** Property isShadow
     *  @description Whether an elevation shadow should be added to the tile
     *  @default true
     */
    isShadow?: boolean

    /** Property spacing
     *  @description The amount of spacing between each child element (rem)
     *  @default 1
     */
    spacing?: number

    /** Property children
     *  @description The components inside the tile component body
     *  @default An empty div
     */
    children?: ReactNode

    /** Property borderRadius
     *  @description The amount of rounded corners the tile should have (top, right, bottom, left)
     *  @default '1rem'
     */
    borderRadius?: string

    /** Property className
     *  @description The css styles for the tile component
     *  @default ''
     */
    className?: string

    /** Property colorTile
     *  @description The color of the tile (hex)
     *  @default '#FFFFFF'
     */
    colorTile?: string

    /** Property colorRipple
     *  @description The color of the ripple when a tile is clicked
     *  @default  '#BDBDBD'
     */
    colorRipple?: string

    /** Property data
     *  @description Any data passed into the tile that should be available when the tile is clicked
     *  @default {}
     */
    data?: {[key: string]: any}

    /** property alignX
     *  @description How the child components are aligned on the x-axis
     *  @default 'center'
     */
    alignX?: 'flex-start' | 'flex-end' | 'center'

    /** property alignY
     *  @description How the child components are aligned on the y-axis
     *  @default 'center'
     */
    alignY?: 'flex-start' | 'flex-end' | 'center' | 'space-evenly' | 'space-between'

    /** Function onClick
     *  @description Function that handles when the tile is clicked
     *  @param {string}             tileId - The unique identifier of the tile
     *  @param {[key: string]: any} data   - Any data passed into the tile that should be available when the tile is clicked
     */
    onClick?(tileId: string, data: {[key: string]: any}): void
}

// Makes IJZTile The Default Interface//
export default IJZTile