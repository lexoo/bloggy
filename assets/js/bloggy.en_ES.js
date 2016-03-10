/**
 * bloggy - Branding theme for Ghost
 * @version 1.1.0
 * @link    https://github.com/Kikobeats/bloggy
 * @author  Kiko Beats (https://github.com/Kikobeats)
 * @license MIT
 */
+function(e){"use strict";function t(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(void 0!==e.style[n])return{end:t[n]}}e.fn.emulateTransitionEnd=function(t){var n=!1,i=this;e(this).one(e.support.transition.end,function(){n=!0});var a=function(){n||e(i).trigger(e.support.transition.end)};return setTimeout(a,t),this},e(function(){e.support.transition=t()})}(jQuery),+function(e){"use strict";var t=function(n,i){this.$element=e(n),this.options=e.extend({},t.DEFAULTS,i),this.transitioning=null,this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.DEFAULTS={toggle:!0},t.prototype.dimension=function(){var e=this.$element.hasClass("width");return e?"width":"height"},t.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t=e.Event("show.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var n=this.$parent&&this.$parent.find("> .panel > .in");if(n&&n.length){var i=n.data("bs.collapse");if(i&&i.transitioning)return;n.collapse("hide"),i||n.data("bs.collapse",null)}var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0),this.transitioning=1;var o=function(){this.$element.removeClass("collapsing").addClass("in")[a]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!e.support.transition)return o.call(this);var s=e.camelCase(["scroll",a].join("-"));this.$element.one(e.support.transition.end,e.proxy(o,this)).emulateTransitionEnd(350)[a](this.$element[0][s])}}},t.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=e.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return e.support.transition?void this.$element[n](0).one(e.support.transition.end,e.proxy(i,this)).emulateTransitionEnd(350):i.call(this)}}},t.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var i=e(this),a=i.data("bs.collapse"),o=e.extend({},t.DEFAULTS,i.data(),"object"==typeof n&&n);a||i.data("bs.collapse",a=new t(this,o)),"string"==typeof n&&a[n]()})},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(t){var n,i=e(this),a=i.attr("data-target")||t.preventDefault()||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),o=e(a),s=o.data("bs.collapse"),r=s?"toggle":i.data(),l=i.attr("data-parent"),c=l&&e(l);s&&s.transitioning||(c&&c.find('[data-toggle=collapse][data-parent="'+l+'"]').not(i).addClass("collapsed"),i[o.hasClass("in")?"addClass":"removeClass"]("collapsed")),o.collapse(r)})}(jQuery),+function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};t.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},t.prototype.toggle=function(e){return this[this.isShown?"hide":"show"](e)},t.prototype.show=function(t){var n=this,i=e.Event("show.bs.modal",{relatedTarget:t});this.$element.trigger(i),this.isShown||i.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this)),this.backdrop(function(){var i=e.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(document.body),n.$element.show(),i&&n.$element[0].offsetWidth,n.$element.addClass("in").attr("aria-hidden",!1),n.enforceFocus();var a=e.Event("shown.bs.modal",{relatedTarget:t});i?n.$element.find(".modal-dialog").one(e.support.transition.end,function(){n.$element.focus().trigger(a)}).emulateTransitionEnd(300):n.$element.focus().trigger(a)}))},t.prototype.hide=function(t){t&&t.preventDefault(),t=e.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),e(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),e.support.transition&&this.$element.hasClass("fade")?this.$element.one(e.support.transition.end,e.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},t.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(e){this.$element[0]===e.target||this.$element.has(e.target).length||this.$element.focus()},this))},t.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",e.proxy(function(e){27==e.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},t.prototype.hideModal=function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden.bs.modal")})},t.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},t.prototype.backdrop=function(t){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&n;if(this.$backdrop=e('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",e.proxy(function(e){e.target===e.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;i?this.$backdrop.one(e.support.transition.end,t).emulateTransitionEnd(150):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t).emulateTransitionEnd(150):t()):t&&t()};var n=e.fn.modal;e.fn.modal=function(n,i){return this.each(function(){var a=e(this),o=a.data("bs.modal"),s=e.extend({},t.DEFAULTS,a.data(),"object"==typeof n&&n);o||a.data("bs.modal",o=new t(this,s)),"string"==typeof n?o[n](i):s.show&&o.show(i)})},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),i=n.attr("href"),a=e(n.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),o=a.data("modal")?"toggle":e.extend({remote:!/#/.test(i)&&i},a.data(),n.data());t.preventDefault(),a.modal(o,this).one("hide",function(){n.is(":visible")&&n.focus()})}),e(document).on("show.bs.modal",".modal",function(){e(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){e(document.body).removeClass("modal-open")})}(jQuery),function(){"use strict";var e;window.Bloggy=e={version:"1.1.0",is:function(e,t){return null==t&&(t=!1),this.app.dataset[e]===t},app:function(){return document.body}(),context:function(){var e;return e=document.body.className.split(" ")[0].split("-")[0],""===e?"error":e},device:function(){var e,t;return t=window.innerWidth,e=window.innerHeight,480>=t?"mobile":1024>=t?"tablet":"desktop"}},e.app.dataset.page=e.context(),e.app.dataset.device=e.device(),window.newsletter_form&&$("#newsletter_form").attr("action",window.newsletter_form)}.call(this),function(){window.i18n={".modal-title":"Una vez a la semana, recibe lo último.",".modal-body p":"<strong>Política de Privacidad:</strong> No spam ni publicidad. Desunscríbete en cualquier momento.",fieldEmail:"Tu correo electrónico",".poweredby":' © 2016. Todos los derechos reservados. Construido con <a href="https://github.com/Kikobeats/bloggy" target="_blank">Bloggy</a> bajo <a href="https://ghost.org/" target="_blank">Ghost</a>.',newsletter_subscribe:"Subscribirse",".subscribe-banner":'¿Te gustaría recibir el contenido en tu correo mensualmente? &nbsp;<a class="button" data-toggle="modal" data-target="#blogsubscribe">Subscríbete</a>',".read-more":"Leer Más",".newer-posts":"← Publicaciones recientes",".older-posts":"Publicaciones antiguas →",".page-number":"Página % de $","a.post-meta":"← Volver a la Portada",".prefix-date":"el","footer .button-add.large.wide":"Subscríbete y recíbelo semalmente en tu correo",".read-next-story .post:before":"Leer siguiente publicación"}}.call(this),function(){$(function(){var e,t,n,i,a,o,s,r,l,c,u;for(u=[".subscribe-banner",".modal-title",".modal-body p",".modal-body .button-add.wide",".read-more",".older-posts",".newer-posts",".poweredby","footer .button-add.large.wide","a.post-meta",".prefix-date"],e=0,n=u.length;n>e;e++)c=u[e],$(c).html(i18n[c]);if(window.fieldEmail.placeholder=i18n.fieldEmail,window.newsletter_subscribe.value=i18n.newsletter_subscribe,Bloggy.is("page","post"))return c=".read-next-story .post:before",r="<style>.read-next-story .post:before{ content: '"+i18n[c]+"' }</style>",$("head").append(r);for(c=".page-number",o=$(c).html().split(" "),s=window.i18n[c].split(" "),l=[0,2],t=0,i=l.length;i>t;t++)a=l[t],o[a]=s[a];return $(c).html(o.join(" "))})}.call(this),!function(e,t){var n;n=function(e,t,n){var i;return i=void 0,function(){var a,o,s;s=this,a=arguments,o=function(){n||e.apply(s,a),i=null},i?clearTimeout(i):n&&e.apply(s,a),i=setTimeout(o,t||100)}},jQuery.fn[t]=function(e){return e?this.bind("resize",n(e)):this.trigger(t)}}(jQuery,"smartresize"),function(){"use strict";$(window).load(function(){var e;return e=function(){return $("img").each(function(){var e,t,n;return e=$(".post-content").outerWidth(),t=$(this)[0].naturalWidth,n=t>=e?"addClass":"removeClass",$(this)[n]("full-img")}),$(this).smartresize(e)}()}),$(function(){return $(".post-content").fitVids(),Bloggy.is("device","desktop")?void 0:FastClick.attach(Bloggy.app)})}.call(this);var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=_self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var i={};for(var a in e)e.hasOwnProperty(a)&&(i[a]=t.util.clone(e[a]));return i;case"Array":return e.map&&e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var i=t.util.clone(t.languages[e]);for(var a in n)i[a]=n[a];return i},insertBefore:function(e,n,i,a){a=a||t.languages;var o=a[e];if(2==arguments.length){i=arguments[1];for(var s in i)i.hasOwnProperty(s)&&(o[s]=i[s]);return o}var r={};for(var l in o)if(o.hasOwnProperty(l)){if(l==n)for(var s in i)i.hasOwnProperty(s)&&(r[s]=i[s]);r[l]=o[l]}return t.languages.DFS(t.languages,function(t,n){n===a[e]&&t!=e&&(this[t]=r)}),a[e]=r},DFS:function(e,n,i,a){a=a||{};for(var o in e)e.hasOwnProperty(o)&&(n.call(e,o,e[o],i||o),"Object"!==t.util.type(e[o])||a[e[o]]?"Array"!==t.util.type(e[o])||a[e[o]]||(a[e[o]]=!0,t.languages.DFS(e[o],n,o,a)):(a[e[o]]=!0,t.languages.DFS(e[o],n,null,a)))}},plugins:{},highlightAll:function(e,n){for(var i,a=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),o=0;i=a[o++];)t.highlightElement(i,e===!0,n)},highlightElement:function(n,i,a){for(var o,s,r=n;r&&!e.test(r.className);)r=r.parentNode;r&&(o=(r.className.match(e)||[,""])[1],s=t.languages[o]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,r=n.parentNode,/pre/i.test(r.nodeName)&&(r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var l=n.textContent,c={element:n,language:o,grammar:s,code:l};if(!l||!s)return void t.hooks.run("complete",c);if(t.hooks.run("before-highlight",c),i&&_self.Worker){var u=new Worker(t.filename);u.onmessage=function(e){c.highlightedCode=e.data,t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a&&a.call(c.element),t.hooks.run("after-highlight",c),t.hooks.run("complete",c)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=t.highlight(c.code,c.grammar,c.language),t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a&&a.call(n),t.hooks.run("after-highlight",c),t.hooks.run("complete",c)},highlight:function(e,i,a){var o=t.tokenize(e,i);return n.stringify(t.util.encode(o),a)},tokenize:function(e,n){var i=t.Token,a=[e],o=n.rest;if(o){for(var s in o)n[s]=o[s];delete n.rest}e:for(var s in n)if(n.hasOwnProperty(s)&&n[s]){var r=n[s];r="Array"===t.util.type(r)?r:[r];for(var l=0;l<r.length;++l){var c=r[l],u=c.inside,d=!!c.lookbehind,p=0,h=c.alias;c=c.pattern||c;for(var m=0;m<a.length;m++){var g=a[m];if(a.length>e.length)break e;if(!(g instanceof i)){c.lastIndex=0;var f=c.exec(g);if(f){d&&(p=f[1].length);var v=f.index-1+p,f=f[0].slice(p),b=f.length,y=v+b,w=g.slice(0,v+1),k=g.slice(y+1),C=[m,1];w&&C.push(w);var E=new i(s,u?t.tokenize(f,u):f,h);C.push(E),k&&C.push(k),Array.prototype.splice.apply(a,C)}}}}}return a},hooks:{all:{},add:function(e,n){var i=t.hooks.all;i[e]=i[e]||[],i[e].push(n)},run:function(e,n){var i=t.hooks.all[e];if(i&&i.length)for(var a,o=0;a=i[o++];)a(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,i,a){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,i,e)}).join("");var o={type:e.type,content:n.stringify(e.content,i,a),tag:"span",classes:["token",e.type],attributes:{},language:i,parent:a};if("comment"==o.type&&(o.attributes.spellcheck="true"),e.alias){var s="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(o.classes,s)}t.hooks.run("wrap",o);var r="";for(var l in o.attributes)r+=(r?" ":"")+l+'="'+(o.attributes[l]||"")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'" '+r+">"+o.content+"</"+o.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var n=JSON.parse(e.data),i=n.language,a=n.code,o=n.immediateClose;_self.postMessage(t.highlight(a,t.languages[i],i)),o&&_self.close()},!1),_self.Prism):_self.Prism;var i=document.getElementsByTagName("script");return i=i[i.length-1],i&&(t.filename=i.src,document.addEventListener&&!i.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e={css:"CSS",clike:"C-like",javascript:"JavaScript",abap:"ABAP",actionscript:"ActionScript",apacheconf:"Apache Configuration",apl:"APL",applescript:"AppleScript",asciidoc:"AsciiDoc",aspnet:"ASP.NET (C#)",autoit:"AutoIt",autohotkey:"AutoHotkey",basic:"BASIC",csharp:"C#",cpp:"C++",coffeescript:"CoffeeScript","css-extras":"CSS Extras",fsharp:"F#",glsl:"GLSL",http:"HTTP",inform7:"Inform 7",json:"JSON",latex:"LaTeX",lolcode:"LOLCODE",matlab:"MATLAB",mel:"MEL",nasm:"NASM",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",ocaml:"OCaml",parigp:"PARI/GP",php:"PHP","php-extras":"PHP Extras",powershell:"PowerShell",jsx:"React JSX",rest:"reST (reStructuredText)",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (Scss)",sql:"SQL",typescript:"TypeScript",vhdl:"VHDL",vim:"vim",wiki:"Wiki markup",yaml:"YAML"};Prism.hooks.add("before-highlight",function(t){var n=t.element.parentNode;if(n&&/pre/i.test(n.nodeName)){var i,a,o=n.getAttribute("data-language")||e[t.language]||t.language.substring(0,1).toUpperCase()+t.language.substring(1),s=n.previousSibling;s&&/\s*\bprism-show-language\b\s*/.test(s.className)&&s.firstChild&&/\s*\bprism-show-language-label\b\s*/.test(s.firstChild.className)?a=s.firstChild:(i=document.createElement("div"),a=document.createElement("div"),a.className="prism-show-language-label",i.className="prism-show-language",i.appendChild(a),n.parentNode.insertBefore(i,n)),a.innerHTML=o}})}}(),function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null};if(!document.getElementById("fit-vids-style")){var i=document.head||document.getElementsByTagName("head")[0],a=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",o=document.createElement("div");o.innerHTML='<p>x</p><style id="fit-vids-style">'+a+"</style>",i.appendChild(o.childNodes[1])}return t&&e.extend(n,t),this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];n.customSelector&&t.push(n.customSelector);var i=e(this).find(t.join(","));i=i.not("object object"),i.each(function(){var t=e(this);if(!("embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){var n="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),i=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),a=n/i;if(!t.attr("id")){var o="fitvid"+Math.floor(999999*Math.random());t.attr("id",o)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*a+"%"),t.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),function(){"use strict";function e(t,i){function a(e,t){return function(){return e.apply(t,arguments)}}var o;if(i=i||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=i.touchBoundary||10,this.layer=t,this.tapDelay=i.tapDelay||200,this.tapTimeout=i.tapTimeout||700,!e.notNeeded(t)){for(var s=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],r=this,l=0,c=s.length;c>l;l++)r[s[l]]=a(r[s[l]],r);n&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var a=Node.prototype.removeEventListener;"click"===e?a.call(t,e,n.hijacked||n,i):a.call(t,e,n,i)},t.addEventListener=function(e,n,i){var a=Node.prototype.addEventListener;"click"===e?a.call(t,e,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),i):a.call(t,e,n,i)}),"function"==typeof t.onclick&&(o=t.onclick,t.addEventListener("click",function(e){o(e)},!1),t.onclick=null)}}var t=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!t,i=/iP(ad|hone|od)/.test(navigator.userAgent)&&!t,a=i&&/OS 4_\d(_\d)?/.test(navigator.userAgent),o=i&&/OS [6-7]_\d/.test(navigator.userAgent),s=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(i&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(e.className)},e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},e.prototype.sendClick=function(e,t){var n,i;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),i=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},e.prototype.determineEventType=function(e){return n&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},e.prototype.focus=function(e){var t;i&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},e.prototype.updateScrollParent=function(e){var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},e.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},e.prototype.onTouchStart=function(e){var t,n,o;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],i){if(o=window.getSelection(),o.rangeCount&&!o.isCollapsed)return!0;if(!a){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n},e.prototype.onTouchMove=function(e){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},e.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},e.prototype.onTouchEnd=function(e){var t,s,r,l,c,u=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,s=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,o&&(c=e.changedTouches[0],u=document.elementFromPoint(c.pageX-window.pageXOffset,c.pageY-window.pageYOffset)||u,u.fastClickScrollParent=this.targetElement.fastClickScrollParent),r=u.tagName.toLowerCase(),"label"===r){if(t=this.findControl(u)){if(this.focus(u),n)return!1;u=t}}else if(this.needsFocus(u))return e.timeStamp-s>100||i&&window.top!==window&&"input"===r?(this.targetElement=null,!1):(this.focus(u),this.sendClick(u,e),i&&"select"===r||(this.targetElement=null,e.preventDefault()),!1);return i&&!a&&(l=u.fastClickScrollParent,l&&l.fastClickLastScrollTop!==l.scrollTop)?!0:(this.needsClick(u)||(e.preventDefault(),this.sendClick(u,e)),!1)},e.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},e.prototype.onMouse=function(e){return this.targetElement?e.forwardedTouchEvent?!0:e.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1):!0:!0},e.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail?!0:(t=this.onMouse(e),t||(this.targetElement=null),t)},e.prototype.destroy=function(){var e=this.layer;n&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},e.notNeeded=function(e){var t,i,a,o;if("undefined"==typeof window.ontouchstart)return!0;if(i=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(i>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(s&&(a=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),a[1]>=10&&a[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction?!0:(o=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],o>=27&&(t=document.querySelector("meta[name=viewport]"),t&&(-1!==t.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===e.style.touchAction||"manipulation"===e.style.touchAction)},e.attach=function(t,n){return new e(t,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?(module.exports=e.attach,module.exports.FastClick=e):window.FastClick=e}();