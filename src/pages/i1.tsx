import React from "react"
import { IT } from "../shared/t"

export class I1 extends React.Component<IT, {}> {
    public render() {
        var t = this.props.t
        return (
            <div>
                <h2>Page 1</h2>
                <h2>{t("welcome")}</h2>
            </div>
        )
    }
}