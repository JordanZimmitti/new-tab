import Image         from 'next/image'
import {ReactNode}   from 'react'
import {useEffect}   from 'react'
import {useState}    from 'react'
import IJZNavbarItem from './IJZNavbarItem'
import JZIcon        from '../JZIcon/JZIcon'
import {JZIconType}  from '../JZIcon/IJZIcon'

/** Component JZNavbarItem
 *  @description Component that creates a navbar item to be used with the JZNavbar
 *  @author Jordan Zimmitti
 *  @param {IJZNavbarItem} props - The navbar item component properties
 *  @return {JSX.Element} The JZNavbarItem component
 */
const JZNavbarItem = (props: IJZNavbarItem): JSX.Element => {

    //<editor-fold desc="Component Setup">

    // Defines The State Variables//
    const [stateColor, setStateColor] = useState('')

    // Gets The Attributes From The Props//
    const {
        itemId,
        name,
        isExpanded       = true,
        isVertical       = true,
        iconType         = JZIconType.NO_ICON,
        fontSize         = 1.2,
        iconSize         = 1.8,
        imageHeight      = 50,
        imageWidth       = 50,
        colorDefault     = '#000000',
        colorHover       = '#000000',
        imageDir         = '',
        marginName       = '0 0 0 1rem',
        paddingCollapsed = '0',
        paddingExpanded  = '0',
        type             = 'none',
        onClick          = () => {}
    } = props

    // When The Component Is First Rendered Or The Value Of colorDefault Changes//
    useEffect(() => {
        setStateColor(colorDefault)
    }, [colorDefault])

    //</editor-fold>

    //<editor-fold desc="On Change Functions">

    // When The Navbar Item Is Clicked//
    const click = () => {
        onClick(itemId)
    }

    // When The Navbar Item Is Hovered Upon//
    const mouseEnter = () => {
        setStateColor(colorHover)
    }

    // When The Navbar Item Is Not Being Hovered Upon//
    const mouseLeave = () => {
        setStateColor(colorDefault)
    }

    //</editor-fold>

    //<editor-fold desc="Views">

    // Creates The Navbar Item Icon//
    const navbarItemIcon = (): ReactNode => {

        // When No Icon Should Be Shown//
        if (type === 'none') return null

        // The Styles For The Navbar Item Icon//
        const style = {
            display        : 'flex',
            flexFlow       : 'row nowrap',
            position       : 'relative',
            justifyContent : 'flex-start',
            alignContent   : 'flex-start',
            alignItems     : 'flex-start',
            alignSelf      : isVertical ? 'flex-start' : 'center',
            margin         : '0',
            padding        : '0'
        } as const

        // Returns The Navbar Item Icon//
        return <div style={style}>
            <JZIcon
                iconType     = {iconType}
                size         = {iconSize}
                colorDefault = {stateColor}
            />
        </div>
    }

    // Creates The Navbar Item Image//
    const navbarItemImage = (): ReactNode => {
        if (type === 'none') return null
        return <Image
            alt    ={""}
            src    = {imageDir}
            height = {imageHeight}
            width  = {imageWidth}
        />
    }

    // Creates The Navbar Item Title//
    const navbarItemTitle = (): ReactNode => {

        // Gets The Correct Alignment//
        let alignSelf = 'center'
        if (type === 'none') alignSelf = 'flex-start'

        // The Styles For The Navbar Item Title//
        const style = {
            display        : 'flex',
            flexFlow       : 'row nowrap',
            position       : 'relative',
            justifyContent : 'flex-start',
            alignContent   : 'flex-start',
            alignItems     : 'flex-start',
            alignSelf      : alignSelf,
            color          : stateColor,
            fontSize       : `${fontSize}em`,
            fontWeight     : 'bold',
            margin         : marginName,
            padding        : '0'
        } as const

        // Returns The Navbar Item Title//
        return <span style={style}>
            {name}
        </span>
    }

    //</editor-fold>

    // The Styles For The Div Container//
    const styleContainer = {
        display        : 'flex',
        flexFlow       : 'row nowrap',
        position       : 'relative',
        justifyContent : 'flex-start',
        alignContent   : 'flex-start',
        alignItems     : 'flex-start',
        cursor         : 'pointer',
        margin         : '0',
        padding        : isExpanded ? paddingExpanded : paddingCollapsed,
        height         : 'auto',
        width          : 'auto'
    } as const

    // Returns The JZNavBarItem Component//
    return <div
        style        = {styleContainer}
        onClick      = {click}
        onMouseEnter = {mouseEnter}
        onMouseLeave = {mouseLeave}>
        {type == 'icon'  ? navbarItemIcon()  : null}
        {type == 'image' ? navbarItemImage() : null}
        {isExpanded      ? navbarItemTitle() : null}
    </div>
}

// Makes JZNavbarItem The Default Function//
export default JZNavbarItem