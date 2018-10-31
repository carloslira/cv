import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import classNames from 'classnames';

import pStyle from '../assets/jss/components/pStyle';

class P extends React.Component {

	render() {
		const {
            classes,
            children,
            className
		} = this.props;

		return (
            <p className={classNames(classes.p, className)}>
                {children}
            </p>
		);
	}
}

P.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.string.isRequired
};

export default injectSheet(pStyle)(P);
