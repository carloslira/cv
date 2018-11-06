import {
    lightGrayColor
} from '../theme';

const languagePickerStyle = theme => ({
    list: {
        padding: '0',
        float: 'right',
        height: '40px',
        margin: '23px 7px',
        overflow: 'hidden',
        verticalAlign: 'top',
        borderRadius: '20px',
        display: 'inline-block',
        backgroundColor: 'white',
        transition: 'all .3s ease',
        '&:hover': {
            height: '80px'
        }
    },
    listItem: {
        padding: '0px 20px',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: lightGrayColor
        },
        '&:first-child': {
            border: 'none',
            background: 'white!important'
        }
    },
    listItemContainer: {
        height: '40px',
        display: 'flex',
        alignItems: 'center'
    },
    listItemIcon: {
        [theme.breakpoints.down('xs')]: {
            marginRight: '0'
        },
        height: '15px',
        marginRight: '5px'
    },
    listItemText: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
        lineHeight: '15px',
        display: 'inline-block'
    }
});

export default languagePickerStyle;