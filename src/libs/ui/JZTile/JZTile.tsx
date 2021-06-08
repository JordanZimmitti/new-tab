import {useRef}    from 'react'
import {useRipple} from 'react-use-ripple'
import IJZTile     from './IJZTile'

/** Component JZTile
 *  @description Component that creates a tile. Best used for prominent detailed buttons or repeated data
 *  @author Jordan Zimmitti
 *  @param {IJZTile} props - The tile component properties
 *  @return {JSX.Element} The JZTile component
 */
const JZTile = (props: IJZTile): JSX.Element => {

    //<editor-fold desc="Component Setup">

    // Defines The Reference Variables//
    const refRipple = useRef<HTMLDivElement>(null)

    // Gets The Attributes From The Props//
    const {
        tileId,
        isClickable  = true,
        isShadow     = true,
        spacing      = 1,
        data         = {},
        children     = <div/>,
        alignX       = 'center',
        alignY       = 'center',
        borderRadius = '1rem',
        className    = '',
        colorRipple  = '#BDBDBD',
        colorTile    = '#FFFFFF',
        onClick      = () => {}
    } = props

    // Creates The Ripple Effect And Sets The Color//
    if (isClickable) {
        useRipple(refRipple, {rippleColor: colorRipple, animationLength: 500})
    }

    //</editor-fold>

    //<editor-fold desc="On Change Functions">

    // When The Tile Is Clicked//
    const click = () => {
        isClickable ? onClick(tileId, data) : null
    }

    //</editor-fold>

    // The Styles For The Tile//
    const styleTile = {
        display        : 'flex',
        flexFlow       : 'column nowrap',
        flexShrink     : 0,
        position       : 'relative',
        justifyContent : alignY,
        alignContent   : alignY,
        alignItems     : alignX,
        overflow       : 'hidden',
        gap            : `${spacing}rem`,
        background     : colorTile,
        border         : !isShadow ? '1px solid #E0E0E0' : '',
        borderRadius   : borderRadius,
        boxShadow      : isShadow ? '0 .1rem .3rem rgba(0,0,0,0.12), 0 .1rem .1rem rgba(0,0,0,0.24)' : '',
        cursor         : isClickable ? 'pointer' : '',
        userSelect     : 'none',
        margin         : 0,
        padding        : 0,
        height         : '100%',
        width          : '100%'
    } as const

    // Returns The Tile Component//
    return <div className={className}>
        <div
            style   = {styleTile}
            ref     = {refRipple}
            onClick = {()=> {setTimeout(click, 800)}}>
            {children}
        </div>
    </div>
}

// Makes JZTile The Default Function//
export default JZTile