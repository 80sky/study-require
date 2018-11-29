define([ 'cache'], function(cache) {
	//TODO add base url here
	var baseUrl = 'http://172.19.10.157:8080/ht-platform-portlet/restful/api/';
	function fetch(method, url, data) {
		return new Promise(function(resolve, reject) {
			$.ajax({
				url : baseUrl + url,
				type : method,
				data : data || '',
				async : true,
				cache : false,
				contentType : 'application/json',
				dataType : 'json',
				processData : false,
				timeout : 5000,
				beforeSend : function(request) {
					request.setRequestHeader('HICAS', cache.getToken());
				},
				success : function(data) {
					if (data.code != 0) {
						reject(data.message);
					} else {
						resolve(data.data);
					}
				},
				error : function(error) {
					reject(error);
				}
			});
		});
	}
	;

	var api = {
		get : function(uri) {
			return fetch('GET', uri, '');
		},
		post : function(uri, param) {
			return fetch('POST', uri, param);
		},
		put : function(uri, param) {
			return fetch('PUT', uri, param);
		},
		remove : function(uri) {
			return fetch('DELETE', uri, '');
		},
		getBaseUrl: function () {
			return "http://172.19.10.157:8080"
		},
	};
	return api;
});