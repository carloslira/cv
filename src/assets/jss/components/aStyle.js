import {
    defaultFont
} from '../theme';

const aStyle = theme => ({
    a: {
        ...defaultFont,
        margin: '0',
        color: 'white',
        outline: 'none',
        fontWeight: '500',
        textDecoration: 'none'
    }
});

export default aStyle;