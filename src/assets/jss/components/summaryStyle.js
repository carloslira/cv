import {
    transition,
    primaryColor,
    primaryDarkColor,
    primaryLightColor,
    primaryDarkerColor
} from "../theme";

const headerStyle = theme => ({
    container: {
        padding: '150px 0',
        position: 'relative',
        backgroundColor: primaryColor
    },
    photoOutline: {
        left: '50%',
        top: '-84px',
        width: '208px',
        height: '208px',
        maxWidth: '100%',
        borderRadius: '50%',
        position: 'absolute',
        marginLeft: '-104px',
        backgroundColor: 'white'
    },
    photo: {
        left: '50%',
        top: '-80px',
        width: '200px',
        maxWidth: '100%',
        borderRadius: '50%',
        position: 'absolute',
        marginLeft: '-100px'
    },
    photoButton: {
        [theme.printable]: {
            display: 'none'
        },
        ...transition,
        left: '50%',
        width: '35px',
        height: '35px',
        border: 'none',
        display: 'flex',
        outline: 'none',
        borderRadius: '50%',
        color: primaryColor,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        '&:hover': {
            color: 'white',
            cursor: 'pointer',
            backgroundColor: primaryColor
        }
    },
    photoButtonIcon: {
        width: '20px',
        height: '20px'
    },
    hireMeButton: {
        top: '-80px',
        marginLeft: '50px'
    },
    downloadButton: {
        top: '-45px',
        marginLeft: '75px'
    },
    name: {
        color: 'white',
        fontSize: '45px',
        fontWeight: '400',
        textAlign: 'center'
    },
    role: {
        fontSize: '25px',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.8)'
    }
});

export default headerStyle;