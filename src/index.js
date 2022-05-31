// 게임 상태, 각 칸의 상태(깃발, 지뢰, 일반칸) 등의 상태를 관리하는 redux 사용

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDom.render(
	<Provider store={store}>	
		<App />
	</Provider>,
	document.getElementById('react-root')
);