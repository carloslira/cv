import {
    defaultFont,
    lightGrayColor
} from '../theme';

const headerStyle = theme => ({
    grid: {
        backgroundColor: lightGrayColor
    },
    row: {
        padding: '50px 0'
    },
    photo: {
        width: '200px',
        maxWidth: '100%',
        borderRadius: '50%'
    },
    infoContainer: {
        textAlign: 'left'
    },
    name: {
        fontSize: '25px',
        fontWeight: '400',
        lineHeight: '30px'
    },
    role: {
        fontSize: '15px',
        marginTop: '20px'
    },
    location: {
        fontSize: '12px',
        lineHeight: '12px'
    },
    mapMarkerIcon: {
        float: 'left',
        width: '12px',
        height: '12px'
    }
});

export default headerStyle;