import React from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import ImagePage from "./ImagePage/ImagePage"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/image/:id" component={ImagePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router