(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25b1dd9e"],{"1dde":function(t,n,e){var o=e("d039"),i=e("b622"),c=e("2d00"),r=i("species");t.exports=function(t){return c>=51||!o((function(){var n=[],e=n.constructor={};return e[r]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},2505:function(t,n,e){"use strict";var o=e("a005"),i=e.n(o);i.a},"65f0":function(t,n,e){var o=e("861d"),i=e("e8b5"),c=e("b622"),r=c("species");t.exports=function(t,n){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?o(e)&&(e=e[r],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},7641:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"xbt_container"}},[e("el-input",{attrs:{placeholder:"主体:"},model:{value:t.input1,callback:function(n){t.input1=n},expression:"input1"}},[e("span",{staticClass:"el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})]),e("el-input",{attrs:{placeholder:"事件:"},model:{value:t.input2,callback:function(n){t.input2=n},expression:"input2"}},[e("span",{staticClass:"el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})]),e("el-input",{attrs:{placeholder:"另一种说法:"},model:{value:t.input3,callback:function(n){t.input3=n},expression:"input3"}},[e("span",{staticClass:"el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})]),e("el-button",{on:{click:t.generate}},[t._v("生成")]),e("el-input",{attrs:{type:"textarea",id:"xbt_content"},model:{value:t.bullshit,callback:function(n){t.bullshit=n},expression:"bullshit"}}),e("el-button",{directives:[{name:"show",rawName:"v-show",value:t.bullshit,expression:"bullshit"}],on:{click:t.copy}},[t._v("一键复制")]),e("el-button",{on:{click:t.clear}},[t._v("清空")])],1)},i=[],c=(e("99af"),{name:"Xbt",data:function(){return{input1:"",input2:"",input3:"",feihuas:["是怎么回事呢？","相信大家都很熟悉，但是","是怎么回事呢，下面就让小编带大家一起了解吧。\n","，其实就是","。大家可能会很惊讶怎么","会","呢？但事实就是这样，小编也感到非常惊讶。那么这就是关于","的事情了，大家有什么想法呢，欢迎在评论区留言告诉小编一起讨论哦！"],bullshit:""}},methods:{generate:function(){this.bullshit="";var t=this.input1,n=this.input2,e=this.input3;this.bullshit="".concat(t+n,"是怎么回事呢？").concat(t,"相信大家都很熟悉，但是").concat(t+n,"是怎么回事呢，下面就让小编带大家一起了解吧。\n").concat(t+n,"，其实就是").concat(t+e,"。大家可能会很惊讶怎么").concat(t,"会").concat(n,"呢？但事实就是这样，小编也感到非常惊讶。那么这就是关于").concat(t+n,"的事情了，大家有什么想法呢，欢迎在评论区留言告诉小编一起讨论哦！")},copy:function(){var t=document.createElement("input");document.body.appendChild(t),t.setAttribute("value",this.bullshit),t.select(),document.execCommand("copy")&&(document.execCommand("copy"),this.$message({message:"复制成功",type:"success",duration:2e3})),document.body.removeChild(t)},clear:function(){this.bullshit=""}}}),r=c,a=(e("2505"),e("2877")),u=Object(a["a"])(r,o,i,!1,null,null,null);n["default"]=u.exports},8418:function(t,n,e){"use strict";var o=e("c04e"),i=e("9bf2"),c=e("5c6c");t.exports=function(t,n,e){var r=o(n);r in t?i.f(t,r,c(0,e)):t[r]=e}},"99af":function(t,n,e){"use strict";var o=e("23e7"),i=e("d039"),c=e("e8b5"),r=e("861d"),a=e("7b0b"),u=e("50c4"),s=e("8418"),l=e("65f0"),f=e("1dde"),p=e("b622"),d=e("2d00"),h=p("isConcatSpreadable"),b=9007199254740991,v="Maximum allowed index exceeded",m=d>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),x=f("concat"),y=function(t){if(!r(t))return!1;var n=t[h];return void 0!==n?!!n:c(t)},w=!m||!x;o({target:"Array",proto:!0,forced:w},{concat:function(t){var n,e,o,i,c,r=a(this),f=l(r,0),p=0;for(n=-1,o=arguments.length;n<o;n++)if(c=-1===n?r:arguments[n],y(c)){if(i=u(c.length),p+i>b)throw TypeError(v);for(e=0;e<i;e++,p++)e in c&&s(f,p,c[e])}else{if(p>=b)throw TypeError(v);s(f,p++,c)}return f.length=p,f}})},a005:function(t,n,e){},e8b5:function(t,n,e){var o=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);
//# sourceMappingURL=chunk-25b1dd9e.631de509.js.map