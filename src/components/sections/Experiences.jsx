import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import classNames from 'classnames';

import Timeline from '../Timeline';

import experiencesStyle from '../../assets/jss/components/sections/experiencesStyle';

class Experiences extends React.Component {

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
            <Timeline />
        );
    }
}

Experiences.propTypes = {
    children: PropTypes.any.isRequired,
    classes: PropTypes.object.isRequired
};

export default injectSheet(experiencesStyle)(Experiences);
