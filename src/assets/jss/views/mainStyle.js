import {
    navbarHeight,
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
        paddingTop: `${navbarHeight}px`
    }
});

export default appStyle;