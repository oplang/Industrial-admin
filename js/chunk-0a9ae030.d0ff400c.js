(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a9ae030"],{"064f":function(e,t,a){"use strict";var c=a("3d2b"),d=a.n(c);d.a},2642:function(e,t,a){"use strict";a.d(t,"o",(function(){return d})),a.d(t,"n",(function(){return r})),a.d(t,"s",(function(){return i})),a.d(t,"m",(function(){return o})),a.d(t,"r",(function(){return n})),a.d(t,"k",(function(){return s})),a.d(t,"j",(function(){return p})),a.d(t,"h",(function(){return u})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return f})),a.d(t,"p",(function(){return m})),a.d(t,"f",(function(){return b})),a.d(t,"g",(function(){return g})),a.d(t,"i",(function(){return h})),a.d(t,"l",(function(){return D})),a.d(t,"e",(function(){return B})),a.d(t,"a",(function(){return S})),a.d(t,"d",(function(){return y})),a.d(t,"q",(function(){return I}));var c=a("66df"),d=function(e,t,a){return c["a"].request({url:"/api/standardValues/getSopTagFilteByEquipment?qc1soptagId=".concat(e,"&qc2soptagId=").concat(t,"&qcIndex=").concat(a),method:"get"})},r=function(e){return c["a"].request({url:"/api/testprocess/getSopByQcIndex?qcIndex=".concat(e),method:"get"})},i=function(e){return c["a"].request({url:"/api/testprocess/setProductLineSnBySop",method:"post",data:e})},o=function(){return c["a"].request({url:"/api/testprocess/getLineSn",method:"get"})},n=function(e){return c["a"].request({url:"/api/testprocess/removeTask?id=".concat(e),method:"get"})},s=function(){return c["a"].request({url:"/api/equipment/getAllEquipmentFunctype",method:"get"})},p=function(e,t,a){return c["a"].request({url:"/api/testprocess/findTaskByPage?pageIndex=".concat(e,"&pageSize=").concat(t,"&lineno=").concat(a),method:"get"})},u=function(e,t,a){return c["a"].request({url:"/api/testprocess/findSopByPage?pageIndex=".concat(e,"&pageSize=").concat(t,"&qc=").concat(a),method:"get"})},l=function(e){return c["a"].request({url:"/api/testprocess/addSop",method:"post",data:e})},f=function(e){return c["a"].request({url:"/api/testprocess/editSop",method:"post",data:e})},m=function(e){return c["a"].request({url:"/api/testprocess/removeSop?sopId=".concat(e),method:"get"})},b=function(e){return c["a"].request({url:"/api/testprocess/findAllItemParam?qcIndex=".concat(e),method:"get"})},g=function(e){return c["a"].request({url:"/api/testprocess/findSopByKey?funcTypeId=".concat(e),method:"get"})},h=function(e){return c["a"].request({url:"/api/testprocess/findSopItemBySop?sopid=".concat(e),method:"get"})},D=function(e){return c["a"].request({url:"/api/testprocess/GetItemParamAddByItemId?itemId=".concat(e),method:"get"})},B=function(e){return c["a"].request({url:"/api/testprocess/EditSopItemPlcAdd",method:"post",data:e})},S=function(e){return c["a"].request({url:"/api/testprocess/AddItemParamPlcAdd",method:"post",data:e})},y=function(e){return c["a"].request({url:"/api/testprocess/EditSopItemParamAdd",method:"post",data:e})},I=function(e){return c["a"].request({url:"/api/testprocess/RemoveSopItemParamAdd?id=".concat(e),method:"get"})}},"3d2b":function(e,t,a){},"3eaf":function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return r}));var c=[{id:1,typeName:"综合检测"},{id:2,typeName:"静音检测"}],d={1:[{items:[{code:143,description:"顺转二",sopId:6,plcRusltAddr:null,sort:1,createBy:null,createTime:"2019-12-13 13:28:28",id:"fc84807c90b546ecb66b21552d917e32"},{code:142,description:"顺转一",sopId:6,plcRusltAddr:null,sort:2,createBy:null,createTime:"2019-12-13 13:28:28",id:"ecf8d9fca4444c94adb0cfc86762da73"},{code:144,description:"顺转三",sopId:6,plcRusltAddr:null,sort:3,createBy:null,createTime:"2019-12-13 13:28:28",id:"471d10c0ffe54ea1838b93c8680a697a"},{code:145,description:"逆转一",sopId:6,plcRusltAddr:null,sort:4,createBy:null,createTime:"2019-12-13 13:28:28",id:"b4a749e023a14fd993a5ad628f8c4a44"},{code:146,description:"逆转二",sopId:6,plcRusltAddr:null,sort:5,createBy:null,createTime:"2019-12-13 13:28:28",id:"d47890a49fb149ffbbf08ec9410378bc"},{code:147,description:"逆转三",sopId:6,plcRusltAddr:null,sort:6,createBy:null,createTime:"2019-12-13 13:28:28",id:"aa8e630312ea4713ab824fd239795a37"},{code:148,description:"后置工序",sopId:6,plcRusltAddr:null,sort:7,createBy:null,createTime:"2019-12-13 13:28:28",id:"baecf7d274e64ead8e02c8a010213f85"}],id:6,sop:"SOP.1.0008",sopDescription:"R型",qc:1,status:1,lineNo:0},{items:[{code:146,description:"前置工序",sopId:1,plcRusltAddr:"DB41.DBW314",sort:1,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:15:17",id:"af6c0e54a40d4070a5104452c256ce68"},{code:147,description:"顺转1",sopId:1,plcRusltAddr:"DB41.DBW94",sort:2,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:15:45",id:"511dc182e39146398338258d13e2473c"},{code:148,description:"顺转2",sopId:1,plcRusltAddr:"DB41.DBW96",sort:3,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:17:31",id:"0c83d621c1d4466da06fc4d267653c89"},{code:149,description:"顺转3",sopId:1,plcRusltAddr:"DB41.DBW98",sort:4,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:20:35",id:"a057791c6e574345912f7d55212b9eb9"},{code:150,description:"逆转1",sopId:1,plcRusltAddr:"DB41.DBW100",sort:5,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:24:04",id:"10bfb5d958da470c849e2bc4ef0906b6"},{code:151,description:"逆转2",sopId:1,plcRusltAddr:"DB41.DBW102",sort:6,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:25:23",id:"f1cc6c4adfa142a5b524683fea0d3ec0"},{code:152,description:"逆转3",sopId:1,plcRusltAddr:"DB41.DBW104",sort:7,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:25:37",id:"cda963546a83476f8dab0b3b618c6782"},{code:153,description:"验证上行程",sopId:1,plcRusltAddr:"DB41.DBW108",sort:8,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:29:05",id:"30a288e5b19f4aeb991ddd9fbee0ff95"},{code:154,description:"验证下行程",sopId:1,plcRusltAddr:"DB41.DBW108",sort:9,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:30:03",id:"083975573c24426d9b425b8521f79066"},{code:155,description:"后置工序",sopId:1,plcRusltAddr:"DB41.DBW316",sort:10,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:31:06",id:"e633f29f83f4426c83f1ac80b83dfda3"}],id:1,sop:"SOP.1.1000",sopDescription:"前序 顺三 逆三 验证行程 后序",qc:1,status:1,lineNo:0},{items:[{code:145,description:"前置工序",sopId:3,plcRusltAddr:"DB41.DBW314",sort:1,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:36:11",id:"82b2e3ecaa7140f3a7b0b8defa2f9ef4"},{code:146,description:"顺转1",sopId:3,plcRusltAddr:"DB41.DBW94",sort:2,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:36:39",id:"161908f7e3514396953f992354c00d45"},{code:147,description:"顺转2",sopId:3,plcRusltAddr:"DB41.DBW96",sort:3,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:37:40",id:"f17c870077a742068524cfdeca4918d1"},{code:148,description:"顺转3",sopId:3,plcRusltAddr:"DB41.DBW98",sort:4,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:38:33",id:"13c3ea05ca484e1fad3c58989a810743"},{code:149,description:"逆转1",sopId:3,plcRusltAddr:"DB41.DBW100",sort:5,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:43:17",id:"0de077d3a307494a8834821a57ba6c72"},{code:150,description:"逆转2",sopId:3,plcRusltAddr:"DB41.DBW102",sort:6,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:43:58",id:"fea543e632c245e989d19fef759dc388"},{code:151,description:"逆转3",sopId:3,plcRusltAddr:"DB41.DBW104",sort:7,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:44:52",id:"4b058bca26054cb28ecc07c5f20f5bd0"},{code:152,description:"验证上行程",sopId:3,plcRusltAddr:"DB41.DBW106",sort:8,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:47:29",id:"0543978553fb41938c50bf21b878d713"},{code:153,description:"验证下行程",sopId:3,plcRusltAddr:"DB41.DBW108",sort:9,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:48:06",id:"6ce8d982559449f4a7d01921f767ce33"}],id:3,sop:"SOP.1.1001",sopDescription:"前序 顺三 逆三 验证行程",qc:1,status:1,lineNo:0},{items:[{code:142,description:"顺转一",sopId:7,plcRusltAddr:"DB41.DBW94",sort:1,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-16 14:30:37",id:"b8ba577338bb4f228b98e9be387ef780"},{code:143,description:"顺转二",sopId:7,plcRusltAddr:"DB41.DBW96",sort:2,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 15:43:27",id:"5e289b5af88641ddb5de36366008006c"},{code:144,description:"顺转三",sopId:7,plcRusltAddr:"DB41.DBW98",sort:3,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 15:44:44",id:"fed8cb561e6648c8ba25d4f9fb7a5fa9"},{code:145,description:"逆转一",sopId:7,plcRusltAddr:"DB41.DBW100",sort:4,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 15:48:45",id:"3cd486bc76d94e95a9bc7a4dafd04711"},{code:146,description:"逆转二",sopId:7,plcRusltAddr:"DB41.DBW102",sort:5,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 15:49:34",id:"cdab4d4f15144a08a4cbcab18f0de2c9"},{code:147,description:"逆转三",sopId:7,plcRusltAddr:"DB41.DBW104",sort:6,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 15:50:18",id:"3088132d3e7d498ea7fb77c9536ee689"},{code:149,description:"验证上行程",sopId:7,plcRusltAddr:"DB41.DBW106",sort:7,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 15:52:03",id:"fe391f54262b42e09c9dc1d280999c29"},{code:150,description:"验证下行程",sopId:7,plcRusltAddr:"DB41.DBW108",sort:8,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 15:48:07",id:"c8fadbc27ea64e298ff8c69c6d0ade13"},{code:148,description:"后置工序",sopId:7,plcRusltAddr:"DB41.DBW316",sort:9,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 15:47:39",id:"5d9cc9aa537f47cabb7b1951a08f8eed"}],id:7,sop:"SOP.1.1002",sopDescription:"顺一，顺二，顺三，顺四，逆一，逆二，逆三，逆四，后置工序",qc:1,status:1,lineNo:0}],2:[{items:[{code:247,description:"前置工序",sopId:2,plcRusltAddr:"DB42.DBW108",sort:1,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:50:27",id:"191b4443883e475b988033d11a680bcd"},{code:242,description:"低压",sopId:2,plcRusltAddr:"DB42.DBW94",sort:2,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:33:31",id:"5a948b4132e648e19cf246fc3688d0bd"},{code:248,description:"顺转噪音",sopId:2,plcRusltAddr:"DB42.DBW96",sort:3,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:35:22",id:"00b8581681924188bd52a004d9abca74"},{code:249,description:"逆转噪音",sopId:2,plcRusltAddr:"DB42.DBW102",sort:4,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:35:58",id:"1d67e957fbad4b36848b6ef44d517f3d"},{code:250,description:"交耐",sopId:2,plcRusltAddr:"DB42.DBW98",sort:5,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:51:14",id:"fa08c246801144f6865e95af77b5f883"},{code:245,description:"接地",sopId:2,plcRusltAddr:"DB42.DBW100",sort:6,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:39:20",id:"1e60cafb27974259a734835d05af034b"},{code:251,description:"后置工序",sopId:2,plcRusltAddr:"DB42.DBW110",sort:7,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:40:08",id:"7b5de8d23689484c9b9a97527d8879dc"}],id:2,sop:"SOP.2.1000",sopDescription:"前序 低压 噪音 交耐 接地 后序",qc:2,status:1,lineNo:0},{items:[{code:246,description:"前置工序",sopId:4,plcRusltAddr:"DB42.DBD128",sort:1,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:53:59",id:"80661e76e47444d4a3255fd0702d2aee"},{code:242,description:"低压",sopId:4,plcRusltAddr:"DB42.DBW94",sort:2,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:51:27",id:"ca31f93654d441b4adfee43bc018ed12"},{code:247,description:"顺转噪音",sopId:4,plcRusltAddr:"DB42.DBW96",sort:3,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:54:20",id:"8142997bf65240a39ad7107a1dccb208"},{code:248,description:"逆转噪音",sopId:4,plcRusltAddr:"DB42.DBW102",sort:4,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:54:56",id:"eb61bda17a2b448996a3ee1a71e43c75"},{code:244,description:"交耐",sopId:4,plcRusltAddr:"DB42.DBW102",sort:5,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:51:54",id:"fd70161339354c8b9230dcc37f63266b"},{code:245,description:"接地",sopId:4,plcRusltAddr:"DB42.DBW100",sort:6,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:53:25",id:"569b5c569ce545fbbea75b5e48be92da"}],id:4,sop:"SOP.2.1001",sopDescription:"前序 低压 噪音 交耐 接地",qc:2,status:1,lineNo:0},{items:[{code:246,description:"低压",sopId:5,plcRusltAddr:"DB42.DBW94",sort:1,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:59:26",id:"cc63bfc9c43644c680bfa6830706436f"},{code:247,description:"顺转噪音",sopId:5,plcRusltAddr:"DB42.DBW96",sort:2,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 10:59:53",id:"adedebd65992418f9585d4cc537b8787"},{code:248,description:"逆转噪音",sopId:5,plcRusltAddr:"DB42.DBW102",sort:3,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 11:01:23",id:"0702e77b41ce481ba247ef72c12544b2"},{code:249,description:"交耐",sopId:5,plcRusltAddr:"DB42.DBW98",sort:4,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 11:03:18",id:"64b1667cedfc420d98bfc5cbaf317490"},{code:250,description:"接地",sopId:5,plcRusltAddr:"DB42.DBW100",sort:5,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 11:05:03",id:"43d16fbec8b94a25831ecece5ebe4fa4"},{code:251,description:"后置工序",sopId:5,plcRusltAddr:"DB42.DBW110",sort:6,createBy:"c5c0ecdd-f969-4300-a187-f80a6251b773",createTime:"2019-12-13 11:05:28",id:"ebd8a2898bbe45c991fb10ef6e3e1ec2"}],id:5,sop:"SOP.2.1002",sopDescription:"低压 噪音 交耐 接地 后序",qc:2,status:1,lineNo:0}],3:[]},r={1:[{description:"前置工序"},{description:"顺转一"},{description:"顺转二"},{description:"顺转三"},{description:"逆转一"},{description:"逆转二"},{description:"逆转三"},{description:"后置工序"}],2:[{description:"低压测试"},{description:"顺转噪音"},{description:"逆转噪音"},{description:"交耐测试"},{description:"接地测试"}]}},bf02:function(e,t,a){"use strict";a.r(t);var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dooya-container"},[a("Card",[a("Tabs",{on:{"on-click":e.tabSelect}},e._l(e.tabList,(function(t){return a("TabPane",{key:t.id,attrs:{label:t.typeName,name:t.id}},[a("div",{staticStyle:{margin:"10px 0"}},[a("Button",{staticStyle:{"margin-right":"10px"},attrs:{type:"success",icon:"md-add"},on:{click:e.insert}},[e._v("新增设备")])],1),a("Table",{attrs:{border:"","disabled-hover":"",loading:e.tableLoading,data:e.tableData,columns:e.tableColumns,stripe:""}}),e.tableData.length>0?a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{attrs:{"show-sizer":"",transfer:"",placement:"top",total:e.total,current:e.pageNum,"page-size-opts":[10,20,50,100],"page-size":e.pageSize},on:{"update:current":function(t){e.pageNum=t},"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)]):e._e()],1)})),1)],1),a("Modal",{attrs:{"mask-closable":!1,closable:!1,"footer-hide":"",title:"edit"===e.modalDataType?"编辑设备":"新增设备"},on:{"on-ok":e.handleSubmit},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[a("Form",{ref:"formModalData",attrs:{model:e.modalData,rules:e.formModalRule,"label-width":100},nativeOn:{submit:function(e){e.preventDefault()}}},[a("FormItem",{attrs:{label:"名称：",prop:"equipmentName"}},[a("Input",{attrs:{type:"text",placeholder:"请输入名称"},model:{value:e.modalData.equipmentName,callback:function(t){e.$set(e.modalData,"equipmentName","string"===typeof t?t.trim():t)},expression:"modalData.equipmentName"}})],1),a("FormItem",{attrs:{label:"hmi屏幕：",prop:"readFlag"}},[a("Select",{model:{value:e.modalData.readFlag,callback:function(t){e.$set(e.modalData,"readFlag",t)},expression:"modalData.readFlag"}},[a("Option",{attrs:{value:1}},[e._v("有")]),a("Option",{attrs:{value:0}},[e._v("无")])],1)],1),a("FormItem",{attrs:{label:"详情：",prop:"equipmentMark"}},[a("Input",{attrs:{type:"text",placeholder:"请输入详情，100字以内"},model:{value:e.modalData.equipmentMark,callback:function(t){e.$set(e.modalData,"equipmentMark","string"===typeof t?t.trim():t)},expression:"modalData.equipmentMark"}})],1),a("FormItem",{attrs:{label:"关联SOP：",prop:"list"}},[a("Select",{staticStyle:{margin:"0 10px 10px 0",width:"300px"},attrs:{filterable:"",multiple:"","label-in-value":"",placeholder:"添加SOP"},on:{"on-change":e.sopOnChange},model:{value:e.sopSelectedId,callback:function(t){e.sopSelectedId=t},expression:"sopSelectedId"}},e._l(e.sopList,(function(t){return a("Option",{key:t.id,attrs:{value:t.id,disabled:JSON.stringify(e.sopSelectList).indexOf(t.sop)>-1}},[e._v(e._s(t.sop))])})),1),a("Button",{staticStyle:{"vertical-align":"super"},attrs:{type:"success",size:"small"},on:{click:e.addToSopSelect}},[e._v("添加")]),a("div",e._l(e.sopSelectList,(function(t,c){return a("Tag",{key:c,attrs:{type:"border",color:"primary",closable:""},on:{"on-close":function(t){return e.deleteSopItem(c)}}},[e._v(e._s(t.sop))])})),1)],1),a("FormItem",[a("Button",{attrs:{type:"primary",loading:e.buttonLoading},on:{click:function(t){return e.handleSubmit("formModalData")}}},[e._v("确定")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){e.modalShow=!1,e.sopSelectedId=[]}}},[e._v("取消")])],1)],1)],1)],1)},d=[],r=(a("55dd"),a("6b54"),a("ac6a"),a("96cf"),a("3b8d")),i=a("3eaf"),o=a("c47e"),n=a("f11f"),s=a("2642"),p=a("66df"),u=function(e,t,a){return p["a"].request({url:"/api/equipment/findWithPage?pageIndex=".concat(e,"&pageSize=").concat(t,"&qc=").concat(a),method:"get"})},l=function(e){return p["a"].request({url:"/api/testprocess/findSopByKey?funcTypeId=".concat(e),method:"get"})},f=function(e){return p["a"].request({url:"/api/equipment/add",method:"post",data:e})},m=function(e){return p["a"].request({url:"/api/equipment/edit",method:"post",data:e})},b=function(e){return p["a"].request({url:"/api/equipment/remove?id=".concat(e),method:"get"})},g={data:function(){var e=this;return{tabList:[],tabSelected:1,sopList:[],tableDataOrg:[],tableData:[],tableColumns:[{title:"名称",key:"equipmentName",align:"center",minWidth:120},{title:"hmi屏幕",key:"readFlag",align:"center",render:function(e,t){return e("div",1===t.row.readFlag?"有":"无")},minWidth:100},{title:"关联的sop",key:"describe",render:function(e,t){if(null!==t.row.items)return e("div",[t.row.items.map((function(t){return e("Tag",{props:{color:"blue"}},t.sop)}))])},minWidth:500},{title:"操作",key:"action",minWidth:120,align:"center",render:function(t,a){return t("div",[t("Tooltip",{props:{trigger:"hover",content:"修改",placement:"top",transfer:!0}},[t("Button",{props:{type:"primary",size:"small",icon:"ios-create-outline"},style:{marginRight:"5px"},on:{click:function(){e.edit(a.row)}}})]),t("Tooltip",{props:{trigger:"hover",content:"删除",placement:"top",transfer:!0}},[t("Button",{props:{type:"error",size:"small",icon:"md-close"},on:{click:function(){e.delete(a.row)}}})])])}}],total:0,pageNum:1,pageSize:10,tableLoading:!1,buttonLoading:!1,modalShow:!1,modalData:{equipmentName:"",equipmentMark:"",readFlag:1},modalDataOrg:{},sopSelectList:[],sopSelectedId:[],sopSelectedData:[],formModalRule:{equipmentName:[{required:!0,message:"请输入设备名称",trigger:"change"},{type:"string",max:64,message:"名称过长",trigger:"change"}],equipmentMark:[{type:"string",max:100,message:"详情不得超过100字",trigger:"change"}]},modalDataType:""}},created:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.isMock){e.next=6;break}return e.next=3,Object(s["k"])();case 3:e.t0=e.sent.data.data,e.next=7;break;case 6:e.t0=i["c"];case 7:this.tabList=e.t0,this.tabList.forEach((function(e){t.$set(e,"id",e.id.toString())})),0!==this.tabList.length&&(this.tabSelected=this.tabList[0].id,this.getData());case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{tabSelect:function(e){this.tabSelected=e,this.pageNum=1,this.pageSize=10,this.getData()},getData:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.isMock){e.next=13;break}return this.tableLoading=!0,e.next=4,u(this.pageNum,this.pageSize,this.tabSelected);case 4:return t=e.sent.data.data,null!==t?(0===t.pageData.length&&1!==t.pageIndex&&(this.pageNum--,this.getData()),this.tableData=t.pageData,this.total=t.dataCount):(this.tableData=[],this.total=0),e.next=8,l(this.tabSelected);case 8:this.sopList=e.sent.data.data,this.buttonLoading=!1,this.tableLoading=!1,e.next=16;break;case 13:this.tableDataOrg=o["a"][this.tabSelected],this.sopList=i["b"][this.tabSelected],this.refreshData();case 16:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),refreshData:function(){this.tableDataOrg.sort(Object(n["b"])("equipmentName","asc")),this.tableData=this.tableDataOrg.slice((this.pageNum-1)*this.pageSize,this.pageNum*this.pageSize),this.total=this.tableDataOrg.length,0===this.tableData.length&&0!==this.tableDataOrg.length&&(this.pageNum--,this.refreshData())},changePage:function(e){this.pageNum=e,this.getData()},changePageSize:function(e){this.pageSize=e,this.pageNum=1,this.getData()},insert:function(){this.modalDataType="insert",this.$refs.formModalData.resetFields(),this.sopSelectList=[],this.sopSelectedId=[],this.modalShow=!0},edit:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.modalDataType="edit",this.modalDataOrg=t,this.modalData=JSON.parse(JSON.stringify(t)),this.sopSelectList=this.modalData.items,this.modalShow=!0;case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),sopOnChange:function(e){var t=this;this.sopSelectedData=[],e.forEach((function(e){t.sopSelectedData.push({sopId:e.value,sop:e.label,qc:Object(n["c"])(t.sopList,"id",e.value,"qc")})}))},addToSopSelect:function(){var e=this;this.sopSelectedData.forEach((function(t){e.sopSelectList.push(t)})),this.sopSelectedId=[]},deleteSopItem:function(e){this.sopSelectList.splice(e,1)},handleSubmit:function(){var e=this;this.$refs.formModalData.validate(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(a){var c,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=35;break}if(0!==e.sopSelectList.length){t.next=5;break}e.$Message.error("请至少绑定一个SOP"),t.next=35;break;case 5:e.modalData.list=[],e.sopSelectList.forEach((function(t){e.modalData.list.push(t.sopId)})),e.modalData.equipmentFuncTypeId=e.tabSelected,e.buttonLoading=!0,t.t0=e.modalDataType,t.next="insert"===t.t0?12:"edit"===t.t0?24:35;break;case 12:if(e.isMock){t.next=19;break}return t.next=15,f(e.modalData);case 15:c=t.sent.data.status,Object(n["d"])(c,"添加成功！",(function(){e.modalShow=!1,e.getData()}),(function(){e.buttonLoading=!1})),t.next=23;break;case 19:e.sopSelectList.sort(Object(n["b"])("sop","asc")),e.modalData.items=e.sopSelectList,e.modalData.id=Math.random().toString(36).substr(-10),e.tableDataOrg.some((function(t){return t.equipmentName===e.modalData.equipmentName}))?(e.$Message.error("此设备已存在！"),e.buttonLoading=!1):(e.tableDataOrg.push(JSON.parse(JSON.stringify(e.modalData))),Object(n["d"])(200,"添加成功！",(function(){e.refreshData(),e.buttonLoading=!1,e.modalShow=!1})));case 23:return t.abrupt("break",35);case 24:if(e.isMock){t.next=31;break}return t.next=27,m(e.modalData);case 27:d=t.sent.data.status,Object(n["d"])(d,"修改成功！",(function(){e.modalShow=!1,e.getData()}),(function(){e.buttonLoading=!1})),t.next=34;break;case 31:e.sopSelectList.sort(Object(n["b"])("sop","asc")),e.modalData.items=e.sopSelectList,e.tableDataOrg.some((function(t){return t.equipmentName===e.modalData.equipmentName}))&&e.modalData.equipmentName!==e.modalDataOrg.equipmentName?(e.$Message.error("此Sop已存在！"),e.buttonLoading=!1):(e.$set(e.tableDataOrg,(e.pageNum-1)*e.pageSize+e.modalData._index,JSON.parse(JSON.stringify(e.modalData))),Object(n["d"])(200,"修改成功！",(function(){e.refreshData(),e.buttonLoading=!1,e.modalShow=!1})));case 34:return t.abrupt("break",35);case 35:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},delete:function(e){var t=this;this.$Modal.confirm({title:"确定删除该设备？",onOk:function(){var a=Object(r["a"])(regeneratorRuntime.mark((function a(){var c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.isMock){a.next=7;break}return a.next=3,b(e.id);case 3:c=a.sent,Object(n["d"])(c.data.status,"删除成功！",(function(){t.getData()})),a.next=9;break;case 7:t.tableDataOrg.slice((t.pageNum-1)*t.pageSize,t.pageNum*t.pageSize).forEach((function(a,c){e.id===a.id&&t.tableDataOrg.splice((t.pageNum-1)*t.pageSize+c,1)})),Object(n["d"])(200,"删除成功！",(function(){t.refreshData()}));case 9:case"end":return a.stop()}}),a)})));function c(){return a.apply(this,arguments)}return c}(),closable:!0})}}},h=g,D=(a("064f"),a("2877")),B=Object(D["a"])(h,c,d,!1,null,"72b53458",null);t["default"]=B.exports},c47e:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var c={1:[{id:"c133258602a54d34acbef7957cfedffc",funcTypeId:1,equipmentMark:null,equipmentName:"综合检测设备22",readFlag:1,items:[{equipmentId:"c133258602a54d34acbef7957cfedffc",sopId:7,sop:"SOP.1.1002",sopDescription:"顺一，顺二，顺三，顺四，逆一，逆二，逆三，逆四，后置工序",qc:1},{equipmentId:"c133258602a54d34acbef7957cfedffc",sopId:1,sop:"SOP.1.1000",sopDescription:"前序 顺三 逆三 验证行程 后序",qc:1},{equipmentId:"c133258602a54d34acbef7957cfedffc",sopId:3,sop:"SOP.1.1001",sopDescription:"前序 顺三 逆三 验证行程",qc:1}]},{id:"ae4b62fe83e84ef6b6e7f33544b5dbcd",funcTypeId:1,equipmentMark:null,equipmentName:"综合检测设备",readFlag:1,items:[{equipmentId:"ae4b62fe83e84ef6b6e7f33544b5dbcd",sopId:1,sop:"SOP.1.1000",sopDescription:"前序 顺三 逆三 验证行程 后序",qc:1},{equipmentId:"ae4b62fe83e84ef6b6e7f33544b5dbcd",sopId:3,sop:"SOP.1.1001",sopDescription:"前序 顺三 逆三 验证行程",qc:1}]}],2:[{id:"cbf2b0da-7e2b-4279-8880-e9238df3a881",funcTypeId:2,equipmentMark:null,equipmentName:"综合测试检测台23",readFlag:0,items:[{equipmentId:"cbf2b0da-7e2b-4279-8880-e9238df3a881",sopId:1,sop:"SOP.1.1000",sopDescription:"前序 顺三 逆三 验证行程 后序",qc:1}]},{id:"6315d4988474427b86c68e19d5ffb09d",funcTypeId:2,equipmentMark:null,equipmentName:"静音测试设备23",readFlag:0,items:[{equipmentId:"6315d4988474427b86c68e19d5ffb09d",sopId:5,sop:"SOP.2.1002",sopDescription:"低压 噪音 交耐 接地 后序",qc:2}]}]}},f11f:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return o}));a("c5f6"),a("6b54"),a("28a5"),a("4f7f"),a("5df3"),a("1c4c"),a("ac6a");var c=a("e069");function d(e,t){return function(a,c){return"asc"===t||void 0===t||""===t?a[e]>c[e]?1:a[e]<c[e]?-1:0:"desc"===t?a[e]<c[e]?1:a[e]>c[e]?-1:0:void 0}}function r(e,t,a,c){var d="";return e.forEach((function(e){e[t].toString()===a&&(d=e[c])})),d}var i=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=0;return e.forEach((function(e){a&&(c+=Number(e[t]))})),c},o=function(e,t,a,d){return 200===e?(c["Message"].success({content:t}),a.call()):d.call()}}}]);