import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listings from './containers/Listings';
import Login from './containers/Login'
import NewBusiness from './containers/NewBusiness'
import ListingAboutPage from './containers/ListingAboutPage'
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth() === true
            ? <Component {...props} />
            : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
    )
}


const Router = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Listings} />
                <Route exact path="/login" component={Login} />
                <Route exact path= '/listings/:id' component={ListingAboutPage}/>
                <ProtectedRoute path="/newBusiness" component={NewBusiness} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;