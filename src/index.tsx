import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { withTranslation, WithTranslation } from 'react-i18next';
import i18 from "./shared/lib"
import "./css/styles.css"
import { Home, About } from "./pages/Pages";

const TranslatedHome = withTranslation()(Home)
const TranslatedAbout = withTranslation()(About)

class App extends React.Component<WithTranslation, {}>  {

    constructor(props) {
        super(props)
    }

    en = (e) => {
        this.props.i18n.changeLanguage("en")
    }
    th = (e) => {
        this.props.i18n.changeLanguage("th")
    }

    render() {
        const t = this.props.t;

        return <Router>
            <header style={{ margin: "10px" }}>
                <div style={{ display: "inline" }}>
                    <button><Link to="/home">Home</Link></button>
                    <button><Link to="/about">About</Link></button>
                </div>
                <div style={{ float: "right" }}>
                    {
                        this.props.i18n.language == "en"
                            ? <button onClick={this.th}>{t("th")}</button>
                            : <button onClick={this.en}>{t("en")}</button>
                    }
                </div>
            </header>

            <div style={{ margin: "10px", border: "1px solid grey", padding: "10px", height: "300px" }}>
                <Route exact path="/home" component={() => <TranslatedHome i18n={i18} />} />
                <Route path="/about" component={() => <TranslatedAbout i18n={i18} />} />
            </div>
        </Router>
    }
}

const TranslatedApp = withTranslation()(App)

ReactDOM.render(<TranslatedApp i18n={i18} />, document.getElementById("root"))