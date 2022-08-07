import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {BoardProvider} from './context/board';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(<BoardProvider>
    <App/>
</BoardProvider>);

reportWebVitals();
