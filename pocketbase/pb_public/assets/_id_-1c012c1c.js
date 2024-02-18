import{_ as j,o as a,c as r,a as v,d as p,w as u,p as d,e as t,t as o,u as e,F as x,P as b,f as y,g as $,r as I,b as g,h as R,i as k,m as T,j as F,k as H}from"./index-315b5069.js";const J={},L={class:"relative hidden gap-10 -mb-10 div-graphic animate-scrolling lg:flex"},O=v('<h1 class="font-bold whitespace-nowrap w-fit text-giant no-stroke">THE PROJECT</h1><h1 class="font-normal whitespace-nowrap text-giant w-fit no-stroke">THE PROJECT</h1><h1 class="font-normal stroke-2 whitespace-nowrap text-giant w-fit">THE PROJECT</h1><h1 class="font-bold whitespace-nowrap w-fit text-giant no-stroke">THE PROJECT</h1><h1 class="font-normal whitespace-nowrap text-giant w-fit no-stroke">THE PROJECT</h1><h1 class="font-normal stroke-2 whitespace-nowrap text-giant w-fit">THE PROJECT</h1>',6),S=[O];function B(_,l){return a(),r("div",L,S)}const U=j(J,[["render",B]]),A={class:"mb-10"},N={class:"mt-4 mb-2"},V={class:"flex items-center w-full gap-4 pb-10"},D={class:"pt-3 text-xl font-thin"},q=t("div",{class:"flex-1 border-b border-lightwhite"},null,-1),z={class:"max-w-[70ch] h-full"},G=["src"],K={class:"flex flex-col justify-between gap-10 py-10 lg:flex-row"},M=["src"],Q={class:"max-w-[70ch]"},W={class:"max-w-[70ch]"},X={class:"flex flex-col gap-4"},Y={class:"flex flex-col justify-between gap-10 py-10 lg:flex-row"},Z={class:"max-w-[70ch]"},tt={class:"max-w-[70ch]"},st={class:"software-grid"},et={class:"flex lg:flex-row flex-col justify-between gap-10 py-10 max-w-[100%]"},lt=["src"],ot=["src"],nt=["src"],ct={class:"max-w-[70ch] py-10"},at=t("div",{class:""},[t("p",{class:"ml-auto font-light border-none btn-style bg-grey"},"Share on Facebook / Twitter / LinkedIn")],-1),it=p({__name:"ProjectContent",props:{id:null,image:null},async setup(_){let l,n;const i=_,s=([l,n]=u(()=>b(i.id)),l=await l,n(),l);console.log(s);const h=s.image1,m=h&&d.getFileUrl(s,h,{thumb:"100x200"}),c=s.image2,w=c&&d.getFileUrl(s,c,{thumb:"100x200"}),f=s.image3,P=f&&d.getFileUrl(s,f,{thumb:"100x200"}),C=s.image4,E=f&&d.getFileUrl(s,C,{thumb:"100x200"});return(ut,ft)=>(a(),r(x,null,[t("section",A,[t("h1",N,o(e(s).title),1),t("div",V,[t("h2",D,o(e(s).category.join(" | ")),1),q]),t("p",z,o(e(s).intro),1),t("img",{src:e(m),class:"w-full max-h-full mx-auto"},null,8,G)]),t("section",K,[t("img",{src:e(w),class:"max-h-[500px] lg:max-w-[50%] mx-auto"},null,8,M),t("div",null,[t("p",Q,o(e(s).text1),1),t("p",W,o(e(s).text2),1),t("ul",X,[t("li",null,o(e(s).textli1),1),t("li",null,o(e(s).textli2),1),t("li",null,o(e(s).textli3),1)])])]),t("section",Y,[t("div",null,[t("p",Z,o(e(s).text3),1),t("p",tt,o(e(s).text4),1)]),t("ul",st,[t("li",null,o(e(s).softwares.slice(0,1)[0]),1),t("li",null,o(e(s).softwares.slice(1,2)[0]),1),t("li",null,o(e(s).softwares.slice(2,3)[0]),1),t("li",null,o(e(s).softwares.slice(3,4)[0]),1)])]),t("section",et,[t("img",{src:e(P),class:"lg:w-[30%] h-full"},null,8,lt),t("img",{src:e(w),class:"lg:w-[30%] h-full"},null,8,ot),t("img",{src:e(E),class:"lg:w-[30%] h-full"},null,8,nt)]),t("p",ct,o(e(s).outro),1),at],64))}}),rt={class:"flex-wrap justify-around -mb-16 md:gap-5 lg:gap-20 md:mb-0 md:flex"},_t=p({__name:"AllCard",async setup(_){let l,n;const i=([l,n]=u(()=>y()),l=await l,n(),l);return console.log(i),(s,h)=>{const m=$("RouterLink");return a(),r("ul",rt,[(a(!0),r(x,null,I(e(i).slice(0,3),c=>(a(),r("li",{key:c.id},[g(m,{to:{name:"projects-id",params:{id:c.id}},class:"flex flex-col h-full"},{default:R(()=>[(a(),k(F,T({key:c.id},{...c}),null,16))]),_:2},1032,["to"])]))),128))])}}}),ht={class:"margins mt-[25px]"},mt={class:"margins"},dt=t("div",{class:"flex items-center w-full gap-4 mt-12 mb-8"},[t("h3",{class:"text-xl font-light"},"See more projects"),t("div",{class:"flex-1 border-b border-lightwhite"})],-1),pt=p({__name:"[id]",props:{id:null,card_image:null},async setup(_){let l,n;const i=_;[l,n]=u(()=>y()),l=await l,n();const s=([l,n]=u(()=>b(i.id)),l=await l,n(),l);H({title:`${s.title} | Lisa Cingolani`});const h=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(m,c)=>(a(),r(x,null,[g(U),t("article",ht,[(a(),k(it,T({key:e(s).id},{...e(s),image:e(s).card_image}),null,16))]),t("section",mt,[dt,g(_t,{onClick:h})])],64))}});export{pt as default};
