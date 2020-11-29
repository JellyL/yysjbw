// ==UserScript==
// @name         阴阳师鉴宝屋油猴脚本
// @namespace    https://yys.jellyl.com/
// @icon         https://yys.jellyl.com/img/wu.8dccb370.svg
// @version      0.1
// @description  在阴阳师藏宝阁页面左侧自动显示鉴宝屋结果页
// @author       Jelly L
// @match        https://yys.cbg.163.com/cgi/mweb/equip/*
// @updateURL    https://raw.githubusercontent.com/JellyL/jbwGreasyfork/main/jbwGreasyfork.js
// @grant        window.onurlchange
// @run-at       document-end
// ==/UserScript==

var initial = function(){
    'use strict';
   //初始化变量
   var pageHeight = window.innerHeight;
   var pageWidth = (window.innerWidth-770)/2;
   var pagePath = location.pathname;
   //初始化iframe
   var pageFrame = document.createElement("iframe");
   pageFrame.src = "https://yys.jellyl.com"+pagePath;
   pageFrame.frameBorder = 0;
   pageFrame.width = pageWidth+"px";
   pageFrame.height = pageHeight+"px";
   //初始化div容器
   var containerDiv = document.createElement("div");
   containerDiv.setAttribute("style","position:fixed;top:0%;left:0%;");
   //载入iframe
   document.body.appendChild(containerDiv);
   containerDiv.appendChild(pageFrame);
}

initial();

   //油猴单页引用自动刷新API
if (window.onurlchange === null) {
window.addEventListener('urlchange', (info) => initial());
};
