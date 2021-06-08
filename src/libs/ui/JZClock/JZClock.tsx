import {useEffect} from 'react'
import {useState}  from 'react'
import IJZClock    from './IJZClock'

/** Component JZClock
 *  @description Component that creates a digital clock for showing the time live
 *  @author Jordan Zimmitti
 *  @param {IJZClock} props - The clock component properties
 *  @return {JSX.Element} The JZClock component
 */
const JZClock = (props: IJZClock) => {

    //<editor-fold desc="Component Setup">

    // Defines The State Variables//
    const [stateTime, setStateTime] = useState('')

    // Gets The Attributes From The Props//
    const {className = ''} = props

    // When The Component Is First Rendered//
    useEffect(() => {
        getCurrentTime()
    }, [])

    //</editor-fold>

    //<editor-fold desc="On Change Functions">

    /** Function getCurrentTime
     *  @description Function that gets the current time of the day in standard time (HH:MM:SS AA)
     */
    const getCurrentTime = () => {

        // Gets The Current Date/Time//
        const date = new Date()

        // Gets The Current Hours, Minutes And Seconds Of The Day//
        let hour    = date.getHours()
        let minute  = date.getMinutes()
        let seconds = date.getSeconds()

        // Converts The Military Time Hour To Standard Time//
        let standardHour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour
        let midday  = hour < 12 ? 'AM' : 'PM'

        // Formats Each Time Section//
        let formattedHour   = formatTimeSection(standardHour)
        let formattedMinute = formatTimeSection(minute)
        let formattedSecond = formatTimeSection(seconds)

        // Sets The Current Time of The Day//
        setStateTime(`${formattedHour}:${formattedMinute}:${formattedSecond} ${midday}`)

        // Starts A Timer To Get The Current Time Again In Another Second//
        setTimeout(getCurrentTime, 1000)
    }

    /** Function formatTimeSection
     *  @description Function that formats the time section by adding a prefix '0' when necessary
     *  @param {number} timeSection - The section of time to format
     *  @return {string} The formatted time
     */
    const formatTimeSection = (timeSection: number): string => {
        if (timeSection < 10) return `0${timeSection}`
        return `${timeSection}`
    }

    //</editor-fold>

    // Returns The Clock Component//
    return <div className={className}>
        <span>{stateTime}</span>
    </div>
}

// Makes JZClock The Default Function//
export default JZClock