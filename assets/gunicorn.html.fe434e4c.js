import{_ as o,o as t,c as e,a as n}from"./app.205a3d76.js";const c={},s=n("p",null,"1\u3001gunicorn\u5F00\u542F",-1),l=n("p",null,"\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\uFF0C\u8F93\u5165\u4E0B\u65B9\u7684\u4EE3\u7801\u3002",-1),_=n("p",null,"gunicorn --bind unix:/tmp/\u57DF\u540D.socket \u9879\u76EE\u540D\u79F0.wsgi:application 2\u3001\u5173\u95ED\u548C\u91CD\u542F",-1),i=n("p",null,"\u9996\u5148\u6267\u884C\u5982\u4E0B\u547D\u4EE4\u83B7\u53D6Gunicorn\u8FDB\u7A0B\u6811\uFF1A",-1),r=n("p",null,"pstree -ap|grep gunicorn \u4E4B\u540E\u8F93\u5165\u5982\u4E0B\u6307\u4EE4\u5173\u95ED\u8FDB\u7A0B\uFF1A",-1),u=n("p",null,"kill -9 1234 \u8F93\u5165\u5982\u4E0B\u6307\u4EE4\u91CD\u542F\u8FDB\u7A0B\uFF1A",-1),p=n("p",null,"kill -HUP 1234",-1),a=[s,l,_,i,r,u,p];function d(h,f){return t(),e("div",null,a)}var m=o(c,[["render",d],["__file","gunicorn.html.vue"]]);export{m as default};