import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import StickyBox from 'react-sticky-box';

import {
    Element,
    scrollSpy
} from 'react-scroll';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Summary from '../components/Summary';
import Contacts from '../components/Contacts';
import Experiences from '../components/sections/Experiences';

import mainStyle from '../assets/jss/views/mainStyle';

class Main extends React.Component {

    componentDidMount() {
        scrollSpy.update();
    }

    render() {
        const {
            classes
        } = this.props;

        return (
            <Element id="sections" className={classes.wrapper}>
                <Header />
                <Summary />
                <Contacts />
                <StickyBox>
                    <Navbar />
                </StickyBox>
                <Element name="experiences" className={classes.section}>
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
    classes: PropTypes.object.isRequired
};

export default injectSheet(mainStyle)(Main);
