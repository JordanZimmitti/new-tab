
/** Enum IconType
 *  @description The types of icons that can be displayed
 */
export enum JZIconType {
    ACCESSIBILITY         =  'ACCESSIBILITY',
    ACCOUNT                = 'ACCOUNT',
    ADD                    = 'ADD',
    ARCHIVE                = 'ARCHIVE',
    BACKUP                 = 'BACKUP',
    BOOKMARK               = 'BOOKMARK',
    BOOKMARK_ADD           = 'BOOKMARK_ADD',
    BOOKMARKS              = 'BOOKMARKS',
    BUG_REPORT             = 'BUG_REPORT',
    CALENDAR               = 'CALENDAR',
    CHECK                  = 'CHECK',
    CLEAR                  = 'CLEAR',
    COMMENT                = 'COMMENT',
    COMMENT_ADD            = 'COMMENT_ADD',
    CONTACT                = 'CONTACT',
    COPY                   = 'COPY',
    CUT                    = 'CUT',
    DELETE                 = 'DELETE',
    DELETE_AUTO            = 'DELETE_AUTO',
    DELETE_FOREVER         = 'DELETE_FOREVER',
    DELETE_SWEEP           = 'DELETE_SWEEP',
    EDIT                   = 'EDIT',
    EMAIL                  = 'EMAIL',
    FAVORITE               = 'FAVORITE',
    FEEDBACK               = 'FEEDBACK',
    FILE                   = 'FILE',
    FILE_ATTACH            = 'FILE_ATTACH',
    FILE_DOWNLOAD          = 'FILE_DOWNLOAD',
    FILE_PREVIEW           = 'FILE_PREVIEW',
    FILE_UPLOAD            = 'FILE_UPLOAD',
    FILTER                 = 'FILTER',
    FOLDER                 = 'FOLDER',
    FOLDER_ADD             = 'FOLDER_ADD',
    HELP                   = 'HELP',
    HISTORY                = 'HISTORY',
    HOME                   = 'HOME',
    IMAGE                  = 'IMAGE',
    IMAGE_ADD              = 'IMAGE_ADD',
    INFO                   = 'INFO',
    LINK                   = 'LINK',
    LINK_ADD               = 'LINK_ADD',
    LIST                   = 'LIST',
    LOCATION               = 'LOCATION',
    LOCK_CLOSED            = 'LOCK_CLOSED',
    LOCK_OPEN              = 'LOCK_OPEN',
    LOGIN                  = 'LOGIN',
    LOGOUT                 = 'LOGOUT',
    MENU                   = 'MENU',
    MESSAGE                = 'MESSAGE',
    MOVIE                  = 'MOVIE',
    NO_ICON                = 'NO_ICON',
    NOTIFICATIONS          = 'NOTIFICATIONS',
    PASTE                  = 'PASTE',
    PDF                    = 'PDF',
    PEOPLE                 = 'PEOPLE',
    PERSON                 = 'PERSON',
    PERSON_ADD             = 'PERSON_ADD',
    PRINT                  = 'PRINT',
    QR_CODE                = 'QR_CODE',
    REFRESH                = 'REFRESH',
    ROUTER                 = 'ROUTER',
    SAVE                   = 'SAVE',
    SEARCH                 = 'SEARCH',
    SEND                   = 'SEND',
    SETTINGS               = 'SETTINGS',
    SETTINGS_ACCESSIBILITY = 'SETTINGS_ACCESSIBILITY',
    SETTINGS_ADMIN         = 'SETTINGS_ADMIN',
    SHOPPING_ADD           = 'SHOPPING_ADD',
    SHOPPING_DELETE        = 'SHOPPING_DELETE',
    SHOPPING_VIEW          = 'SHOPPING_VIEW',
    SORT                   = 'SORT',
    SORT_ALPHA             = 'SORT_ALPHA',
    SORT_CATEGORY          = 'SORT_CATEGORY',
    VIDEO                  = 'VIDEO'
}

/** Interface IIcon
 *  @description Interface that describes the icon component
 *  @author Jordan Zimmitti
 *  @property {JZIconType} iconType       - The type of icon to show
 *  @property {boolean}    [isClickable]  - Whether the icon can be clicked
 *  @property {number}     [size]         - The size of the icon (rem)
 *  @property {string}     [colorDefault] - The default color of the icon (hex)
 *  @property {string}     [colorHover]   - The color of the icon when the user is hovering over it (hex)
 *  @property {string}     [padding]      - The padding around the icon (top, right, bottom, left)
 *  @property {function}   [onClick]      - Function that handles when the icon is clicked
 */
interface IJZIcon {

    /** Property iconType
     *  @description The type of icon to show
     */
    iconType: JZIconType

    /** Property isClickable
     *  @description Whether the icon can be clicked
     *  @default false
     */
    isClickable?: boolean

    /** Property size
     *  @description The size of the icon (rem)
     *  @default 1.5
     */
    size?: number

    /** Property colorDefault
     *  @description The default color of the icon (hex)
     *  @default '#000000'
     */
    colorDefault?: string

    /** Property colorHover
     *  @description The color of the icon when the user is hovering over it (hex)
     *  @default '#000000'
     */
    colorHover?: string

    /** Property padding
     *  @description The padding around the icon (top, right, bottom, left)
     *  @default '0'
     */
    padding?: string

    /** Function onClick
     *  @description Function that handles when the icon is clicked
     *  @param {JZIconType} iconType - The type of icon that was clicked
     */
    onClick?(iconType: JZIconType): void
}

// Makes IIcon The Default Interface//
export default IJZIcon