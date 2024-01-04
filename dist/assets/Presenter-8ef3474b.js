import{o as d,e as k,f as e,d as B,b as w,y,q as p,z as P,_ as T,A as C,B as z,C as H,c as b,a as R,D as A,E as N,G as D,H as I,I as E,J as L,K as q,L as F,M as O,N as U,O as W,s as Z,P as G,Q as j,g as o,l as c,t as J,n as g,i as $,R as V,S as M,m as K,T as Q,j as X,U as x,V as Y,W as ee,F as se,X as te,Y as oe,Z as le,$ as ne,a0 as ae,a1 as ie,a2 as re}from"./index-ac9c9119.js";import{N as ce}from"./NoteDisplay-d5bb38b7.js";import ue from"./DrawingControls-11e57fca.js";const de={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_e=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[_e];function me(i,u){return d(),k("svg",de,pe)}const ve={name:"carbon-renew",render:me},he={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fe=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ge=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),xe=[fe,ge];function we(i,u){return d(),k("svg",he,xe)}const ye={name:"carbon-time",render:we},ke="/assets/logo-title-horizontal-96c3c915.png",Se=B({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(i){const u=i,v=w(()=>{var l,n,s;return(s=(n=(l=y.value)==null?void 0:l.meta)==null?void 0:n.slide)==null?void 0:s.note}),h=w(()=>{var l,n,s;return(s=(n=(l=y.value)==null?void 0:l.meta)==null?void 0:n.slide)==null?void 0:s.noteHTML});return(l,n)=>(d(),p(ce,{class:P(u.class),note:v.value,"note-html":h.value},null,8,["class","note","note-html"]))}}),Ce=T(Se,[["__file","/home/developer/MakeCode/internet/node_modules/@slidev/client/internals/NoteStatic.vue"]]),m=i=>(ie("data-v-574fd206"),i=i(),re(),i),be={class:"bg-main h-full slidev-presenter"},Ne={class:"grid-container"},$e={class:"grid-section top flex"},Ve=m(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"}},null,-1)),Me=m(()=>e("div",{class:"flex-auto"},null,-1)),Be={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Pe=m(()=>e("div",{class:"context"}," current ",-1)),Te=m(()=>e("div",{class:"context"}," next ",-1)),ze={class:"grid-section note overflow-auto"},He={class:"grid-section bottom"},Re={class:"progress-bar"},Ae=B({__name:"Presenter",setup(i){const u=C();z(),H(u);const v=b.titleTemplate.replace("%s",b.title||"Slidev");R({title:`Presenter - ${v}`});const{timer:h,resetTimer:l}=A(),n=C([]),s=w(()=>N.value<D.value?{route:y.value,clicks:N.value+1}:I.value?{route:E.value,clicks:0}:null);return L(),q(()=>{const S=u.value.querySelector("#slide-content"),a=F(O()),f=U();W(()=>{if(!f.value||G.value||!j.value)return;const r=S.getBoundingClientRect(),t=(a.x-r.left)/r.width*100,_=(a.y-r.top)/r.height*100;if(!(t<0||t>100||_<0||_>100))return{x:t,y:_}},r=>{Z.cursor=r})}),(S,a)=>{const f=ye,r=ve;return d(),k(se,null,[e("div",be,[e("div",Ne,[e("div",$e,[Ve,Me,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:a[0]||(a[0]=(...t)=>o(l)&&o(l)(...t))},[c(f,{class:"absolute"}),c(r,{class:"absolute opacity-0"})]),e("div",Be,J(o(h)),1)]),e("div",{ref_key:"main",ref:u,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:g(o($))},[c(M,{key:"main",class:"h-full w-full"},{default:V(()=>[c(te,{"render-context":"presenter"})]),_:1}),Pe],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:g(o($))},[s.value?(d(),p(M,{key:"next",class:"h-full w-full"},{default:V(()=>{var t;return[c(o(le),{is:(t=s.value.route)==null?void 0:t.component,"clicks-elements":n.value,"onUpdate:clicksElements":a[1]||(a[1]=_=>n.value=_),clicks:s.value.clicks,"clicks-disabled":!1,class:P(o(oe)(s.value.route)),route:s.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):K("v-if",!0),Te],4),e("div",ze,[(d(),p(Ce,{key:2,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",He,[c(ne,{persist:!0})]),(d(),p(ue,{key:0}))]),e("div",Re,[e("div",{class:"progress h-2px bg-primary transition-all",style:g({width:`${(o(Q)-1)/(o(X)-1)*100}%`})},null,4)])]),c(ae),c(ee,{modelValue:o(x),"onUpdate:modelValue":a[2]||(a[2]=t=>Y(x)?x.value=t:null)},null,8,["modelValue"])],64)}}});const Le=T(Ae,[["__scopeId","data-v-574fd206"],["__file","/home/developer/MakeCode/internet/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Le as default};
