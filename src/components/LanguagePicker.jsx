import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import classNames from 'classnames';

import {
    NamespacesConsumer
} from 'react-i18next';

import P from './P';

import languages from '../variables/languages';

import languagePickerStyle from '../assets/jss/components/languagePickerStyle';

class LanguagePicker extends React.Component {

    render() {
        const {
            classes,
            className
        } = this.props;

        return (
            <NamespacesConsumer>
                {(t, { i18n, lng }) => {
                    if (lng === 'en') {
                        i18n.changeLanguage('en-US');
                    } else if (lng === 'pt') {
                        i18n.changeLanguage('pt-BR');
                    }

                    const unselectedLanguagesKeys = Object.keys(languages).filter(key => {
                        return key.indexOf(lng) === -1;
                    });

                    return (
                        <ul className={classNames(classes.list, className)}>
                            <li className={classes.listItem}>
                                <img src={languages[lng].flagIcon} className={classes.listItemIcon} />
                                <P className={classes.listItemText}>{t(languages[lng].nameI18nKey)}</P>
                            </li>
                            {unselectedLanguagesKeys.map(key =>
                                <li className={classes.listItem} onClick={e => i18n.changeLanguage(key)} key={key}>
                                    <img src={languages[key].flagIcon} className={classes.listItemIcon} />
                                    <P className={classes.listItemText}>{t(languages[key].nameI18nKey)}</P>
                                </li>
                            )}
                        </ul>
                    );
                }}
            </NamespacesConsumer>
        );
    }
}

LanguagePicker.propTypes = {
    classes: PropTypes.object.isRequired
};

export default injectSheet(languagePickerStyle)(LanguagePicker);
