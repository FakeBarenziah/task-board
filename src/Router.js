import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Home from './components/Home'

export default function Router() {
    return(
        <BrowserRouter>
        <div>
            <nav>
                <Link className="nav-link" to="/">Home</Link>
            </nav>
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </main>
        </div>
        </BrowserRouter>
    )
}