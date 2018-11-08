import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import FacebookIcon from 'mdi-react/FacebookIcon';
import LinkedinIcon from 'mdi-react/LinkedinIcon';
import InstagramIcon from 'mdi-react/InstagramIcon';
import GithubFaceIcon from 'mdi-react/GithubFaceIcon';

import A from './A';

import socialMediasStyle from '../assets/jss/components/socialMediasStyle';

class SocialMedias extends React.Component {

    render() {
        const {
            classes,
            className
        } = this.props;

        return (
            <ul className={classNames(className, classes.list)}>
                <li className={classes.listItem}><A href="https://github.com/carloslira" target="_blank" rel="noopener noreferrer" className={classes.iconOutline}><GithubFaceIcon /></A></li>
                <li className={classes.listItem}><A href="https://www.linkedin.com/in/carlos-lira-0938a5a2" target="_blank" rel="noopener noreferrer" className={classes.iconOutline}><LinkedinIcon /></A></li>
                <li className={classes.listItem}><A href="https://www.facebook.com/carloshnlira" target="_blank" rel="noopener noreferrer" className={classes.iconOutline}><FacebookIcon /></A></li>
                <li className={classes.listItem}><A href="https://www.instagram.com/carloshenriquelira" target="_blank" rel="noopener noreferrer" className={classes.iconOutline}><InstagramIcon /></A></li>
            </ul>
        );
    }
}

SocialMedias.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
};

export default injectSheet(socialMediasStyle)(SocialMedias);
