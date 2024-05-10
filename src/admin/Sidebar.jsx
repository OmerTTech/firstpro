import React from 'react'
import { FaRegDotCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const sidebar = () => {
    return (
        <aside>
            <Link to="/manage/products"> <FaRegDotCircle />Products</Link>
            <Link to="/manage/categories"> <FaRegDotCircle />Categories</Link>
        </aside>
    )
}

export default sidebar