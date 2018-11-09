import {
    primaryDarkColor
} from '../theme';

const contactsStyle = theme => ({
    container: {
        display: 'flex',
        backgroundColor: primaryDarkColor
    },
    list: {
        margin: '0 auto',
        padding: '15px 0',
        listStyle: 'none'
    },
    listItem: {
        [theme.breakpoints.up('sm')]: {
            display: 'inline-block'
        },
        color: 'white',
        padding: '0 20px'
    },
    listItemContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    listItemIcon: {
        padding: '10px'
    }
});

export default contactsStyle;