webpackJsonp([0],{"6Wmr":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},r,!1,function(t){n("gsu9")},null,null).exports,s=n("/ocq"),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("button",{on:{click:this.load}},[this._v("跳转到")])])},staticRenderFns:[]};var a=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"当前为helloworld页"}},methods:{load:function(){this.$router.push("/index")}}},l,!1,function(t){n("g3DC")},"data-v-c63e2cd6",null).exports,c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n  当前为index页"),e("br"),this._v(" "),e("button",{on:{click:this.load}},[this._v("跳转到home页")])])},staticRenderFns:[]};var u=n("VU/8")({methods:{load:function(){this.$router.push("/home")}}},c,!1,function(t){n("kI5B")},null,null).exports,h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n  当前为home页"),e("br"),this._v(" "),e("button",{on:{click:this.load}},[this._v("跳转到helloworld页")])])},staticRenderFns:[]};var d=n("VU/8")({methods:{load:function(){this.$router.push("/")}}},h,!1,function(t){n("6Wmr")},null,null).exports;o.a.use(s.a);var p=new s.a({routes:[{path:"/",redirect:"/HelloWorld"},{path:"/HelloWorld",name:"HelloWorld",component:a},{path:"/index",name:"index",component:u},{path:"/home",name:"home",component:d}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:p,components:{App:i},template:"<App/>"})},g3DC:function(t,e){},gsu9:function(t,e){},kI5B:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3c9eb37dddd7a9cc6a81.js.map