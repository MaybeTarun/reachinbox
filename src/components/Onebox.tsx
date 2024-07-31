import React, { useEffect, useState } from 'react';
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
import bluedownarrow from './../assets/bluedown.svg';
import downarrow2 from './../assets/downarrow2.svg';
import refresh from './../assets/refresh.svg';
import search from './../assets/search.svg';
import moon from './../assets/moon.svg';
import sun from './../assets/sun.svg';
import nomsg from './../assets/nomsg.png';
import dot from './../assets/dot.svg';
import axios from 'axios';

interface Mail {
  id: number;
  fromName: string;
  fromEmail: string;
  toName: string;
  toEmail: string;
  subject: string;
  body: string;
  isRead: boolean;
  sentAt: string;
}

const Onebox: React.FC = () => {
  const [isSunActive, setIsSunActive] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [mails, setMails] = useState<Mail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const toggleTheme = () => {
    setIsSunActive(!isSunActive);
  };

  const toggleUserProfile = () => {
    setShowUserProfile(!showUserProfile);
  };

  useEffect(() => {
    const getQueryParam = (name: string) => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    };

    const fetchMails = async () => {
      const token = getQueryParam('token');
      if (!token) {
        setError('Token not found in URL');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setMails(response.data.data);
        setError(null);
      } catch (error) {
        setError('Failed to fetch mails');
        console.error('Failed to fetch mails', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMails();
  }, []);

  if (loading) return <div>Loading OneBox</div>;

  const countMails = (mails: Mail[]): number => {
    return mails.length;
   };   

  return (
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
          AS
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
              <span>Tim's Workspace</span>
              <button className="workspace-toggle" onClick={toggleUserProfile}>
                <img src={downarrow} alt="toggle"/>
              </button>
            </div>
          </div>
        </header>
        <div className="content">
          {mails.length === 0 || error ? (
            <div className="empty-state">
              <img src={nomsg} alt="No messages" />
              <h2>It&apos;s the beginning of a legendary sales pipeline</h2>
              <p>When you have inbound E-mails you&apos;ll see them here</p>
            </div>
          ) : (
            <div className='inbox'>
                <div className="header2">
                    <h2>All Inbox(s) <span className="blue-arrow-icon"><img src={bluedownarrow} alt='icon' /></span></h2>
                    <span className="refresh-icon"><img src={refresh} alt='icon' onClick={() => window.location.reload()} /></span>
                </div>
                <div className="inbox-stats">
                    <span>0/25 </span>Inboxes selected
                </div>
                <div className="search-bar">
                    <img src={search} alt="icon" className="search-icon" />
                    <input type="text" placeholder="Search" />
                </div>
                <div className="new-replies">
                    <span className="circle">{countMails(mails)}</span>
                    <span>New Replies</span>
                    <span className="newest">Newest <span className="arrow-icon"><img src={downarrow2} alt='icon' /></span></span>
                </div>
                <div className="card-container">
                {mails.map(mail => (
                    <div key={mail.id} className="card">
                    <div className="card-row">
                        <div>{mail.fromEmail} </div> <div className='card-date'> {new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(mail.sentAt))}</div>
                    </div>
                    <div className="card-row2">
                        <p>{mail.subject}</p>
                    </div>
                    <div className="card-row3">
                        <p><img src={dot} alt='icon'></img>Interested</p>
                    </div>
                    </div>
                ))}
                </div>
                </div>
                )}
                <div className="details">
                    <div className="details-heading">
                        Lead Details
                    </div>
                    <div className="details-grid">
                        <div className='grid-left'>Name</div>
                        <div className='gird-right'>Tarun Gupta</div>
                        <div className='grid-left'>Contact No</div>
                        <div className='gird-right'>9899333577</div>
                        <div className='grid-left'>Email ID</div>
                        <div className='gird-right'>tarun234.tg@gmail.com</div>
                        <div className='grid-left'>Portfolio</div>
                        <a href='https://www.maybetarun.in/'><div className='gird-right'>maybetarun.in</div></a>
                        <div className='grid-left'>Company Name</div>
                        <div className='gird-right'>Reachinbox</div>
                    </div>
                    <div className="details-heading">
                        Activites
                    </div>
                </div>
            </div>
      </main>
    </div>
  );
};

export default Onebox;
