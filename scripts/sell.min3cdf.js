"use strict";!function(e,t,a){e.Site.run(),a.fn.select2.defaults.set("theme","bootstrap");var l=a("#b-brand-select"),s=a("#b-model-select"),i=a("#b-color-select"),r=a("#b-year-select");l.select2({placeholder:""}),s.select2({placeholder:""}),i.select2({placeholder:""}),r.select2({placeholder:""}),l.on("select2:select",function(e){a.ajax({url:"/brand/get",method:"get",data:{brandName:a(this).val()},success:function(e){if(e){var t=[];s.find("option").remove(),a.each(e.models,function(e,a){t.push({text:a,id:a})}),s.select2({placeholder:"Model",data:t})}}})});var o=a("#basicForm"),n=a("#mileageForm"),d=a("#photosForm"),m=a("#dummy"),c=a("#upload-progress");o.formValidation({framework:"bootstrap",fields:{vehicleType:{validators:{notEmpty:{message:"Please select bike brand"}}},vehicleModel:{validators:{notEmpty:{message:"Please select bike model"}}},engineCapacity:{validators:{notEmpty:{message:"Please enter engine capacity"},integer:{message:"Please enter valid number"}}},coupen:{validators:{notEmpty:{message:"Please enter coupen code"}}},color:{validators:{notEmpty:{message:"Please select bike color"}}}}}),n.formValidation({framework:"bootstrap",fields:{year:{validators:{notEmpty:{message:"Please select year of manufacture"}}},kmTravelled:{validators:{notEmpty:{message:"Please enter KMs bike travelled"}}},mileage:{validators:{notEmpty:{message:"Please enter current bike mileage"},integer:{message:"Please enter valid number"}}},expPrice:{validators:{notEmpty:{message:"Please enter expected bike price"}}}}}),d.formValidation({framework:"bootstrap",fields:{address:{validators:{notEmpty:{message:"Please enter your address"}}},photos:{validators:{notEmpty:{message:"Please upload at least one bike photo"},file:{extension:"jpeg,jpg,png",type:"image/jpeg,image/png",maxFiles:10,minFiles:1,maxTotalSize:5242880,message:"Please choose a image file"}}}}});var p=!1;m.ajaxForm({beforeSubmit:function(e,t,l){p=!0,a(".progress").show(),a("#sell-book").html('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i> Please wait..')},uploadProgress:function(e,t,a,l){var s=l+"%";c.width(s)},success:function(l){var s=JSON.parse(l.replace(/<(?:.|\n)*?>/gm,""));if(s.error)a(t).myBSAlerts({type:"alert",messageText:s.msg});else{var i=_SERVER_URL+"/account/sell";e.open(i,"_self"),p=!1}}});var u=a.extend(!0,{},{step:".steps .step, .pearls .pearl",templates:{buttons:function(){var e=this.options;return'<div class="wizard-buttons"><a class="btn btn-default btn-outline btn-arrow-left" href="#'+this.id+'" data-wizard="back" role="button">'+e.buttonLabels.back+'</a><a class="btn btn-next-red btn-outline pull-right btn-arrow-right" href="#'+this.id+'" data-wizard="next" role="button">'+e.buttonLabels.next+'</a><a id="sell-book" class="red-submit-button pull-right" href="#'+this.id+'" data-wizard="finish" role="button"> Submit </a></div>'}}},{buttonsAppendTo:"this",onFinish:function(){if(!p){var e=o.find("input, textarea, select"),t=n.find("input, textarea, select"),a=d.find("input, textarea, select");m.html(""),m.append(e,t,a),m.submit()}},onNext:function(e){if(2===e.index){a("#txt-brand").html(a("#b-brand-select").val()),a("#txt-model").html(a("#b-model-select").val()),a("#txt-capacity").html(a("#engine-capacity").val()+" CC"),a("#txt-color").html(a("#b-color-select").val()),a("#txt-year").html(a("#b-year-select").val()),a("#txt-km").html(a("#vehicle-km").val()),a("#txt-mileage").html(a("#mileageVal").val()+" kmph"),a("#txt-price").html("Rs. "+a("#exp-price").val()),a("#txt-address").html(a("#address").val());var t=a("#txt-photos");a("#vehicle-photos")[0].files&&(t.empty(),a.each(a("#vehicle-photos")[0].files,function(e,l){if(!/\.(jpe?g|png|gif)$/i.test(l.name))return alert(l.name+" is not an image");var s=new FileReader;a(s).on("load",function(){var e=a("<img/>",{src:this.result,height:80}).addClass("img-thumbnail");t.append(a("<div/>").append(e).addClass("col-md-3 col-xs-6"))}),s.readAsDataURL(l)}))}}}),f=a("#sell-wizard").wizard(u).data("wizard");f.get("#basic").setValidator(function(){var e=a("#basicForm").data("formValidation");if(e.validate(),!e.isValid())return!1;var l=(new Date).getFullYear(),s=l-20,i=t.getElementById("b-year-select");i.innerHTML="";for(var o=l;o>=s;o--){var n=t.createElement("option");n.value=o,n.innerHTML=o,i.appendChild(n)}return r.select2({placeholder:""}),!0}),f.get("#mileage").setValidator(function(){var e=a("#mileageForm").data("formValidation");return e.validate(),!!e.isValid()}),f.get("#photos").setValidator(function(){var e=a("#photosForm").data("formValidation");return e.validate(),!!e.isValid()}),setTimeout(function(){a(".alert").length>0&&a(".alert").hide()},1e4)}(window,document,jQuery);