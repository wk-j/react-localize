import React from "react"
import { WithTranslation } from 'react-i18next';
import { Keys } from "../shared/lib";

export class Home extends React.Component<WithTranslation> {
    public render() {
        const __ = (k: Keys) => this.props.t(k)

        return (
            <div>
                <h2>{__("home")}</h2>
                <button>{__("ok")}</button>
                <button>{__("cancel")}</button>
            </div>
        )
    }
}

export class About extends React.Component<WithTranslation> {
    public render() {
        const __ = (k: Keys) => this.props.t(k)

        return (
            <div>
                <h2>{__("about")}</h2>
            </div>
        )
    }
}