import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';

import { store } from './store';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
		{/* <PersistGate loading={null} persistor={persistor}>
		</PersistGate> */}
	</Provider>
	// </React.StrictMode>
);
