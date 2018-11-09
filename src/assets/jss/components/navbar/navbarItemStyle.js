import {
    transition,
    defaultFont,
    navbarHeight,
    primaryColor,
    primaryLightColor
} from '../../theme';

const aStyle = theme => ({
    container: {
        display: 'inline-block'
    },
    link: {
        ...transition,
        ...defaultFont,
        color: 'white',
        display: 'block',
        padding: '0 10px',
        fontWeight: '500',
        lineHeight: `${navbarHeight}px`,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: primaryLightColor
        }
    },
    activeLink: {
        backgroundColor: primaryColor
    }
});

export default aStyle;