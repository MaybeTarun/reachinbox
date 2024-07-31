import React, { useState } from 'react';
import './Onebox.css';
import logolight from './../assets/logolight.svg';
import logodark from './../assets/logodark.svg';
import icon1 from './../assets/icon1.svg';
import icon2 from './../assets/icon2.svg';
import icon3 from './../assets/icon3.svg';
import icon4 from './../assets/icon4.svg';
import icon5 from './../assets/icon5.svg';
import icon6 from './../assets/icon6.svg';
import icon7 from './../assets/icon7.svg';
import downarrow from './../assets/downarrow.svg';
import moon from './../assets/moon.svg';
import sun from './../assets/sun.svg';
import nomsg from './../assets/nomsg.png';
import { SignedIn, UserButton, UserProfile, useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const Onebox: React.FC = () => {
  const { isSignedIn } = useUser();
  const [isSunActive, setIsSunActive] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);

  const toggleTheme = () => {
    setIsSunActive(!isSunActive);
  };

  const toggleUserProfile = () => {
    setShowUserProfile(!showUserProfile);
  };

  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  return (
    <SignedIn>
      <div className={`onebox-container ${isSunActive ? 'light-mode' : 'dark-mode'}`}>
        <aside className="sidebar">
          <div className="logo">
            <img src={isSunActive ? logodark : logolight} alt='logo' />
          </div>
          <nav className="nav-menu">
            <a href="#" className="nav-item"><img src={icon1} alt='icon' /></a>
            <a href="#" className="nav-item"><img src={icon2} alt='icon' /></a>
            <a href="#" className="nav-item"><img src={icon3} alt='icon' /></a>
            <a href="#" className="nav-item"><img src={icon4} alt='icon' /></a>
            <a href="#" className="nav-item"><img src={icon5} alt='icon' /></a>
            <a href="#" className="nav-item"><img src={icon6} alt='icon' /></a>
            <a href="#" className="nav-item"><img src={icon7} alt='icon' /></a>
          </nav>
          <div className="profile">
            <UserButton />
          </div>
        </aside>
        <main className="main-content">
          <header className="header">
            <h1>Onebox</h1>
            <div className="header-right">
              <div className={`toggle-theme ${isSunActive ? 'sun-active' : 'moon-active'}`} onClick={toggleTheme}>
                <img src={moon} alt="dark" className="moon" />
                <div className="circle"></div>
                <img src={sun} alt="light" className="sun" />
              </div>
              <div className="workspace">
                <span>tim Workspace</span>
                <button className="workspace-toggle" onClick={toggleUserProfile}>
                  <img src={downarrow} alt="toggle" style={{ transform: showUserProfile ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
              </div>
            </div>
          </header>
          <div className="content">
            <div className="empty-state">
              <img src={nomsg} alt="No messages" />
              <h2>It’s the beginning of a legendary sales pipeline </h2>
              <p>When you have inbound E-mails you’ll see them here</p>
            </div>
          </div>
        </main>
        {showUserProfile && (
          <div className="user-profile-overlay">
            <UserProfile />
          </div>
        )}
      </div>
    </SignedIn>
  );
};

export default Onebox;
