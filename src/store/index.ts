import axios from 'axios';
import {
	legacy_createStore as createStore,
	compose,
	applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import * as api from '../config';
import { rootReducer } from './root-reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['theme', 'countries'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	persistedReducer,
	composeEnhancers(
		applyMiddleware(thunk.withExtraArgument({ client: axios, api }))
	)
);

export { store };
export const persistor = persistStore(store);
