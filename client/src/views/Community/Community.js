import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom'; // Assuming you are using React Router
import "./Community.css"
import Navbar from '../../components/Navbar/Navbar'
import Chatbot from '../../components/Chatbot/Chatbot'
import { checkLogin } from '../../utils/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons'



function Community() {
    const navigate  = useNavigate();
  
    useEffect(() => {
      const isLoggedIn = checkLogin();
  
      if (!isLoggedIn) {
        // Redirect to the login page if the user is not logged in
        navigate.push('/login'); // Update the path according to your route setup
      }
    }, [navigate]);
  
    if (!checkLogin()) {
      // If the user is not logged in, prevent rendering the Community page
      return null;
    }



  return (
    <>
    <Navbar/>
    <div className="top-section">
            <h1>CodeNest <span  className="text sec-text">CONNECT <FontAwesomeIcon icon={faCircleNodes} /></span></h1>
            {/* <p>Collaborate. Innovate. Elevate: Unleashing the Power of Community.</p> */}
        </div>
        <br/>
    <Chatbot/>
    <hr className='community-hr'/>
    
    </>
  )
}

export default Community