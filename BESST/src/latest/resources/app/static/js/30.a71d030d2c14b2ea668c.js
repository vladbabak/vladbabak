webpackJsonp([30],{2146:function(t,e,a){var n=a(2)(a(2596),a(2597),function(t){a(2594)},null,null);t.exports=n.exports},2311:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=l(a(600)),o=l(a(601)),s=(n=(0,o.default)(i.default.mark(function t(e){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r.default.HttpHelp.request({method:"POST",url:"/nl/afterSales/parcelInformation/filter",data:{status:e},params:{page:1,size:999}}));case 1:case"end":return t.stop()}},t,this)})),function(t){return n.apply(this,arguments)}),r=l(a(3));function l(t){return t&&t.__esModule?t:{default:t}}var c={filterParcelInfo:function(t,e){return r.default.HttpHelp.request({method:"POST",url:"/nl/afterSales/parcelInformation/filter",data:{parcel_no:e.parcel_no,status:e.status},params:{page:t,size:10}})},postParcelInfo:function(t){return r.default.HttpHelp.request({method:"POST",url:"/nl/afterSales/parcelInformation",data:t})},deleteParcelInfo:function(t){return r.default.HttpHelp.request({method:"DELETE",url:"/nl/afterSales/parcelInformation/"+t})},getParcelInfo:function(t){return r.default.HttpHelp.request({method:"GET",url:"/nl/afterSales/parcelInformation/"+t})},getParcelInfoDetail:function(t){return r.default.HttpHelp.request({method:"POST",url:"/nl/afterSales/parcelInformationDetail/filter",data:{parcel_id:t},params:{page:1,size:999}})},bulkParcelInfoDetail:function(t){return r.default.HttpHelp.request({method:"POST",url:"/nl/afterSales/parcelInformationDetail/bulk2",data:t})},putParcelInfoStatus:function(t,e){return r.default.HttpHelp.request({method:"put",url:"/nl/afterSales/parcelInformation/"+t+"/status",params:{status:e}})},filterParcelInfoByStatus:s};e.default=c},2346:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=a(3),o=(n=i)&&n.__esModule?n:{default:n};var s={postCompany:function(t){return o.default.HttpHelp.request({method:"POST",url:"/nl/nlPublic/company",data:t})}};e.default=s},2594:function(t,e,a){var n=a(2595);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(2089)("f9fe997a",n,!0,{})},2595:function(t,e,a){(t.exports=a(2088)(!0)).push([t.i,".parcel-information-add{width:100%;height:100%}.parcel-information-add span.required{color:#e26829;display:inline-block}.parcel-information-add .input-mager{width:255px;display:inline-block;margin-left:10px;position:relative}.parcel-information-add .input-mager .input-mager-out{width:49%}.parcel-information-add .input-mager .input-mager-out input{border-top-right-radius:0;border-bottom-right-radius:0}.parcel-information-add .input-mager .input-mager-in{width:49%}.parcel-information-add .input-mager .input-mager-in input{border-top-left-radius:0;border-bottom-left-radius:0}.parcel-information-add .content{border:1px solid #2b2f3b}.parcel-information-add .content .order-info{width:100%}.parcel-information-add .content .order-info .title{height:50px;line-height:50px;padding-left:40px}.parcel-information-add .content .order-info .left{float:left;width:100%;height:280px;background:#353945;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b}.parcel-information-add .content .order-info .left .item{line-height:60px;overflow:hidden;width:49%;height:50px;display:inline-block}.parcel-information-add .content .order-info .left .item .label{display:inline-block;width:125px;margin-left:15px}.parcel-information-add .content .order-info .left .item .input{margin-left:10px;width:255px;border-radius:0 0 10px 10px}.parcel-information-add .content .order-info .left .item .input-left{margin-left:10px;width:200px}.parcel-information-add .content .order-info .left .item .input-right{width:200px}.parcel-information-add .content .order-info .left .item .input-note{margin-left:10px;width:608px}.parcel-information-add .content .footer{width:100%;height:60px;line-height:60px;padding-left:40px;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b;text-align:right;padding-right:40px;display:inline-block}.parcel-information-add .dialog-md{overflow:hidden}.parcel-information-add .dialog-md .el-dialog__body{font-size:0;padding:30px 20px 30px 48px}.parcel-information-add .dialog-md .item{width:50%;line-height:30px;display:inline-block}.parcel-information-add .dialog-md .item .input-special{width:240px}.parcel-information-add .dialog-md .item .title{display:inline-block;width:120px}.parcel-information-add .dialog-md .item .content{margin:10px;display:inline-block;width:240px;border:none}.parcel-information-add .pagination{padding:10px}","",{version:3,sources:["C:/Users/dd/Desktop/besst-build/clientBESST/src/views/nl/after-sales/customer-service/parcel-information-save.vue"],names:[],mappings:"AACA,wBACE,WAAY,AACZ,WAAa,CACd,AAKD,sCACI,cAAe,AACf,oBAAsB,CACzB,AACD,qCACI,YAAa,AACb,qBAAsB,AACtB,iBAAkB,AAClB,iBAAmB,CACtB,AACD,sDACM,SAAW,CAChB,AACD,4DACQ,0BAA2B,AAC3B,4BAA8B,CACrC,AACD,qDACM,SAAW,CAChB,AACD,2DACQ,yBAA0B,AAC1B,2BAA6B,CACpC,AACD,iCACI,wBAA0B,CAC7B,AACD,6CACM,UAAY,CACjB,AACD,oDACQ,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CAC1B,AACD,mDACQ,WAAY,AACZ,WAAY,AACZ,aAAc,AACd,mBAAoB,AACpB,kCAAmC,AAC3B,yBAA2B,CAC1C,AACD,yDACU,iBAAkB,AAClB,gBAAiB,AACjB,UAAW,AACX,YAAa,AACb,oBAAsB,CAC/B,AACD,gEACY,qBAAsB,AACtB,YAAa,AACb,gBAAkB,CAC7B,AACD,gEACY,iBAAkB,AAClB,YAAa,AACb,2BAA6B,CACxC,AACD,qEACY,iBAAkB,AAClB,WAAa,CACxB,AACD,sEACY,WAAa,CACxB,AACD,qEACY,iBAAkB,AAClB,WAAa,CACxB,AACD,yCACM,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,iBAAkB,AAClB,mBAAoB,AACpB,oBAAsB,CAC3B,AACD,mCACI,eAAiB,CACpB,AACD,oDACM,YAAa,AACb,2BAA6B,CAClC,AACD,yCACM,UAAW,AACX,iBAAkB,AAClB,oBAAsB,CAC3B,AACD,wDACQ,WAAa,CACpB,AACD,gDACQ,qBAAsB,AACtB,WAAa,CACpB,AACD,kDACQ,YAAa,AACb,qBAAsB,AACtB,YAAa,AACb,WAAa,CACpB,AACD,oCACI,YAAc,CACjB",file:"parcel-information-save.vue",sourcesContent:["\n.parcel-information-add {\n  width: 100%;\n  height: 100%;\n}\n.parcel-information-add span.required {\n    color: #e26829;\n    display: inline-block;\n}\n.parcel-information-add span.required {\n    color: #e26829;\n    display: inline-block;\n}\n.parcel-information-add .input-mager {\n    width: 255px;\n    display: inline-block;\n    margin-left: 10px;\n    position: relative;\n}\n.parcel-information-add .input-mager .input-mager-out {\n      width: 49%;\n}\n.parcel-information-add .input-mager .input-mager-out input {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n}\n.parcel-information-add .input-mager .input-mager-in {\n      width: 49%;\n}\n.parcel-information-add .input-mager .input-mager-in input {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n}\n.parcel-information-add .content {\n    border: 1px solid #2b2f3b;\n}\n.parcel-information-add .content .order-info {\n      width: 100%;\n}\n.parcel-information-add .content .order-info .title {\n        height: 50px;\n        line-height: 50px;\n        padding-left: 40px;\n}\n.parcel-information-add .content .order-info .left {\n        float: left;\n        width: 100%;\n        height: 280px;\n        background: #353945;\n        -webkit-box-shadow: 0 -1px #2b2f3b;\n                box-shadow: 0 -1px #2b2f3b;\n}\n.parcel-information-add .content .order-info .left .item {\n          line-height: 60px;\n          overflow: hidden;\n          width: 49%;\n          height: 50px;\n          display: inline-block;\n}\n.parcel-information-add .content .order-info .left .item .label {\n            display: inline-block;\n            width: 125px;\n            margin-left: 15px;\n}\n.parcel-information-add .content .order-info .left .item .input {\n            margin-left: 10px;\n            width: 255px;\n            border-radius: 0 0 10px 10px;\n}\n.parcel-information-add .content .order-info .left .item .input-left {\n            margin-left: 10px;\n            width: 200px;\n}\n.parcel-information-add .content .order-info .left .item .input-right {\n            width: 200px;\n}\n.parcel-information-add .content .order-info .left .item .input-note {\n            margin-left: 10px;\n            width: 608px;\n}\n.parcel-information-add .content .footer {\n      width: 100%;\n      height: 60px;\n      line-height: 60px;\n      padding-left: 40px;\n      -webkit-box-shadow: 0 -1px #2b2f3b;\n              box-shadow: 0 -1px #2b2f3b;\n      text-align: right;\n      padding-right: 40px;\n      display: inline-block;\n}\n.parcel-information-add .dialog-md {\n    overflow: hidden;\n}\n.parcel-information-add .dialog-md .el-dialog__body {\n      font-size: 0;\n      padding: 30px 20px 30px 48px;\n}\n.parcel-information-add .dialog-md .item {\n      width: 50%;\n      line-height: 30px;\n      display: inline-block;\n}\n.parcel-information-add .dialog-md .item .input-special {\n        width: 240px;\n}\n.parcel-information-add .dialog-md .item .title {\n        display: inline-block;\n        width: 120px;\n}\n.parcel-information-add .dialog-md .item .content {\n        margin: 10px;\n        display: inline-block;\n        width: 240px;\n        border: none;\n}\n.parcel-information-add .pagination {\n    padding: 10px;\n}\n"],sourceRoot:""}])},2596:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=C(a(600)),i=C(a(18)),o=C(a(601)),s=C(a(3)),r=C(a(88)),l=C(a(602)),c=C(a(2311)),d=C(a(2346)),m=C(a(6)),u=C(a(5)),p=C(a(7)),f=C(a(8));function C(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{DHLUrl:"https://www.logistics.dhl/cn-zh/home/tracking.html",formData:{parcel_no:"",carrier_order_no:"",carrier_name:"",customer_id:"",customer_name:"",country_code:"+86",telephone:"",address:"",country:"",atten:"",vat_no:"",status:0},orderId:0,areaCodeList:[],customerList:[],dialogTitle:"",dialogVisible:!1,customeFormData:{},tradeTerms:s.default.ConstData.TRADE_TERMS,payment_types:s.default.ConstData.PAYMENT_TYPES,paymentTerms:s.default.ConstData.PAYMENT_TERMS,currencies:s.default.ConstData.CURRENCIES,paymentMethodData:s.default.ConstData.PAYMENT_METHOD}},i18n:{messages:{en:u.default.Component.Order.Save,zh:m.default.Component.Order.Save,de:p.default.Component.Order.Save,nl:f.default.Component.Order.Save}},computed:{},created:function(){var t=(0,o.default)(n.default.mark(function t(){var e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,this.areaCodeList=r.default.init(),this.orderId=this.$route.query.orderId,t.next=5,this.getAllCustomer();case 5:this.orderId&&(this.loading=!0,c.default.getParcelInfo(this.orderId).then(function(t){if(-2===t.data.code)throw t.data.message;e.formData=JSON.parse((0,i.default)(t.data)),e.loading=!1}).catch(function(t){e.$message({message:t,type:"error"}),e.loading=!1}));case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),mounted:function(){},methods:{PhoneRelatedCountry:function(t){var e=this.areaCodeList.find(function(e){return e.area_code===t});this.customeFormData.country=e.area_en},CountryToPhone:function(t){var e=this.areaCodeList.find(function(e){return e.area_en===t});e&&(this.customeFormData.country_code=e.area_code)},goAfterIndex:function(){this.$router.push({name:"ParcelInfo"})},checkParams:function(){return this.formData.customer_id?this.formData.carrier_order_no?!!this.formData.carrier_name||(this.$message({message:"Please add Carrier Name",type:"warning"}),!1):(this.$message({message:"Please add Carrier Order No.",type:"warning"}),!1):(this.$message({message:"Please add Company",type:"warning"}),!1)},createInfo:function(){var t=this,e=this;this.checkParams()&&(e.loading=!0,c.default.postParcelInfo(this.formData).then(function(a){if(-2===a.data.code)throw a.data.message;e.$message({message:"Successfully saved",type:"success"}),e.loading=!1,t.$router.go(-1)}).catch(function(t){e.$message({message:t,type:"error"}),e.loading=!1}))},filterParcelInfo:function(){var t=this;t.loading=!0,c.default.filterParcelInfo(this.currentPage,this.formSearch).then(function(e){if(-2===e.data.code)throw e.data.message;t.tableList=e.data.content,t.total=e.data.totalElements,t.loading=!1}).catch(function(e){t.$message({message:e,type:"error"}),t.loading=!1})},getAllCustomer:function(){var t=(0,o.default)(n.default.mark(function t(){var e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(e=this).loading=!0,t.next=4,l.default.getAllCustomer().then(function(t){if(-2===t.data.code)throw t.data.message;e.customerList=t.data,e.loading=!1}).catch(function(t){e.$message({message:t,type:"error"}),e.loading=!1});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleItemChange:function(t){var e=this.customerList.find(function(e){return e.id===t}),a=this.areaCodeList.find(function(t){return t.area_code===e.country_code});this.formData.customer_name=e&&e.name||"",this.formData.telephone=e&&e.mobile||"",this.formData.address=e&&e.address||"",this.formData.country_code=e&&e.country_code||"+86",this.formData.vat_no=e&&e.vat_no||"",this.formData.atten=e&&e.receiver_name||"",this.formData.country=e&&e.country||a&&a.area_en},dialogAdd:function(){this.dialogTitle="Add Company",this.dialogVisible=!0,this.customeFormData={name:"",company_no:"",account_no:"",payment_method:"",credit_grade:"",credit_line:"",mobile:"",address:"",country_code:"+86",remark:"",star:"",currency:1,customer_id:0,province:"",city:"",district:"",order_memo:"",receiver_name:"",telephone:"",postcode:"",country:"",vat_no:""}},checkDialog:function(){return this.formData.receiver_name?this.formData.name?this.formData.address?this.formData.mobile?!!this.formData.country_code||(this.$message({message:"Please add country code",type:"warning"}),!1):(this.$message({message:"Please add mobile",type:"warning"}),!1):(this.$message({message:"Please add address",type:"warning"}),!1):(this.$message({message:"Please add name",type:"warning"}),!1):(this.$message({message:"Please add Receiver name",type:"warning"}),!1)},dialogConfirm:function(){var t=this;this.loading=!0,d.default.postCompany(this.customeFormData).then(function(e){if(-2===e.code)throw e.message;t.$message({message:"Save Successfully",type:"success"}),t.getAllCustomer(),t.dialogVisible=!1,t.loading=!1}).catch(function(e){t.$message({message:e,type:"error"}),t.loading=!1})},dialogCancel:function(){this.dialogVisible=!1}}}},2597:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"parcel-information-add"},[a("div",{staticClass:"header"},[a("div",{staticClass:"btn-group-inline"},[a("div",{staticClass:"icons"},[a("div",{staticClass:"icon-item back",attrs:{title:"back"},on:{click:t.goAfterIndex}})])]),t._v(" "),a("label",{staticClass:"title"},[t._v(t._s(t.orderId?"Edit Parcel Information":"Add Parcel Information"))])]),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("div",{staticClass:"order-info"},[a("label",{staticClass:"title"},[t._v("Parcel Information")]),t._v(" "),a("div",{staticClass:"left"},[a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[t._v("Parcel No.")]),t._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"Parcel No.",disabled:""},model:{value:t.formData.parcel_no,callback:function(e){t.$set(t.formData,"parcel_no",e)},expression:"formData.parcel_no"}})],1),t._v(" "),a("div",{staticClass:"item"},[t._m(0),t._v(" "),a("div",{staticClass:"input-mager"},[a("el-input",{staticClass:"input-mager-out input-sn",attrs:{placeholder:"Carrier No."},model:{value:t.formData.carrier_order_no,callback:function(e){t.$set(t.formData,"carrier_order_no",e)},expression:"formData.carrier_order_no"}}),t._v(" "),a("el-input",{staticClass:"input-mager-in",attrs:{slot:"prepend",placeholder:"Carrier Name"},slot:"prepend",model:{value:t.formData.carrier_name,callback:function(e){t.$set(t.formData,"carrier_name",e)},expression:"formData.carrier_name"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[t._m(1),t._v(" "),a("el-select",{staticClass:"input",attrs:{slot:"prepend",filterable:"",placeholder:"Company"},on:{change:t.handleItemChange},slot:"prepend",model:{value:t.formData.customer_id,callback:function(e){t.$set(t.formData,"customer_id",e)},expression:"formData.customer_id"}},t._l(t.customerList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),a("a",{staticClass:"btn-underline",on:{click:function(e){return e.stopPropagation(),t.dialogAdd(e)}}},[t._v("Add")])],1),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[t._v("Telephone")]),t._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"Tel",disabled:""},model:{value:t.formData.telephone,callback:function(e){t.$set(t.formData,"telephone",e)},expression:"formData.telephone"}},[a("el-select",{attrs:{slot:"prepend",filterable:"",disabled:""},slot:"prepend",model:{value:t.formData.country_code,callback:function(e){t.$set(t.formData,"country_code",e)},expression:"formData.country_code"}},t._l(t.areaCodeList,function(t){return a("el-option",{key:t.area_code,attrs:{label:t.area_code,value:t.area_code}})}))],1)],1),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[t._v("Address")]),t._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"Address",disabled:""},model:{value:t.formData.address,callback:function(e){t.$set(t.formData,"address",e)},expression:"formData.address"}})],1),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[t._v("Country")]),t._v(" "),a("el-select",{staticClass:"input",attrs:{slot:"prepend",filterable:"",disabled:""},slot:"prepend",model:{value:t.formData.country,callback:function(e){t.$set(t.formData,"country",e)},expression:"formData.country"}},t._l(t.areaCodeList,function(t){return a("el-option",{key:t.area_code,attrs:{label:t.area_en,value:t.area_en}})}))],1),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[t._v("Atten")]),t._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"Atten",disabled:""},model:{value:t.formData.atten,callback:function(e){t.$set(t.formData,"atten",e)},expression:"formData.atten"}})],1),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[t._v("Vat No.")]),t._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"Vat No.",disabled:""},model:{value:t.formData.vat_no,callback:function(e){t.$set(t.formData,"vat_no",e)},expression:"formData.vat_no"}})],1)])]),t._v(" "),a("div",{staticClass:"footer"},[a("el-button",{attrs:{type:"primary",disabled:t.formData.status>=1},on:{click:t.createInfo}},[t._v("Save")])],1)])]),t._v(" "),a("el-dialog",{staticClass:"dialog-md",attrs:{title:t.dialogTitle,visible:t.dialogVisible,"custom-class":"edit-dialog"},on:{"update:title":function(e){t.dialogTitle=e},"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("\n        Company Name\n        "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("div",{staticClass:"content"},[a("el-input",{attrs:{placeholder:"Name"},model:{value:t.customeFormData.name,callback:function(e){t.$set(t.customeFormData,"name",e)},expression:"customeFormData.name"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("\n        Customer No.\n        "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("div",{staticClass:"content"},[a("el-input",{staticClass:"input",attrs:{placeholder:"Nick name"},model:{value:t.customeFormData.company_no,callback:function(e){t.$set(t.customeFormData,"company_no",e)},expression:"customeFormData.company_no"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("\n        Currency\n        "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("div",{staticClass:"content"},[a("el-select",{staticClass:"input input-special",attrs:{slot:"prepend"},slot:"prepend",model:{value:t.customeFormData.currency,callback:function(e){t.$set(t.customeFormData,"currency",e)},expression:"customeFormData.currency"}},t._l(t.currencies,function(t){return a("el-option",{key:t.currency,attrs:{label:t.label,value:t.currency,"value-key":t.currency}})}))],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("\n        Email\n        "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("div",{staticClass:"content"},[a("el-input",{staticClass:"input",attrs:{placeholder:"Service email"},model:{value:t.customeFormData.email,callback:function(e){t.$set(t.customeFormData,"email",e)},expression:"customeFormData.email"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("\n        Phone\n        "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("div",{staticClass:"content"},[a("el-input",{staticClass:"input",model:{value:t.customeFormData.mobile,callback:function(e){t.$set(t.customeFormData,"mobile",e)},expression:"customeFormData.mobile"}},[a("el-select",{attrs:{slot:"prepend",filterable:""},on:{change:t.PhoneRelatedCountry},slot:"prepend",model:{value:t.customeFormData.country_code,callback:function(e){t.$set(t.customeFormData,"country_code",e)},expression:"customeFormData.country_code"}},t._l(t.areaCodeList,function(t){return a("el-option",{key:t.area_code,attrs:{label:t.area_code,value:t.area_code}})}))],1)],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("\n        Country\n        "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("div",{staticClass:"content"},[a("el-select",{staticClass:"input input-special",attrs:{slot:"prepend",filterable:""},on:{change:t.CountryToPhone},slot:"prepend",model:{value:t.customeFormData.country,callback:function(e){t.$set(t.customeFormData,"country",e)},expression:"customeFormData.country"}},t._l(t.areaCodeList,function(t){return a("el-option",{key:t.area_code,attrs:{label:t.area_en,value:t.area_en}})}))],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("Province")]),t._v(" "),a("div",{staticClass:"content"},[a("el-input",{staticClass:"input",model:{value:t.customeFormData.province,callback:function(e){t.$set(t.customeFormData,"province",e)},expression:"customeFormData.province"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("City")]),t._v(" "),a("div",{staticClass:"content"},[a("el-input",{staticClass:"input",model:{value:t.customeFormData.city,callback:function(e){t.$set(t.customeFormData,"city",e)},expression:"customeFormData.city"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("District")]),t._v(" "),a("div",{staticClass:"content"},[a("el-input",{staticClass:"input",model:{value:t.customeFormData.district,callback:function(e){t.$set(t.customeFormData,"district",e)},expression:"customeFormData.district"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("\n        Address\n        "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("div",{staticClass:"content"},[a("el-input",{staticClass:"input",model:{value:t.customeFormData.address,callback:function(e){t.$set(t.customeFormData,"address",e)},expression:"customeFormData.address"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("\n        Account No.\n        "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("div",{staticClass:"content"},[a("el-input",{staticClass:"input",attrs:{placeholder:"Account number"},model:{value:t.customeFormData.account_no,callback:function(e){t.$set(t.customeFormData,"account_no",e)},expression:"customeFormData.account_no"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("VAT No.")]),t._v(" "),a("div",{staticClass:"content"},[a("el-input",{staticClass:"input",attrs:{placeholder:"Customer company VAT.NO"},model:{value:t.customeFormData.vat_no,callback:function(e){t.$set(t.customeFormData,"vat_no",e)},expression:"customeFormData.vat_no"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("\n        Payment Method\n        "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("div",{staticClass:"content"},[a("el-select",{staticClass:"input",attrs:{slot:"prepend",placeholder:"Select Payment Method",filterable:""},slot:"prepend",model:{value:t.customeFormData.payment_method,callback:function(e){t.$set(t.customeFormData,"payment_method",e)},expression:"customeFormData.payment_method"}},t._l(t.paymentMethodData,function(t){return a("el-option",{key:t.id,attrs:{label:t.label,value:t.id}})}))],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("\n        Trade Terms\n        "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("div",{staticClass:"content"},[a("el-select",{staticClass:"input",attrs:{slot:"append",placeholder:"Select Trade Terms",filterable:""},slot:"append",model:{value:t.customeFormData.trade_term,callback:function(e){t.$set(t.customeFormData,"trade_term",e)},expression:"customeFormData.trade_term"}},t._l(t.tradeTerms,function(t){return a("el-option",{key:t.id,attrs:{label:t.label,value:t.label}})}))],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("\n        Payment Term\n        "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("div",{staticClass:"content"},[a("el-select",{staticClass:"input",attrs:{slot:"append",placeholder:"Select Payment Term",filterable:""},slot:"append",model:{value:t.customeFormData.payment_term,callback:function(e){t.$set(t.customeFormData,"payment_term",e)},expression:"customeFormData.payment_term"}},t._l(t.paymentTerms,function(t){return a("el-option",{key:t.id,attrs:{label:t.label,value:t.label}})}))],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("\n        Receiver Name\n        "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("div",{staticClass:"content"},[a("el-input",{staticClass:"input",attrs:{placeholder:"Company contact"},model:{value:t.customeFormData.receiver_name,callback:function(e){t.$set(t.customeFormData,"receiver_name",e)},expression:"customeFormData.receiver_name"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("el-tooltip",{attrs:{effect:"dark",content:"The bigger the number, the better the quota",placement:"top"}},[a("label",{staticClass:"title"},[t._v("Credit Line")])]),t._v(" "),a("div",{staticClass:"content"},[a("el-input-number",{staticClass:"input input-special",attrs:{min:1},model:{value:t.customeFormData.credit_line,callback:function(e){t.$set(t.customeFormData,"credit_line",e)},expression:"customeFormData.credit_line"}})],1)],1),t._v(" "),a("div",{staticClass:"item"},[a("el-tooltip",{attrs:{effect:"dark",content:"The bigger the number, the better the credit",placement:"top-start"}},[a("label",{staticClass:"title"},[t._v("Credit Grade")])]),t._v(" "),a("div",{staticClass:"content"},[a("el-input-number",{staticClass:"input input-special",attrs:{min:1},model:{value:t.customeFormData.credit_grade,callback:function(e){t.$set(t.customeFormData,"credit_grade",e)},expression:"customeFormData.credit_grade"}})],1)],1),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("Service level")]),t._v(" "),a("div",{staticClass:"content"},[a("el-input-number",{staticClass:"input input-special",attrs:{min:1},model:{value:t.customeFormData.star,callback:function(e){t.$set(t.customeFormData,"star",e)},expression:"customeFormData.star"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("Remark")]),t._v(" "),a("div",{staticClass:"content"},[a("el-input",{staticClass:"input",model:{value:t.customeFormData.remark,callback:function(e){t.$set(t.customeFormData,"remark",e)},expression:"customeFormData.remark"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("Order Memo")]),t._v(" "),a("div",{staticClass:"content"},[a("el-input",{staticClass:"input",model:{value:t.customeFormData.order_memo,callback:function(e){t.$set(t.customeFormData,"order_memo",e)},expression:"customeFormData.order_memo"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[t._v("Telephone")]),t._v(" "),a("div",{staticClass:"content"},[a("el-input",{staticClass:"input",attrs:{min:1},model:{value:t.customeFormData.telephone,callback:function(e){t.$set(t.customeFormData,"telephone",e)},expression:"customeFormData.telephone"}})],1)]),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"preview"},on:{click:t.dialogConfirm}},[t._v("confirm")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.dialogCancel}},[t._v("cancel")])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"label"},[this._v("\n              Carrier No./Name\n              "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"label"},[this._v("\n              Company\n              "),e("span",{staticClass:"required"},[this._v("*")])])}]}}});
//# sourceMappingURL=30.a71d030d2c14b2ea668c.js.map