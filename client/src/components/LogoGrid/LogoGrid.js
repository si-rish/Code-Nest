import React from 'react';
import mongodblogo from '../assets/mongodb1.png';
import expresslogo from '../assets/express-js.png';
import gitlogo from '../assets/git.png';
import githublogo from '../assets/git-icon.png';
import nodelogo from '../assets/node-js.png';
import npmlogo from '../assets/npm.png';
import reactlogo from '../assets/react-js.png';
import './LogoGrid.css';

const LogoGrid = () => {
    return (
        <div className="logo-grid-container">
            <div className="logo-grid-content">
                <div className="logo-grid-heading">
                    <h3 className="logo-grid-title">
                        Technologies used in our <span style={{color:'#3ac99c', fontSize:'2.2rem', fontWeight:'bold'}}>MERN </span> Stack Project
                    </h3>
                    <p className="logo-grid-description">
                        Our project utilizes the powerful MERN stack, along with Git and GitHub for version control, and various npm packages for added functionality.
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 2fr)', gap: '2rem', justifyItems:'center', marginTop:'3.5rem'}}>
                    <div style={{ display: 'flex', backgroundColor: '#374151', justifyContent: 'center', alignContent: 'center', width:'70%',borderRadius:'12px', cursor:'pointer'}}>
                        <img src={mongodblogo} alt="Mongodb Logo" className='grid-logo' />&nbsp;&nbsp;
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bolder', }}>Mongodb</p>
                    </div>
                    <div style={{ display: 'flex', backgroundColor: '#374151', justifyContent: 'center', alignContent: 'center' , width:'70%', borderRadius:'12px', cursor:'pointer'}}>
                        <img src={expresslogo} alt="Express Logo" className='grid-logo' />&nbsp;&nbsp;
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bolder', }}>Express</p>
                    </div>
                    <div style={{ display: 'flex', backgroundColor: '#374151', justifyContent: 'center', alignContent: 'center' , width:'70%', borderRadius:'12px', cursor:'pointer'}}>
                        <img src={reactlogo} alt="React Logo" className='grid-logo' />&nbsp;&nbsp;
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bolder', }}>Reactjs</p>
                    </div>
                    <div style={{ display: 'flex', backgroundColor: '#374151', justifyContent: 'center', alignContent: 'center' , width:'70%', borderRadius:'12px', cursor:'pointer'}}>
                        <img src={nodelogo} alt="Nodejs Logo" className='grid-logo' />&nbsp;&nbsp;
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bolder', }}>Nodejs</p>
                    </div>
                    <div style={{ display: 'flex', backgroundColor: '#374151', justifyContent: 'center', alignContent: 'center' , width:'70%', borderRadius:'12px', cursor:'pointer'}}>
                        <img src={githublogo} alt="Github Logo" className='grid-logo' />&nbsp;&nbsp;
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bolder', }}>Github</p>
                    </div>
                    <div style={{ display: 'flex', backgroundColor: '#374151', justifyContent: 'center', alignContent: 'center' , width:'70%', borderRadius:'12px', cursor:'pointer'}}>
                        <img src={npmlogo} alt="NPM Logo" className='grid-logo' style={{width:'65px' }}/>&nbsp;&nbsp;
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bolder', }}>Npm</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogoGrid;
