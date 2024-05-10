import React from 'react'
import "../admin/admin.css"
import AdminLayout from '../layout/AdminLayout'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../admin/Main/Homepage'
import Products from '../admin/Products/Products'
import Categories from '../admin/Categories/Categories'

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path='/manage' element={<Homepage />}/>
        <Route path='/manage/products' element={<Products />}/>
        <Route path='/manage/categories' element={<Categories />}/>
      </Routes>
    </AdminLayout>
  )
}

export default AdminRoutes