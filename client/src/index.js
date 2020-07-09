import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router, 
  Switch,
  Route } from 'react-router-dom'

import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Index from './components/index'
import RegisterForm from './components/register'
import './style/app.scss'

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Header />
      <main>
        <div className='wrapper'>
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route exact path='/register' component={RegisterForm}/>
        </Switch>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
)