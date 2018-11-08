import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import EmailIcon from 'mdi-react/EmailIcon';
import PhoneIcon from 'mdi-react/PhoneIcon';

import A from './A';

import contactsStyle from '../assets/jss/components/contactsStyle';

class Contacts extends React.Component {

    render() {
        const {
            classes,
            className
        } = this.props;

        return (
            <div className={classNames(className, classes.container)}>
                <ul className={classes.list}>
                    <li className={classes.listItem}><div className={classes.listItemContainer}><PhoneIcon className={classes.listItemIcon} /><A href="tel:+5581991177852">+55 (81) 99117-7852</A></div></li>
                    <li className={classes.listItem}><div className={classes.listItemContainer}><EmailIcon className={classes.listItemIcon} /><A href="mailto:carloshenriquen.lira@gmail.com">carloshenriquen.lira@gmail.com</A></div></li>
                </ul>
            </div>
        );
    }
}

Contacts.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
};

export default injectSheet(contactsStyle)(Contacts);
