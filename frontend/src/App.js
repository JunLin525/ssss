import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext';
function App() {
  return (
    <div className = "App">
      <Router>
        <AuthProvider>
          <Header/>
          <Routes>
            <Route element={<PrivateRoute component={HomePage} />} path="/" exact />
            <Route element={<LoginPage />} path="/login" />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
