(function(e){function t(t){for(var l,n,o=t[0],r=t[1],a=t[2],b=0,d=[];b<o.length;b++)n=o[b],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&d.push(c[n][0]),c[n]=0;for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,a||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],l=!0,o=1;o<s.length;o++){var r=s[o];0!==c[r]&&(l=!1)}l&&(i.splice(t--,1),e=n(n.s=s[0]))}return e}var l={},c={app:0},i=[];function n(t){if(l[t])return l[t].exports;var s=l[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=l,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(s,l,function(t){return e[t]}.bind(null,l));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var u=r;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"27d6":function(e,t,s){"use strict";s("fe18")},"2c6d":function(e,t,s){},"4ffd":function(e,t,s){e.exports=s.p+"img/logo.912c41b7.png"},"569e":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var l=s("7a23");const c={class:"fixed-container"},i={class:"main-grid"},n={class:"input-block",style:{"grid-column":"1/2 "}},o=Object(l["e"])("p",{class:"input-block__title"},"Media about company",-1),r=["onClick"],a=["src"],u={key:0,class:"file-input"},b=Object(l["e"])("div",{class:"file-input__plus"},"+",-1),d={class:"input-block",style:{"grid-column":"2/6 "}},p=Object(l["e"])("p",{class:"input-block__title"},"About:",-1),h={class:"input-block__main",ref:"holder_2",tabindex:"2"},f={class:"textarea-input"},_=["value"],j={class:"input-block",style:{"grid-column":"1/2 "}},m=Object(l["e"])("p",{class:"input-block__title"},"Categories",-1),g={class:"input-block__main",ref:"holder_3"},O=["onClick"],k={class:"input-block",style:{"grid-column":"2/3 "}},v=Object(l["e"])("p",{class:"input-block__title"},"Shipping Options",-1),y={class:"input-block__main",ref:"holder_4"},x=Object(l["e"])("li",null,"Canada Post - 2days - 14$",-1),w=Object(l["e"])("li",null,"Israili Post - 22days - 140$",-1),N=[x,w],$=Object(l["e"])("div",{class:"buttons",style:{"grid-column":"5/6 "}},[Object(l["e"])("a",{class:"btn",href:"#"},"Products"),Object(l["e"])("a",{class:"btn",href:"#"},"Orders")],-1);function C(e,t,s,x,w,C){const P=Object(l["n"])("logo-vue"),L=Object(l["n"])("static-block"),S=Object(l["o"])("click-away");return Object(l["j"])(),Object(l["d"])("div",c,[Object(l["e"])("div",i,[Object(l["g"])(P,{logo:w.logo},null,8,["logo"]),Object(l["g"])(L,{value:w.companyName,name:"Company Name",gridStyle:{"grid-column":"1/2"}},null,8,["value"]),Object(l["g"])(L,{link:w.link,name:"Your Link:",gridStyle:{"grid-column":"2/4"}},null,8,["link"]),Object(l["e"])("div",n,[o,Object(l["q"])((Object(l["j"])(),Object(l["d"])("div",{class:"input-block__main input-block__main_grid",ref:"holder_1",tabindex:"1",onClick:t[3]||(t[3]=e=>C.bringParentFocus("holder_1"))},[(Object(l["j"])(!0),Object(l["d"])(l["a"],null,Object(l["m"])(w.files,e=>(Object(l["j"])(),Object(l["d"])("div",{class:"file-input file-input_img",key:e},[Object(l["e"])("button",{type:"button",onClick:t=>C.removeFile(e),class:"file-input__close"}," x ",8,r),Object(l["e"])("img",{alt:"file",src:e,class:"file-input__img"},null,8,a)]))),128)),w.files.length<4?(Object(l["j"])(),Object(l["d"])("div",u,[Object(l["e"])("input",{type:"file",onFocus:t[0]||(t[0]=e=>C.bringParentFocus("holder_1")),onBlur:t[1]||(t[1]=e=>C.bringParentBlur("holder_1")),onChange:t[2]||(t[2]=e=>C.addFiles(e))},null,32),b])):Object(l["c"])("",!0)])),[[S,C.onClickAway]])]),Object(l["e"])("div",d,[p,Object(l["e"])("div",h,[Object(l["e"])("div",f,[Object(l["e"])("textarea",{onFocus:t[4]||(t[4]=e=>C.bringParentFocus("holder_2")),onBlur:t[5]||(t[5]=e=>C.bringParentBlur("holder_2")),ref:"textarea",cols:"60",rows:"14",value:w.content},"\n          ",40,_)])],512)]),Object(l["e"])("div",j,[m,Object(l["e"])("div",g,[Object(l["e"])("ul",{tag:"ul",tabindex:"3",onFocus:t[6]||(t[6]=e=>C.bringParentFocus("holder_3")),onBlur:t[7]||(t[7]=e=>C.bringParentBlur("holder_3")),ref:"categories",class:"input-list"},[(Object(l["j"])(!0),Object(l["d"])(l["a"],null,Object(l["m"])(C.toggleItemsList,e=>(Object(l["j"])(),Object(l["d"])("li",{key:e+Math.random()},[Object(l["e"])("span",{onClick:t=>C.toggleSelectCategories(e),class:Object(l["h"])(w.selectedItems.includes(e)&&w.showAllList&&"active")},Object(l["p"])(e),11,O)]))),128))],544)],512)]),Object(l["e"])("div",k,[v,Object(l["e"])("div",y,[Object(l["e"])("ul",{tabindex:"4",onFocus:t[8]||(t[8]=e=>C.bringParentFocus("holder_4")),onBlur:t[9]||(t[9]=e=>C.bringParentBlur("holder_4")),class:"input-list"},N,32)],512)]),$])])}var P=s("4ffd"),L=s.n(P);const S=e=>(Object(l["l"])("data-v-0ffbadb3"),e=e(),Object(l["k"])(),e),F={class:"logo"},B=["src"],I={key:1,alt:"logo",src:L.a,class:"logo__img"},M={class:"logo__button"},A={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 490.305 490.305",style:{"enable-background":"new 0 0 490.305 490.305"},"xml:space":"preserve"},T=S(()=>Object(l["e"])("g",null,[Object(l["e"])("path",{d:"M472.469,81.443l-63.6-63.6c-13.1-16.4-53.2-30.2-83.4,0l-290.9,289.9l0,0c-4.4,4.4-6.5,10.1-6.2,15.6l-27.1,141.8\r\n            c-4.2,16.2,11.9,26.6,22.9,25l147-29.2c4.2,0,7.3-2.1,10.4-5.2l290.9-289.8C495.469,142.943,495.469,104.443,472.469,81.443z\r\n            M354.669,46.043c6.3-7.3,18.8-7.3,26.1,0l17.3,17l-289.7,289.7l-30.1-30.4L354.669,46.043z M61.769,364.043l64.4,64.4l-80.1,15.8\r\n            L61.769,364.043z M444.369,135.643l-276.8,276.8l-30.1-30.4l290-290l16.8,16.5C453.469,118.343,449.169,130.743,444.369,135.643z"})],-1)),z=[T];function J(e,t,s,c,i,n){return Object(l["j"])(),Object(l["d"])("div",F,[i.userLogo?(Object(l["j"])(),Object(l["d"])("img",{key:0,alt:"logo",src:i.userLogo,class:"logo__img"},null,8,B)):(Object(l["j"])(),Object(l["d"])("img",I)),Object(l["e"])("div",M,[(Object(l["j"])(),Object(l["d"])("svg",A,z)),Object(l["e"])("input",{type:"file",onChange:t[0]||(t[0]=e=>n.onChangeFile(e))},null,32)])])}var R={props:{grid:String},data(){return{userLogo:""}},methods:{onChangeFile(e){const t=e.target.files[0],s=URL.createObjectURL(t);this.userLogo=s}}},U=(s("27d6"),s("6b0d")),q=s.n(U);const G=q()(R,[["render",J],["__scopeId","data-v-0ffbadb3"]]);var V=G;const Y=e=>(Object(l["l"])("data-v-f9841ad0"),e=e(),Object(l["k"])(),e),D={class:"static-text__title"},E={key:0,class:"static-text__value"},H=["href"],K=Y(()=>Object(l["e"])("span",null,"https://",-1));function Q(e,t,s,c,i,n){return Object(l["j"])(),Object(l["d"])("div",{class:"static-text",style:Object(l["i"])(s.gridStyle)},[Object(l["e"])("p",D,Object(l["p"])(s.name),1),s.link?(Object(l["j"])(),Object(l["d"])("a",{key:1,class:"static-text__link",href:s.link},[K,Object(l["f"])(Object(l["p"])(s.link),1)],8,H)):(Object(l["j"])(),Object(l["d"])("p",E,Object(l["p"])(s.value),1))],4)}var W={props:{value:String,name:String,gridStyle:Object,link:String}};s("e285");const X=q()(W,[["render",Q],["__scopeId","data-v-f9841ad0"]]);var Z=X,ee={name:"App",components:{LogoVue:V,StaticBlock:Z},data(){return{itemsList:["Arts and Crafts","Bags","Clothes","Cosmetic","Sport and Fitness","Toys and Games","Jewelry","Judaica","Medical","Nutrition","Textile","Services"],selectedItems:[],companyName:"",link:"",content:"",files:[],showAllList:!1,logo:""}},computed:{toggleItemsList(){return this.showAllList?this.itemsList:this.selectedItems}},methods:{toggleSelectCategories(e){if(this.selectedItems.includes(e)){const t=this.selectedItems.filter(t=>t!==e);this.selectedItems=t}else this.selectedItems.push(e)},addFiles(e){const t=e.target.files[0],s=URL.createObjectURL(t);this.files.push(s)},removeFile(e){this.files=this.files.filter(t=>t!==e)},onClickAway(){this.bringParentBlur("holder_1")},bringParentFocus(e){switch(e){case"holder_1":this.$refs.holder_1.className=this.$refs.holder_1.className+" input-block__main_focus";break;case"holder_2":this.$refs.holder_2.className=this.$refs.holder_2.className+" input-block__main_focus",this.$refs.textarea.className="textarea_open",setTimeout(()=>{this.$refs.textarea.rows=20},300);break;case"holder_3":this.$refs.holder_3.className=this.$refs.holder_3.className+" input-block__main_focus",this.$refs.categories.className=this.$refs.categories.className+" input-list_open",setTimeout(()=>{this.showAllList=!0},300);break;case"holder_4":this.$refs.holder_4.className=this.$refs.holder_4.className+" input-block__main_focus";break;default:break}},bringParentBlur(e){switch(e){case"holder_1":this.$refs.holder_1.className=this.$refs.holder_1.className.split("input-block__main_focus")[0];break;case"holder_2":this.$refs.holder_2.className=this.$refs.holder_2.className.split("input-block__main_focus")[0],this.$refs.textarea.className="",setTimeout(()=>{this.$refs.textarea.rows=14},300);break;case"holder_3":this.$refs.holder_3.className=this.$refs.holder_3.className.split("input-block__main_focus")[0],this.$refs.categories.className=this.$refs.categories.className.split("input-list_open")[0],this.showAllList=!1;break;case"holder_4":this.$refs.holder_4.className=this.$refs.holder_4.className.split("input-block__main_focus")[0];break;default:break}}},mounted(){fetch("./data.json").then(e=>e.json()).then(e=>{this.companyName=e.company_name,this.link=e.link,this.content=e.content,this.selectedItems=e.select_items,this.logo=e.logo})}};s("b8c4");const te=q()(ee,[["render",C]]);var se=te,le=s("3ebd");s("569e");Object(l["b"])(se).use(le["a"]).mount("#app")},"94a4":function(e,t,s){},b8c4:function(e,t,s){"use strict";s("94a4")},e285:function(e,t,s){"use strict";s("2c6d")},fe18:function(e,t,s){}});
//# sourceMappingURL=app.474ab34c.js.map