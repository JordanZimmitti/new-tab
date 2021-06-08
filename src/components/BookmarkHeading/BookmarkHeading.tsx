import {useRef}         from 'react'
import {useRipple}      from 'react-use-ripple'
import styles           from './bookmark-heading.module.sass'
import IBookmarkHeading from './IBookmarkHeading'

/** Component BookmarkHeading
 *  @description Component that creates a heading to describe a group of bookmarks
 *  @author Jordan Zimmitti
 *  @param {IBookmarkHeading} props - The bookmark heading component properties
 *  @return {JSX.Element} The bookmark heading component
 */
const BookmarkHeading = (props: IBookmarkHeading): JSX.Element => {

    // Defines The Reference Variables//
    const refRipple = useRef<HTMLDivElement>(null)

    // Creates The Ripple Effect When The Bookmark Heading Is Clicked//
    useRipple(refRipple, {rippleColor: '#EF9A9A', animationLength: 500})

    // Gets The Attributes From The Props//
    const {
        isSelected,
        headingId,
        name,
        onClick,
    } = props

    /** Function clickHeading
     *  @description Function that handles when the bookmark heading is clicked
     */
    const clickHeading = () => {onClick(headingId)}

    // Returns The Bookmark Heading Component//
    return <div
        className = {isSelected ? styles.bookmarkHeadingSelected : styles.bookmarkHeadingUnselected}
        ref       = {refRipple}
        onClick   = {clickHeading}>
        <span>{name}</span>
    </div>
}

// Makes BookmarkHeading The Default Function//
export default BookmarkHeading