import IJZPage from './IJZPage'
import {useRouter} from "next/router";
import {useEffect} from "react";

/** Component JZPage
 * @description Component that creates a top-level container for all of its child components to keep consistent styling
 * @author Jordan Zimmitti
 * @param {IJZPage} props - the page component properties
 * @return {JSX.Element} The JZPage component
 */
const JZPage = (props: IJZPage): JSX.Element => {

    // Defines The Router Hook//
    const router = useRouter()

    // Gets The Attributes From The Props//
    const {
        children,
        isAuth     = true,
        isScroll   = true,
        navbar     = <div/>,
        direction  = 'column',
        navbarType = 'vertical'
    } = props

    // The Styles For The Div Container//
    const styleContainer = {
        display         : 'flex',
        flexFlow        : navbarType === 'vertical' ? 'row nowrap' : 'column nowrap',
        position        : 'relative',
        justifyContent  : 'flex-start',
        alignContent    : 'flex-start',
        alignItems      : 'flex-start',
        overflowX       : 'hidden',
        background      : '#F5F7F9',
        margin          : '0',
        padding         : '0',
        height          : '100vh',
        width           : '100vw'
    } as const

    // The Styles For The Div Content Section//
    const styleContent = {
        display         : 'flex',
        flexFlow        : direction === 'row' ? 'row nowrap' : 'column nowrap',
        position        : 'relative',
        justifyContent  : 'flex-start',
        alignContent    : 'flex-start',
        alignItems      : 'flex-start',
        overflowX       : 'hidden',
        overflowY       : isScroll ? 'scroll' : 'hidden',
        margin          : '0',
        padding         : '0 1rem 0 1rem',
        height          : '100%',
        width           : '100%',
    } as const

    // Returns The Page Component//
    return <div style={styleContainer}>
        {navbar}
        <div style={styleContent}>
            {children}
        </div>
    </div>
}

// Makes IJZPage The Default Function//
export default JZPage