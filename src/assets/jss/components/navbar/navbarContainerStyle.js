import {
    transition,
    defaultFont,
    primaryColor,
    primaryLightColor,
    primaryDarkerColor
} from '../../theme';

const aStyle = theme => ({
    container: {
        width: '100%',
        height: '64px',
        display: 'flex',
        backgroundColor: primaryDarkerColor
    },
    list: {
        padding: '0',
        margin: '0 auto',
        alignSelf: 'center'
    },
    listItem: {
        display: 'inline-block'
    },
    listItemLink: {
        ...transition,
        ...defaultFont,
        color: 'white',
        display: 'block',
        padding: '0 10px',
        fontWeight: '500',
        lineHeight: '64px',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: primaryLightColor
        }
    },
    listItemLinkActive: {
        backgroundColor: primaryColor
    }
});

export default aStyle;