import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Footer from './components/footer'
import RegisterForm from './components/forms/register'
import './index.css'

ReactDOM.render(
  <React.Fragment>
    <Header />
    <RegisterForm />
    <Footer />
  </React.Fragment>,
  document.getElementById('root')
);
