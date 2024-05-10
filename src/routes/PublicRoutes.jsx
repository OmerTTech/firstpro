import React from 'react'
import Layout from '../layout/Layout'
import { Routes, Route } from "react-router-dom";
import Main from "../pages/main/Main";
import Product from "../pages/products/Product";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Details from "../pages/Details/Details";

const PublicRoutes = () => {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Layout>
  )
}

export default PublicRoutes