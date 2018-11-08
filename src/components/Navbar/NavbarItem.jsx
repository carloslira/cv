import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import {
    Link
} from 'react-scroll';

import navbarItemStyle from '../../assets/jss/components/navbar/navbarItemStyle';

class NavbarItem extends React.Component {

    render() {
        const {
            to,
            name,
            classes,
            className
        } = this.props;

        return (
            <li className={classNames(className, classes.container)}>
                <Link
                    to={to}
                    spy={true}
                    smooth={true}
                    duration={250}
                    containerId="sections"
                    className={classes.link}
                    activeClass={classes.activeLink}
                >
                    {name}
                </Link>
            </li>
        );
    }
}

NavbarItem.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
};

export default injectSheet(navbarItemStyle)(NavbarItem);
