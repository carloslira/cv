import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';
import StickyBox from 'react-sticky-box';

import {
    Element,
    scrollSpy
} from 'react-scroll';

import Header from '../components/Header';
import Summary from '../components/Summary';
import Contacts from '../components/Contacts';
import NavbarItem from '../components/Navbar/NavbarItem';
import NavbarContainer from '../components/Navbar/NavbarContainer';

import Experiences from '../sections/Experiences';

import mainStyle from '../assets/jss/views/mainStyle';

class Main extends React.Component {

    state = {
        sections: {}
    };

    componentDidMount() {
        scrollSpy.update();
    }

    render() {
        const {
            classes
        } = this.props;

        const {
            sections
        } = this.state;

        const experiencesSectionClassNames = classNames(
            classes.section,
            {
                [classes.activeSection]: sections.experiences && sections.experiences.isActive
            }
        );

        return (
            <Element id="sections" className={classes.wrapper}>
                <Header />
                <Summary />
                <Contacts />
                <StickyBox className={classes.stickyBox}>
                    <NavbarContainer>
                        <NavbarItem name="Experiences" to="experiences" />
                    </NavbarContainer>
                </StickyBox>
                <Element name="experiences" className={experiencesSectionClassNames}>
                    <Experiences />
                </Element>
                <Element name="skills" className={classes.section}>
                    Skills
                </Element>
            </Element>
        );
    }
}

Main.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
};

export default injectSheet(mainStyle)(Main);
