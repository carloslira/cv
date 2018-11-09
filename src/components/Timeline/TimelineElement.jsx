import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import CalendarIcon from 'mdi-react/CalendarIcon';

import {
    NamespacesConsumer
} from 'react-i18next';

import A from '../A';
import P from '../P';

import timelineElementStyle from '../../assets/jss/components/timeline/timelineElementStyle';

class TimelineElement extends React.Component {

    render() {
        const {
            side,
            role,
            since,
            until,
            classes,
            className,
            description,
            companyLink,
            companyName
        } = this.props;

        return (
            <NamespacesConsumer>
                {(t, { i18n }) =>
                    <div className={classNames(className, classes.container, classes[side])}>
                        <div className={classes.content}>
                            <div className={classes.periodContainer}>
                                <CalendarIcon className={classes.periodIcon} />
                                <P className={classes.period}>{since} - {until}</P>
                            </div>
                            <P className={classes.role}>{role}</P>
                            <P className={classes.company}>{t('at')} <A href={companyLink} target="_blank" rel="noopener noreferrer" className={classes.companyLink}>{companyName}</A></P>
                            <P className={classes.description}>{description}</P>
                        </div>
                    </div>
                }
            </NamespacesConsumer>
        );
    }
}

TimelineElement.propTypes = {
    className: PropTypes.string,
    role: PropTypes.string.isRequired,
    since: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    companyLink: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    side: PropTypes.oneOf(['left', 'right']).isRequired,
    until: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default injectSheet(timelineElementStyle)(TimelineElement);
