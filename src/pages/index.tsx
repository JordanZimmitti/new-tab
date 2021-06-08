import {NextPage}  from 'next'
import Head        from 'next/head'
import Image       from 'next/image'
import {ReactNode} from 'react'
import styles      from './home.module.sass'
import Navbar      from '../components/Navbar/Navbar'
import Search      from '../components/Search/Search'
import JZClock     from '../libs/ui/JZClock/JZClock'
import JZPage      from '../libs/ui/JZPage/JZPage'
import JZTile      from '../libs/ui/JZTile/JZTile'

/** Page Home
 *  @description Page that shows the home dashboard to the user
 *  @author Jordan Zimmitti
 *  @return {JSX.Element} The home page
 */
const Home: NextPage = (): JSX.Element => {

    //<editor-fold desc="On Change Functions">

    /** Function clickTile
     *  @description Function that handles when a tile is clicked
     *  @param {string} itemId - The unique identifier of the tile
     */
    const clickTile = (itemId: string) => {
        switch (itemId) {
            case 'DRIVE'    : location.href = 'https://drive.google.com'    ; break
            case 'PHOTOS'   : location.href = 'https://photos.google.com'   ; break
            case 'GMAIL'    : location.href = 'https://mail.google.com'     ; break
            case 'CALENDAR' : location.href = 'https://calendar.google.com' ; break
        }
    }

    //</editor-fold>

    //<editor-fold desc="Views">

    /** View Clock
     *  @description Creates The clock for showing the time
     *  @return {ReactNode} The clock component
     */
    const clock = (): ReactNode => {
        return <JZClock
            className={styles.clock}
        />
    }

    /** View head
     *  @description Creates the page-specific metadata for browser and search-engines to use
     *  @return {ReactNode} The head component
     */
    const head = (): ReactNode => {
        return <Head>
            <title>New Tab</title>
            <meta name={'keywords'} content={'new tab'}/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap" rel="stylesheet"/>
        </Head>
    }

    /** View Search
     *  @description Creates the search bar for searching content in various sites
     *  @return {ReactNode} The search component
     */
    const search = (): ReactNode => {
        return <Search/>
    }

    /** View tileCalendar
     *  @description Creates a tile that redirects to google calendar
     *   @return {ReactNode} The calendar tile component
     */
    const tileCalendar = (): ReactNode => {
        return <JZTile
            tileId      = {'CALENDAR'}
            isShadow    ={false}
            className   = {styles.tile}
            spacing     = {2}
            colorRipple = {'#EF9A9A'}
            onClick     = {clickTile}>
            <Image
                src    = {'/calendar.png'}
                width  = {80}
                height = {80}
            />
            <span>Google Calender</span>
        </JZTile>
    }

    /** View tileDrive
     *  @description Creates a tile that redirects to google drive
     *  @return {ReactNode} The drive tile component
     */
    const tileDrive = (): ReactNode => {
        return <JZTile
            tileId      = {'DRIVE'}
            isShadow    ={false}
            className   = {styles.tile}
            spacing     = {2}
            colorRipple = {'#EF9A9A'}
            onClick     = {clickTile}>
            <Image
                src    = {'/drive.png'}
                width  = {90}
                height = {80}
            />
            <span>Google Drive</span>
        </JZTile>
    }

    /** View tileGmail
     *  @description Creates a tile that redirects to gmail
     *   @return {ReactNode} The gmail tile component
     */
    const tileGmail = (): ReactNode => {
        return <JZTile
            tileId      = {'GMAIL'}
            isShadow    ={false}
            className   = {styles.tile}
            spacing     = {3}
            colorRipple = {'#EF9A9A'}
            onClick     = {clickTile}>
            <Image
                src    = {'/mail.png'}
                width  = {80}
                height = {65}
            />
            <span>Google Mail</span>
        </JZTile>
    }

    /** View tilePhotos
     *  @description Creates a tile that redirects to google photos
     *   @return {ReactNode} The photos tile component
     */
    const tilePhotos = (): ReactNode => {
        return <JZTile
            tileId      = {'PHOTOS'}
            isShadow    ={false}
            className   = {styles.tile}
            spacing     = {2}
            colorRipple = {'#EF9A9A'}
            onClick     = {clickTile}>
            <Image
                src    = {'/photos.png'}
                width  = {80}
                height = {80}
            />
            <span>Google Photos</span>
        </JZTile>
    }

    //</editor-fold>

    // Returns The Home Page//
    return <JZPage
        navbar = {<Navbar/>}>
        {head()}
        <div className={styles.background}>
            {clock()}
            {search()}
        </div>
        <div className={styles.tiles}>
            {tileDrive()}
            {tilePhotos()}
            {tileGmail()}
            {tileCalendar()}
        </div>
    </JZPage>
}

// Makes Home The Default Function//
export default Home