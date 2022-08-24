import './App.css';
import React, { useState, useEffect } from 'react';
import { Session } from './requests';
import AuctionIndexPage from './components/AuctionIndexPage';
import AuctionShowPage from './components/AuctionShowPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewAuctionPage from './components/NewAuctionPage';
import { User } from './requests';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
import WelcomePage from './components/WelcomePage';


export default function App() {
  const [ user, setUser ] = useState(null)


  useEffect(() => {
    getCurrentUser();
  }, [])


  const getCurrentUser = () => {
    return User.current().then(user => {
      console.log(user)
      if (user?.id){
        setUser(user)
      }
    })
  }

  const onSignOut = () => { setUser( null )}



    return (
      <BrowserRouter>
        <NavBar currentUser={user} onSignOut={ onSignOut }/>
        <Switch>
          <Route exact path='/' component={WelcomePage} />
          <Route exact path='/sign_in'
          render={(routeProps) => <SignInPage {...routeProps} onSignIn={getCurrentUser} />}
          >
          </Route>
          <Route exact path='/sign_up'
          render={(routeProps) => <SignUpPage {...routeProps} onSignUp={getCurrentUser} />}
          ></Route>
          <Route exact path='/items' component={AuctionIndexPage}/>
          <Route exact path='/items/new' component={NewAuctionPage}/>
          <AuthRoute isAuthenticated={!!user} exact path='/items/new' component={NewAuctionPage} />
          <Route exact path='/items/:id' component={AuctionShowPage}></Route>
        </Switch>
      </BrowserRouter>
    );

}

