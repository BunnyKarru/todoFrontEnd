import React, { useContext, useState } from 'react';
import arrow from '../assets/NavBarAssets/arrow.svg';
import { popUpContext } from '../Context/PopUpContext';
function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {setCompanyPopUp}=useContext(popUpContext)

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    
      <div
        className={`flex flex-col bg-white transition-all duration-300 relative`}
        style={{
          width: sidebarOpen ? '200px' : '52px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          className="bg-black w-full h-12 relative flex items-center justify-between px-2"
          style={{ borderRadius: '0px 20px 0px 0px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
        >
        
        {
          sidebarOpen?<p className="text-white">UserName</p>:<></>
        }

          
          <img
            src={arrow}
            className="cursor-pointer absolute right-0 transition-transform duration-300 rounded-lg"
            onClick={toggleSidebar}
            style={{ transform: sidebarOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            alt="Toggle Sidebar"
          />
        </div>
        <div
          className="w-full"
          style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#FDFDFD',height:"calc(100vh - 48px)" }}
        >
          <div>
            
          </div>
        </div>

        <div className='absolute bottom-0 w-full h-12 text-center' style={{"backgroundColor":"black"}}>

        {
          sidebarOpen?<button className="text-white text-center" onClick={()=>setCompanyPopUp(true)}>Create Company</button>:<></>
        }

        </div>
      </div>
    
  );
}

export default NavBar;
