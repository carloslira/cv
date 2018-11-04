import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import EmailIcon from 'mdi-react/EmailIcon';
import PhoneIcon from 'mdi-react/PhoneIcon';

import P from './P';

import contactsStyle from '../assets/jss/components/contactsStyle';

class Contacts extends React.Component {

    render() {
        const {
            classes
        } = this.props;

        return (
            <div className={classes.container}>
                <ul className={classes.list}>
                    <li className={classes.listItem}><div className={classes.listItemContainer}><PhoneIcon className={classes.listItemIcon} /><P>+55 (81) 99117-7852</P></div></li>
                    <li className={classes.listItem}><div className={classes.listItemContainer}><EmailIcon className={classes.listItemIcon} /><P>carloshenriquen.lira@gmail.com</P></div></li>
                </ul>
            </div>
        );
    }
}

Contacts.propTypes = {
    classes: PropTypes.object.isRequired
};

export default injectSheet(contactsStyle)(Contacts);
