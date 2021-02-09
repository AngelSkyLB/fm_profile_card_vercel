import React from 'react';
import ReactDOM from 'react-dom';
import './core/styles/global.css';

import Background from './Background';
import Card from './Card';

const App = () => {
	return (
		<main id='Content'>
			<Background />
			<Card />
		</main>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
