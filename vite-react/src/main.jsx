import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { CopyApp } from './app.js';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
		<CopyApp/>
	</StrictMode>,
);


