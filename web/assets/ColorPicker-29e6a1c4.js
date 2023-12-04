import{D as c,F as x,E as v,g as V,G as He,ao as nt,p as i,cn as T,co as z,cp as q,cq as K,cr as D,cs as te,ct as G,r as S,f as re,d as oe,c as R,a2 as at,J as Fe,a7 as Te,cu as ie,cv as ye,cw as Se,cx as Ce,aK as lt,R as it,P as ze,aq as st,H as qe,W as ut,S as we,w as dt,M as ct,ak as ht,aC as pt,T as ft,az as gt,aA as bt,cy as mt,a4 as ce,L as De,aI as he,t as vt}from"./index-deb5fb78.js";import{j as xt,u as kt,e as Ie,f as Ue,V as wt,g as yt,h as St}from"./Input-c71c80ca.js";function Be(e,t,o){t/=100,o/=100;const r=t*Math.min(o,1-o)+o;return[e,r?(2-2*o/r)*100:0,r*100]}function ge(e,t,o){t/=100,o/=100;const r=o-o*t/2,n=Math.min(r,1-r);return[e,n?(o-r)/n*100:0,r*100]}function F(e,t,o){t/=100,o/=100;let r=(n,l=(n+e/60)%6)=>o-o*t*Math.max(Math.min(l,4-l,1),0);return[r(5)*255,r(3)*255,r(1)*255]}function $e(e,t,o){e/=255,t/=255,o/=255;let r=Math.max(e,t,o),n=r-Math.min(e,t,o),l=n&&(r==e?(t-o)/n:r==t?2+(o-e)/n:4+(e-t)/n);return[60*(l<0?l+6:l),r&&n/r*100,r*100]}function Re(e,t,o){e/=255,t/=255,o/=255;let r=Math.max(e,t,o),n=r-Math.min(e,t,o),l=1-Math.abs(r+r-n-1),s=n&&(r==e?(t-o)/n:r==t?2+(o-e)/n:4+(e-t)/n);return[60*(s<0?s+6:s),l?n/l*100:0,(r+r-n)*50]}function Ae(e,t,o){t/=100,o/=100;let r=t*Math.min(o,1-o),n=(l,s=(l+e/30)%12)=>o-r*Math.max(Math.min(s-3,9-s,1),-1);return[n(0)*255,n(8)*255,n(4)*255]}const Ct=c("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[x(">",[c("input",[x("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),x("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),c("button",[x("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[v("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),x("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[v("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),x("*",[x("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[x(">",[c("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),c("base-selection",[c("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),c("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),v("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),x("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[x(">",[c("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),c("base-selection",[c("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),c("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),v("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),Ut={},$t=V({name:"InputGroup",props:Ut,setup(e){const{mergedClsPrefixRef:t}=He(e);return nt("-input-group",Ct,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return i("div",{class:`${e}-input-group`},this.$slots)}});function Rt(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function se(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function At(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Vt(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const Mt={rgb:{hex(e){return T(z(e))},hsl(e){const[t,o,r,n]=z(e);return q([...Re(t,o,r),n])},hsv(e){const[t,o,r,n]=z(e);return K([...$e(t,o,r),n])}},hex:{rgb(e){return D(z(e))},hsl(e){const[t,o,r,n]=z(e);return q([...Re(t,o,r),n])},hsv(e){const[t,o,r,n]=z(e);return K([...$e(t,o,r),n])}},hsl:{hex(e){const[t,o,r,n]=te(e);return T([...Ae(t,o,r),n])},rgb(e){const[t,o,r,n]=te(e);return D([...Ae(t,o,r),n])},hsv(e){const[t,o,r,n]=te(e);return K([...Be(t,o,r),n])}},hsv:{hex(e){const[t,o,r,n]=G(e);return T([...F(t,o,r),n])},rgb(e){const[t,o,r,n]=G(e);return D([...F(t,o,r),n])},hsl(e){const[t,o,r,n]=G(e);return q([...ge(t,o,r),n])}}};function Ee(e,t,o){return o=o||se(e),o?o===t?e:Mt[o][t](e):null}const ee="12px",Pt=12,L="6px",zt=6,Dt="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",It=V({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=S(null);function o(l){t.value&&(re("mousemove",document,r),re("mouseup",document,n),r(l))}function r(l){const{value:s}=t;if(!s)return;const{width:u,left:g}=s.getBoundingClientRect(),B=At((l.clientX-g-zt)/(u-Pt)*360);e.onUpdateHue(B)}function n(){var l;oe("mousemove",document,r),oe("mouseup",document,n),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:t,handleMouseDown:o}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,style:{height:ee,borderRadius:L}},i("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Dt,height:ee,borderRadius:L,position:"relative"},onMousedown:this.handleMouseDown},i("div",{style:{position:"absolute",left:L,right:L,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${L})`,borderRadius:L,width:ee,height:ee}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:L,width:ee,height:ee}})))))}}),le="12px",_t=12,j="6px",Ht=V({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=S(null);function o(l){!t.value||!e.rgba||(re("mousemove",document,r),re("mouseup",document,n),r(l))}function r(l){const{value:s}=t;if(!s)return;const{width:u,left:g}=s.getBoundingClientRect(),B=(l.clientX-g)/(u-_t);e.onUpdateAlpha(Vt(B))}function n(){var l;oe("mousemove",document,r),oe("mouseup",document,n),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:t,railBackgroundImage:R(()=>{const{rgba:l}=e;return l?`linear-gradient(to right, rgba(${l[0]}, ${l[1]}, ${l[2]}, 0) 0%, rgba(${l[0]}, ${l[1]}, ${l[2]}, 1) 100%)`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:le,borderRadius:j},onMousedown:this.handleMouseDown},i("div",{style:{borderRadius:j,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},i("div",{class:`${e}-color-picker-checkboard`}),i("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&i("div",{style:{position:"absolute",left:j,right:j,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${j})`,borderRadius:j,width:le,height:le}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:D(this.rgba),borderRadius:j,width:le,height:le}}))))}}),pe="12px",fe="6px",Ft=V({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=S(null);function o(l){t.value&&(re("mousemove",document,r),re("mouseup",document,n),r(l))}function r(l){const{value:s}=t;if(!s)return;const{width:u,height:g,left:B,bottom:ne}=s.getBoundingClientRect(),E=(ne-l.clientY)/g,X=(l.clientX-B)/u,ue=100*(X>1?1:X<0?0:X),Z=100*(E>1?1:E<0?0:E);e.onUpdateSV(ue,Z)}function n(){var l;oe("mousemove",document,r),oe("mouseup",document,n),(l=e.onComplete)===null||l===void 0||l.call(e)}return{palleteRef:t,handleColor:R(()=>{const{rgba:l}=e;return l?`rgb(${l[0]}, ${l[1]}, ${l[2]})`:""}),handleMouseDown:o}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},i("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),i("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&i("div",{class:`${e}-color-picker-handle`,style:{width:pe,height:pe,borderRadius:fe,left:`calc(${this.displayedSv[0]}% - ${fe})`,bottom:`calc(${this.displayedSv[1]}% - ${fe})`}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:fe,width:pe,height:pe}})))}}),Ve=at("n-color-picker");function Tt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function qt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function Bt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function Et(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Nt(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const Ot={paddingSmall:"0 4px"},_e=V({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=S(""),{themeRef:o}=Fe(Ve,null);Te(()=>{t.value=r()});function r(){const{value:s}=e;if(s===null)return"";const{label:u}=e;return u==="HEX"?s:u==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function n(s){t.value=s}function l(s){let u,g;switch(e.label){case"HEX":g=Et(s),g&&e.onUpdateValue(s),t.value=r();break;case"H":u=qt(s),u===!1?t.value=r():e.onUpdateValue(u);break;case"S":case"L":case"V":u=Bt(s),u===!1?t.value=r():e.onUpdateValue(u);break;case"A":u=Nt(s),u===!1?t.value=r():e.onUpdateValue(u);break;case"R":case"G":case"B":u=Tt(s),u===!1?t.value=r():e.onUpdateValue(u);break}}return{mergedTheme:o,inputValue:t,handleInputChange:l,handleInputUpdateValue:n}},render(){const{mergedTheme:e}=this;return i(xt,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Ot,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Lt=V({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,o){const{showAlpha:r}=e;if(e.mode==="hex"){e.onUpdateValue((r?T:ie)(o));return}let n;switch(e.valueArr===null?n=[0,0,0,0]:n=Array.from(e.valueArr),e.mode){case"hsv":n[t]=o,e.onUpdateValue((r?K:Ce)(n));break;case"rgb":n[t]=o,e.onUpdateValue((r?D:Se)(n));break;case"hsl":n[t]=o,e.onUpdateValue((r?q:ye)(n));break}}}},render(){const{clsPrefix:e,modes:t}=this;return i("div",{class:`${e}-color-picker-input`},i("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),i($t,null,{default:()=>{const{mode:o,valueArr:r,showAlpha:n}=this;if(o==="hex"){let l=null;try{l=r===null?null:(n?T:ie)(r)}catch{}return i(_e,{label:"HEX",showAlpha:n,value:l,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(o+(n?"a":"")).split("").map((l,s)=>i(_e,{label:l.toUpperCase(),value:r===null?null:r[s],onUpdateValue:u=>{this.handleUnitUpdateValue(s,u)}}))}}))}}),jt=V({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:o}=Fe(Ve,null);return()=>{const{hsla:r,value:n,clsPrefix:l,onClick:s,disabled:u}=e,g=t.label||o.value;return i("div",{class:[`${l}-color-picker-trigger`,u&&`${l}-color-picker-trigger--disabled`],onClick:u?void 0:s},i("div",{class:`${l}-color-picker-trigger__fill`},i("div",{class:`${l}-color-picker-checkboard`}),i("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:r?q(r):""}}),n&&r?i("div",{class:`${l}-color-picker-trigger__value`,style:{color:r[2]>50||r[3]<.5?"black":"white"}},g?g(n):n):null))}}});function Kt(e,t){if(t==="hsv"){const[o,r,n,l]=G(e);return D([...F(o,r,n),l])}return e}function Gt(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}const Xt=V({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=R(()=>e.swatches.map(l=>{const s=se(l);return{value:l,mode:s,legalValue:Kt(l,s)}}));function o(l){const{mode:s}=e;let{value:u,mode:g}=l;return g||(g="hex",/^[a-zA-Z]+$/.test(u)?u=Gt(u):(lt("color-picker",`color ${u} in swatches is invalid.`),u="#000000")),g===s?u:Ee(u,s,g)}function r(l){e.onUpdateColor(o(l))}function n(l,s){l.key==="Enter"&&r(s)}return{parsedSwatchesRef:t,handleSwatchSelect:r,handleSwatchKeyDown:n}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>i("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>this.handleSwatchSelect(t),onKeydown:o=>this.handleSwatchKeyDown(o,t)},i("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Zt=V({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=se(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(o){var r;const n=o.target.value;(r=e.onUpdateColor)===null||r===void 0||r.call(e,Ee(n.toUpperCase(),e.mode,"hex")),o.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-preview__preview`},i("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),i("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Jt=x([c("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),c("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[it(),c("input",`
 text-align: center;
 `)]),c("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[x("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),c("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[v("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),x("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),c("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[v("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),c("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[v("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[ze("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),c("color-picker-preview",`
 display: flex;
 `,[v("sliders",`
 flex: 1 0 auto;
 `),v("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),v("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),v("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),c("color-picker-input",`
 display: flex;
 align-items: center;
 `,[c("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),v("mode",`
 width: 72px;
 text-align: center;
 `)]),c("color-picker-control",`
 padding: 12px;
 `),c("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[c("button","margin-left: 8px;")]),c("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[v("value",`
 white-space: nowrap;
 position: relative;
 `),v("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),ze("disabled","cursor: not-allowed"),c("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[x("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),c("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[c("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[v("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),x("&:focus",`
 outline: none;
 `,[v("fill",[x("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),Wt=Object.assign(Object.assign({},qe.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Ue.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),er=V({name:"ColorPicker",props:Wt,setup(e,{slots:t}){const o=S(null);let r=null;const n=st(e),{mergedSizeRef:l,mergedDisabledRef:s}=n,{localeRef:u}=kt("global"),{mergedClsPrefixRef:g,namespaceRef:B,inlineThemeDisabled:ne}=He(e),E=qe("ColorPicker","-color-picker",Jt,mt,e,g);ut(Ve,{themeRef:E,renderLabelRef:we(e,"renderLabel"),colorPickerSlots:t});const X=S(e.defaultShow),ue=Ie(we(e,"show"),X);function Z(a){const{onUpdateShow:d,"onUpdate:show":p}=e;d&&ce(d,a),p&&ce(p,a),X.value=a}const{defaultValue:Me}=e,Pe=S(Me===void 0?Rt(e.modes,e.showAlpha):Me),w=Ie(we(e,"value"),Pe),J=S([w.value]),M=S(0),be=R(()=>se(w.value)),{modes:Ne}=e,A=S(se(w.value)||Ne[0]||"rgb");function Oe(){const{modes:a}=e,{value:d}=A,p=a.findIndex(f=>f===d);~p?A.value=a[(p+1)%a.length]:A.value="rgb"}let C,U,W,Y,I,_,H,$;const ae=R(()=>{const{value:a}=w;if(!a)return null;switch(be.value){case"hsv":return G(a);case"hsl":return[C,U,W,$]=te(a),[...Be(C,U,W),$];case"rgb":case"hex":return[I,_,H,$]=z(a),[...$e(I,_,H),$]}}),N=R(()=>{const{value:a}=w;if(!a)return null;switch(be.value){case"rgb":case"hex":return z(a);case"hsv":return[C,U,Y,$]=G(a),[...F(C,U,Y),$];case"hsl":return[C,U,W,$]=te(a),[...Ae(C,U,W),$]}}),me=R(()=>{const{value:a}=w;if(!a)return null;switch(be.value){case"hsl":return te(a);case"hsv":return[C,U,Y,$]=G(a),[...ge(C,U,Y),$];case"rgb":case"hex":return[I,_,H,$]=z(a),[...Re(I,_,H),$]}}),Le=R(()=>{switch(A.value){case"rgb":case"hex":return N.value;case"hsv":return ae.value;case"hsl":return me.value}}),de=S(0),ve=S(1),xe=S([0,0]);function je(a,d){const{value:p}=ae,f=de.value,b=p?p[3]:1;xe.value=[a,d];const{showAlpha:h}=e;switch(A.value){case"hsv":m((h?K:Ce)([f,a,d,b]),"cursor");break;case"hsl":m((h?q:ye)([...ge(f,a,d),b]),"cursor");break;case"rgb":m((h?D:Se)([...F(f,a,d),b]),"cursor");break;case"hex":m((h?T:ie)([...F(f,a,d),b]),"cursor");break}}function Ke(a){de.value=a;const{value:d}=ae;if(!d)return;const[,p,f,b]=d,{showAlpha:h}=e;switch(A.value){case"hsv":m((h?K:Ce)([a,p,f,b]),"cursor");break;case"rgb":m((h?D:Se)([...F(a,p,f),b]),"cursor");break;case"hex":m((h?T:ie)([...F(a,p,f),b]),"cursor");break;case"hsl":m((h?q:ye)([...ge(a,p,f),b]),"cursor");break}}function Ge(a){switch(A.value){case"hsv":[C,U,Y]=ae.value,m(K([C,U,Y,a]),"cursor");break;case"rgb":[I,_,H]=N.value,m(D([I,_,H,a]),"cursor");break;case"hex":[I,_,H]=N.value,m(T([I,_,H,a]),"cursor");break;case"hsl":[C,U,W]=me.value,m(q([C,U,W,a]),"cursor");break}ve.value=a}function m(a,d){d==="cursor"?r=a:r=null;const{nTriggerFormChange:p,nTriggerFormInput:f}=n,{onUpdateValue:b,"onUpdate:value":h}=e;b&&ce(b,a),h&&ce(h,a),p(),f(),Pe.value=a}function Xe(a){m(a,"input"),vt(Q)}function Q(a=!0){const{value:d}=w;if(d){const{nTriggerFormChange:p,nTriggerFormInput:f}=n,{onComplete:b}=e;b&&b(d);const{value:h}=J,{value:y}=M;a&&(h.splice(y+1,h.length,d),M.value=y+1),p(),f()}}function Ze(){const{value:a}=M;a-1<0||(m(J.value[a-1],"input"),Q(!1),M.value=a-1)}function Je(){const{value:a}=M;a<0||a+1>=J.value.length||(m(J.value[a+1],"input"),Q(!1),M.value=a+1)}function We(){m(null,"input"),Z(!1)}function Ye(){const{value:a}=w,{onConfirm:d}=e;d&&d(a),Z(!1)}const Qe=R(()=>M.value>=1),et=R(()=>{const{value:a}=J;return a.length>1&&M.value<a.length-1});dt(ue,a=>{a||(J.value=[w.value],M.value=0)}),Te(()=>{if(!(r&&r===w.value)){const{value:a}=ae;a&&(de.value=a[0],ve.value=a[3],xe.value=[a[1],a[2]])}r=null});const ke=R(()=>{const{value:a}=l,{common:{cubicBezierEaseInOut:d},self:{textColor:p,color:f,panelFontSize:b,boxShadow:h,border:y,borderRadius:k,dividerColor:O,[De("height",a)]:rt,[De("fontSize",a)]:ot}}=E.value;return{"--n-bezier":d,"--n-text-color":p,"--n-color":f,"--n-panel-font-size":b,"--n-font-size":ot,"--n-box-shadow":h,"--n-border":y,"--n-border-radius":k,"--n-height":rt,"--n-divider-color":O}}),P=ne?ct("color-picker",R(()=>l.value[0]),ke,e):void 0;function tt(){var a;const{value:d}=N,{value:p}=de,{internalActions:f,modes:b,actions:h}=e,{value:y}=E,{value:k}=g;return i("div",{class:[`${k}-color-picker-panel`,P==null?void 0:P.themeClass.value],onDragstart:O=>{O.preventDefault()},style:ne?void 0:ke.value},i("div",{class:`${k}-color-picker-control`},i(Ft,{clsPrefix:k,rgba:d,displayedHue:p,displayedSv:xe.value,onUpdateSV:je,onComplete:Q}),i("div",{class:`${k}-color-picker-preview`},i("div",{class:`${k}-color-picker-preview__sliders`},i(It,{clsPrefix:k,hue:p,onUpdateHue:Ke,onComplete:Q}),e.showAlpha?i(Ht,{clsPrefix:k,rgba:d,alpha:ve.value,onUpdateAlpha:Ge,onComplete:Q}):null),e.showPreview?i(Zt,{clsPrefix:k,mode:A.value,color:N.value&&ie(N.value),onUpdateColor:O=>m(O,"input")}):null),i(Lt,{clsPrefix:k,showAlpha:e.showAlpha,mode:A.value,modes:b,onUpdateMode:Oe,value:w.value,valueArr:Le.value,onUpdateValue:Xe}),((a=e.swatches)===null||a===void 0?void 0:a.length)&&i(Xt,{clsPrefix:k,mode:A.value,swatches:e.swatches,onUpdateColor:O=>m(O,"input")})),h!=null&&h.length?i("div",{class:`${k}-color-picker-action`},h.includes("confirm")&&i(he,{size:"small",onClick:Ye,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>u.value.confirm}),h.includes("clear")&&i(he,{size:"small",onClick:We,disabled:!w.value,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>u.value.clear})):null,t.action?i("div",{class:`${k}-color-picker-action`},{default:t.action}):f?i("div",{class:`${k}-color-picker-action`},f.includes("undo")&&i(he,{size:"small",onClick:Ze,disabled:!Qe.value,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>u.value.undo}),f.includes("redo")&&i(he,{size:"small",onClick:Je,disabled:!et.value,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>u.value.redo})):null)}return{mergedClsPrefix:g,namespace:B,selfRef:o,hsla:me,rgba:N,mergedShow:ue,mergedDisabled:s,isMounted:ht(),adjustedTo:Ue(e),mergedValue:w,handleTriggerClick(){Z(!0)},handleClickOutside(a){var d;!((d=o.value)===null||d===void 0)&&d.contains(pt(a))||Z(!1)},renderPanel:tt,cssVars:ne?void 0:ke,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),i("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},i(wt,null,{default:()=>[i(yt,null,{default:()=>i(jt,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),i(St,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Ue.tdkey,to:this.adjustedTo},{default:()=>i(ft,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?gt(this.renderPanel(),[[bt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}});export{er as N};
