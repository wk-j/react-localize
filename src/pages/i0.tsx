import React from "react"
import { useTranslation } from 'react-i18next';
import { IT } from "../shared/t";

export class I0 extends React.Component<IT, {}> {
    public render() {
        var t = this.props.t
        return (
            <div>
                <h2>Page 0</h2>
                <h2>{t("welcome")}</h2>
                <button>{t("ok")}</button>
                <button>{t("cancel")}</button>
            </div>
        )
    }
}