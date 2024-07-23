import React, { useContext,useEffect } from 'react';
import NavBar from '../AppComponenets/NavBar';
import CreateCompany from '../PopUpComponents/createCompany'; // Correct import
import { popUpContext } from '../Context/PopUpContext';
import { useNavigate } from 'react-router-dom';
import {authContext} from '../Context/authContext';
function HomePage() {
  const { companyPopUp, setCompanyPopUp } = useContext(popUpContext);
  // const { auth } = useContext(authContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!auth) {
  //     navigate('/login');
  //   }
  // }, [auth, navigate]);
 
  return (
    <div className='flex flex-col'> {/* Adjusted to flex-col for vertical alignment */}
      <NavBar />
      <div>
      {companyPopUp && (
        <CreateCompany  />
      )}

      </div>
    
    </div>
  );
}

export default HomePage;
