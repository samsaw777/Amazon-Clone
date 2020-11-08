import React,{useEffect} from 'react';
import './App.css';
import Checkout from './Component/Checkout.js'
import Header from './Component/Header.js';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Home from './Component/Home.js'
import Login from './Component/Login.js'
import {useStateValue} from './StateProvider'
import {auth} from './Component/Firebase';
function App() {
  const [{user},dispatch] = useStateValue();
  

  useEffect(()=>{
   const unsubscribe =  auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return() =>{
      // Any clean up code here
      unsubscribe();
    }
  },[]);

  console.log("User is",user)
  return (
    <Router>
        <div className="app">
            <Switch>
              <Route path="/checkout">
                <Header />
                <Checkout />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Header />
                <Home />
              </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
/* 
steps for carring the amazon clone

Demo app
set up react 
set up firebase
set up react router
build the nav bar
build the banner
build the product component
introduce react context api
setup add to basket button
build checkout page
build subtotal component
build login page
deploy the app live on firebase

*/
/*
to live code we can use the live share code */
