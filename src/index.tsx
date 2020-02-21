import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { withTranslation, WithTranslation } from 'react-i18next';

import { Home, About } from "./pages/Pages";
import i18n from "./shared/lib"
import "./css/styles.css"

const TranslatedHome = withTranslation()(Home)
const TranslatedAbout = withTranslation()(About)

class App extends React.Component<WithTranslation, {}>  {

    constructor(props) {
        super(props)
    }

    switch = () => {
        this.props.i18n.language == "en"
            ? this.props.i18n.changeLanguage("th")
            : this.props.i18n.changeLanguage("en")
    }

    render() {
        const t = this.props.t;

        return <Router>
            <header style={{ margin: "10px" }}>
                <div style={{ display: "inline" }}>
                    <button><Link to="/home">{t("homeLink")}</Link></button>
                    <button><Link to="/about">{t("aboutLink")}</Link></button>
                </div>
                <div style={{ float: "right" }}>
                    <button onClick={this.switch}>{t("lang")}</button>
                </div>
            </header>

            <section style={{ margin: "10px", border: "1px solid grey", padding: "10px", height: "250px" }}>
                <Route exact path="/home" component={() => <TranslatedHome i18n={i18n} />} />
                <Route path="/about" component={() => <TranslatedAbout i18n={i18n} />} />
            </section>
        </Router>
    }
}

const TranslatedApp = withTranslation()(App)

ReactDOM.render(<TranslatedApp i18n={i18n} />, document.getElementById("root"))