import React from 'react'
import Sidebar from "../admin/Sidebar";

const AdminLayout = (props) => {
  return (
    <div className='admin-layout'>
      <div className="">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <main>
              {props.children}
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout