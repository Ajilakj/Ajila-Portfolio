import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as BaseRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
    
        <BaseRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BaseRouter>,
    document.getElementById('root')
  );
  
