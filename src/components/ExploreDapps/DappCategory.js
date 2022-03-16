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
        const {name, icon} = this.props.data;
        const url = `/${name.toLowerCase().replace(" ", "-")}`;

        return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <Link
                className={'dapp-category-container'}
                to={url}
                onClick={this.trackEventOpenDappCategory}
            >
                <div className={'dapp-category'}>
                    <div className={'dapp-category-image-container'}>
                        <div style={{
                            backgroundColor: "#0066DA",
                            "-webkit-mask": `url(${icon}) no-repeat center / contain`,
                            mask: `url(${icon}) no-repeat center / contain`,
                            width: 20,
                            height: 20
                        }}>
                        </div>
                    </div>
                    <span className={'dapp-category-name'}>{name}</span>
                </div>
            </Link>
        );
    }
}