import {ReactNode}    from 'react'
import {useEffect}    from 'react'
import {useState}     from 'react'
import IJZNavbar      from './IJZNavbar'
import JZNavbarToggle from './JZNavbarToggle'

/** Component Navbar
 *  @description Component that creates a navbar for navigating to different pages
 *  @author Jordan Zimmitti
 *  @param {IJZNavbar} props - The navbar component properties
 *  @return {JSX.Element} The JZNavbar component
 */
const JZNavbar = (props: IJZNavbar): JSX.Element => {

    //<editor-fold desc="Component Setup">

    // Defines The State Variables//
    const [stateIsExpanded , setStateIsExpanded] = useState(true)
    const [stateIsVisible  , setStateIsVisible ] = useState(false)

    // Gets The Attributes From The Props//
    const {
        isExpandedDefault = true,
        backgroundColor   = '#AA3036',
        borderRadius      = '0',
        boxShadow         = '0',
        margin            = '0',
        padding           = '0',
        type              = 'vertical',
        bottomItems       = () => {return [<div/>]},
        topItems          = () => {return [<div/>]},
    } = props

    // When The Component Is First Rendered//
    useEffect(() => {

        // When The Navbar Type Is Horizontal//
        if (type === 'horizontal') return

        // Gets The Expanded Preference For The Navbar Or Sets The Default If None Exists//
        const prefIsExpanded = localStorage.getItem('JZNavbar_isExpanded')
        if (prefIsExpanded === null) {
            localStorage.setItem('JZNavbar_isExpanded', String(isExpandedDefault))
            setStateIsExpanded(isExpandedDefault)
            return
        }

        // Sets The Expanded State With The Saved Preference//
        setStateIsExpanded(prefIsExpanded === 'true')

    }, [stateIsExpanded])

    //</editor-fold>

    //<editor-fold desc="On Change Functions">

    // When The Toggle Button Is Clicked//
    const clickToggleButton = () => {
        setStateIsExpanded(!stateIsExpanded)
        localStorage.setItem('JZNavbar_isExpanded', String(!stateIsExpanded))
    }

    // When The Navbar Toggle Button Is Hovered Upon//
    const mouseEnter = () => {
        type === 'vertical' ? setStateIsVisible(true) : null
    }

    // When The Navbar Toggle Button Is Not Being Hovered Upon//
    const mouseLeave = () => {
        type === 'vertical' ? setStateIsVisible(false): null
    }

    //</editor-fold>

    //<editor-fold desc="Views">

    // Creates The Bottom Menu Of Items//
    const menuBottom = (): ReactNode => {

        // The Styles For The Bottom Menu//
        const style = {
            display         : 'flex',
            flexFlow        : type === 'vertical' ? 'column nowrap' : 'row nowrap',
            position        : 'relative',
            justifyContent  : 'flex-start',
            alignContent    : 'flex-start',
            alignItems      : 'flex-start',
            height          : type === 'vertical' ? 'auto' : '100%',
            width           : type === 'vertical' ? '100%' : 'auto',
        } as const

        // Returns The Bottom Menu Component//
        return <div style={style}>
            {bottomItems(stateIsExpanded)}
        </div>
    }

    // Creates The Top Menu Of Items//
    const menuTop = (): ReactNode => {

        // The Styles For The Top Menu//
        const style = {
            display         : 'flex',
            flexFlow        : type === 'vertical' ? 'column nowrap' : 'row nowrap',
            position        : 'relative',
            justifyContent  : 'flex-start',
            alignContent    : 'flex-start',
            alignItems      : 'flex-start',
            overflow        : 'hidden',
            height          : type === 'vertical' ? 'auto' : '100%',
            width           : type === 'vertical' ? '100%' : 'auto',
        } as const

        // Returns The Top Menu Component//
        return <div style={style}>
            {topItems(stateIsExpanded)}
        </div>
    }

    // Creates The Navbar//
    const navbar = (): ReactNode => {

        // The Styles For The Navigation Bar//
        const style = {
            display         : 'flex',
            flexFlow        : type === 'vertical' ? 'column nowrap' : 'row nowrap',
            position        : 'relative',
            justifyContent  : 'space-between',
            alignContent    : 'flex-start',
            alignItems      : 'flex-start',
            backgroundColor : backgroundColor,
            borderRadius    : borderRadius,
            boxShadow       : boxShadow,
            margin          : margin,
            padding         : padding,
            height          : type == 'vertical' ? '100vh' : 'auto',
            width           : type == 'vertical' ? 'auto'  : '100vw',
        } as const

        // Returns The Navbar Component//
        return <div style={style}>
            {menuTop()}
            {menuBottom()}
        </div>
    }

    // Creates The Toggle Button//
    const toggleButton = (): ReactNode => {

        // The Styles For The Toggle Button//
        const style = {
            display         : 'flex',
            flexFlow        : 'row nowrap',
            position        : 'absolute',
            justifyContent  : 'center',
            alignContent    : 'center',
            alignItems      : 'center',
            right           : '-.8rem',
            top             : '1.25rem',
            zIndex          : 1,
            height          : 'auto',
            width           : 'auto',
        } as const

        // Returns The Toggle Button Component//
        return <JZNavbarToggle
            styles     = {style}
            isExpanded = {stateIsExpanded}
            isVisible  = {stateIsVisible}
            onClick    = {clickToggleButton}
        />
    }

    //</editor-fold>

    // The Styles For The Parent Container//
    const styleContainer = {
        display        : 'flex',
        flexFlow       : type === 'vertical' ? 'row nowrap' : 'column nowrap',
        flexShrink     : 0,
        position       : 'relative',
        justifyContent : 'flex-start',
        alignContent   : 'flex-start',
        alignItems     : 'flex-start',
        margin         : '0',
        padding        : '0',
        height         : type === 'vertical' ? '100vh' : 'auto',
        width          : type === 'vertical' ? 'auto'  : '100vw',
    } as const

    // Returns The Navbar Component//
    return <div
        style        = {styleContainer}
        onMouseEnter = {mouseEnter}
        onMouseLeave = {mouseLeave}>
        {navbar()}
        {toggleButton()}
    </div>
}

// Makes JZNavbar The Default Function//
export default JZNavbar