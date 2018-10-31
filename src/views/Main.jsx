import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import {
	Row,
	Col,
	Grid,
	getRowProps,
	getColumnProps
} from 'react-flexbox-grid';

import Header from '../components/Header';

import mainStyle from '../assets/jss/views/mainStyle';

class Main extends React.Component {

	render() {
		const {
			classes
		} = this.props;

		console.log(getRowProps(this.props));
		console.log(getColumnProps(this.props));

		return (
            <div className={classes.wrapper}>
                <Header />
            </div>
		);
	}
}

Main.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(mainStyle)(Main);
