define(['require','index','cache','http'], function (require,index,cache,http) {
	return function () {
		var routes = {
			'/home/:type': function (type) {
				index.renderHome('#app',type);
			},
		};
		//路由初始化
    var router = Router(routes);
    router.init('/home/entry');
		// if(cache.getData()){
		// 	router.init('/home/news');
		// }else{
		// 	http.get('base/login?empCode=1001').then(function(data){
		// 		cache.setData(data);
		// 		router.init('/home/news');
		// 	})
		// }
	}
});
