import React,{useState} from 'react'
import Sidebar from 'Components/DashBoard/Sidebar';
import Header from 'Components/DashBoard/Header';
import Home from 'Components/DashBoard/Tabs/Home';

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <div className="flex h-screen overflow-hidden">

                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-blue-50">

                    {/*  Site header */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                    <main>
                       <Home></Home>
                    </main>

                </div>
            </div>
        </>
    )
}

export default UserDashboard
