import {
    primaryColor
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
    name: {
        color: 'white',
        fontSize: '45px',
        fontWeight: '400',
        textAlign: 'center'
    },
    role: {
        fontSize: '25px',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.7)'
    }
});

export default headerStyle;