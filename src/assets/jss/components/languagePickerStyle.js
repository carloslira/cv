import {
    defaultFont
} from '../theme';

const languagePickerStyle = theme => ({
    list: {
        padding: '0',
        float: 'right',
        height: '40px',
        overflow: 'hidden',
        verticalAlign: 'top',
        display: 'inline-block',
        backgroundColor: 'white',
        transition: 'all .3s ease',
        '&:hover': {
            height: '81px'
        }
    },
    listItem: {
        lineHeight: '40px',
        padding: '0px 20px',
        borderTop: '1px solid #EEE',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#EEE'
        },
        '&:first-child': {
            border: 'none',
            background: 'white!important'
        }
    },
    listItemIcon: {
        height: '15px',
        marginRight: '5px'
    },
    listItemText: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
        display: 'inline-block'
    }
});

export default languagePickerStyle;