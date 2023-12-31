import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from './components/Header';
import { CircularProgress } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Updated import
import { ATMProvider } from './context/ATMContext';

const spinnerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh',
};

const LazyPinView = lazy(() => import('./views/PinView'));
const LazyAccountView = lazy(() => import('./views/AccountView'));
const LazyWithDrawalView = lazy(() => import('./views/WithdrawalView'));
const LazyDepositView = lazy(() => import('./views/DepositView'));
const LazyPageNotFound = lazy(() => import('./components/PageNotFound'));

const App: React.FC = () => (
  <Router>
    <div className="App">
      <ATMProvider>
        <Header />
        <Suspense fallback={<div style={spinnerStyles}><CircularProgress /></div>}>
          <Routes>
            <Route path="/" element={<LazyPinView />} />
            <Route path="/account" element={<LazyAccountView />} />
            <Route path="/withdrawal" element={<LazyWithDrawalView />} />
            <Route path="/deposit" element={<LazyDepositView />} />
            <Route path="*" element={<LazyPageNotFound />} />
          </Routes>
        </Suspense>
      </ATMProvider>
    </div>
  </Router>
)

export default App;
