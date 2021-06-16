import { ReactNode } from 'react'

/** Interface IPage
 *  @description Interface that describes the page component
 *  @author Jordan Zimmitti
 *  @property {ReactNode}                 children     - The components inside the page component body
 *  @property {isAuth}                    [isAuth]     - Whether the page requires authentication to access it
 *  @property {boolean}                   [isScroll]   - Whether the page should scroll vertically if content overflows
 *  @property {ReactNode}                 [navbar]     - The navigation bar component for navigating to different pages
 *  @property {'row' | 'column'}          [direction]  - The direction that the inside components should be displayed in
 *  @property {'vertical' | 'horizontal'} [navbarType] - Whether the navigation bar is a vertical type (left-side) or horizontal type (top)
 */
interface IJZPage {

    /** Property children
     *  @description The components inside the page component body
     */
    children: ReactNode

    /** Property isAuth
     *  @description Whether the page requires authentication to access it
     *  @default true
     */
    isAuth?: boolean

    /** Property isScroll
     *  @description - Whether the page should scroll vertically if content overflows
     *  @default true
     */
    isScroll?: boolean

    /** Property navbar
     *  @description The navigation bar component for navigating to different pages
     *  @default An empty div
     */
    navbar?: ReactNode

    /** Property direction
     *  @description The direction that the inside components should be displayed in
     *  @default 'column'
     */
    direction? : 'row' | 'column'

    /** Property navbarType
     *  @description Whether the navigation bar is a vertical type (left-side) or horizontal type (top)
     *  @default 'vertical'
     */
    navbarType? : 'vertical' | 'horizontal'
}

// Makes IJZPage The Default Interface//
export default IJZPage