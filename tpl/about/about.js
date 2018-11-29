define([
  'css!about.css',
	'text!about.html',
  'tpl',
],function(css,html,tpl){
  'use strict';
  return {
    render:function(node,data){
      $(node).html(tpl.render(html, data));
    }
  }
})