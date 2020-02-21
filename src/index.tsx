import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { WithTranslation, withTranslation } from 'react-i18next';

import { I1 } from "./pages/i1"
import { I0 } from "./pages/i0"
import { I2 } from "./pages/i2"
import i18 from "./shared/lib"
import { IT } from "./shared/t";


class App extends React.Component<IT, {}>  {

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

        const MyI0 = withTranslation()(I0)
        const MyI1 = withTranslation()(I1)
        const MyI2 = withTranslation()(I2)

        return <Router>
            <header style={{ margin: "10px" }}>
                <button><Link to="/i0">Page 0</Link></button>
                <button><Link to="/i1">Page 1</Link></button>
                <button><Link to="/i2">Page 2</Link></button>
                <button onClick={this.en}>En</button>
                <button onClick={this.th}>Th</button>
            </header>

            <div style={{ margin: "10px" }}>
                <Route exact path="/i0" component={() => <MyI0 i18n={i18} />} />
                <Route path="/i1" component={() => <MyI1 i18n={i18} />} />
                <Route path="/i2" component={() => <MyI2 i18n={i18} />} />
            </div>
        </Router>
    }
}

const MyT = withTranslation()(App)

ReactDOM.render(<MyT i18n={i18} />, document.getElementById("root"))