define([
  'css!article.css',
	'text!article.html',
  'tpl',
],function(css,html,tpl){
  'use strict';
  return {
    render:function(node,data){
      $(node).html(tpl.render(html, data));
    }
  }
})