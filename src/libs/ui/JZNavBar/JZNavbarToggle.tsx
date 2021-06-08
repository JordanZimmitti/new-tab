import {ReactNode}     from 'react'
import {useState}      from 'react'
import IJZNavbarToggle from './IJZNavbarToggle'

/** Component JZNavbarToggle
 *  @description Component that creates the navbar toggle button for toggling the navbar between its collapsed or expanded states
 *  @author Jordan Zimmitti
 *  @param {IJZNavbarToggle} props - The navbar toggle button component properties
 *  @return {JSX.Element} The JZNavbarToggle component
 */
const JZNavbarToggle = (props: IJZNavbarToggle): JSX.Element => {

    //<editor-fold desc="Component Setup">

    // Defines The State Variables//
    const [stateColor, setStateColor] = useState('#FFFFFF')

    // Gets The Attributes From The Props//
    const {
        isExpanded,
        isVisible = true,
        styles    = {},
        onClick   = () => {}
    } = props

    //</editor-fold>

    //<editor-fold desc="On Change Functions">

    // When The Navbar Toggle Button Is Hovered Upon//
    const mouseEnter = () => {
        setStateColor('#E0E0E0')
    }

    // When The Navbar Toggle Button Is Not Being Hovered Upon//
    const mouseLeave = () => {
        setStateColor('#FFFFFF')
    }

    //</editor-fold>

    //<editor-fold desc="Views">

    // Creates The Collapse Character//
    const collapseChar = (): ReactNode => {

        // The Styles For The Collapse Character//
        const style = {
            color       : '#515151',
            fontFamily  : 'Patrick Hand SC, cursive',
            fontSize    : '1.5em',
            margin      : '0 .1rem .35rem 0'
        } as const

        // Returns The Collapse Character Component//
        return <span style={style}>
            {'<'}
        </span>
    }

    // Creates The Expand Character//
    const expandChar = (): ReactNode => {

        // The Styles For The Expand Character//
        const style = {
            color       : '#515151',
            fontFamily  : 'Patrick Hand SC, cursive',
            fontSize    : '1.5em',
            margin      : '0 0 .35rem 0'
        } as const

        // Returns The Expand Character Component//
        return <span style={style}>
            {'>'}
        </span>
    }

    //</editor-fold>

    // The Styles For The Navbar Toggle Button//
    const styleToggle = {
        display         : 'flex',
        flexFlow        : 'row nowrap',
        position        : 'relative',
        justifyContent  : 'center',
        alignContent    : 'center',
        alignItems      : 'center',
        backgroundColor : stateColor,
        borderRadius    : '50%',
        boxShadow       : '0 .1rem .3rem rgba(0,0,0,0.12), 0 .1rem .1rem rgba(0,0,0,0.24)',
        cursor          : 'pointer',
        visibility      : isVisible ? 'visible' : 'hidden',
        margin          : '0',
        padding         : '0',
        height          : '1.4rem',
        width           : '1.4rem'
    } as const

    // Returns The Navbar Button Toggle//
    return <div style={styles}>
        <div
            style        = {styleToggle}
            onClick      = {onClick}
            onMouseEnter = {mouseEnter}
            onMouseLeave = {mouseLeave}>
            {isExpanded ? collapseChar() : expandChar()}
        </div>
    </div>
}

// Makes JZNavbarToggle The Default Function//
export default JZNavbarToggle