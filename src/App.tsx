import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.tsx';
import Onebox from './components/Onebox.tsx';

const App = () => (
  <Router>
    <Routes>
      <Route path="/dashboard" element={<Onebox />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
