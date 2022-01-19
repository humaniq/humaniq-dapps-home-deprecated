import React, {Component} from 'react'
import closeIcon from '../../images/close-icon.svg';
import {ANALYTICS_EVENT_OPTS, trackEvent} from '../../util/analytics';
import {Collapse} from 'react-collapse';
import './index.css';
import arrowIcon from "../../images/arrow-down.svg"

export default class Dapp extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    trackEventOpenListedDapp = (e) => {
        e.preventDefault();
        trackEvent(ANALYTICS_EVENT_OPTS.OPEN_LISTED_DAPP, {
            'dapp_name': this.props.data.name,
            'dapp_url': this.props.data.url,
            'position': this.props.position + 1
        });
        window.location.href = this.props.data.url;
    }

    renderDescription = (description) => {
        return description && (<p className={'dapp-desc'}>{description}</p>)
    }

    onClose = (e) => {
        e.preventDefault();
        this.props.onClose(this.props.data.url);
    }


    render() {
        const {size, closable, data: {name, description, url, icon}} = this.props;
        return (
            <div
                className={'dapp'}
                onClick={() => this.setState({isOpen: !this.state.isOpen})}
            >
                <div className={"column"}>
                    <img
                        src={icon}
                        className={`dapp-logo ${size === 'small' ? 'dapp-logo-small' : ''}`}
                        alt={`${name} logo`}
                    />
                </div>
                <div className={"column grow"}>
                    <div className={"dapp-row"}>
                        <div className='dapp-content'>
                            <p className={`dapp-name ${size === 'small' ? 'dapp-name-small' : ''}`}>{name}</p>

                            <span className={'dapp-url'} onClick={() => window.location = url}>{url}</span>
                        </div>
                        {closable && (
                            <button
                                className={'dapp-close'}
                                onClick={this.onClose}
                            >
                                <img src={closeIcon} alt={'close button'}/>
                            </button>
                        )
                        }

                    </div>
                    <div className={"dapp-row"}>
                        <Collapse isOpened={this.state.isOpen}>
                            {description ? this.renderDescription(description) : null}
                        </Collapse>
                    </div>
                </div>
                <div className={"column"}>
                    <img src={arrowIcon} className={`arrow ${this.state.isOpen ? "rotate" : ""}`}/>
                </div>
            </div>
        );
    }
}