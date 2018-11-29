define([
  'css!index.css',
	'text!index.html',
  'tpl',
  'about'
],function(css,html,tpl,about){
  'use strict';
  return {
    renderHome:function(node,data){
      $(node).html(tpl.render(html, {}));
      require(['home'], function (tpl) {
        tpl.render('#main',data);
      })
    },
    renderListPage:function(node,data){
      $(node).html(tpl.render(html, {}));
    },
    renderListDetail:function(node,data){
      $(node).html(tpl.render(html, {}));
    }
  }
})