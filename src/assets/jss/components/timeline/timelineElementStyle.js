import {
    primaryColor
} from "../../theme";

const timelineElementStyle = theme => ({
    container: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '70px',
            paddingRight: '25px',
            width: 'calc(100% - 80px)',
            '&:before': {
                left: '60px !important',
                borderWidth: '10px 10px 10px 0 !important',
                borderColor: 'transparent white transparent transparent !important'
            }
        },
        padding: '10px 40px',
        position: 'relative',
        width: 'calc(50% - 80px)',
        backgroundColor: 'inherit',
        '&:after': {
            zIndex: 1,
            top: '15px',
            content: '""',
            width: '25px',
            height: '25px',
            right: '-17px',
            borderRadius: '50%',
            position: 'absolute',
            backgroundColor: 'white',
            border: `4px solid ${primaryColor}`
        }
    },
    left: {
        [theme.breakpoints.down('sm')]: {
            '&:after': {
                left: '15px'
            }
        },
        left: '0',
        '&:before': {
            width: '0',
            height: '0',
            top: '22px',
            zIndex: '1',
            right: '30px',
            content: '" "',
            position: 'absolute',
            border: 'medium solid white',
            borderWidth: '10px 0 10px 10px',
            borderColor: 'transparent transparent transparent white',
        }
    },
    right: {
        [theme.breakpoints.down('sm')]: {
            left: '0%'
        },
        left: '50%',
        '&:before': {
            width: '0',
            height: '0',
            top: '22px',
            zIndex: '1',
            left: '30px',
            content: '" "',
            position: 'absolute',
            border: 'medium solid white',
            borderWidth: '10px 10px 10px 0',
            borderColor: 'transparent white transparent transparent',
        },
        '&:after': {
            [theme.breakpoints.down('sm')]: {
                left: '15px'
            },
            left: '-16px'
        }
    },
    content: {
        borderRadius: '6px',
        padding: '20px 30px',
        position: 'relative',
        backgroundColor: 'white'
    }
});

export default timelineElementStyle;