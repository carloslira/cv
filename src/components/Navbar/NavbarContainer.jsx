import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import navbarContainerStyle from '../../assets/jss/components/navbar/navbarContainerStyle';

class NavbarContainer extends React.Component {

    render() {
        const {
            classes,
            children,
            className
        } = this.props;

        return (
            <nav className={classNames(className, classes.container)}>
                <ul className={classes.list}>
                    {children}
                </ul>
            </nav>
        );
    }
}

NavbarContainer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired
};

export default injectSheet(navbarContainerStyle)(NavbarContainer);
