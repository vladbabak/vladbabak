webpackJsonp([8],{2160:function(t,e,a){var i=a(2)(a(2658),a(2659),function(t){a(2656)},"data-v-06aeb376",null);t.exports=i.exports},2173:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n,l=u(a(600)),s=u(a(601)),r=(i=(0,s.default)(l.default.mark(function t(){return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d.default.Api.Category.getAllCategoryListOfBafang(d.default.Const.COMPONENT_ROOT_CATEGORY));case 1:case"end":return t.stop()}},t,this)})),function(){return i.apply(this,arguments)}),o=(n=(0,s.default)(l.default.mark(function t(){return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d.default.HttpHelp.request({method:"GET",url:"/nl/nlPublic/company/all"}));case 1:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)}),d=u(a(3));function u(t){return t&&t.__esModule?t:{default:t}}var c={getAllCategory:r,getAllCustomer:o};e.default=c},2301:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=o(a(600)),l=o(a(601)),s=(i=(0,l.default)(n.default.mark(function t(){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r.default.HttpHelp.request({method:"GET",url:"/NlWarehouseArea/all"}));case 1:case"end":return t.stop()}},t,this)})),function(){return i.apply(this,arguments)}),r=o(a(3));function o(t){return t&&t.__esModule?t:{default:t}}var d={findAll:s,addOneArea:function(t){return r.default.HttpHelp.request({method:"POST",url:"/NlWarehouseArea",data:t})},deleteOneArea:function(t){return r.default.HttpHelp.request({method:"DELETE",url:"/NlWarehouseArea/"+t})},areaFilter:function(t,e,a){return r.default.HttpHelp.request({method:"POST",url:"/NlWarehouseArea/filter",data:t,params:{page:e||0,size:a||10}})}};e.default=d},2302:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=a(3),l=(i=n)&&i.__esModule?i:{default:i};var s={findAll:function(){return l.default.HttpHelp.request({method:"GET",url:"/NlWarehouse/findAll"})},addOneWarehouse:function(t){return l.default.HttpHelp.request({method:"POST",url:"/NlWarehouse",data:t})},deleteOneWarehouse:function(t){return l.default.HttpHelp.request({method:"DELETE",url:"/NlWarehouse/"+t})},listFilter:function(t,e,a){return l.default.HttpHelp.request({method:"POST",url:"/NlWarehouse/filter",data:t,params:{page:e||0,size:a||10}})},sSwitch:function(t){return l.default.HttpHelp.request({method:"get",url:"/NlWarehouse/"+t+"/sswitch"})}};e.default=s},2304:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=o(a(600)),l=o(a(601)),s=(i=(0,l.default)(n.default.mark(function t(){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r.default.HttpHelp.request({method:"GET",url:"/NlProduct/findNlProductByOrgId"}));case 1:case"end":return t.stop()}},t,this)})),function(){return i.apply(this,arguments)}),r=o(a(3));function o(t){return t&&t.__esModule?t:{default:t}}var d={filter:function(t,e,a){return r.default.HttpHelp.request({method:"POST",url:"/NlProduct/filter2",data:t,params:{page:e||0,size:a||10}})},find:function(t,e){return r.default.HttpHelp.request({method:"GET",url:"/NlProduct",data:{page:t||0,size:e||10}})},findAll:s,save:function(t){return r.default.HttpHelp.request({method:"POST",url:"/NlProduct/save2",data:t})},remove:function(t){return r.default.HttpHelp.request({method:"DELETE",url:"/NlProduct/"+t})},importfile:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.default.HttpHelp.request({method:"POST",url:"/NlProduct/importProduct",data:t,params:{override:e}})},exportTemplate:function(){return r.default.HttpHelp.request({method:"GET",url:"/NlProduct/exportTemplate",responseType:"blob"})}};e.default=d},2309:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=a(3),l=(i=n)&&i.__esModule?i:{default:i};var s={findAll:function(){return l.default.HttpHelp.request({method:"GET",url:"/NlWarehouseLocation/all"})},addOneLocation:function(t){return l.default.HttpHelp.request({method:"POST",url:"/NlWarehouseLocation",data:t})},deleteOneLocation:function(t){return l.default.HttpHelp.request({method:"DELETE",url:"/NlWarehouseLocation/"+t})},locationFilter:function(t,e,a){return l.default.HttpHelp.request({method:"POST",url:"/NlWarehouseLocation/filter",data:t,params:{page:e||0,size:a||10}})}};e.default=s},2355:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=a(3),l=(i=n)&&i.__esModule?i:{default:i};var s={filter:function(t,e,a){return l.default.HttpHelp.request({method:"POST",url:"/NlInStock/filter",data:t,params:{page:e||0,size:a||10}})},find:function(t,e){return l.default.HttpHelp.request({method:"GET",url:"/NlInStock",data:{page:t||0,size:e||10}})},findAll:function(){return l.default.HttpHelp.request({method:"GET",url:"/NlInStock/all"})},save:function(t){return l.default.HttpHelp.request({method:"POST",url:"/NlInStock",data:t})},remove:function(t){return l.default.HttpHelp.request({method:"DELETE",url:"/NlInStock/"+t})},allStock:function(t,e,a){return l.default.HttpHelp.request({method:"POST",url:"/nl/stockHistoryItem/find",params:{productCode:t.product_code,warehouseCode:t.warehouse_code,page:e||0,size:a||10}})},print:function(t,e){return l.default.HttpHelp.request({method:"POST",url:"/NlInStock/printGrnPdf",data:t,params:e})},filterAll:function(t){return l.default.HttpHelp.request({method:"POST",url:"/NlInStock/filterAll",data:{nl_in_stock_header_id:t}})},saveHeader:function(t){return l.default.HttpHelp.request({header:{"Content-Type":void 0},method:"POST",url:"/NlInStock/save2",data:t})},exportfile:function(t){return l.default.HttpHelp.request({method:"GET",url:"/NlInStock/exportNlInStock",data:t,responseType:"blob"})}};e.default=s},2356:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=a(3),l=(i=n)&&i.__esModule?i:{default:i};var s={filter:function(t,e,a){return l.default.HttpHelp.request({method:"POST",url:"/NlInStockHeader/filter2",data:t,params:{page:e||0,size:a||10}})},save:function(t){return l.default.HttpHelp.request({method:"POST",url:"/NlInStockHeader/save2",data:t})},remove:function(t){return l.default.HttpHelp.request({method:"DELETE",url:"/NlInStockHeader/"+t})},findOne:function(t){return l.default.HttpHelp.request({method:"GET",url:"/NlInStockHeader/"+t})},approved:function(t){return l.default.HttpHelp.request({method:"PUT",url:"/NlInStockHeader/"+t+"/approved"})}};e.default=s},2656:function(t,e,a){var i=a(2657);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(2089)("def9bb70",i,!0,{})},2657:function(t,e,a){(t.exports=a(2088)(!0)).push([t.i,".content[data-v-06aeb376]{width:calc(100% - 400px)!important;min-width:1250px;border:1px solid #2b2f3b}.content span.required[data-v-06aeb376]{color:#e26829;display:inline-block}.content .order-info[data-v-06aeb376]{width:100%;height:300px}.content .order-info .title[data-v-06aeb376]{height:50px;line-height:50px;padding-left:40px}.content .order-info .left[data-v-06aeb376]{float:left;width:100%;height:270px;background:#353945;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b}.content .order-info .left .item[data-v-06aeb376]{line-height:60px;overflow:hidden;width:49%;height:50px;display:inline-block}.content .order-info .left .item .label[data-v-06aeb376]{display:inline-block;width:125px;margin-left:15px}.content .order-info .left .item .input[data-v-06aeb376]{margin-left:10px;width:256px;border-radius:0 0 10px 10px}.content .order-info .left .item .input-left[data-v-06aeb376]{margin-left:10px;width:200px}.content .order-info .left .item .input-right[data-v-06aeb376]{width:200px}.content .order-info .left .item .input-note[data-v-06aeb376]{margin-left:10px;width:608px}.content .parts-list[data-v-06aeb376]{text-align:right;padding:0 40px;font-size:12px;overflow:hidden;height:50px;line-height:50px;width:100%;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b}.content .parts-list .att-btn[data-v-06aeb376]{padding:6px 9px;min-width:0;margin:11px auto;display:block}.content .parts-list .labelAdd[data-v-06aeb376]{margin-left:14px}.content .table-wrap[data-v-06aeb376]{width:100%;height:calc(100% - 392px);-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b}.dialog-region .el-dialog__body[data-v-06aeb376]{padding:30px 67px}.dialog-region .item[data-v-06aeb376]{margin:20px 0;font-size:0;height:30px}.dialog-region .item .item-box[data-v-06aeb376]{line-height:30px}.dialog-region .item .label[data-v-06aeb376]{display:inline-block;width:120px;height:30px;vertical-align:middle}.dialog-region .item .label span[data-v-06aeb376]{color:#e26829;display:inline-block}.dialog-region .item .input[data-v-06aeb376]{margin-left:40px;width:260px}.dialog-region .item .input i[data-v-06aeb376]{color:#ffffff99}","",{version:3,sources:["C:/Users/dd/Desktop/besst-build/clientBESST/src/views/nl-view/stocks/in-detail.vue"],names:[],mappings:"AACA,0BACE,mCAAqC,AACrC,iBAAkB,AAClB,wBAA0B,CAC3B,AACD,wCACI,cAAe,AACf,oBAAsB,CACzB,AACD,sCACI,WAAY,AACZ,YAAc,CACjB,AACD,6CACM,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CACxB,AACD,4CACM,WAAY,AACZ,WAAY,AACZ,aAAc,AACd,mBAAoB,AACpB,kCAAmC,AAC3B,yBAA2B,CACxC,AACD,kDACQ,iBAAkB,AAClB,gBAAiB,AACjB,UAAW,AACX,YAAa,AACb,oBAAsB,CAC7B,AACD,yDACU,qBAAsB,AACtB,YAAa,AACb,gBAAkB,CAC3B,AACD,yDACU,iBAAkB,AAClB,YAAa,AACb,2BAA6B,CACtC,AACD,8DACU,iBAAkB,AAClB,WAAa,CACtB,AACD,+DACU,WAAa,CACtB,AACD,8DACU,iBAAkB,AAClB,WAAa,CACtB,AACD,sCACI,iBAAkB,AAClB,eAAgB,AAChB,eAAgB,AAChB,gBAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,WAAY,AACZ,kCAAmC,AAC3B,yBAA2B,CACtC,AACD,+CACM,gBAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,aAAe,CACpB,AACD,gDACM,gBAAkB,CACvB,AACD,sCACI,WAAY,AACZ,0BAA2B,AAC3B,kCAAmC,AAC3B,yBAA2B,CACtC,AACD,iDACE,iBAAmB,CACpB,AACD,sCACE,cAAe,AACf,YAAa,AACb,WAAa,CACd,AACD,gDACI,gBAAkB,CACrB,AACD,6CACI,qBAAsB,AACtB,YAAa,AACb,YAAa,AACb,qBAAuB,CAC1B,AACD,kDACM,cAAe,AACf,oBAAsB,CAC3B,AACD,6CACI,iBAAkB,AAClB,WAAa,CAChB,AACD,+CACM,eAAiB,CACtB",file:"in-detail.vue",sourcesContent:["\n.content[data-v-06aeb376] {\n  width: calc(100% - 400px) !important;\n  min-width: 1250px;\n  border: 1px solid #2b2f3b;\n}\n.content span.required[data-v-06aeb376] {\n    color: #e26829;\n    display: inline-block;\n}\n.content .order-info[data-v-06aeb376] {\n    width: 100%;\n    height: 300px;\n}\n.content .order-info .title[data-v-06aeb376] {\n      height: 50px;\n      line-height: 50px;\n      padding-left: 40px;\n}\n.content .order-info .left[data-v-06aeb376] {\n      float: left;\n      width: 100%;\n      height: 270px;\n      background: #353945;\n      -webkit-box-shadow: 0 -1px #2b2f3b;\n              box-shadow: 0 -1px #2b2f3b;\n}\n.content .order-info .left .item[data-v-06aeb376] {\n        line-height: 60px;\n        overflow: hidden;\n        width: 49%;\n        height: 50px;\n        display: inline-block;\n}\n.content .order-info .left .item .label[data-v-06aeb376] {\n          display: inline-block;\n          width: 125px;\n          margin-left: 15px;\n}\n.content .order-info .left .item .input[data-v-06aeb376] {\n          margin-left: 10px;\n          width: 256px;\n          border-radius: 0 0 10px 10px;\n}\n.content .order-info .left .item .input-left[data-v-06aeb376] {\n          margin-left: 10px;\n          width: 200px;\n}\n.content .order-info .left .item .input-right[data-v-06aeb376] {\n          width: 200px;\n}\n.content .order-info .left .item .input-note[data-v-06aeb376] {\n          margin-left: 10px;\n          width: 608px;\n}\n.content .parts-list[data-v-06aeb376] {\n    text-align: right;\n    padding: 0 40px;\n    font-size: 12px;\n    overflow: hidden;\n    height: 50px;\n    line-height: 50px;\n    width: 100%;\n    -webkit-box-shadow: 0 -1px #2b2f3b;\n            box-shadow: 0 -1px #2b2f3b;\n}\n.content .parts-list .att-btn[data-v-06aeb376] {\n      padding: 6px 9px;\n      min-width: 0;\n      margin: 11px auto;\n      display: block;\n}\n.content .parts-list .labelAdd[data-v-06aeb376] {\n      margin-left: 14px;\n}\n.content .table-wrap[data-v-06aeb376] {\n    width: 100%;\n    height: calc(100% - 392px);\n    -webkit-box-shadow: 0 -1px #2b2f3b;\n            box-shadow: 0 -1px #2b2f3b;\n}\n.dialog-region .el-dialog__body[data-v-06aeb376] {\n  padding: 30px 67px;\n}\n.dialog-region .item[data-v-06aeb376] {\n  margin: 20px 0;\n  font-size: 0;\n  height: 30px;\n}\n.dialog-region .item .item-box[data-v-06aeb376] {\n    line-height: 30px;\n}\n.dialog-region .item .label[data-v-06aeb376] {\n    display: inline-block;\n    width: 120px;\n    height: 30px;\n    vertical-align: middle;\n}\n.dialog-region .item .label span[data-v-06aeb376] {\n      color: #e26829;\n      display: inline-block;\n}\n.dialog-region .item .input[data-v-06aeb376] {\n    margin-left: 40px;\n    width: 260px;\n}\n.dialog-region .item .input i[data-v-06aeb376] {\n      color: #ffffff99;\n}\n"],sourceRoot:""}])},2658:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=f(a(311)),n=f(a(18)),l=f(a(3)),s=f(a(2173)),r=f(a(2302)),o=f(a(2301)),d=f(a(2309)),u=f(a(2304)),c=f(a(2356)),p=f(a(2355));function f(t){return t&&t.__esModule?t:{default:t}}e.default={props:["id"],computed:{getArea:function(){var t=this;if(this.materialData&&this.materialData.warehouse_id)return this.areaList.filter(function(e){return e.warehouse_id===t.materialData.warehouse_id})},getLocation:function(){var t=this;if(this.materialData&&this.materialData.warehouse_area_id)return this.locationList.filter(function(e){return e.area_id===t.materialData.warehouse_area_id})},getProducts:function(){var t=this;if(this.materialData&&this.materialData.category_id)return this.productList.filter(function(e){return e.category_id===t.materialData.category_id})},getPayType:function(){if(this.materialData&&this.materialData.type)return 1===this.materialData.type}},data:function(){return{editControl:0!=this.id,org:l.default.Data.getOrg(),headData:["Category","Material Name","Material Code","Warehouse","Warehouse Area","Loction Code","Quantity","Payment Type","Duty","Date","User","Operation"],formData:{order_no:"",source_from:"",date:"",tracking_no:"",invoice_no:"",freight:0,trade_term:""},PurposeList:l.default.StatusData.PURPOSE,customerList:[],tableList:[],categoryList:[],materialData:{},dialogTitle:"",dialogAddVisible:!1,warehouseList:[],areaList:[],locationList:[],productList:[],currencies:l.default.StatusData.CURRENCIES,tradeTermList:l.default.StatusData.TRADE_TERM,showPayType:!1,payTypeArr:l.default.StatusData.STOCKS_PAY_TYPE,transportMethodList:l.default.StatusData.TRANSPORT_METHOD,isEdit:!1,copyData:{}}},created:function(){var t=this;this.loading=!0,s.default.getAllCustomer().then(function(e){t.customerList=e.data,t.loading=!1}),this.loading=!0,s.default.getAllCategory().then(function(e){t.categoryList=e.category_list.map(function(t,e){return{id:t.id,name:t.name,isActive:0==e}}),t.loading=!1}),this.loading=!0,r.default.findAll().then(function(e){t.warehouseList=e.data,t.loading=!1}),this.loading=!0,o.default.findAll().then(function(e){t.areaList=e.data,t.loading=!1}),this.loading=!0,d.default.findAll().then(function(e){t.locationList=e.data,t.loading=!1}),this.loading=!0,u.default.findAll().then(function(e){t.productList=e.data,t.loading=!1}),0!=this.id&&(this.loading=!0,c.default.findOne(this.id).then(function(e){t.formData=e.data,t.formData.date=l.default.Util.changeDateForm(1e3*e.data.date),t.loading=!1}),this.loading=!0,p.default.filterAll(this.id).then(function(e){t.tableList=e.data,t.loading=!1}))},methods:{goAfterIndex:function(){this.$router.push({name:"stockIn"})},selectHandle:function(t){var e=this.productList.find(function(e){return e.product_code===t});e&&(this.materialData.product_name=e.name,this.materialData.specification=e.specification)},selectCategory:function(t){var e=this.categoryList.find(function(e){return e.id===t});e&&(this.materialData.category_name=e.name)},selectLocation:function(t){var e=this.locationList.find(function(e){return e.id===t});e&&(this.materialData.location_code=e.location_code)},selectArea:function(t){var e=this.areaList.find(function(e){return e.id===t});e&&(this.materialData.warehouse_area_name=e.area_name)},selectWarehouse:function(t){var e=this.warehouseList.find(function(e){return e.id===t});e&&(this.materialData.warehouse_name=e.warehouse_name)},setDuty:function(){this.materialData&&this.materialData.qty>0?this.materialData.duty=this.materialData.total_duty/this.materialData.qty:this.materialData.duty=0},onSave:function(){var t=this,e=this;this.$confirm("Cannot be modified after saving, continue?","prompt",{confirmButtonText:"Submit",cancelButtonText:"Cancel",type:"warning"}).then(function(){t.headerRequired()&&(t.loading=!0,t.formData.date=l.default.Util.parseDate(t.formData.date),p.default.saveHeader({nlInStockHeader:t.formData,nlInStocks:t.tableList}).then(function(t){if(200!==t.status)throw t.data.message;e.loading=!1,e.$message({message:"Update Successful !",type:"success"}),e.$router.push({name:"stockIn"})}).catch(function(t){e.$message({message:t,type:"error"}),e.loading=!1}))}).catch(function(){t.$message({type:"info",message:"Cancelled"})})},onAdd:function(){var t=this;this.isEdit=!1,this.materialData={id:0,warehouse_id:"",warehouse_code:"",product_name:"",specification:"",product_code:"",qty:"",duty:0,total_duty:0,type:"",price:0,currency:2,description:"",freight:0};var e=this.warehouseList.filter(function(e){return e.country===t.org.country});e.length>0&&(this.materialData.warehouse_id=e[0].id),this.dialogTitle="Add Material",this.dialogAddVisible=!0},onEdit:function(t){this.dialogTitle="Update Material",this.isEdit=!0,this.copyData=JSON.parse((0,n.default)(t)),this.materialData=t,this.dialogAddVisible=!0},onDelete:function(t,e){this.tableList.splice(e,1)},dialogConfirm:function(){this.required()&&(this.isEdit||this.tableList.push(this.materialData),this.dialogAddVisible=!1)},dialogCancel:function(){(0,i.default)(this.materialData,this.copyData),this.dialogAddVisible=!1},required:function(){return""===this.materialData.warehouse_id?(this.$message({message:"Please input Warehouse!",type:"warning"}),!1):""===this.materialData.warehouse_area_id?(this.$message({message:"Please input Area !",type:"warning"}),!1):""===this.materialData.location_id?(this.$message({message:"Please input Location Code !",type:"warning"}),!1):""===this.materialData.product_code?(this.$message({message:"Please input Material Code !",type:"warning"}),!1):""===this.materialData.qty?(this.$message({message:"Please input Quantity !",type:"warning"}),!1):""===this.materialData.duty?(this.$message({message:"Please input Duty!",type:"warning"}),!1):""!==this.materialData.type||(this.$message({message:"Please input Payment Type!",type:"warning"}),!1)},headerRequired:function(){return""==this.formData.order_no?(this.$message({message:"Please input Order No. !",type:"warning"}),!1):""===this.formData.source_from?(this.$message({message:"Please input Source From !",type:"warning"}),!1):""===this.formData.invoice_no?(this.$message({message:"Please input Invoice No. !",type:"warning"}),!1):""===this.formData.tracking_no?(this.$message({message:"Please input Tracking No. !",type:"warning"}),!1):""!==this.formData.date||(this.$message({message:"Please input date !",type:"warning"}),!1)}}}},2659:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header"},[a("div",{staticClass:"btn-group-inline"},[a("div",{staticClass:"icons"},[a("div",{staticClass:"icon-item back",attrs:{title:"back"},on:{click:t.goAfterIndex}})])]),t._v(" "),a("label",{staticClass:"title"},[t._v(t._s(t.id?"Edit Stock in":"Add Stock in"))]),t._v(" "),a("div",{staticClass:"btn-group-top"},[a("div",{staticClass:"icons"},[t.editControl&&0!=t.formData.status?t._e():a("div",{staticClass:"icon-item save",attrs:{title:"save"},on:{click:t.onSave}})])])]),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("div",{staticClass:"order-info"},[a("label",{staticClass:"title"},[t._v("Order Info")]),t._v(" "),a("div",{staticClass:"left"},[a("div",{staticClass:"item"},[t._m(0),t._v(" "),a("el-input",{staticClass:"input input-sn",model:{value:t.formData.order_no,callback:function(e){t.$set(t.formData,"order_no",e)},expression:"formData.order_no"}})],1),t._v(" "),a("div",{staticClass:"item"},[t._m(1),t._v(" "),a("el-input",{staticClass:"input",model:{value:t.formData.source_from,callback:function(e){t.$set(t.formData,"source_from",e)},expression:"formData.source_from"}})],1),t._v(" "),a("div",{staticClass:"item"},[t._m(2),t._v(" "),a("el-input",{staticClass:"input",model:{value:t.formData.invoice_no,callback:function(e){t.$set(t.formData,"invoice_no",e)},expression:"formData.invoice_no"}})],1),t._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[t._v("Transport Method")]),t._v(" "),a("el-select",{staticClass:"input",model:{value:t.formData.transport_method,callback:function(e){t.$set(t.formData,"transport_method",e)},expression:"formData.transport_method"}},t._l(t.transportMethodList,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})}))],1),t._v(" "),a("div",{staticClass:"item"},[t._m(3),t._v(" "),a("el-select",{staticClass:"input",attrs:{slot:"prepend",filterable:""},slot:"prepend",model:{value:t.formData.trade_term,callback:function(e){t.$set(t.formData,"trade_term",e)},expression:"formData.trade_term"}},t._l(t.tradeTermList,function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("div",{staticClass:"item"},[t._m(4),t._v(" "),a("el-input",{staticClass:"input",model:{value:t.formData.tracking_no,callback:function(e){t.$set(t.formData,"tracking_no",e)},expression:"formData.tracking_no"}})],1),t._v(" "),a("div",{staticClass:"item"},[t._m(5),t._v(" "),a("el-input",{staticClass:"input",attrs:{min:"0",type:"number"},model:{value:t.formData.freight,callback:function(e){t.$set(t.formData,"freight",t._n(e))},expression:"formData.freight"}})],1),t._v(" "),a("div",{staticClass:"item"},[t._m(6),t._v(" "),a("el-date-picker",{staticClass:"input",attrs:{type:"date",placeholder:"Date"},model:{value:t.formData.date,callback:function(e){t.$set(t.formData,"date",e)},expression:"formData.date"}})],1)])]),t._v(" "),a("div",{staticClass:"table-wrap"},[a("table",{staticClass:"table-content",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[a("thead",t._l(t.headData,function(e,i){return a("td",{key:i},[t._v(t._s(e))])})),t._v(" "),a("tbody",t._l(t.tableList,function(e,i){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category_name||"-"))]),t._v(" "),a("td",[t._v(t._s(e.product_name))]),t._v(" "),a("td",[t._v(t._s(e.product_code))]),t._v(" "),a("td",[t._v(t._s(e.warehouse_name))]),t._v(" "),a("td",[t._v(t._s(e.warehouse_area_name))]),t._v(" "),a("td",[t._v(t._s(e.location_code))]),t._v(" "),a("td",[t._v(t._s(e.qty))]),t._v(" "),a("td",[t._v(t._s(e.type?"Pay":"Free"))]),t._v(" "),a("td",[t._v(t._s(e.duty))]),t._v(" "),a("td",[t._v(t._s(t._f("timeFormat")(e.create_time,"Y-m-d")))]),t._v(" "),a("td",[t._v(t._s(e.create_user_id))]),t._v(" "),a("td",[a("button",{staticClass:"btn-underline",attrs:{disabled:t.editControl&&1==t.formData.status},on:{click:function(a){a.stopPropagation(),t.onEdit(e)}}},[t._v("Edit")]),t._v(" "),a("button",{staticClass:"btn-underline",attrs:{disabled:t.editControl&&1==t.formData.status},on:{click:function(a){a.stopPropagation(),t.onDelete(e,i)}}},[t._v("Delete")])])])}))])]),t._v(" "),a("div",{staticClass:"parts-list"},[a("el-button",{staticClass:"att-btn",attrs:{type:"primary",disabled:t.editControl&&1==t.formData.status},on:{click:t.onAdd}},[t._v("+")])],1)])]),t._v(" "),a("el-dialog",{staticClass:"dialog-region",attrs:{title:t.dialogTitle,visible:t.dialogAddVisible},on:{"update:title":function(e){t.dialogTitle=e},"update:visible":function(e){t.dialogAddVisible=e}}},[a("div",{staticClass:"item"},[a("div",{staticClass:"item-box"},[a("label",{staticClass:"label"},[t._v("\n          Warehouse\n          "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("el-select",{staticClass:"input",attrs:{slot:"prepend",filterable:""},on:{change:t.selectWarehouse},slot:"prepend",model:{value:t.materialData.warehouse_id,callback:function(e){t.$set(t.materialData,"warehouse_id",e)},expression:"materialData.warehouse_id"}},t._l(t.warehouseList,function(t){return a("el-option",{key:t.id,attrs:{label:t.warehouse_name,value:t.id}})}))],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-box"},[a("label",{staticClass:"label"},[t._v("\n          Area\n          "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("el-select",{staticClass:"input",attrs:{slot:"prepend",filterable:""},on:{change:t.selectArea},slot:"prepend",model:{value:t.materialData.warehouse_area_id,callback:function(e){t.$set(t.materialData,"warehouse_area_id",e)},expression:"materialData.warehouse_area_id"}},t._l(t.getArea,function(t){return a("el-option",{key:t.id,attrs:{label:t.area_name,value:t.id}})}))],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-box"},[a("label",{staticClass:"label"},[t._v("\n          Location Code\n          "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("el-select",{staticClass:"input",attrs:{slot:"prepend",filterable:""},on:{change:t.selectLocation},slot:"prepend",model:{value:t.materialData.location_id,callback:function(e){t.$set(t.materialData,"location_id",e)},expression:"materialData.location_id"}},t._l(t.getLocation,function(t){return a("el-option",{key:t.id,attrs:{label:t.location_code,value:t.id}})}))],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-box"},[a("label",{staticClass:"label"},[t._v("\n          Category\n          "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("el-select",{staticClass:"input",attrs:{slot:"prepend",filterable:""},on:{change:t.selectCategory},slot:"prepend",model:{value:t.materialData.category_id,callback:function(e){t.$set(t.materialData,"category_id",e)},expression:"materialData.category_id"}},t._l(t.categoryList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-box"},[a("label",{staticClass:"label"},[t._v("\n          Material Code\n          "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("el-select",{staticClass:"input",attrs:{slot:"prepend",filterable:""},on:{change:t.selectHandle},slot:"prepend",model:{value:t.materialData.product_code,callback:function(e){t.$set(t.materialData,"product_code",e)},expression:"materialData.product_code"}},t._l(t.getProducts,function(t){return a("el-option",{key:t.id,attrs:{label:"【"+t.product_code+"】- "+t.name,value:t.product_code}})}))],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-box"},[a("label",{staticClass:"label"},[t._v("\n          Material Name\n          "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("el-input",{staticClass:"input",attrs:{disabled:!0},model:{value:t.materialData.product_name,callback:function(e){t.$set(t.materialData,"product_name",e)},expression:"materialData.product_name"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-box"},[a("label",{staticClass:"label"},[t._v("\n          Specification\n          "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("el-input",{staticClass:"input",attrs:{disabled:!0},model:{value:t.materialData.specification,callback:function(e){t.$set(t.materialData,"specification",e)},expression:"materialData.specification"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-box"},[a("label",{staticClass:"label"},[t._v("\n          Quantity\n          "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("el-input",{staticClass:"input",attrs:{type:"number",min:"0"},on:{change:t.setDuty},model:{value:t.materialData.qty,callback:function(e){t.$set(t.materialData,"qty",e)},expression:"materialData.qty"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-box"},[a("label",{staticClass:"label"},[t._v("Currency")]),t._v(" "),a("el-select",{staticClass:"input",attrs:{slot:"prepend"},slot:"prepend",model:{value:t.materialData.currency,callback:function(e){t.$set(t.materialData,"currency",e)},expression:"materialData.currency"}},t._l(t.currencies,function(t){return a("el-option",{key:t.currency,attrs:{label:t.label,value:t.currency,"value-key":t.currency}})}))],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-box"},[a("label",{staticClass:"label"},[t._v("Freight")]),t._v(" "),a("el-input",{staticClass:"input",attrs:{disabled:"",min:"0",type:"number"},model:{value:t.materialData.freight,callback:function(e){t.$set(t.materialData,"freight",t._n(e))},expression:"materialData.freight"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-box"},[a("label",{staticClass:"label"},[t._v("\n          Total Duty\n          "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("el-input",{staticClass:"input",attrs:{min:"0",type:"number"},on:{change:t.setDuty},model:{value:t.materialData.total_duty,callback:function(e){t.$set(t.materialData,"total_duty",t._n(e))},expression:"materialData.total_duty"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-box"},[a("label",{staticClass:"label"},[t._v("\n          Duty\n          "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("el-input",{staticClass:"input",attrs:{min:"0",type:"number",disabled:""},model:{value:t.materialData.duty,callback:function(e){t.$set(t.materialData,"duty",t._n(e))},expression:"materialData.duty"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-box"},[a("label",{staticClass:"label"},[t._v("\n          Payment Type\n          "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("el-select",{staticClass:"input",model:{value:t.materialData.type,callback:function(e){t.$set(t.materialData,"type",e)},expression:"materialData.type"}},t._l(t.payTypeArr,function(t){return a("el-option",{key:t.id,attrs:{label:t.label,value:t.value}})}))],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.getPayType,expression:"getPayType"}],staticClass:"item"},[a("div",{staticClass:"item-box"},[a("label",{staticClass:"label"},[t._v("\n          Payment amount\n          "),a("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),a("el-input",{staticClass:"input",attrs:{min:"0",type:"number"},model:{value:t.materialData.price,callback:function(e){t.$set(t.materialData,"price",t._n(e))},expression:"materialData.price"}})],1)]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-box"},[a("label",{staticClass:"label"},[t._v("\n          Remark\n          "),a("span",{staticClass:"required"})]),t._v(" "),a("el-input",{staticClass:"input",attrs:{type:"textarea",rows:2,resize:"none",placeholder:""},model:{value:t.materialData.description,callback:function(e){t.$set(t.materialData,"description",e)},expression:"materialData.description"}})],1)]),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"preview"},on:{click:t.dialogConfirm}},[t._v("confirm")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.dialogCancel}},[t._v("cancel")])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"label"},[this._v("\n              Order No.\n              "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"label"},[this._v("\n              Source From\n              "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"label"},[this._v("\n              Invoice No.\n              "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"label"},[this._v("\n              Trade term\n              "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"label"},[this._v("\n              Tracking No.\n              "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"label"},[this._v("\n              Freight\n              "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"label"},[this._v("\n              Date\n              "),e("span",{staticClass:"required"},[this._v("*")])])}]}}});
//# sourceMappingURL=8.5d9d00d0ba682b7e9ca8.js.map