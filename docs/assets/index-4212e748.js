(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=document.querySelector("form#rating_form"),n=document.querySelector('button[form="rating_form"]'),l=document.querySelector("#card-with-rating"),i=document.querySelector("#thanks-card");n.classList.add("disabled");n.disabled=!0;let c=0;const f=s=>{console.log("start en event");const{target:t}=s;t.removeEventListener("transitionend",f),t.style.setProperty("display","none"),i.style.removeProperty("display"),setTimeout(()=>{i.classList.remove("close"),i.classList.add("open")},300)},m=s=>{var t,o;s.preventDefault(),c=((o=(t=s.target)==null?void 0:t.rating)==null?void 0:o.value)||0,c&&(i.querySelector(".user-rating__num").textContent=c,l.classList.add("close"),l.addEventListener("transitionend",f))},y=s=>{const t=new FormData(s.target.form);for(let o of t.values())o||(n.classList.add("disabled"),n.disabled=!0);n.classList.remove("disabled"),n.disabled=!1};u.addEventListener("change",y);u.addEventListener("submit",m);