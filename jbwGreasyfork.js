// ==UserScript==
// @name         阴阳师鉴宝屋油猴脚本
// @namespace    https://github.com/JellyL/jbwGreasyfork
// @icon         https://yys.jellyl.com/img/wu.8dccb370.svg
// @version      0.5
// @description  在阴阳师藏宝阁页面左侧自动显示鉴宝屋结果页
// @author       Jelly L
// @match        https://yys.cbg.163.com/*
// @grant        window.onurlchange
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

//变小藏宝阁最大宽度
var cssCompile = `
       body{max-width: 500px;}
      .site-navbar-fixed{max-width: 500px;}
      .site-footbar{max-width: 500px;}
      .page-prod-role-list .role-list-tabs{max-width: 500px;}
      .page-role-detail .preview{max-width: 500px;}
      .c-popup{max-width: 500px;}
      .page-tabs .tabs{max-width: 500px;}
     `
    GM_addStyle(cssCompile);
//初始化变量
var pageHeight = window.innerHeight;
var pageWidth = (window.innerWidth-530)/2;
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

//更换页面时同步更新
var initial = function(){
    'use strict';

    var pageFrameNew = document.createElement("iframe");
    var pagePathNew = location.pathname;
    pageFrameNew.src = "https://yys.jellyl.com"+pagePathNew;
    pageFrameNew.frameBorder = 0;
    pageFrameNew.width = pageWidth+"px";
    pageFrameNew.height = pageHeight+"px";
    var theFrame = document.getElementsByTagName("iframe");
    containerDiv.replaceChild(pageFrameNew,theFrame[0]);
}

//油猴单页应用onurlchange检测
if (window.onurlchange === null) {
    window.addEventListener('urlchange', (info) => initial());
};
