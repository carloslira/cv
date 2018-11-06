import {
    defaultFont,
    primaryDarkerColor
} from '../theme';

const aStyle = theme => ({
    container: {
        zIndex: '1',
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
        ...defaultFont,
        color: 'white',
        display: 'inline-block'
    }
});

export default aStyle;