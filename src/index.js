import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
//import MyAlgo from '@randlabs/myalgo-connect';
import { createBrowserHistory } from "history";

import App from './App';
import * as serviceWorker from './serviceWorker';

// import './index.css';
//import './App.css';
import './assets/scss/style.scss';

//const history = createBrowserHistory();

//const myAlgoWallet = new MyAlgo();

/*const connectToMyAlgo = async() => {
    try {
	const accounts = await myAlgoWallet.connect();

	const addresses = accounts.map(account => account.address);

    } catch (err) {
	console.error(err);
    }
}
*/

ReactDOM.render(
	<React.StrictMode>
	<Router history={history}>
	<App />
	</Router>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// removed the webvitals/webworkers.js file
serviceWorker.unregister();
