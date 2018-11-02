import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import classNames from 'classnames';

import FacebookIcon from 'mdi-react/FacebookIcon';
import LinkedinIcon from 'mdi-react/LinkedinIcon';
import InstagramIcon from 'mdi-react/InstagramIcon';
import GithubFaceIcon from 'mdi-react/GithubFaceIcon';

import socialMediasStyle from '../assets/jss/components/socialMediasStyle';

class SocialMedias extends React.Component {

    render() {
        const {
            classes,
            className
        } = this.props;

        return (
            <ul className={classNames(classes.list, className)}>
                <li className={classes.listItem}><a href="https://github.com/carloslira" target="_blank" rel="noopener noreferrer" className={classes.iconOutline}><GithubFaceIcon /></a></li>
                <li className={classes.listItem}><a href="https://www.linkedin.com/in/carlos-lira-0938a5a2" target="_blank" rel="noopener noreferrer" className={classes.iconOutline}><LinkedinIcon /></a></li>
                <li className={classes.listItem}><a href="https://www.facebook.com/carloshnlira" target="_blank" rel="noopener noreferrer" className={classes.iconOutline}><FacebookIcon /></a></li>
                <li className={classes.listItem}><a href="https://www.instagram.com/carloshenriquelira" target="_blank" rel="noopener noreferrer" className={classes.iconOutline}><InstagramIcon /></a></li>
            </ul>
        );
    }
}

SocialMedias.propTypes = {
    classes: PropTypes.object.isRequired
};

export default injectSheet(socialMediasStyle)(SocialMedias);
