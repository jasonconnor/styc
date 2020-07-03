import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import RegisterForm from './components/register'
import './style/app.scss'

ReactDOM.render(
  <React.Fragment>
    <Header />
    <main>
      <div className='wrapper'>

        <RegisterForm />

      </div>
    </main>
    <Footer />
  </React.Fragment>,
  document.getElementById('root')
)