import{u as U,i as Z,j as ee,k as $,l as te,n as se,t as ae,p as oe,q,s as L,v as ne,x as z,y as s,z as M,A as I,R as O,B as le,C as re,D as ce,E as ie,G as ue,H as de,I as me,J as he,O as ve,K as ye,L as pe,P as ge,M as Ce,N as fe,Q as D}from"./app-C4dKL-GA.js";const Se=["/","/docs/","/docs/intro.html","/docs/essay/SlowSlowSong.html","/docs/essay/TearsOfRouge.html","/docs/essay/","/docs/essay/love.html","/docs/essay/me.html","/docs/essay/rain.html","/docs/links/","/docs/note/QCCSTP/","/docs/note/back-end/","/docs/note/design/","/docs/note/front-end/","/docs/note/tools/git.html","/docs/note/tools/gradle.html","/docs/note/tools/idea.html","/docs/note/tools/","/docs/note/tools/maven.html","/docs/note/tools/shell.html","/docs/note/tools/vs-code.html","/docs/series/games/","/docs/series/step-by-step/","/docs/series/step-by-step/java-installation-and-configuration.html","/docs/series/step-by-step/quickly-build-personal-documents.html","/docs/note/QCCSTP/software-design-engineer/algorithms-and-data-structures.html","/docs/note/QCCSTP/software-design-engineer/basic-knowledge-of-network-and-multimedia.html","/docs/note/QCCSTP/software-design-engineer/computer-composition-and-structure.html","/docs/note/QCCSTP/software-design-engineer/database-technology.html","/docs/note/QCCSTP/software-design-engineer/fundamentals-of-software-engineering.html","/docs/note/QCCSTP/software-design-engineer/","/docs/note/QCCSTP/software-design-engineer/object-oriented-technology.html","/docs/note/QCCSTP/software-design-engineer/operating-system.html","/docs/note/QCCSTP/software-design-engineer/program-language.html","/docs/note/QCCSTP/software-design-engineer/standardization-and-intellectual-property.html","/docs/note/QCCSTP/software-design-engineer/system-development-and-operation.html","/docs/note/QCCSTP/system-architect/case-analysis.html","/docs/note/QCCSTP/system-architect/computer-composition-and-architecture.html","/docs/note/QCCSTP/system-architect/computer-network.html","/docs/note/QCCSTP/system-architect/database-system.html","/docs/note/QCCSTP/system-architect/design-thesis.html","/docs/note/QCCSTP/system-architect/enterprise-informatization-strategy-and-implementation.html","/docs/note/QCCSTP/system-architect/","/docs/note/QCCSTP/system-architect/intellectual-property-and-standardization.html","/docs/note/QCCSTP/system-architect/mathematics-and-economic-management.html","/docs/note/QCCSTP/system-architect/operating-system.html","/docs/note/QCCSTP/system-architect/project-management.html","/docs/note/QCCSTP/system-architect/software-architecture-design.html","/docs/note/QCCSTP/system-architect/software-engineering.html","/docs/note/QCCSTP/system-architect/system-configuration-and-performance-evaluation.html","/docs/note/QCCSTP/system-architect/system-reliability-analysis-and-design.html","/docs/note/QCCSTP/system-architect/system-security-analysis-and-design.html","/docs/note/back-end/java/Collection.html","/docs/note/back-end/java/Concurrent.html","/docs/note/back-end/java/JVM.html","/docs/note/back-end/java/Java_Basics.html","/docs/note/back-end/java/SPI.html","/docs/note/back-end/java/","/docs/note/back-end/spring/Spring_Basics.html","/docs/note/back-end/spring/","/docs/note/design/UML/UML.html","/docs/note/front-end/ES6/Promise.html","/docs/note/front-end/Vue2/Component.html","/docs/note/front-end/Vue2/Modules.html","/docs/note/front-end/Vue2/Runtime.html","/docs/note/front-end/Vue2/Slot.html","/docs/note/front-end/Vue2/Vue_CLI.html","/docs/note/front-end/Vue2/Vue_Router.html","/docs/note/front-end/Vue2/Vuex.html","/docs/note/front-end/Vue2/Webpack.html","/docs/note/front-end/Vue3/","/404.html","/category/","/tag/","/article/","/star/","/timeline/"],Qe="SEARCH_PRO_QUERY_HISTORY",v=U(Qe,[]),Pe=()=>{const{queryHistoryCount:a}=D,o=a>0;return{enabled:o,queryHistory:v,addQueryHistory:n=>{o&&(v.value.length<a?v.value=Array.from(new Set([n,...v.value])):v.value=Array.from(new Set([n,...v.value.slice(0,a-1)])))},removeQueryHistory:n=>{v.value=[...v.value.slice(0,n),...v.value.slice(n+1)]}}},A=a=>Se[a.id]+("anchor"in a?`#${a.anchor}`:""),Te="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:j}=D,y=U(Te,[]),ke=()=>{const a=j>0;return{enabled:a,resultHistory:y,addResultHistory:o=>{if(a){const n={link:A(o),display:o.display};"header"in o&&(n.header=o.header),y.value.length<j?y.value=[n,...y.value]:y.value=[n,...y.value.slice(0,j-1)]}},removeResultHistory:o=>{y.value=[...y.value.slice(0,o),...y.value.slice(o+1)]}}},we=a=>{const o=ue(),n=$(),b=de(),r=q(!1),g=me([]);return he(()=>{const{search:Q,terminate:p}=ve(),P=()=>{g.value=[],r.value=!1},C=fe(m=>{r.value=!0,m?Q(m,n.value,o.value).then(h=>{var T,f;return((f=(T=o.value).searchFilter)==null?void 0:f.call(T,h,m,n.value,b.value))??h}).then(h=>{g.value=h,r.value=!1}).catch(h=>{console.error(h),P()}):P()},D.searchDelay);z([a,n],()=>C(a.value),{immediate:!0}),ye(()=>{p()})}),{searching:r,results:g}};var Re=Z({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:o}){const n=ee(),b=$(),r=te(se),{enabled:g,addQueryHistory:Q,queryHistory:p,removeQueryHistory:P}=Pe(),{enabled:C,resultHistory:m,addResultHistory:h,removeResultHistory:T}=ke(),f=g||C,R=ae(a,"query"),{results:S,searching:B}=we(R),l=oe({isQuery:!0,index:0}),u=q(0),d=q(0),_=L(()=>f&&(p.value.length>0||m.value.length>0)),H=L(()=>S.value.length>0),x=L(()=>S.value[u.value]||null),F=()=>{const{isQuery:e,index:t}=l;t===0?(l.isQuery=!e,l.index=e?m.value.length-1:p.value.length-1):l.index=t-1},J=()=>{const{isQuery:e,index:t}=l;t===(e?p.value.length-1:m.value.length-1)?(l.isQuery=!e,l.index=0):l.index=t+1},Y=()=>{u.value=u.value>0?u.value-1:S.value.length-1,d.value=x.value.contents.length-1},G=()=>{u.value=u.value<S.value.length-1?u.value+1:0,d.value=0},K=()=>{d.value<x.value.contents.length-1?d.value+=1:G()},N=()=>{d.value>0?d.value-=1:Y()},V=e=>e.map(t=>pe(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=ge[e.index]||"$content",[c,w=""]=Ce(t)?t[b.value].split("$content"):t.split("$content");return e.display.map(i=>s("div",V([c,...i,w])))}return e.display.map(t=>s("div",V(t)))},k=()=>{u.value=0,d.value=0,o("updateQuery",""),o("close")};return ne("keydown",e=>{if(a.isFocusing){if(H.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const t=x.value.contents[d.value];Q(a.query),h(t),n.push(A(t)),k()}}else if(C){if(e.key==="ArrowUp")F();else if(e.key==="ArrowDown")J();else if(e.key==="Enter"){const{index:t}=l;l.isQuery?(o("updateQuery",p.value[t]),e.preventDefault()):(n.push(m.value[t].link),k())}}}}),z([u,d],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:R.value?!H.value:!_.value}],id:"search-pro-results"},R.value===""?f?_.value?[g?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},r.value.queryHistory),p.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:l.isQuery&&l.index===t}],onClick:()=>{o("updateQuery",e)}},[s(M,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:c=>{c.preventDefault(),c.stopPropagation(),P(t)}})]))])):null,C?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},r.value.resultHistory),m.value.map((e,t)=>s(O,{to:e.link,class:["search-pro-result-item",{active:!l.isQuery&&l.index===t}],onClick:()=>{k()}},()=>[s(M,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(c=>V(c)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:c=>{c.preventDefault(),c.stopPropagation(),T(t)}})]))])):null]:r.value.emptyHistory:r.value.emptyResult:B.value?s(le,{hint:r.value.searching}):H.value?s("ul",{class:"search-pro-result-list"},S.value.map(({title:e,contents:t},c)=>{const w=u.value===c;return s("li",{class:["search-pro-result-list-item",{active:w}]},[s("div",{class:"search-pro-result-title"},e||r.value.defaultTitle),t.map((i,X)=>{const E=w&&d.value===X;return s(O,{to:A(i),class:["search-pro-result-item",{active:E,"aria-selected":E}],onClick:()=>{Q(a.query),h(i),k()}},()=>[i.type==="text"?null:s(i.type==="title"?re:i.type==="heading"?ce:ie,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[i.type==="text"&&i.header?s("div",{class:"content-header"},i.header):null,s("div",W(i))])])})])})):r.value.emptyResult)}});export{Re as default};
