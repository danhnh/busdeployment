(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){e.exports=a.p+"static/media/acbLogoBlue.30d96b11.png"},140:function(e,t,a){e.exports=a.p+"static/media/acbLogoWhite.7ea5175d.png"},150:function(e,t,a){e.exports=a(398)},155:function(e,t,a){},231:function(e,t,a){},398:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),l=a.n(r),o=(a(155),a(61)),s=a(81),c=a.n(s),m=a(135),h=a(136),u=a(137),g=a(147),d=a(138),f=a(148),v=a(17),p=a(139),E=a.n(p),y=a(140),b=a.n(y),w=a(39),T=a.n(w),k=a(89),C=a.n(k),I=a(46),S=a.n(I),B=a(24),A=a.n(B),x=a(47),O=a.n(x),N=a(31),j=a.n(N),D=a(63),H=a.n(D),L=a(30),z=a.n(L),R=a(29),_=a.n(R),J=a(88),M=a.n(J),W=a(91),U=a.n(W),V=a(90),P=a.n(V),K=a(82),q=(a(165),a(149)),G=a(87),X=a.n(G),Q=a(83),F=a(22),Y=a.n(F),$=a(141),Z=a.n($),ee=(a(231),"https://trienkhaikinhdoanh-acb.azurewebsites.net/"),te="".concat(ee,"/oauth2/token"),ae={apiKey:"AIzaSyDpn4qBYUHJINdRDnQTH32XWEWRVrD7Htc",authDomain:"acbevents-8e7f8.firebaseapp.com",databaseURL:"https://acbevents-8e7f8.firebaseio.com",projectId:"acbevents-8e7f8",storageBucket:"",messagingSenderId:"72653524490"},ne=function(){return{alignItems:"center",display:"flex",fontSize:14,":before":{backgroundColor:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#ccc",borderRadius:10,content:null,display:"block",marginRight:8,height:10,width:10}}},ie={control:function(e){return Object(v.a)({},e,{backgroundColor:"white",width:"100%"})},option:function(e,t){t.data,t.isDisabled,t.isFocused,t.isSelected;return Object(v.a)({},e,{backgroundColor:"#ffffff",color:"black",cursor:"default",fontSize:14})},input:function(e){return Object(v.a)({},e,ne())},placeholder:function(e){return Object(v.a)({},e,ne())},singleValue:function(e,t){var a=t.data;return Object(v.a)({},e,ne(a.color))}},re=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(d.a)(t).call(this,e))).handleSuccess=function(){var e=Object(m.a)(c.a.mark(function e(t,n){var i,r,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i=n.response,n.state,a.setState({isLoading:!0}),r=i.user,l=r.id,Y.a.database().ref("Topics/BusinessDeployment/Events/2019/members").orderByChild("email").equalTo(i.user.email).once("value").then(function(e){if(e.exists()){var t=Object.keys(e.val())[0],n={};n.key=t,n.id=l,n.full_name=i.user.full_name,n.updated_full_name=e.child(t).val().updated_full_name,n.job_title=i.user.job_title,n.department=i.user.department,n.mugshot_url=i.user.mugshot_url.replace("48x48","500x500"),n.email=i.user.email,n.phoneNumber=i.user.contact.phone_numbers[0].number,Y.a.database().ref("Topics/BusinessDeployment/Events/2019/members/".concat(t)).update(n).then(function(e){a.setState(Object(v.a)({},a.state,{isLoading:!1,userInfo:n,step:1}),function(){a.getRegisteredInfo()})}).catch(function(e){}),setTimeout(function(){a.setState({isLoading:!1})},1e3)}else a.setState(Object(v.a)({},a.state,{isLoading:!1,errorMessage:"B\u1ea1n kh\xf4ng n\u1eb1m trong danh s\xe1ch tham d\u1ef1 s\u1ef1 ki\u1ec7n",showError:!0}))});case 6:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a.handleChange=function(e){return function(t){a.setState(Object(o.a)({},e,t.target.value))}},a.registry=function(){!a.state.registrationInfo.willJoin||null!=a.state.registrationInfo.transportationDeparture&&null!==a.state.registrationInfo.transportationArrive&&null!==a.state.registrationInfo.location?a.state.registrationInfo.willJoin||""!==a.state.reason?a.state.registrationInfo.willJoin&&""===a.state.cmnd?a.setState(Object(v.a)({},a.state,{errorMessage:"Anh/Ch\u1ecb xin vui l\xf2ng nh\u1eadp s\u1ed1 CMND / C\u0103n c\u01b0\u1edbc.",showError:!0})):a.state.registrationInfo.willJoin&&void 0!==a.state.roommate&&a.state.roommate.value===a.state.userInfo.updated_full_name?a.setState(Object(v.a)({},a.state,{errorMessage:"Anh/Ch\u1ecb vui l\xf2ng ch\u1ecdn b\u1ea1n c\xf9ng ph\xf2ng kh\xe1c.",showError:!0})):(a.setState({isLoading:!0}),Y.a.database().ref("Topics/BusinessDeployment/Events/2019/members").orderByChild("email").equalTo(a.state.userInfo.email).once("value").then(function(e){var t=Object.keys(e.val())[0],n={email:a.state.userInfo.email,full_name:a.state.userInfo.full_name,updated_full_name:a.state.userInfo.updated_full_name,job_title:a.state.userInfo.job_title,department:a.state.userInfo.department,registered:a.state.registrationInfo.willJoin,transportationDeparture:a.state.registrationInfo.transportationDeparture,transportationArrive:a.state.registrationInfo.transportationArrive,location:a.state.registrationInfo.location,staySchedules:a.state.registrationInfo.willJoin?a.state.staySchedules:null,eatSchedules:a.state.registrationInfo.willJoin?a.state.eatSchedules:null,roommateName:a.state.registrationInfo.willJoin?void 0!==a.state.roommate?a.state.roommate:"":null,reason:a.state.reason?a.state.reason:null,cmnd:a.state.cmnd?a.state.cmnd:null,mugshot_url:a.state.userInfo.mugshot_url};Y.a.database().ref("Topics/BusinessDeployment/Events/2019/members/".concat(t)).set(n).then(function(e){a.setState(Object(v.a)({},a.state,{isLoading:!1,completed:!0,showError:!0,errorMessage:"\u0110\u0103ng k\xfd th\xe0nh c\xf4ng"}))})})):a.setState(Object(v.a)({},a.state,{errorMessage:"Anh/Ch\u1ecb xin vui l\xf2ng nh\u1eadp l\xfd do kh\xf4ng tham d\u1ef1 s\u1ef1 ki\u1ec7n.",showError:!0})):a.setState(Object(v.a)({},a.state,{errorMessage:"Anh/Ch\u1ecb xin vui l\xf2ng ch\u1ecdn ph\u01b0\u01a1ng ti\u1ec7n di chuy\u1ec3n \u0111i/v\u1ec1 v\xe0 n\u01a1i c\u01b0 tr\xfa hi\u1ec7n t\u1ea1i.",showError:!0}))},a.getEventDetails=function(){Y.a.database().ref("Topics/BusinessDeployment/Events/2019/programDetails").once("value").then(function(e){var t=[];e.forEach(function(e){var n="";if(e.hasChild("email")){var i=e.val().email;a.state.eventUsers.forEach(function(e){e.email===i&&(n=e.mugshot_url.replace("48x48","500x500"))})}var r={time:e.val().startTime,date:e.val().date,title:e.val().title,description:"''"!==e.val().host?e.val().host:null,allow:e.val().allow,key:e.key,imageUrl:n};t.push(r)}),a.setState(Object(v.a)({},a.state,{isLoading:!1,eventTimelineData:t}))})},a.state={isLoading:!1,step:0,registrationInfo:{willJoin:!0,transportationDeparture:null,transportationArrive:null,location:null},eventTimelineData:[],reason:"",cmnd:"",completed:!1,flex:"column",showSummary:!0,showDetail:!0},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){Y.a.apps.length||Y.a.initializeApp(ae),this.getRegistryData()}},{key:"getTransporationTypes",value:function(){var e=this;Y.a.database().ref("TransportationTypeArriveTypes").once("value").then(function(t){var a=Object.values(t.val()),n=[];a.forEach(function(e){n.push(e.name+" "+e.note)}),e.setState({transTypesArrive:n})}),Y.a.database().ref("TransportationTypeDepartureTypes").once("value").then(function(t){var a=Object.values(t.val()),n=[];a.forEach(function(e){n.push(e.name+" "+e.note)}),e.setState({transTypesDeparture:n})})}},{key:"getLocations",value:function(){var e=this;Y.a.database().ref("Locations").once("value").then(function(t){var a=Object.values(t.val()),n=[];a.forEach(function(e){n.push(e.name)}),e.setState({locations:n})})}},{key:"getEventUsersAndSchedules",value:function(){var e=this;Y.a.database().ref("Topics/BusinessDeployment/Events/2019").once("value").then(function(t){for(var a=t.val().members,n=Object.values(a),i=[],r=0;r<n.length;r++)i.push({value:n[r].updated_full_name,label:n[r].updated_full_name,email:n[r].email,mugshot_url:n[r].mugshot_url});for(var l=t.val().staySchedules,o=Object.values(l),s=[],c=0;c<o.length;c++)s.push({id:c,name:o[c].name,checked:!1});for(var m=t.val().eatSchedules,h=Object.values(m),u=[],g=0;g<h.length;g++)u.push({id:g,name:h[g].name,checked:!1});e.setState(Object(v.a)({},e.state,{eventUsers:i,eatSchedules:u,staySchedules:s}),function(){e.getEventDetails()})})}},{key:"getRegisteredInfo",value:function(){var e=this;Y.a.database().ref("Topics/BusinessDeployment/Events/2019/members").orderByChild("email").equalTo(this.state.userInfo.email).once("value").then(function(t){var a=Object.keys(t.val())[0];t.child(a).hasChild("registered")&&e.setState(Object(v.a)({},e.state,{registrationInfo:{willJoin:t.child(a).val().registered,transportationDeparture:t.child(a).val().transportationDeparture,transportationArrive:t.child(a).val().transportationArrive,location:t.child(a).val().location},staySchedules:t.child(a).val().staySchedules,eatSchedules:t.child(a).val().eatSchedules,roommateName:t.child(a).val().registered?t.child(a).val().roommateName:null,reason:t.child(a).val().reason,cmnd:t.child(a).val().cmnd,completed:!0}))})}},{key:"getRegistryData",value:function(){this.getEventUsersAndSchedules(),this.getTransporationTypes(),this.getLocations()}},{key:"updateDimensions",value:function(){window.innerWidth<1e3?this.setState({flex:"column"}):this.setState({flex:"row"})}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"render",value:function(){var e=this;return this.state.isLoading?i.a.createElement(Z.a,{loading:this.state.isLoading,bgColor:"#f1f1f1",spinnerColor:"#9ee5f8",textColor:"#676767",text:"Xin vui l\xf2ng \u0111\u1ee3i trong gi\xe2y l\xe1t!"}):0===this.state.step?i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),i.a.createElement("h1",{style:{color:"#264295",marginBottom:20,maxWidth:"80%",fontSize:50}},"TRI\u1ec2N KHAI KINH DOANH 2019"),i.a.createElement(Q.b,{authorizeUrl:"https://www.yammer.com/oauth2/authorize",clientId:"0JqrtQdnp8sRHVr2pxx0dA",redirectUri:ee,render:function(t){var a=t.url;return i.a.createElement(T.a,{variant:"contained",color:"primary",href:a,disabled:e.state.isLoading},"\u0110\u0102NG NH\u1eacP")}}),i.a.createElement(Q.a,{tokenUrl:te,onAuthSuccess:this.handleSuccess,onAuthError:this.handleError})),i.a.createElement(X.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:this.state.showError,autoHideDuration:5e3,onClose:function(){e.setState({showError:!1})},ContentProps:{"aria-describedby":"message-id"},message:i.a.createElement("span",{id:"message-id"},this.state.errorMessage)})):i.a.createElement("div",null,i.a.createElement("div",{style:{position:"fixed",bottom:10,right:10,zIndex:1e4,flexDirection:"column",display:"flex"}},i.a.createElement(M.a,{color:"primary",variant:"extended","aria-label":"Hotline",href:"tel:+84918131900"},i.a.createElement("strong",null,"Hotline chung:"),i.a.createElement("div",{style:{marginRight:15}}),"V\u0169 Di\u1ec7u Ly 0918131900"),i.a.createElement("br",null),i.a.createElement(M.a,{color:"secondary",variant:"extended","aria-label":"Hotline",href:"tel:+84779933846"},i.a.createElement("strong",null,"Hotline ph\xf2ng:"),i.a.createElement("div",{style:{marginRight:15}}),"Nguy\u1ec5n Vi\u1ec7t An 0779933846")),i.a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"row",backgroundColor:"#072790"}},i.a.createElement("img",{src:b.a,style:{height:80,marginLeft:15},alt:"logo"}),"row"===this.state.flex&&i.a.createElement("span",{style:{marginLeft:20,textTransform:"uppercase",fontWeight:700,color:"white",fontSize:20}},"TRI\u1ec2N KHAI KINH DOANH 2019"),i.a.createElement(T.a,{color:"primary",style:{position:"absolute",right:10,color:"white",fontWeight:500},onClick:function(){window.location.reload()}},"\u0110\u0103ng xu\u1ea5t")),i.a.createElement("div",{style:{padding:10,display:"flex",flexDirection:this.state.flex}},i.a.createElement("div",{className:"App-form"},i.a.createElement("div",{style:{textAlign:"center",marginTop:10,height:120,width:120,borderRadius:60,backgroundColor:"#dbdbdb"}},i.a.createElement(C.a,{src:this.state.userInfo.mugshot_url,style:{width:120,height:120}})),i.a.createElement("div",{style:{marginTop:10,color:"#1f419b",fontWeight:"bold",fontSize:"1rem"}},this.state.userInfo.updated_full_name),i.a.createElement("div",{style:{marginTop:10,color:"black",fontWeight:"bold",fontSize:"0.9rem"}},this.state.userInfo.job_title),i.a.createElement("div",{style:{marginTop:10,color:"#676767",fontSize:"0.9rem"}},this.state.userInfo.department),i.a.createElement("div",{style:{marginTop:10,padding:20,fontSize:"0.9rem",color:"black"}},i.a.createElement("strong",{style:{marginTop:10,marginBottom:10}},"H\u01af\u1edaNG D\u1eaaN"),i.a.createElement("div",null,"Anh/Ch\u1ecb vui l\xf2ng nh\u1ea5p ch\u1ecdn ",i.a.createElement(O.a,{color:"primary",onChange:function(){e.setState({temp:!e.state.temp})},value:this.state.temp})," \u0111\u1ec3 x\xe1c nh\u1eadn tham d\u1ef1 s\u1ef1 ki\u1ec7n"),i.a.createElement("div",null,i.a.createElement(O.a,{disabled:!0,checked:!1,color:"primary",onChange:function(){},value:!1}),"T\u1eeb ch\u1ed1i tham gia s\u1ef1 ki\u1ec7n"),i.a.createElement("div",null,i.a.createElement(O.a,{checked:!0,color:"primary",onChange:function(){},value:!0}),"\u0110\u1ed3ng \xfd tham gia s\u1ef1 ki\u1ec7n")),i.a.createElement("div",{style:{width:"90%",height:1,backgroundColor:"gray",marginTop:10,marginBottom:10}}),i.a.createElement(S.a,{row:!0,style:{marginTop:10,marginBottom:10}},i.a.createElement(A.a,{control:i.a.createElement(O.a,{disabled:this.state.completed,checked:this.state.registrationInfo.willJoin,color:"primary",onChange:function(){e.setState(Object(v.a)({},e.state,{registrationInfo:Object(v.a)({},e.state.registrationInfo,{willJoin:!e.state.registrationInfo.willJoin})}))},value:this.state.registrationInfo.willJoin}),label:this.state.registrationInfo.willJoin?"\u0110\u1ed3ng \xfd tham gia s\u1ef1 ki\u1ec7n":"T\u1eeb ch\u1ed1i tham gia s\u1ef1 ki\u1ec7n"})),this.state.registrationInfo.willJoin&&i.a.createElement("div",null,i.a.createElement("div",{style:{width:"80%"}},i.a.createElement(P.a,{id:"standard-multiline-flexible",label:"Anh/Ch\u1ecb vui l\xf2ng nh\u1eadp CMND/C\u0103n c\u01b0\u1edbc",disabled:this.state.completed,style:{marginLeft:20,marginRight:20,width:500},value:this.state.cmnd,onChange:this.handleChange("cmnd"),fullWidth:!0,margin:"normal"})),i.a.createElement("div",{style:{marginLeft:20,marginTop:30,width:"100%"}},i.a.createElement(z.a,{component:"fieldset",style:{marginRight:80}},i.a.createElement(_.a,{component:"legend"},"N\u01a1i c\u01b0 tr\xfa hi\u1ec7n t\u1ea1i c\u1ee7a anh/ch\u1ecb"),i.a.createElement(H.a,{"aria-label":"N\u01a1i l\u01b0u tr\xfa:",name:"transLocation",value:this.state.registrationInfo?this.state.registrationInfo.location:"",onChange:function(t){e.setState(Object(v.a)({},e.state,{registrationInfo:Object(v.a)({},e.state.registrationInfo,{location:t.target.value})}))}},!this.state.completed&&this.state.locations&&this.state.locations.map(function(e){return i.a.createElement(A.a,{value:e,control:i.a.createElement(j.a,{color:"primary"}),label:e})}),this.state.completed&&this.state.locations&&this.state.locations.map(function(t){return i.a.createElement(A.a,{disabled:!0,value:t,control:i.a.createElement(j.a,{checked:t===e.state.registrationInfo.location,color:"primary"}),label:t})}))),i.a.createElement("div",{style:{width:"90%",height:1,backgroundColor:"gray",marginTop:20,marginBottom:20}}),i.a.createElement(z.a,{component:"fieldset",style:{marginRight:10}},i.a.createElement(_.a,{component:"legend"},"Anh/Ch\u1ecb vui l\xf2ng \u0111\u0103ng k\xfd h\xecnh th\u1ee9c di chuy\u1ec3n chi\u1ec1u \u0111i"),i.a.createElement(H.a,{"aria-label":"Di chuy\u1ec3n chi\u1ec1u \u0111i",name:"transTypeDeparture",value:this.state.registrationInfo?this.state.registrationInfo.transportationDeparture:"",onChange:function(t){e.setState(Object(v.a)({},e.state,{registrationInfo:Object(v.a)({},e.state.registrationInfo,{transportationDeparture:t.target.value})}))}},!this.state.completed&&this.state.transTypesDeparture&&this.state.transTypesDeparture.map(function(e,t){return i.a.createElement(A.a,{value:e,control:i.a.createElement(j.a,{color:"primary"}),label:e})}),this.state.completed&&this.state.transTypesDeparture&&this.state.transTypesDeparture.map(function(t){return i.a.createElement(A.a,{disabled:!0,value:t,control:i.a.createElement(j.a,{checked:t===e.state.registrationInfo.transportationDeparture,color:"primary"}),label:t})}))),i.a.createElement(z.a,{component:"fieldset",style:{marginRight:10}},i.a.createElement(_.a,{component:"legend"},"Anh/Ch\u1ecb vui l\xf2ng \u0111\u0103ng k\xfd h\xecnh th\u1ee9c di chuy\u1ec3n chi\u1ec1u v\u1ec1"),i.a.createElement(H.a,{"aria-label":"Ch\u1ecdn ph\u01b0\u01a1ng th\u1ee9c di chuy\u1ec3n chi\u1ec1u v\u1ec1",name:"transTypeArrive",value:this.state.registrationInfo?this.state.registrationInfo.transportationArrive:"",onChange:function(t){e.setState(Object(v.a)({},e.state,{registrationInfo:Object(v.a)({},e.state.registrationInfo,{transportationArrive:t.target.value})}))}},!this.state.completed&&this.state.transTypesArrive&&this.state.transTypesArrive.map(function(e){return i.a.createElement(A.a,{value:e,control:i.a.createElement(j.a,{color:"primary"}),label:e})}),this.state.completed&&this.state.transTypesArrive&&this.state.transTypesArrive.map(function(t){return i.a.createElement(A.a,{disabled:!0,value:t,control:i.a.createElement(j.a,{checked:t===e.state.registrationInfo.transportationArrive,color:"primary"}),label:t})})))),i.a.createElement("div",{style:{marginLeft:20,width:"90%",height:1,backgroundColor:"gray",marginTop:10,marginBottom:10}}),i.a.createElement(z.a,{component:"fieldset",style:{marginLeft:20,marginTop:10,width:"90%"}},i.a.createElement(_.a,{component:"legend"},"Anh/Ch\u1ecb vui l\xf2ng \u0111\u0103ng k\xfd ph\xf2ng l\u01b0u tr\xfa"),i.a.createElement(S.a,null,this.state.staySchedules.map(function(t,a){return i.a.createElement(A.a,{control:i.a.createElement(U.a,{disabled:e.state.completed,checked:t.checked,onChange:function(){var t=e.state.staySchedules;t[a].checked=!t[a].checked,e.setState({staySchedules:t})},value:t.name,color:"primary"}),label:t.name})}))),i.a.createElement("div",{style:{marginLeft:20,marginTop:10,width:"100%",flexDirection:"row"}},i.a.createElement("div",{style:{marginTop:20,marginBottom:20,width:300}},i.a.createElement(q.a,{isDisabled:this.state.completed,value:this.state.roommate,onChange:function(t){e.setState({roommate:t})},options:this.state.eventUsers,isSearchable:!0,styles:ie,placeholder:"Ch\u1ecdn b\u1ea1n c\xf9ng ph\xf2ng"})),i.a.createElement("div",{style:{width:"90%",height:1,backgroundColor:"gray",marginTop:20,marginBottom:20}}),i.a.createElement(z.a,{component:"fieldset"},i.a.createElement(_.a,{component:"legend"},"Anh/Ch\u1ecb vui l\xf2ng \u0111\u0103ng k\xfd b\u1eefa \u0103n"),i.a.createElement(S.a,null,this.state.eatSchedules.map(function(t,a){return i.a.createElement(A.a,{control:i.a.createElement(U.a,{disabled:e.state.completed,checked:t.checked,onChange:function(){var t=e.state.eatSchedules;t[a].checked=!t[a].checked,e.setState({eatSchedules:t})},value:t.checked,color:"primary"}),label:t.name})}))))),!this.state.registrationInfo.willJoin&&i.a.createElement("div",{style:{width:"80%",marginLeft:20,marginRight:20}},i.a.createElement(P.a,{id:"standard-multiline-flexible-more",label:"Anh/Ch\u1ecb vui l\xf2ng nh\u1eadp l\xfd do t\u1eeb ch\u1ed1i",multiline:!0,disabled:this.state.completed,value:this.state.reason,onChange:this.handleChange("reason"),fullWidth:!0,margin:"normal"})),!this.state.completed&&i.a.createElement("div",{style:{marginTop:30,marginBottom:30,textAlign:"center",flexDirection:"column"}},i.a.createElement(T.a,{variant:"contained",color:"primary",size:"large",onClick:this.registry},"\u0110\u0102NG K\xdd"),this.state.showError&&i.a.createElement("div",{className:"App-error"},i.a.createElement("span",null,this.state.errorMessage)))),i.a.createElement("div",{style:{flex:2,margin:10,backgroundColor:"#f7f7f7"}},i.a.createElement(T.a,{style:{backgroundColor:"#1f419b",width:"100%",marginBottom:2,color:"white",fontSize:20,fontWeight:"bold",textAlign:"left"},onClick:function(){e.setState({showSummary:!e.state.showSummary})}},"Th\xf4ng tin chung"),this.state.showSummary&&i.a.createElement("div",{style:{margin:20}},i.a.createElement("div",{style:{fontSize:20,color:"#1f419b",fontWeight:"bold",marginBottom:10}},"H\u1ed8I NGH\u1eca TRI\u1ec2N KHAI KINH DOANH 2019"),i.a.createElement("div",{style:{marginBottom:10}},i.a.createElement("strong",null,"Th\u1eddi gian:")," Ng\xe0y 18 \u2013 19 \u2013 20.01.2019"),i.a.createElement("div",{style:{marginBottom:10}},i.a.createElement("strong",null,"\u0110\u1ecba \u0111i\u1ec3m:")," The Grand H\u1ed3 Tr\xe0m Strip"),i.a.createElement("div",{style:{marginBottom:10}},i.a.createElement("strong",null,"\u0110\u1ecba ch\u1ec9:")," Ven Bi\u1ec3n, Ph\u01b0\u1edbc Thu\u1eadn, Xuy\xean M\u1ed9c, B\xe0 R\u1ecba - V\u0169ng T\xe0u"),i.a.createElement("div",{style:{marginBottom:10}},i.a.createElement("strong",null,"Th\xf4ng tin di chuy\u1ec3n:")),i.a.createElement("div",{style:{marginBottom:10}},i.a.createElement("ul",null,i.a.createElement("li",{style:{marginBottom:5}},"Anh/ ch\u1ecb vui l\xf2ng ch\u1ee7 \u0111\u1ed9ng mua v\xe9 m\xe1y bay kh\u1ee9 h\u1ed3i \u0111\u1ebfn TP.HCM. C\xe1c chi ph\xed s\u1ebd \u0111\u01b0\u1ee3c thanh to\xe1n theo quy ch\u1ebf chi ti\xeau n\u1ed9i b\u1ed9"),i.a.createElement("li",{style:{marginBottom:5}},"BTC b\u1ed1 tr\xed xe t\u1eeb TP.HCM \u2013 H\u1ed3 Tr\xe0m. Xe s\u1ebd \u0111\xf3n & tr\u1ea3 \u0111o\xe0n t\u1ea1i Cung V\u0103n H\xf3a Lao \u0110\u1ed9ng - 55B Nguy\u1ec5n Th\u1ecb Minh Khai, P. B\u1ebfn Th\xe0nh, Q.1, TP. H\u1ed3 Ch\xed Minh, anh/ ch\u1ecb vui l\xf2ng \u0111\u0103ng k\xfd xe v\xe0 t\u1ef1 t\xfac di chuy\u1ec3n \u0111\u1ebfn \u0111\u1ecba \u0111i\u1ec3m \u0111\xf3n"),i.a.createElement("li",{style:{marginBottom:5}},"Th\u1eddi gian kh\u1edfi h\xe0nh t\u1eeb TP.HCM \u0111i H\u1ed3 Tr\xe0m 2 chuy\u1ebfn xe ng\xe0y th\u1ee9 N\u0103m 18.01.2019: ",i.a.createElement("strong",null,"09:00")," v\xe0 ",i.a.createElement("strong",null,"10:00")),i.a.createElement("li",{style:{marginBottom:5}},"Th\u1eddi gian kh\u1edfi h\xe0nh t\u1eeb H\u1ed3 Tr\xe0m v\u1ec1 TP.HCM t\u1eeb sau 12:00 \u0111\u1ebfn 14:00 ch\u1ee7 Nh\u1eadt 20.01.2019 (th\u1eddi gian kh\u1edfi h\xe0nh linh \u0111\u1ed9ng khi \u0111\u1ee7 s\u1ed1 l\u01b0\u1ee3ng kh\xe1ch tr\xean xe)"),i.a.createElement("li",{style:{marginBottom:5}},"Tr\u01b0\u1eddng h\u1ee3p anh/ ch\u1ecb kh\xf4ng \u0111i c\xf9ng xe \u0111o\xe0n, vui l\xf2ng ch\u1ecdn \u201cT\u1ef1 t\xfac di chuy\u1ec3n \u0111\u1ebfn H\u1ed3 Tr\xe0m\u201d trong m\u1ee5c \u0111\u0103ng k\xfd di chuy\u1ec3n"),i.a.createElement("li",{style:{marginBottom:5}},"\u0110\u1ed1i v\u1edbi khu v\u1ef1c TP.HCM: Trung T\xe2m \u0110i\u1ec1u Xe s\u1ebd kh\xf4ng gi\u1ea3i quy\u1ebft c\xe1c tr\u01b0\u1eddng h\u1ee3p y\xeau c\u1ea7u xe c\xf4ng v\u1ee5 ri\xeang l\u1ebb v\xe0 kh\xf4ng thanh to\xe1n c\xe1c chi ph\xed ph\xe1t sinh"))),i.a.createElement("div",{style:{marginBottom:10}},i.a.createElement("strong",null,"Th\xf4ng tin v\u1ec1 b\u1eefa \u0103n:")),i.a.createElement("div",{style:{marginBottom:10}},i.a.createElement("ul",null,i.a.createElement("li",{style:{marginBottom:5}},"Ngo\xe0i c\xe1c b\u1eefa \u0103n trong ng\xe0y theo l\u1ecbch tr\xecnh h\u1ecdp, BTC c\xf3 s\u1eafp x\u1ebfp 3 b\u1eefa \u0103n t\xf9y ch\u1ecdn. Anh/Ch\u1ecb vui l\xf2ng \u0111\u0103ng k\xfd trong m\u1ee5c \u0110\u0103ng k\xfd:",i.a.createElement("ul",null,i.a.createElement("li",null,"B\u1eefa \u0103n tr\u01b0a 18.01.2019 t\u1ea1i kh\xe1ch s\u1ea1n t\u1eeb 12h \u2013 14h"),i.a.createElement("li",null,"B\u1eefa \u0103n t\u1ed1i 18.01.2019 t\u1ea1i kh\xe1ch s\u1ea1n t\u1eeb 18h \u2013 21h"),i.a.createElement("li",null,"B\u1eefa \u0103n tr\u01b0a 20.01.2019 t\u1ea1i kh\xe1ch s\u1ea1n t\u1eeb 12h \u2013 14h"))))),i.a.createElement("div",{style:{marginBottom:10}},i.a.createElement("strong",null,"Th\xf4ng tin v\u1ec1 trang ph\u1ee5c:")),i.a.createElement("div",{style:{marginBottom:10}},i.a.createElement("ul",null,i.a.createElement("li",{style:{marginBottom:5}},"Ng\xe0y 18.01 & 19.01.2019:",i.a.createElement("ul",null,i.a.createElement("li",null,"Nam: \xc1o s\u01a1 mi ACB, qu\u1ea7n t\xe2y"),i.a.createElement("li",null,"N\u1eef: V\xe1y & vest ACB"))),i.a.createElement("li",{style:{marginBottom:5}},"Gala t\xf4n vinh:",i.a.createElement("ul",null,i.a.createElement("li",null,"Nam: Trang ph\u1ee5c ti\u1ec7c l\u1ecbch s\u1ef1, trang tr\u1ecdng"),i.a.createElement("li",null,"N\u1eef: V\xe1y d\u1ea1 h\u1ed9i"))),i.a.createElement("li",{style:{marginBottom:5}},"Ng\xe0y 20.01: \xc1o thun ACB"))),i.a.createElement("div",{style:{marginBottom:10}},i.a.createElement("strong",null,"\u0110\u1ec3 bi\u1ebft th\xeam th\xf4ng tin chi ti\u1ebft, anh/ ch\u1ecb vui l\xf2ng li\xean h\u1ec7 Hotline c\u1ee7a BTC"))),i.a.createElement(T.a,{style:{backgroundColor:"#1f419b",width:"100%",marginBottom:2,color:"white",fontSize:20,fontWeight:"bold",textAlign:"left"},onClick:function(){e.setState({showDetail:!e.state.showDetail})}},"L\u1ecbch tr\xecnh chi ti\u1ebft"),this.state.showDetail&&i.a.createElement(K.VerticalTimeline,null,this.state.eventTimelineData.map(function(e,t){return i.a.createElement(K.VerticalTimelineElement,{className:"vertical-timeline-element-work",date:"".concat(e.date,"\n").concat(e.time),iconStyle:{background:t%2===0?"#1f419b":"rgb(33, 150, 243)",color:"#fff"},icon:i.a.createElement(C.a,{src:e.imageUrl,style:""!==e.imageUrl?{width:"100%",height:"100%"}:{width:"0%"}})},i.a.createElement("h3",{className:"vertical-timeline-element-title"},e.title),i.a.createElement("p",null,e.description))}))),i.a.createElement(X.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:this.state.showError,autoHideDuration:5e3,onClose:function(){e.setState({showError:!1})},ContentProps:{"aria-describedby":"message-id"},message:i.a.createElement("span",{id:"message-id"},this.state.errorMessage)})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[150,2,1]]]);
//# sourceMappingURL=main.994ae101.chunk.js.map