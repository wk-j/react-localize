import React from "react"
import { WithTranslation } from 'react-i18next';

export class Home extends React.Component<WithTranslation> {
    public render() {
        var t = this.props.t
        return (
            <div>
                <h2>{t("home")}</h2>
                <button>{t("ok")}</button>
                <button>{t("cancel")}</button>
            </div>
        )
    }
}

export class About extends React.Component<WithTranslation> {
    public render() {
        var t = this.props.t
        return (
            <div>
                <h2>{t("about")}</h2>
            </div>
        )
    }
}