import {useRouter}  from 'next/router'
import {ReactNode}  from 'react'
import {JZIconType} from '../../libs/ui/JZIcon/IJZIcon'
import JZNavbar     from '../../libs/ui/JZNavBar/JZNavbar'
import JZNavbarItem from '../../libs/ui/JZNavBar/JZNavbarItem'

/** Component Navbar
 *  @description Component that creates a navbar for navigating to different pages
 *  @author Jordan Zimmitti
 *  @return {JSX.Element} The navbar component
 */
const Navbar = (): JSX.Element => {

    // Allows For Navigating To Different Pages//
    const router = useRouter()

    /** Function clickNavbarItem
     *  @description Function that handles when a navigation item is clicked
     *  @param {string} itemId - The id of the navigation item selected
     */
    const clickNavbarItem = async (itemId: string) => {
        switch (itemId) {
            case 'BOOKMARKS' : await router.push('/bookmarks'); break
            case 'HOME'      : await router.push('/'); break
            case 'PLEX'      : location.href = 'https://app.plex.tv/desktop/'; break
            case 'ROUTER'    : location.href = 'https://router.jordanzimmitti.me'; break
        }
    }

    /** View bottomItems
     *  @description Creates the bottom menu items for the navbar
     *  @param {boolean} isExpanded - Whether the navbar is expanded or collapsed
     *  @return {ReactNode[]} The bottom items component
     */
    const bottomItems = (isExpanded: boolean): ReactNode[] => {
        return [
            <JZNavbarItem
                itemId           = {'PROFILE'}
                name             = {'Profile'}
                type             = {'image'}
                imageDir         = {'/profile.png'}
                isExpanded       = {isExpanded}
                colorDefault     = {'#FFFFFF'}
                colorHover       = {'#ef9a9a'}
                paddingCollapsed = {'1rem 0 1rem .285rem'}
                paddingExpanded  = {'1rem 2.4rem 1rem 1rem'}
            />
        ]
    }

    /** View topItems
     *  @description Creates the top menu items for the navbar
     *  @param {boolean} isExpanded - Whether the navbar is expanded or collapsed
     *  @return {ReactNode[]} The top items component
     */
    const topItems = (isExpanded: boolean): ReactNode[] => {
        return [
            <JZNavbarItem
                itemId           = {'HOME'}
                name             = {'Home'}
                type             = {'icon'}
                iconType         = {JZIconType.HOME}
                isExpanded       = {isExpanded}
                colorDefault     = {'#FFFFFF'}
                colorHover       = {'#EF9A9A'}
                paddingCollapsed = {'1rem .8rem .8rem 1rem'}
                paddingExpanded  = {'1rem 4rem .8rem 1rem'}
                onClick          = {clickNavbarItem}
            />,
            <JZNavbarItem
                itemId           = {'BOOKMARKS'}
                name             = {'Bookmarks'}
                type             = {'icon'}
                iconType         = {JZIconType.BOOKMARKS}
                isExpanded       = {isExpanded}
                colorDefault     = {'#FFFFFF'}
                colorHover       = {'#EF9A9A'}
                paddingCollapsed = {'.8rem 1rem .8rem 1rem'}
                paddingExpanded  = {'.8rem .8rem .8rem 1rem'}
                onClick          = {clickNavbarItem}
            />,
            <JZNavbarItem
                itemId           = {'PLEX'}
                name             = {'Plex'}
                type             = {'icon'}
                iconType         = {JZIconType.MOVIE}
                isExpanded       = {isExpanded}
                colorDefault     = {'#FFFFFF'}
                colorHover       = {'#EF9A9A'}
                paddingCollapsed = {'.8rem 1rem .8rem 1rem'}
                paddingExpanded  = {'.8rem 4.8rem .8rem 1rem'}
                onClick          = {clickNavbarItem}
            />,
            <JZNavbarItem
                itemId           = {'ROUTER'}
                name             = {'Router'}
                type             = {'icon'}
                iconType         = {JZIconType.ROUTER}
                isExpanded       = {isExpanded}
                colorDefault     = {'#FFFFFF'}
                colorHover       = {'#EF9A9A'}
                paddingCollapsed = {'.8rem 1rem .8rem 1rem'}
                paddingExpanded  = {'.8rem 3.4rem .8rem 1rem'}
                onClick          = {clickNavbarItem}
            />
        ]
    }

    // Returns The Navbar Component//
    return <JZNavbar
        borderRadius = {'0 .7rem .7rem 0'}
        bottomItems  = {bottomItems}
        topItems     = {topItems}
    />
}

// Makes Navbar The Default Function//
export default Navbar