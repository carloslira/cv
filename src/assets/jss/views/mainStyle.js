import {
    lightGrayColor
} from "../theme";

const appStyle = theme => ({
	wrapper: {
        height: '100vh',
        overflowY: 'scroll',
        backgroundColor: lightGrayColor
    },
    stickyBox: {
        zIndex: '2',
    },
    section: {
        height: '1000px',
        paddingTop: '64px'
    }
});

export default appStyle;