import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {ANALYTICS_EVENT_OPTS, trackEvent} from '../../util/analytics';

import './DappCategory.css';

export default class DappCategory extends Component {
    trackEventOpenDappCategory = () => {
        trackEvent(ANALYTICS_EVENT_OPTS.OPEN_DAPP_CATEGORY, {
            'dapp_category_name': this.props.data.name,
        });
    }

    render() {
        const {name, icon, color} = this.props.data;

        const url = `/${name.toLowerCase().replace(" ", "-")}`;
        return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <Link
                className={'dapp-category-container'}
                to={url}
                onClick={this.trackEventOpenDappCategory}
            >
                <div className={'dapp-category'}
                     style={{background: color}}>
                    <img src={icon} alt={name}/>
                    <span className={'dapp-category-name'}>{name}</span>
                </div>
            </Link>
        );
    }
}