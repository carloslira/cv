import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import classNames from 'classnames';

import {
    Link
} from 'react-scroll';

import navbarStyle from '../assets/jss/components/navbarStyle';

class Navbar extends React.Component {

    render() {
        const {
            style,
            classes,
            className
        } = this.props;

        return (
            <nav className={classNames(className, classes.container)} style={style}>
                <ul className={classes.list}>
                    <li className={classes.listItem}>
                        <Link activeClass="active" to="experiences" spy={true} smooth={true} duration={250} containerId="sections">
                            Experiences
                        </Link>
                    </li>
                    <li className={classes.listItem}>
                        <Link activeClass="active" to="skills" spy={true} smooth={true} duration={250} containerId="sections">
                            Skills
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default injectSheet(navbarStyle)(Navbar);
