(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subscript/sub_protocol"],{"16a4":function(t,i,n){"use strict";(function(t){n("dc66");s(n("66fd"));var i=s(n("fdcd"));function s(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,n("543d")["createPage"])},"2fbf":function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=n("51e2"),e={data:function(){return{title:"",radio:"0",sub_text:["您好，体质是人体处于相对健康时的一种身体状态，是先天与后天多种因素共同作用下形成的一种个性特征。中医认为，体质影响着疾病的发生、发展，以及患病后的疾病性质。因此了解自身体质，根据体质特点指导日常生活，可以最大限度地预防疾病的发生与发展。因此，我们将要开展一项关于儿童体质类型的调查，来总结儿童中医体质类型特点，为将来医生指导家长育儿、防病治病提供帮助。现诚邀您及您的孩子参加该项研究。","本研究采用问卷形式，鉴于儿童对平素自身情况了解欠缺或表达欠准确以及对本问卷的理解难于把握，本问卷由家长填写孩子的具体情况，对孩子本身无任何风险及不良反应，您需要提供孩子既往和当前生活状态（学习、饮食、情绪等）信息。通过本研究，您可以初步了解孩子的中医体质类型，为将来根据中医体质类型生活指导、预防疾病提供依据。","本研究不需要任何费用，回答本调查问卷可能会占用您一些时间。","您孩子的调查记录将保存在医院，您及孩子的个人身份信息绝对保密，任何有关本项研究结果的公开报告将不会披露您孩子的个人身份。参加本项研究是完全自愿的，您可以拒绝参加此项研究。","本项研究的项目负责人是首都医科大学附属北京中医医院李敏，本项研究的资助方是北京市医院管理局儿科学科协同发展中心。","如果您有与本研究相关的任何问题，请联系北京中医医院儿科医生，联系电话 52176906、52176591。","如果您有与孩子自身权益相关的问题，可与首都医科大学附属北京中医医院医学伦理委员会联系，联系电话：010-64011516。","我已阅读知情同意书并同意我的孩子参加本研究（或我已经和孩子讨论过这个研究项目，我的孩子同意参加本研究）"],sub_text2:["您好，体质是人体处于相对健康时的一种身体状态，是先天与后天多种因素共同作用下形成的一种个性特征。中医认为，体质影响着疾病的发生、发展，以及患病后的疾病性质。因此了解自身体质，根据体质特点指导日常生活，可以最大限度地预防疾病的发生与发展。因此，我们将要开展一项关于儿童体质类型的调查，来总结儿童中医体质类型特点，为将来医生指导家长育儿、防病治病提供帮助。现诚邀您及您的孩子参加该项研究。","本研究采用问卷形式，鉴于儿童对平素自身情况了解欠缺或表达欠准确以及对本问卷的理解难于把握，本问卷由家长填写孩子的具体情况，对孩子本身无任何风险及不良反应，您需要提供孩子既往和当前生活状态（学习、饮食、情绪等）信息。通过本研究，您可以初步了解孩子的中医体质类型，为将来根据中医体质类型生活指导、预防疾病提供依据。","本研究不需要任何费用，回答本调查问卷可能会占用您一些时间。","您孩子的调查记录将保存在医院，您及孩子的个人身份信息绝对保密，任何有关本项研究结果的公开报告将不会披露您孩子的个人身份。参加本项研究是完全自愿的，您可以拒绝参加此项研究。","本项研究的项目负责人是首都医科大学附属北京中医医院李敏，本项研究的资助方是北京市医院管理局儿科学科协同发展中心。","如果您有与本研究相关的任何问题，请联系北京中医医院儿科医生，联系电话 52176906、52176591。","如果您有与孩子自身权益相关的问题，可与首都医科大学附属北京中医医院医学伦理委员会联系，联系电话：010-64011516"],sub_option:[{text:"我已阅读知情同意书并同意参加本研究。",radio:"0"}],sub_option2:[{text:"家长：我已阅读知情同意书并同意我的孩子参加本研究",radio:"0"},{text:"孩子：我已阅读知情同意书并同意我的孩子参加本研究",radio:"0"}],opinionList:[],sub_description:[],isSinger:!0,btn_disble:!0,isEditSinger:!1,showModal:!1,isAge:0,ctx:"",points:[]}},onLoad:function(){this.ctx=t.createCanvasContext("mycanvas",this),this.ctx.fillStyle="#fff",this.ctx.fillRect(0,0,400,620),this.ctx.draw(),this.ctx.lineWidth=4,this.ctx.lineCap="round",this.ctx.lineJoin="round","3"===t.getStorageSync("age")?(this.title="3~6岁儿童中医体质调查表",this.opinionList=this.sub_option,this.sub_description=this.sub_text):(this.title="6~14岁儿童中医体质调查表",this.opinionList=this.sub_option2,this.sub_description=this.sub_text2)},methods:{nextPage:function(){t.navigateTo({url:"../basic/basicInfo"})},showModalClick:function(){this.showModal=!0,this.isEditSinger=!1},onClose:function(){this.showModal=!1,this.clear()},moveHandle:function(){},touchstart:function(t){var i=t.changedTouches[0].x,n=t.changedTouches[0].y,s={X:i,Y:n};this.points.push(s),this.ctx.beginPath()},touchmove:function(t){var i=t.changedTouches[0].x,n=t.changedTouches[0].y,s={X:i,Y:n};this.points.push(s);var e=this.points.length;e>=2&&this.draw(),this.isEditSinger||(this.isEditSinger=!0)},touchend:function(){this.points=[]},draw:function(){var t=this.points[0],i=this.points[1];this.points.shift(),this.ctx.moveTo(t.X,t.Y),this.ctx.lineTo(i.X,i.Y),this.ctx.stroke(),this.ctx.draw(!0)},clear:function(){var i=this;i.isEditSinger=!1,t.getSystemInfo({success:function(t){var n=t.windowWidth,s=t.windowHeight;i.ctx.clearRect(0,0,n,s),i.ctx.draw(!0)}})},finish:function(){if(this.isEditSinger){var i=this;t.canvasToTempFilePath({canvasId:"mycanvas",success:function(n){(0,s.pathToBase64)(n.tempFilePath).then((function(n){t.setStorageSync("imgBase",n),i.showModal=!1,i.isEditSinger=!1,i.isSinger=!1})).catch((function(i){t.showToast({title:"签名获取失败, 请稍后再试",duration:2e3,icon:"none"})}))}})}else t.showToast({title:"请先绘制签名",duration:2e3,icon:"none"})},onchange:function(t,i,n){this.opinionList[n].radio=t.detail,this.opinionList.every((function(t){return"1"===t.radio}))?this.btn_disble=!1:this.btn_disble=!0}}};i.default=e}).call(this,n("543d")["default"])},"4b6e":function(t,i,n){"use strict";n.r(i);var s=n("2fbf"),e=n.n(s);for(var o in s)"default"!==o&&function(t){n.d(i,t,(function(){return s[t]}))}(o);i["default"]=e.a},"4c54":function(t,i,n){"use strict";var s=n("a552"),e=n.n(s);e.a},a552:function(t,i,n){},bbfe:function(t,i,n){"use strict";var s,e=function(){var t=this,i=t.$createElement;t._self._c},o=[];n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return s}))},fdcd:function(t,i,n){"use strict";n.r(i);var s=n("bbfe"),e=n("4b6e");for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);n("4c54");var c,a=n("f0c5"),u=Object(a["a"])(e["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],c);i["default"]=u.exports}},[["16a4","common/runtime","common/vendor"]]]);