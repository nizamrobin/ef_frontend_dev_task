(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();let a=document.querySelector(".menu-btn-open"),o=document.querySelector(".menu-btn-close"),m=document.getElementById("navbar"),c=document.querySelector(".menu"),d=document.querySelector(".back-btn"),i=document.querySelector(".search-btn"),L=document.getElementById("overlay");window.addEventListener("change",function(){return window.innerWidth});a.addEventListener("click",function(){m.classList.toggle("hidden"),o.classList.toggle("hidden"),a.classList.toggle("hidden")});o.addEventListener("click",function(){m.classList.toggle("hidden"),a.classList.toggle("hidden"),o.classList.toggle("hidden"),c.classList.add("hidden"),window.innerWidth<768&&(i.classList.remove("hidden"),d.classList.add("hidden"))});document.querySelectorAll(".main-nav-item-link").forEach(n=>{n.addEventListener("click",h)});function h(n){c.classList.remove("hidden"),window.innerWidth>=768&&L.classList.add("overlay");const t=n.currentTarget;c.classList.add("toppest"),document.querySelectorAll(".main-nav-item-link").forEach(r=>{r!==t?(r.classList.add("topper"),t.classList.remove("topper"),t.classList.add("toppest")):(r.classList.remove("topper"),t.classList.add("toppest"))}),window.innerWidth<768&&(i.classList.add("hidden"),d.classList.remove("hidden"))}document.addEventListener("mouseup",function(n){c.contains(n.target)||(c.classList.add("hidden"),document.querySelectorAll(".main-nav-item-link").forEach(t=>{t.classList.remove("topper"),t.classList.remove("toppest"),document.getElementById("overlay").classList.remove("overlay")}))});d.addEventListener("click",function(){c.classList.add("hidden"),window.innerWidth<768&&(d.classList.add("hidden"),i.classList.remove("hidden"))});i.addEventListener("click",function(){let n=document.querySelector(".search-btn-icon");document.querySelector(".search-input").classList.toggle("hidden"),document.querySelector(".search-adv-btn").classList.toggle("hidden"),i.classList.contains("search-btn-cross")?(i.classList.remove("search-btn-cross"),o.classList.remove("hidden"),n.src="/search.svg"):(i.classList.add("search-btn-cross"),o.classList.add("hidden"),n.src="/cross.svg")});
