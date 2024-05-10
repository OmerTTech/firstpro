import React from 'react'
import Header from "../components/header/Header";

const Layout = (props) => {
  return (
    <div className='Layout'>
        <Header />
        <main>
            {props.children}
        </main>
    </div>
  )
}

export default Layout