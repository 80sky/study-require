require.config({
	baseUrl: "/",
	urlArgs: 'v=' + Date.now(),
	paths:{
    'css': 'lib/amd/css/css.min',
		'text': 'lib/amd/text/text',
		'domReady': 'lib/amd/domReady',
    'tpl': 'lib/render/template-web',
    
    //polyfill for IE8
		'es5-shim': 'lib/shim/es5-shim.min',
		'es5-sham': 'lib/shim/es5-sham.min',
		'json3': 'lib/shim/json3.min',
    'es6-promise': 'lib/shim/es6-promise',
  
    //router
		'router': 'router',
    'cache': 'util/cache',
    
    //http
    'http':'server/http',

		//index全局
		'index':'tpl/index/index',

		'home':'tpl/home/home',
		'entry':'tpl/entry/entry',
		'about':'tpl/about/about',
		'article':'tpl/article/article'
  }
})

require(['domReady', 'router', 'es6-promise','es5-shim', 'es5-sham', 'json3'], function (domReady, router,promise) {
	promise.polyfill();
	domReady(function () {
		router();
	});
})
