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
        const {name, icon, color, iconColor, dapps} = this.props.data;

        const url = `/${name.toLowerCase().replace(" ", "-")}`;
        console.log('url', url)
        return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <Link
                className={'dapp-category-container'}
                to={url}
                onClick={this.trackEventOpenDappCategory}
            >
                <div className={'dapp-category'}
                     style={{background: color}}>
                    <div className={'dapp-category-image-container'}>
                        <div style={{
                            backgroundColor: iconColor,
                            "-webkit-mask": `url(${icon}) no-repeat center / contain`,
                            mask: `url(${icon}) no-repeat center / contain`,
                            width: 20,
                            height: 20
                        }}>
                        </div>
                    </div>
                    <span className={'dapp-category-name'}>{name}</span>
                    {/*<span className={'dapp-category-counter'}>{dapps.length}</span>*/}
                </div>
            </Link>
        );
    }
}
