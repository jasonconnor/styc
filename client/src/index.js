import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Footer from './components/footer'
import LoginForm from './components/forms/login'
import App from './App'
import './index.css'

ReactDOM.render(
  <React.Fragment>
    <Header />
    <LoginForm />
    <Footer />
  </React.Fragment>,
  document.getElementById('root')
);
