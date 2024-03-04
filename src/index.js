import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('App');
const container = createRoot(root);
container.render(<App />);
