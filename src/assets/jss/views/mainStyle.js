import {
    lightGrayColor
} from "../theme";

const appStyle = theme => ({
	wrapper: {
        height: '100vh',
        overflowY: 'scroll',
        position: 'relative',
        backgroundColor: lightGrayColor
    },
    section: {
        height: '1000px',
        paddingTop: '64px'
    }
});

export default appStyle;