import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Form from './components/Form.jsx';
import OnSubmit from './components/OnSubmit.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/confirmation" element={<OnSubmit />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
