import start from './startup/index.jsx';

if (module.hot) {
	module.hot.accept('./startup/index.jsx', function() {
		start();
	});
}

start();