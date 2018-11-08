const timelineContainerStyle = theme => ({
    container: {
        margin: '0 auto',
        maxWidth: '100%',
        position: 'relative',
        '&:after': {
            [theme.breakpoints.down('sm')]: {
                left: '31px'
            },
            top: '0',
            left: '50%',
            bottom: '0',
            width: '6px',
            content: '""',
            marginLeft: '-3px',
            position: 'absolute',
            backgroundColor: 'white'
        }
    }
});

export default timelineContainerStyle;