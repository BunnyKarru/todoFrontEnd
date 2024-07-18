import React, { useContext } from 'react';
import NavBar from '../AppComponenets/NavBar';
import CreateCompany from '../PopUpComponents/createCompany'; // Correct import
import { popUpContext } from '../Context/PopUpContext';

function HomePage() {
  const { companyPopUp, setCompanyPopUp } = useContext(popUpContext);

  const logging = (data) => {
    console.log(data);
  };

  return (
    <div className='flex flex-col'> {/* Adjusted to flex-col for vertical alignment */}
      <NavBar />
      <div>
      {companyPopUp && (
        <CreateCompany onClose={() => setCompanyPopUp(false)} onAddCompany={logging} />
      )}

      </div>
    
    </div>
  );
}

export default HomePage;
