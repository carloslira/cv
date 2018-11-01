import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import Header from '../components/Header';
import Summary from '../components/Summary';

import mainStyle from '../assets/jss/views/mainStyle';

class Main extends React.Component {

    render() {
        const {
            classes
        } = this.props;

        return (
            <div className={classes.wrapper}>
                <Header />
                <Summary />
            </div>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired
};

export default injectSheet(mainStyle)(Main);
