import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import aStyle from '../assets/jss/components/aStyle';

class A extends React.Component {

    render() {
        const {
            rel,
            href,
            target,
            classes,
            children,
            className
        } = this.props;

        return (
            <a href={href} target={target} rel={rel} className={classNames(className, classes.a)}>
                {children}
            </a>
        );
    }
}

A.propTypes = {
    rel: PropTypes.string,
    target: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    classes: PropTypes.object.isRequired
};

export default injectSheet(aStyle)(A);
