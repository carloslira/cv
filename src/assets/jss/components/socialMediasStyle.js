import {
    transition,
    primaryLightColor
} from '../theme';

const socialMediasStyle = theme => ({
    list: {
        padding: '0',
        listStyle: 'none'
    },
    listItem: {
        margin: '7px',
        display: 'inline-block'
    },
    iconOutline: {
        ...transition,
        color: 'white',
        padding: '5px',
        display: 'flex',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid white',
        backgroundColor: primaryLightColor,
        '&:hover': {
            backgroundColor: 'white',
            color: primaryLightColor
        }
    }
});

export default socialMediasStyle;