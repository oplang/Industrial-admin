(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74f2e9a4"],{"09a7":function(a,e,t){},bfee:function(a,e,t){"use strict";t.r(e);var d=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"dooya-container"},[t("Card",[t("div",{staticStyle:{margin:"10px 0"}},[t("Button",{staticStyle:{"margin-right":"10px"},attrs:{type:"success",icon:"md-add"},on:{click:a.insert}},[a._v("新增配方组合")])],1),t("Table",{attrs:{border:"","disabled-hover":"",loading:a.tableLoading,data:a.tableData,columns:a.tableColumns,stripe:""}}),a.tableData.length>0?t("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[t("div",{staticStyle:{float:"right"}},[t("Page",{attrs:{"show-sizer":"",transfer:"",placement:"top",total:a.total,current:a.pageNum,"page-size-opts":[10,20,50,100],"page-size":a.pageSize},on:{"update:current":function(e){a.pageNum=e},"on-change":a.changePage,"on-page-size-change":a.changePageSize}})],1)]):a._e()],1),t("Modal",{attrs:{"mask-closable":!1,closable:!1,"footer-hide":"",title:"edit"===a.modalDataType?"编辑配方组合":"新增配方组合"},on:{"on-ok":a.handleSubmit},model:{value:a.modalShow,callback:function(e){a.modalShow=e},expression:"modalShow"}},[t("Form",{ref:"formModalData",attrs:{model:a.modalData,rules:a.formModalRule,"label-width":100},nativeOn:{submit:function(a){a.preventDefault()}}},[t("FormItem",{attrs:{label:"综合检测：",prop:"qc1SopTagId"}},[t("Cascader",{attrs:{data:a.qc1List,trigger:"hover"},on:{"on-change":function(e){a.modalData.qc1SopTagId=e[1]}},model:{value:a.modalData.qc1Select,callback:function(e){a.$set(a.modalData,"qc1Select",e)},expression:"modalData.qc1Select"}})],1),t("FormItem",{attrs:{label:"静音检测：",prop:"qc2SopTagId"}},[t("Cascader",{attrs:{data:a.qc2List,trigger:"hover"},on:{"on-change":function(e){a.modalData.qc2SopTagId=e[1]}},model:{value:a.modalData.qc2Select,callback:function(e){a.$set(a.modalData,"qc2Select",e)},expression:"modalData.qc2Select"}})],1),t("FormItem",[t("Button",{attrs:{type:"primary",loading:a.buttonLoading},on:{click:function(e){return a.handleSubmit("formModalData")}}},[a._v("确定")]),t("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){a.modalShow=!1}}},[a._v("取消")])],1)],1)],1)],1)},c=[],o=(t("ac6a"),t("6b54"),t("55dd"),t("96cf"),t("3b8d")),n=[{sn:1001,sop1:"JS-9-1.9",sop1Id:16,sop1TagId:"9257234587ba4a8e9768c68127eea66d",sop1Tag:"S型-M型-Q型综合测试",sop1TagCode:2210001,sop2TagCode:2220003,sop2:"JS-9-1.53",sop2Id:17,sop2TagId:"7f2ecaa6ab5a4d37bd1988dff240f1d1",sop2Tag:"FTS系列接地噪音高压测试"},{sn:1002,sop1:"JS-9-1.9",sop1Id:16,sop1TagId:"9257234587ba4a8e9768c68127eea66d",sop1Tag:"S型-M型-Q型综合测试",sop1TagCode:2210001,sop2TagCode:2220002,sop2:"JS-9-1.224",sop2Id:4,sop2TagId:"7ef53ee3393040cf93d338dd32d837c6",sop2Tag:"DV55B型高压接地噪音测试"},{sn:1004,sop1:"JS-9-1.11",sop1Id:6,sop1TagId:"462d78514e2d4ee29c9bb60372814f65",sop1Tag:"R型综合测试",sop1TagCode:2210002,sop2TagCode:2220003,sop2:"JS-9-1.53",sop2Id:17,sop2TagId:"7f2ecaa6ab5a4d37bd1988dff240f1d1",sop2Tag:"FTS系列接地噪音高压测试"},{sn:1005,sop1:"JS-9-1.123",sop1Id:19,sop1TagId:"a3b2a1c976c04a4eb3fc9d663d0ca8fd",sop1Tag:"DM35RQL086[CM278](230V)综合测试",sop1TagCode:2311234,sop2TagCode:2220003,sop2:"JS-9-1.53",sop2Id:17,sop2TagId:"7f2ecaa6ab5a4d37bd1988dff240f1d1",sop2Tag:"FTS系列接地噪音高压测试"},{sn:1006,sop1:"JS-9-1.638",sop1Id:24,sop1TagId:"237d49ae8d4846f0aa6279107c992da4",sop1Tag:"R-Z电机综合测试",sop1TagCode:2211003,sop2TagCode:2221e3,sop2:"JS-9-1.655",sop2Id:23,sop2TagId:"5c2ff40bdffe4712ae0524650af3559c",sop2Tag:"DM35EQL-J016电机接地高压噪音测试[GM582]"},{sn:1007,sop1:"JS-9-1.638",sop1Id:24,sop1TagId:"237d49ae8d4846f0aa6279107c992da4",sop1Tag:"R-Z电机综合测试",sop1TagCode:2211003,sop2TagCode:2220001,sop2:"JS-9-1.146",sop2Id:2,sop2TagId:"0d32b7e3eb4d49f9b0c12ff01283c0ab",sop2Tag:"S型-M型-Q型接地高压噪音"},{sn:1008,sop1:"JS-9-1.254",sop1Id:26,sop1TagId:"a1e5d5efdfaf488f8b353034f88fafcd",sop1Tag:"BFBW系列电机综合测试",sop1TagCode:2211e3,sop2TagCode:2220010,sop2:"JS-9-1.249",sop2Id:27,sop2TagId:"7bdd2b2dd69d4a1790a41080ca29725a",sop2Tag:"BFBW型电机接地高压噪音测试"},{sn:1009,sop1:"JS-9-1.588",sop1Id:28,sop1TagId:"7a37a4da11364622afaaeb459e001e9e",sop1Tag:"BJ型电机综合测试",sop1TagCode:2211001,sop2TagCode:2221001,sop2:"JS-9-1.589",sop2Id:29,sop2TagId:"ad333e9a1c874b5ea17463bbac501df8",sop2Tag:"BJ型电机接地高压噪音测试"},{sn:1010,sop1:"JS-9-1.484",sop1Id:32,sop1TagId:"c4b09a7a1dce48cf9b8d1a6c1313252f",sop1Tag:"BM型电机综合测试",sop1TagCode:2210484,sop2TagCode:2220485,sop2:"JS-9-1.485",sop2Id:33,sop2TagId:"85b8dde738ce4cdcb9b10888ec9aeaf5",sop2Tag:"BM型电机接地高压噪音测试"},{sn:1012,sop1:"JS-9-1.484",sop1Id:32,sop1TagId:"c4b09a7a1dce48cf9b8d1a6c1313252f",sop1Tag:"BM型电机综合测试",sop1TagCode:2210484,sop2TagCode:2221001,sop2:"JS-9-1.589",sop2Id:29,sop2TagId:"ad333e9a1c874b5ea17463bbac501df8",sop2Tag:"BJ型电机接地高压噪音测试"},{sn:1013,sop1:"JS-9-1.484",sop1Id:32,sop1TagId:"c4b09a7a1dce48cf9b8d1a6c1313252f",sop1Tag:"BM型电机综合测试",sop1TagCode:2210484,sop2TagCode:2220002,sop2:"JS-9-1.224",sop2Id:4,sop2TagId:"7ef53ee3393040cf93d338dd32d837c6",sop2Tag:"DV55B型高压接地噪音测试"},{sn:1014,sop1:"JS-9-1.268",sop1Id:45,sop1TagId:"33f1149d58914683a2b80de32c1b4942",sop1Tag:"B型电机综合测试（四芯线+行程头带按钮）",sop1TagCode:2211234,sop2TagCode:2221235,sop2:"JS-9-1.272",sop2Id:46,sop2TagId:"4459f5c4a09f4bb7b6657a5d4a9298b2",sop2Tag:"B型电机接地高压噪音测试"}],r=t("f629"),i=t("f11f"),s=t("e569"),l=t("66df"),m=function(a,e){return l["a"].request({url:"/api/testprocess/findSnWithPage?pageIndex=".concat(a,"&pageSize=").concat(e),method:"get"})},p=function(a){return l["a"].request({url:"/api/testprocess/addSn",method:"post",data:a})},b=function(a){return l["a"].request({url:"/api/testprocess/editsn",method:"post",data:a})},f=function(a){return l["a"].request({url:"/api/testprocess/removeSn?sn=".concat(a),method:"get"})},u={data:function(){var a=this;return{qc1List:[],qc2List:[],tableDataOrg:[],tableData:[],tableColumns:[{title:"综合检测",key:"sop1",align:"center",render:function(a,e){return a("div","".concat(e.row.sop1," / ").concat(e.row.sop1Tag," / ").concat(e.row.sop1TagCode))},minWidth:250},{title:"静音检测",key:"sop2",align:"center",render:function(a,e){return a("div","".concat(e.row.sop2," / ").concat(e.row.sop2Tag," / ").concat(e.row.sop2TagCode))},minWidth:250},{title:"sn码",key:"sn",align:"center",minWidth:100},{title:"操作",key:"action",minWidth:120,align:"center",render:function(e,t){return e("div",[e("Tooltip",{props:{trigger:"hover",content:"修改",placement:"top",transfer:!0}},[e("Button",{props:{type:"primary",size:"small",icon:"ios-create-outline"},style:{marginRight:"5px"},on:{click:function(){a.edit(t.row)}}})]),e("Tooltip",{props:{trigger:"hover",content:"删除",placement:"top",transfer:!0}},[e("Button",{props:{type:"error",size:"small",icon:"md-close"},on:{click:function(){a.delete(t.row)}}})])])}}],total:0,pageNum:1,pageSize:10,tableLoading:!1,buttonLoading:!1,modalShow:!1,modalDataType:"",modalData:{},modalDataOrg:{},formModalRule:{qc1SopTagId:[{required:!0,validator:function(e,t,d){0===a.modalData.qc1Select.length?d(new Error("请选择SOP1")):d()},trigger:"change"}],qc2SopTagId:[{required:!0,validator:function(e,t,d){0===a.modalData.qc2Select.length?d(new Error("请选择SOP2")):d()},trigger:"change"}]}}},created:function(){var a=Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:this.getData(),this.initCascader();case 2:case"end":return a.stop()}}),a,this)})));function e(){return a.apply(this,arguments)}return e}(),methods:{getData:function(){var a=Object(o["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(this.isMock){a.next=10;break}return this.tableLoading=!0,a.next=4,m(this.pageNum,this.pageSize);case 4:e=a.sent.data.data,null!==e?(0===e.pageData.length&&1!==e.pageIndex&&(this.pageNum--,this.getData()),this.tableData=e.pageData,this.total=e.dataCount):(this.tableData=[],this.total=0),this.tableLoading=!1,this.buttonLoading=!1,a.next=12;break;case 10:this.tableDataOrg=n,this.refreshData();case 12:case"end":return a.stop()}}),a,this)})));function e(){return a.apply(this,arguments)}return e}(),initCascader:function(){var a=Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(this.isMock){a.next=15;break}return a.next=3,Object(s["d"])("1");case 3:if(a.t0=a.sent.data.data,a.t0){a.next=6;break}a.t0=[];case 6:return this.qc1List=a.t0,a.next=9,Object(s["d"])("2");case 9:if(a.t1=a.sent.data.data,a.t1){a.next=12;break}a.t1=[];case 12:this.qc2List=a.t1,a.next=17;break;case 15:this.qc1List=r["a"]["1"],this.qc2List=r["a"]["2"];case 17:case"end":return a.stop()}}),a,this)})));function e(){return a.apply(this,arguments)}return e}(),refreshData:function(){this.tableDataOrg.sort(Object(i["b"])("sn","asc")),this.tableData=this.tableDataOrg.slice((this.pageNum-1)*this.pageSize,this.pageNum*this.pageSize),this.total=this.tableDataOrg.length,0===this.tableData.length&&0!==this.tableDataOrg.length&&(this.pageNum--,this.refreshData())},changePage:function(a){this.pageNum=a,this.getData()},changePageSize:function(a){this.pageSize=a,this.pageNum=1,this.getData()},insert:function(){this.modalDataType="insert",this.$refs.formModalData.resetFields(),this.modalData.qc1Select=[],this.modalData.qc2Select=[],this.modalShow=!0},edit:function(){var a=Object(o["a"])(regeneratorRuntime.mark((function a(e){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:this.modalDataType="edit",this.modalData=JSON.parse(JSON.stringify(e)),this.modalData.qc1Select=[this.modalData.sop1Id.toString(),this.modalData.sop1TagId],this.modalData.qc2Select=[this.modalData.sop2Id.toString(),this.modalData.sop2TagId],this.modalData.qc1SopTagId=this.modalData.sop1TagId,this.modalData.qc2SopTagId=this.modalData.sop2TagId,this.modalDataOrg=JSON.parse(JSON.stringify(this.modalData)),this.modalShow=!0;case 8:case"end":return a.stop()}}),a,this)})));function e(e){return a.apply(this,arguments)}return e}(),handleSubmit:function(){var a=this;this.$refs.formModalData.validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var d,c,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=23;break}a.buttonLoading=!0,e.t0=a.modalDataType,e.next="insert"===e.t0?5:"edit"===e.t0?14:23;break;case 5:if(a.isMock){e.next=12;break}return e.next=8,p(a.modalData);case 8:d=e.sent.data.status,Object(i["d"])(d,"添加成功！",(function(){a.modalShow=!1,a.getData()}),(function(){a.buttonLoading=!1})),e.next=13;break;case 12:a.tableDataOrg.some((function(e){return e.sop1TagId===a.modalData.qc1SopTagId&&e.sop2TagId===a.modalData.qc2SopTagId}))?(a.$Message.error("此SOP组合已存在！"),a.buttonLoading=!1):(c=1001,a.tableDataOrg.forEach((function(a){c===a.sn&&c++})),o=["22","23"],a.modalData.sop1TagCode=o[Math.round(Math.random()*(o.length-1))]+parseInt(89999*Math.random()+1e4,10),a.modalData.sop2TagCode=o[Math.round(Math.random()*(o.length-1))]+parseInt(89999*Math.random()+1e4,10),a.modalData.sn=c,a.modalData.sop1=Object(i["c"])(a.qc1List,"value",a.modalData.qc1Select[0],"label"),a.modalData.sop1Tag=Object(i["c"])(Object(i["c"])(a.qc1List,"value",a.modalData.qc1Select[0],"children"),"value",a.modalData.qc1Select[1],"label"),a.modalData.sop1Id=a.modalData.qc1Select[0],a.modalData.sop1TagId=a.modalData.qc1Select[1],a.modalData.sop2=Object(i["c"])(a.qc2List,"value",a.modalData.qc2Select[0],"label"),a.modalData.sop2Tag=Object(i["c"])(Object(i["c"])(a.qc2List,"value",a.modalData.qc2Select[0],"children"),"value",a.modalData.qc2Select[1],"label"),a.modalData.sop2Id=a.modalData.qc2Select[0],a.modalData.sop2TagId=a.modalData.qc2Select[1],a.tableDataOrg.push(JSON.parse(JSON.stringify(a.modalData))),Object(i["d"])(200,"添加成功！",(function(){a.refreshData(),a.buttonLoading=!1,a.modalShow=!1})));case 13:return e.abrupt("break",23);case 14:if(a.isMock){e.next=21;break}return e.next=17,b(a.modalData);case 17:n=e.sent.data.status,Object(i["d"])(n,"修改成功！",(function(){a.modalShow=!1,a.getData()}),(function(){a.buttonLoading=!1})),e.next=22;break;case 21:!a.tableDataOrg.some((function(e){return e.sop1TagId===a.modalData.qc1SopTagId&&e.sop2TagId===a.modalData.qc2SopTagId}))||a.modalData.qc1SopTagId===a.modalDataOrg.qc1SopTagId&&a.modalData.qc2SopTagId===a.modalDataOrg.qc2SopTagId?(a.modalData.sop1=Object(i["c"])(a.qc1List,"value",a.modalData.qc1Select[0],"label"),a.modalData.sop1Tag=Object(i["c"])(Object(i["c"])(a.qc1List,"value",a.modalData.qc1Select[0],"children"),"value",a.modalData.qc1Select[1],"label"),a.modalData.sop1Id=a.modalData.qc1Select[0],a.modalData.sop1TagId=a.modalData.qc1Select[1],a.modalData.sop2=Object(i["c"])(a.qc2List,"value",a.modalData.qc2Select[0],"label"),a.modalData.sop2Tag=Object(i["c"])(Object(i["c"])(a.qc2List,"value",a.modalData.qc2Select[0],"children"),"value",a.modalData.qc2Select[1],"label"),a.modalData.sop2Id=a.modalData.qc2Select[0],a.modalData.sop2TagId=a.modalData.qc2Select[1],a.$set(a.tableDataOrg,(a.pageNum-1)*a.pageSize+a.modalData._index,JSON.parse(JSON.stringify(a.modalData))),Object(i["d"])(200,"修改成功！",(function(){a.refreshData(),a.buttonLoading=!1,a.modalShow=!1}))):(a.$Message.error("此SOP组合已存在！"),a.buttonLoading=!1);case 22:return e.abrupt("break",23);case 23:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())},delete:function(a){var e=this;this.$Modal.confirm({title:"确定删除该sn码？",onOk:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isMock){t.next=7;break}return t.next=3,f(a.sn);case 3:d=t.sent,Object(i["d"])(d.data.status,"删除成功！",(function(){e.getData()})),t.next=9;break;case 7:e.tableDataOrg.slice((e.pageNum-1)*e.pageSize,e.pageNum*e.pageSize).forEach((function(t,d){a.sn===t.sn&&e.tableDataOrg.splice((e.pageNum-1)*e.pageSize+d,1)})),Object(i["d"])(200,"删除成功！",(function(){e.refreshData()}));case 9:case"end":return t.stop()}}),t)})));function d(){return t.apply(this,arguments)}return d}(),closable:!0})}}},g=u,I=(t("d12f"),t("2877")),h=Object(I["a"])(g,d,c,!1,null,"69d75b66",null);e["default"]=h.exports},d12f:function(a,e,t){"use strict";var d=t("09a7"),c=t.n(d);c.a},e569:function(a,e,t){"use strict";t.d(e,"d",(function(){return c})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return n})),t.d(e,"b",(function(){return r})),t.d(e,"e",(function(){return i}));var d=t("66df"),c=function(a){return d["a"].request({url:"/api/standardValues/findSopTagsByQcIndex?qcIndex=".concat(a),method:"get"})},o=function(a){return d["a"].request({url:"/api/standardValues/findBySopTag?tagId=".concat(a),method:"get"})},n=function(a){return d["a"].request({url:"/api/standardValues/add",method:"post",data:a})},r=function(a){return d["a"].request({url:"/api/standardValues/edit",method:"post",data:a})},i=function(a){return d["a"].request({url:"/api/standardValues/removeTag?tagId=".concat(a),method:"get"})}},f11f:function(a,e,t){"use strict";t.d(e,"b",(function(){return c})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return n})),t.d(e,"d",(function(){return r}));t("c5f6"),t("6b54"),t("28a5"),t("4f7f"),t("5df3"),t("1c4c"),t("ac6a");var d=t("e069");function c(a,e){return function(t,d){return"asc"===e||void 0===e||""===e?t[a]>d[a]?1:t[a]<d[a]?-1:0:"desc"===e?t[a]<d[a]?1:t[a]>d[a]?-1:0:void 0}}function o(a,e,t,d){var c="";return a.forEach((function(a){a[e].toString()===t&&(c=a[d])})),c}var n=function(a,e){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],d=0;return a.forEach((function(a){t&&(d+=Number(a[e]))})),d},r=function(a,e,t,c){return 200===a?(d["Message"].success({content:e}),t.call()):c.call()}},f629:function(a,e,t){"use strict";t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return d}));var d={1:[{value:"1",label:"SOP.1.1000",children:[{value:"1d263c82e38a48bb815089ab4954ddf6",label:"A型",children:null},{value:"39f6c0976eba4652957ccde93a2c34c0",label:"EFA电机",children:null},{value:"35f5f3eab97a4e36ab55340d585fe7ae",label:"E型电机",children:null},{value:"7f3642ea01f14d95a5dd8d5292b9ecb6",label:"CC电机",children:null},{value:"395e6207119b47b2851618518d564d97",label:"DM型电机",children:null}]}],2:[{value:"2",label:"SOP.2.1000",children:[{value:"7f7338865878456fa9a8d83fc3c66fdb",label:"EFA电机",children:null},{value:"2afec6facc9d46508f159bda988f6e1a",label:"DM型电机",children:null}]}]},c={1:[{id:"60dcda7e3dfc4ef89f5e94ee4b002967",qcIndex:0,itemParamId:"9c72451683ed42ecb8b5e71f64a149e8",paramName:"行程(CM)",itemName:"顺转1",value:10,type:1,tagId:"395e6207119b47b2851618518d564d97"},{id:"1bf90dd356bc419f9821efc527365b77",qcIndex:0,itemParamId:"9c72451683ed42ecb8b5e71f64a149e8",paramName:"行程(CM)",itemName:"顺转1",value:90,type:2,tagId:"395e6207119b47b2851618518d564d97"},{id:"9dab0866fd4745a49d5d59880422b624",qcIndex:0,itemParamId:"96e3725ab46c4239a2e84de682e59986",paramName:"行程(CM)",itemName:"顺转2",value:32,type:1,tagId:"395e6207119b47b2851618518d564d97"},{id:"f4685021a3154a558d9d0c4e1861e658",qcIndex:0,itemParamId:"96e3725ab46c4239a2e84de682e59986",paramName:"行程(CM)",itemName:"顺转2",value:45,type:2,tagId:"395e6207119b47b2851618518d564d97"},{id:"a5b62e4e3fb84651a38e4c5b279387d2",qcIndex:0,itemParamId:"8e7061bfe775440aaaf1913540831633",paramName:"电压(V)",itemName:"顺转3",value:0,type:2,tagId:"395e6207119b47b2851618518d564d97"},{id:"c0e8bc549f9c451a8c3bb66dc33e4408",qcIndex:0,itemParamId:"8e7061bfe775440aaaf1913540831633",paramName:"电压(V)",itemName:"顺转3",value:0,type:1,tagId:"395e6207119b47b2851618518d564d97"},{id:"b0a35d87526e47b4b0a8a79dfc67beda",qcIndex:0,itemParamId:"ae0acdae59064a16b46a83f8b28c3052",paramName:"电流(A)",itemName:"顺转3",value:0,type:2,tagId:"395e6207119b47b2851618518d564d97"},{id:"8ae5658a56754fd8a5dfee0468e40d19",qcIndex:0,itemParamId:"b8d32c0442384748879782dc4163e784",paramName:"行程(CM)",itemName:"顺转3",value:0,type:1,tagId:"395e6207119b47b2851618518d564d97"},{id:"a446765d9a964fe687312301aaf86eab",qcIndex:0,itemParamId:"ae0acdae59064a16b46a83f8b28c3052",paramName:"电流(A)",itemName:"顺转3",value:0,type:1,tagId:"395e6207119b47b2851618518d564d97"},{id:"f9948a69547c477aab4159706f3c98d7",qcIndex:0,itemParamId:"daee7edcbd4d44749b08a6613e846ead",paramName:"功率(W)",itemName:"顺转3",value:0,type:2,tagId:"395e6207119b47b2851618518d564d97"},{id:"68f0006aad044ba0b5a117f6d2ec96ea",qcIndex:0,itemParamId:"daee7edcbd4d44749b08a6613e846ead",paramName:"功率(W)",itemName:"顺转3",value:0,type:1,tagId:"395e6207119b47b2851618518d564d97"},{id:"b980e6f8edc34d618954eaac237bd6df",qcIndex:0,itemParamId:"b8d32c0442384748879782dc4163e784",paramName:"行程(CM)",itemName:"顺转3",value:0,type:2,tagId:"395e6207119b47b2851618518d564d97"},{id:"eb2e1aba761649eb98f989c90c82eda4",qcIndex:0,itemParamId:"7309e07cb37044d8bad23ef79722959e",paramName:"转速(RPM)",itemName:"顺转3",value:0,type:1,tagId:"395e6207119b47b2851618518d564d97"},{id:"606525b7282547eba9bcec3273d69a3d",qcIndex:0,itemParamId:"7309e07cb37044d8bad23ef79722959e",paramName:"转速(RPM)",itemName:"顺转3",value:0,type:2,tagId:"395e6207119b47b2851618518d564d97"},{id:"aee4d2bfd2674e56962ea5d3b0e8388f",qcIndex:0,itemParamId:"0623a89720104387b4489036d6cf5931",paramName:"行程(CM)",itemName:"逆转1",value:12,type:1,tagId:"395e6207119b47b2851618518d564d97"},{id:"09bc8208a1784a75adb978e97fc3edb3",qcIndex:0,itemParamId:"0623a89720104387b4489036d6cf5931",paramName:"行程(CM)",itemName:"逆转1",value:92,type:2,tagId:"395e6207119b47b2851618518d564d97"},{id:"a9e107b847ea485e8b94333d10020c2a",qcIndex:0,itemParamId:"5441e6d54c9b41ffbf27adc6e4fa0960",paramName:"行程(CM)",itemName:"逆转2",value:8,type:1,tagId:"395e6207119b47b2851618518d564d97"},{id:"9c202c77a68d4971836486c091140f0a",qcIndex:0,itemParamId:"5441e6d54c9b41ffbf27adc6e4fa0960",paramName:"行程(CM)",itemName:"逆转2",value:88,type:2,tagId:"395e6207119b47b2851618518d564d97"},{id:"84d95896423e4f4086f6624f9d18d4d7",qcIndex:0,itemParamId:"8b6ceebd68184cf9b516dce637681eb5",paramName:"行程(CM)",itemName:"逆转3",value:0,type:1,tagId:"395e6207119b47b2851618518d564d97"},{id:"db8b9abd607947ee98126594e7b5441b",qcIndex:0,itemParamId:"443745ced3264504aa51ad8d43f072f2",paramName:"转速(RPM)",itemName:"逆转3",value:0,type:2,tagId:"395e6207119b47b2851618518d564d97"},{id:"68f9416531154fcfb890e68955025f2a",qcIndex:0,itemParamId:"443745ced3264504aa51ad8d43f072f2",paramName:"转速(RPM)",itemName:"逆转3",value:0,type:1,tagId:"395e6207119b47b2851618518d564d97"},{id:"97ce5189b6334179b70c2d3fe9fea304",qcIndex:0,itemParamId:"3eee02ff9ede46448b89df12a558c85a",paramName:"电压(V)",itemName:"逆转3",value:0,type:2,tagId:"395e6207119b47b2851618518d564d97"},{id:"1c3aac2ccc9d47faa70901c2a8b542b5",qcIndex:0,itemParamId:"3eee02ff9ede46448b89df12a558c85a",paramName:"电压(V)",itemName:"逆转3",value:0,type:1,tagId:"395e6207119b47b2851618518d564d97"},{id:"981b91a854bc4fe380f028e459db164a",qcIndex:0,itemParamId:"02c5ac99ad0e4ffe840c932bd8214078",paramName:"电流(A)",itemName:"逆转3",value:0,type:1,tagId:"395e6207119b47b2851618518d564d97"},{id:"dd14e3295d8747978ee2114af068d2fc",qcIndex:0,itemParamId:"02c5ac99ad0e4ffe840c932bd8214078",paramName:"电流(A)",itemName:"逆转3",value:0,type:2,tagId:"395e6207119b47b2851618518d564d97"},{id:"d7077904bf2e41509d1a95bbc22f36b1",qcIndex:0,itemParamId:"acaac03370264df5ad9e36c43c44dace",paramName:"功率(W)",itemName:"逆转3",value:0,type:2,tagId:"395e6207119b47b2851618518d564d97"},{id:"90a2e88013c14636804a69dcd7f15927",qcIndex:0,itemParamId:"acaac03370264df5ad9e36c43c44dace",paramName:"功率(W)",itemName:"逆转3",value:0,type:1,tagId:"395e6207119b47b2851618518d564d97"},{id:"6cc384aa8e434896889d0ce8374d28ab",qcIndex:0,itemParamId:"8b6ceebd68184cf9b516dce637681eb5",paramName:"行程(CM)",itemName:"逆转3",value:0,type:2,tagId:"395e6207119b47b2851618518d564d97"},{id:"3d6aab9a4a6344bf83ee2b32c102cf07",qcIndex:0,itemParamId:"eaa2e3ac5e9b44efb2fcd817fb226c45",paramName:"行程(CM)",itemName:"验证上行程",value:0,type:2,tagId:"395e6207119b47b2851618518d564d97"},{id:"dda51fc7a8c04b02af1d4f0dc6980544",qcIndex:0,itemParamId:"eaa2e3ac5e9b44efb2fcd817fb226c45",paramName:"行程(CM)",itemName:"验证上行程",value:0,type:1,tagId:"395e6207119b47b2851618518d564d97"},{id:"b49e84ff3d8941539e8596a373ca979e",qcIndex:0,itemParamId:"c04d5eb0b1f640ada7c5596e9f0a1ac2",paramName:"行程(CM)",itemName:"验证下行程",value:0,type:2,tagId:"395e6207119b47b2851618518d564d97"},{id:"484b397ce74b45a683343896889dbcc0",qcIndex:0,itemParamId:"c04d5eb0b1f640ada7c5596e9f0a1ac2",paramName:"行程(CM)",itemName:"验证下行程",value:0,type:1,tagId:"395e6207119b47b2851618518d564d97"}],2:[{id:"dcd9648b956f4993b11dc4288e18f5ad",qcIndex:0,itemParamId:"bf2139309d6e4caeb2b3d455ecdac262",paramName:"分贝(dB)",itemName:"顺转噪音",value:70,type:2,tagId:"2afec6facc9d46508f159bda988f6e1a"},{id:"409d7df184a747409009082010681031",qcIndex:0,itemParamId:"bf2139309d6e4caeb2b3d455ecdac262",paramName:"分贝(dB)",itemName:"顺转噪音",value:0,type:1,tagId:"2afec6facc9d46508f159bda988f6e1a"},{id:"ae77f5069b314b17a210b90f1493a364",qcIndex:0,itemParamId:"d2ff2fa8587c4e7cbd49031eca1cc091",paramName:"分贝(dB)",itemName:"逆转噪音",value:0,type:1,tagId:"2afec6facc9d46508f159bda988f6e1a"},{id:"c2f3725133984b71a1d6327ec845918b",qcIndex:0,itemParamId:"d2ff2fa8587c4e7cbd49031eca1cc091",paramName:"分贝(dB)",itemName:"逆转噪音",value:70,type:2,tagId:"2afec6facc9d46508f159bda988f6e1a"}]}}}]);