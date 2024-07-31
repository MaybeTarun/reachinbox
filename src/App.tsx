import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.tsx';
import Onebox from './components/Onebox.tsx';
import { useUser } from '@clerk/clerk-react';

const App = () => {
  const { isSignedIn } = useUser();

  return (
    <Router>
      <Routes>
        <Route path="/" element={isSignedIn ? <Navigate to="/google-login" /> : <Login />} />
        <Route path="/google-login" element={isSignedIn ? <Onebox /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
