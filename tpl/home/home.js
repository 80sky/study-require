define([
  'css!home.css',
  'text!home.html',
  'tpl',
], function (css, html, tpl) {
  'use strict';

  function refresh(data) {
    //挂载具体内容
    loadModule(data);
  }

  function loadModule(module) {
    require([module], function (tpl) {
      tpl.render("#home", {});
    })
  }
  return {
    render: function (node, data) {
      //挂载到挂载点
      $(node).html(tpl.render(html, data));

      //根据当前路由情况渲染导航及实际展示内容
      refresh(data);
    }
  }
})