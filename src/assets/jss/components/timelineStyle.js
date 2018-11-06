const aStyle = theme => ({
    timeline: {
        margin: '0 auto',
        maxWidth: '1200px',
        position: 'relative',
        '&:after': {
            top: '0',
            left: '50%',
            bottom: '0',
            width: '6px',
            content: '""',
            marginLeft: '-3px',
            position: 'absolute',
            backgroundColor: 'white'
        }
    },
    container: {
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
            border: '4px solid #FF9F55'
        }
    },
    left: {
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

export default aStyle;