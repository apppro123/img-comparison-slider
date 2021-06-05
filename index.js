(()=>{"use strict";var e={99:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(15),i=n.n(o),s=n(645),r=n.n(s)()(i());r.push([e.id,':host{--divider-width: 1px;--divider-color: #d7d7d7;--handle-size: 40px;--handle-color: #d7d7d7;--handle-opacity: 0.5;--handle-opacity-active: 0;position:relative;display:inline-block;font-size:0;overflow:hidden;isolation:isolate;line-height:0}:host(:focus) .handle-wrapper{opacity:var(--handle-opacity-active)}::slotted(img){-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.before{position:relative;z-index:-2}.after{position:absolute;left:0;top:0;bottom:0;z-index:-1}.after .after-overlay{overflow:hidden}.after:before{content:" ";position:absolute;display:block;right:calc(var(--divider-width) * -0.5);top:0;bottom:0;border-right-width:var(--divider-width);border-right-style:solid;border-right-color:var(--divider-color)}.handle-wrapper{position:absolute;width:var(--handle-size);height:var(--handle-size);margin-top:calc(var(--handle-size) / (-2));margin-right:calc(var(--handle-size) / (-2));top:50%;right:0;pointer-events:none;box-sizing:border-box;opacity:var(--handle-opacity);transition:opacity 1s}.handle{background-color:var(--handle-color);width:var(--handle-size);height:var(--handle-size);transition:transform 1s;transform:rotate(45deg);box-shadow:0px 0px 15px 0px rgba(0,0,0,.75)}.focused .handle{transform:rotate(45deg) scale(1.5)}',"",{version:3,sources:["webpack://./src/styles.scss"],names:[],mappings:"AAAA,MACE,oBAAA,CACA,wBAAA,CACA,mBAAA,CACA,uBAAA,CACA,qBAAA,CACA,0BAAA,CAEA,iBAAA,CACA,oBAAA,CACA,WAAA,CACA,eAAA,CACA,iBAAA,CACA,aAAA,CAIA,8BACE,oCAAA,CAIJ,eACE,sBAAA,CACA,qBAAA,CACA,mBAAA,CACA,iBAAA,CACA,cAAA,CAEA,0BAAA,CACA,wBAAA,CACA,uBAAA,CACA,qBAAA,CACA,oBAAA,CACA,gBAAA,CAGF,QACE,iBAAA,CACA,UAAA,CAGF,OACE,iBAAA,CACA,MAAA,CACA,KAAA,CACA,QAAA,CACA,UAAA,CAEA,sBACE,eAAA,CAGF,cACE,WAAA,CACA,iBAAA,CACA,aAAA,CACA,uCAAA,CACA,KAAA,CACA,QAAA,CACA,uCAAA,CACA,wBAAA,CACA,uCAAA,CAIJ,gBACE,iBAAA,CACA,wBAAA,CACA,yBAAA,CACA,0CAAA,CACA,4CAAA,CACA,OAAA,CACA,OAAA,CACA,mBAAA,CACA,qBAAA,CACA,6BAAA,CACA,qBAAA,CAGF,QACE,oCAAA,CACA,wBAAA,CACA,yBAAA,CACA,uBAAA,CACA,uBAAA,CACA,2CAAA,CAGF,iBACE,kCAAA",sourcesContent:[":host {\n  --divider-width: 1px;\n  --divider-color: #d7d7d7;\n  --handle-size: 40px;\n  --handle-color: #d7d7d7;\n  --handle-opacity: 0.5;\n  --handle-opacity-active: 0;\n\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  overflow: hidden;\n  isolation: isolate;\n  line-height: 0;\n}\n\n:host(:focus) {\n  .handle-wrapper {\n    opacity: var(--handle-opacity-active);\n  }\n}\n\n::slotted(img) {\n  -webkit-user-drag: none;\n  -khtml-user-drag: none;\n  -moz-user-drag: none;\n  -o-user-drag: none;\n  user-drag: none;\n\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.before {\n  position: relative;\n  z-index: -2;\n}\n\n.after {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n\n  .after-overlay {\n    overflow: hidden;\n  }\n\n  &:before {\n    content: ' ';\n    position: absolute;\n    display: block;\n    right: calc(var(--divider-width) * -0.5);\n    top: 0;\n    bottom: 0;\n    border-right-width: var(--divider-width);\n    border-right-style: solid;\n    border-right-color: var(--divider-color);\n  }\n}\n\n.handle-wrapper {\n  position: absolute;\n  width: var(--handle-size);\n  height: var(--handle-size);\n  margin-top: calc(var(--handle-size) / (-2));\n  margin-right: calc(var(--handle-size) / (-2));\n  top: 50%;\n  right: 0;\n  pointer-events: none;\n  box-sizing: border-box;\n  opacity: var(--handle-opacity);\n  transition: opacity 1s;\n}\n\n.handle {\n  background-color: var(--handle-color);\n  width: var(--handle-size);\n  height: var(--handle-size);\n  transition: transform 1s;\n  transform: rotate(45deg);\n  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);\n}\n\n.focused .handle {\n  transform: rotate(45deg) scale(1.5);\n}\n"],sourceRoot:""}]);const a=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(i[r]=!0)}for(var a=0;a<e.length;a++){var A=[].concat(e[a]);o&&i[A[0]]||(n&&(A[2]?A[2]="".concat(n," and ").concat(A[2]):A[2]=n),t.push(A))}},t}},15:e=>{function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}e.exports=function(e){var n,o,i=(o=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var o,i,s=[],r=!0,a=!1;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(s.push(o.value),!t||s.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==n.return||n.return()}finally{if(a)throw i}}return s}}(n,o)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=i[1],r=i[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),d="/*# ".concat(A," */"),h=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[s].concat(h).concat([d]).join("\n")}return[s].join("\n")}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={id:o,exports:{}};return e[o](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(99);const t=document.createElement("template");t.innerHTML=`\n  <style>\n    ${e.Z}\n  </style>\n\n  <div class="before" id="before">\n    <slot name="before"></slot>\n  </div>\n  <div class="after" id="after">\n    <div class="handle-wrapper">\n      <slot name="handle">\n        <div class="handle"></div>\n      </slot>\n    </div>\n    <div class="after-overlay">\n      <div id="afterImageContainer">\n        <slot name="after"></slot>\n      </div>\n    </div>\n  </div>\n`;const o={ArrowLeft:-1,ArrowRight:1},i=e=>({x:e.touches[0].pageX,y:e.touches[0].pageY});class s extends HTMLElement{constructor(){super(),this.exposure=50,this.isMouseDown=!1,this.isFocused=!1,this.hydrate=e=>{(e=>{if(e&&"object"==typeof e)return"IMG"===e.tagName})(e)&&(e.classList.contains("hydrated")||(e.addEventListener("dragstart",(e=>{e.preventDefault()})),e.addEventListener("load",this.resetWidth),e.classList.add("hydrated")))},this.onWindowMouseMove=e=>{this.isMouseDown&&this.slideToPageX(e.pageX)},this.bodyUserSelectStyle="",this.onMouseDown=e=>{window.addEventListener("mousemove",this.onWindowMouseMove),window.addEventListener("mouseup",this.onWindowMouseUp),this.isMouseDown=!0,this.slideToPageX(e.pageX,!0),this.focus(),this.bodyUserSelectStyle=window.document.body.style.userSelect,window.document.body.style.userSelect="none"},this.onWindowMouseUp=()=>{this.isMouseDown=!1,window.document.body.style.userSelect=this.bodyUserSelectStyle,window.removeEventListener("mousemove",this.onWindowMouseMove),window.removeEventListener("mouseup",this.onWindowMouseUp)},this.isTouchComparing=!1,this.hasTouchMoved=!1,this.onTouchStart=e=>{this.touchStartPoint=i(e),this.isFocused&&this.slideToPageX(e.touches[0].pageX,!0)},this.onTouchMove=e=>{if(this.isTouchComparing)return this.slideToPageX(e.touches[0].pageX),e.preventDefault(),!1;if(!this.hasTouchMoved){const t=i(e);if(Math.abs(t.y-this.touchStartPoint.y)<Math.abs(t.x-this.touchStartPoint.x))return this.isTouchComparing=!0,this.focus(),this.slideToPageX(e.touches[0].pageX,!0),e.preventDefault(),!1;this.hasTouchMoved=!0}},this.onTouchEnd=()=>{this.isTouchComparing=!1,this.hasTouchMoved=!1},this.onBlur=()=>{this.stopSlideAnimation(),this.isFocused=!1},this.onFocus=()=>{this.isFocused=!0},this.onKeyDown=e=>{if(this.keyboardSlideAnimationTimeoutId)return;const t=e.key;Object.keys(o).includes(t)&&this.startSlideAnimation(o[t])},this.onKeyUp=e=>{this.keyboardSlideAnimationTimeoutId&&Object.keys(o).includes(e.key)&&this.stopSlideAnimation()},this.resetWidth=()=>{this.imageWidth=this.offsetWidth,this.afterImageContainerElement.style.width=`${this.offsetWidth}px`};const e=this.attachShadow({mode:"open"});e.appendChild(t.content.cloneNode(!0)),this.beforeElement=e.getElementById("before"),this.afterElement=e.getElementById("after"),this.afterImageContainerElement=e.getElementById("afterImageContainer")}connectedCallback(){this.shadowRoot.querySelectorAll("slot").forEach((e=>{e.addEventListener("slotchange",(e=>{(e=>{if(e&&"object"==typeof e)return"SLOT"===e.tagName})(e.target)&&e.target.assignedElements().forEach(this.hydrate)}))})),this.querySelectorAll("img").forEach(this.hydrate),window.addEventListener("resize",this.resetWidth),this.slide(0),this.setAttribute("tabindex","0"),this.addEventListener("keydown",this.onKeyDown),this.addEventListener("keyup",this.onKeyUp),this.addEventListener("focus",this.onFocus),this.addEventListener("blur",this.onBlur),this.addEventListener("touchstart",this.onTouchStart),this.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.addEventListener("touchend",this.onTouchEnd),this.addEventListener("mousedown",this.onMouseDown),this.resetWidth(),this.classList.add("rendered")}disconnectedCallback(){this.transitionTimer&&window.clearTimeout(this.transitionTimer)}reset(){this.exposure=50,this.slide(0)}slide(e=0,t=!1){var n;if(this.exposure=(100,(n=this.exposure+e)<0?0:n>100?100:n),t){const e=100;this.afterElement.style.transition=`width ${e}ms`,this.transitionTimer=window.setTimeout((()=>{this.afterElement.style.transition=null,this.transitionTimer=null}),e)}this.afterElement.style.width=`${this.exposure}%`}slideToPageX(e,t=!1){const n=e-this.getBoundingClientRect().left-window.scrollX;this.exposure=n/this.imageWidth*100,this.slide(0,t)}startSlideAnimation(e){const t=1*e,n=()=>{this.keyboardSlideAnimationTimeoutId=window.setTimeout((()=>{this.animationRequestId=window.requestAnimationFrame(n)}),1e3/120),this.slide(t)};n()}stopSlideAnimation(){this.keyboardSlideAnimationTimeoutId&&(window.clearTimeout(this.keyboardSlideAnimationTimeoutId),window.cancelAnimationFrame(this.animationRequestId),this.keyboardSlideAnimationTimeoutId=null,this.animationRequestId=null)}}window.customElements.define("img-comparison-slider",s)})()})();
//# sourceMappingURL=index.js.map