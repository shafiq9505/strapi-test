webpackJsonp([1],{CJfz:function(e,t){},IbbA:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container",attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},i=a("VU/8")({name:"App"},s,!1,null,null,null).exports,o=a("/ocq"),u=a("kxiW"),r={components:{name:"Authentication"},firebase:{Authentication:a.n(u).a.initializeApp({apiKey:"AIzaSyDSVlGdxIEVfqiVQIRwEQW8SAdUGl3-Fvg",authDomain:"vuefirebase-f8a9a.firebaseapp.com",databaseURL:"https://vuefirebase-f8a9a.firebaseio.com",projectId:"vuefirebase-f8a9a",storageBucket:"vuefirebase-f8a9a.appspot.com",messagingSenderId:"91301553886"}).database().ref("authenticate")},data:function(){return{labelPosition:"right",authentication:{userName:"",password:""}}},methods:{SignIn:function(){var e=this.$uuid.v5();this.$firebaseRefs.Authentication.child(e).set({guid:e,username:this.authentication.userName,password:this.authentication.password})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"signin-container"},[a("el-row",[a("h1",[e._v("TESTING STRAPI WITH FIREBASE")])]),e._v(" "),a("el-row",{staticClass:"signin-form"},[a("el-form",[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24}},[a("el-form-item",{attrs:{label:"UserName"}},[a("el-input",{model:{value:e.authentication.userName,callback:function(t){e.$set(e.authentication,"userName",t)},expression:"authentication.userName"}})],1)],1),e._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24}},[a("el-form-item",{attrs:{label:"Password"}},[a("el-input",{model:{value:e.authentication.password,callback:function(t){e.$set(e.authentication,"password",t)},expression:"authentication.password"}})],1),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:e.SignIn}},[e._v("Submit")])],1)],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(r,c,!1,function(e){a("CJfz")},null,null).exports,f=new o.a({routes:[{path:"/",name:"SignIn",component:l}]}),d=a("sUu7"),p=a("1mcD"),m=a.n(p),h=a("zL8q"),v=a.n(h),b=(a("tvR6"),a("fzx2")),g=a("NYxO"),S=a("YSyd"),w=a.n(S),I=a("IbbA"),A=a.n(I),N=a("jkSD"),_=a.n(N),x=a("NO83"),R={state:a.n(x).a,getters:_.a,actions:w.a,mutations:A.a};n.default.use(g.a);var k={authentication:R},E=new g.a.Store({modules:k,mutations:{},actions:{},getters:{},state:{}});n.default.config.productionTip=!1,n.default.use(d.a),n.default.use(f),n.default.use(m.a),n.default.use(o.a),n.default.use(v.a),n.default.use(b.a),new n.default({el:"#app",router:f,store:E,components:{App:i},template:"<App/>"})},NO83:function(e,t){},YSyd:function(e,t){},jkSD:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c7731e35f010870c5e99.js.map