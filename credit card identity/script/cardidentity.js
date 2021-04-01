//2.获取Access Token
//bash生成
//curl -i -k 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=41UFVgSxXqZ3A63QDKrgGSal&client_secret=bvNxq0apab7yGU7335KqgcyKGvccoXwF'
//"access_token":"24.5ce6a9edcf4547531afe1329aa06abc4.2592000.1619846921.282335-23914533"
//{"refresh_token":"25.3ba7d06bad383a2edb0e6de6d1465bc5.315360000.1932614921.282335-23914533","expires_in":2592000,"session_key":"9mzdDtHD2guWsLZ556yKVFamebGoQ99Yl0LSYOElUXI5qnErLW0MaNL+qTJYbicDjfNwbD0\/fiy1IlRc7\/XT28MGEjXRLw==","access_token":"24.5ce6a9edcf4547531afe1329aa06abc4.2592000.1619846921.282335-23914533","scope":"public vis-ocr_ocr brain_ocr_scope brain_ocr_general brain_ocr_general_basic vis-ocr_business_license brain_ocr_webimage brain_all_scope brain_ocr_idcard brain_ocr_driving_license brain_ocr_vehicle_license vis-ocr_plate_number brain_solution brain_ocr_plate_number brain_ocr_accurate brain_ocr_accurate_basic brain_ocr_receipt brain_ocr_business_license brain_solution_iocr brain_qrcode brain_ocr_handwriting brain_ocr_passport brain_ocr_vat_invoice brain_numbers brain_ocr_business_card brain_ocr_train_ticket brain_ocr_taxi_receipt vis-ocr_household_register vis-ocr_vis-classify_birth_certificate vis-ocr_\u53f0\u6e7e\u901a\u884c\u8bc1 vis-ocr_\u6e2f\u6fb3\u901a\u884c\u8bc1 vis-ocr_\u673a\u52a8\u8f66\u8d2d\u8f66\u53d1\u7968\u8bc6\u522b vis-ocr_\u673a\u52a8\u8f66\u68c0\u9a8c\u5408\u683c\u8bc1\u8bc6\u522b vis-ocr_\u8f66\u8f86vin\u7801\u8bc6\u522b vis-ocr_\u5b9a\u989d\u53d1\u7968\u8bc6\u522b vis-ocr_\u4fdd\u5355\u8bc6\u522b vis-ocr_\u673a\u6253\u53d1\u7968\u8bc6\u522b vis-ocr_\u884c\u7a0b\u5355\u8bc6\u522b brain_ocr_vin brain_ocr_quota_invoice brain_ocr_birth_certificate brain_ocr_household_register brain_ocr_HK_Macau_pass brain_ocr_taiwan_pass brain_ocr_vehicle_invoice brain_ocr_vehicle_certificate brain_ocr_air_ticket brain_ocr_invoice brain_ocr_insurance_doc brain_formula brain_ocr_facade brain_ocr_meter brain_doc_analysis brain_ocr_webimage_loc brain_ocr_doc_analysis_office brain_vat_invoice_verification wise_adapt lebo_resource_base lightservice_public hetu_basic lightcms_map_poi kaidian_kaidian ApsMisTest_Test\u6743\u9650 vis-classify_flower lpq_\u5f00\u653e cop_helloScope ApsMis_fangdi_permission smartapp_snsapi_base smartapp_mapp_dev_manage iop_autocar oauth_tp_app smartapp_smart_game_openapi oauth_sessionkey smartapp_swanid_verify smartapp_opensource_openapi smartapp_opensource_recapi fake_face_detect_\u5f00\u653eScope vis-ocr_\u865a\u62df\u4eba\u7269\u52a9\u7406 idl-video_\u865a\u62df\u4eba\u7269\u52a9\u7406 smartapp_component smartapp_search_plugin avatar_video_test","session_secret":"582766c447479434d96dbb920e5b0a08"}
//node生成   服务器启动
// var https = require('https');
// var qs = require('querystring');

// const param = qs.stringify({
//     'grant_type': 'client_credentials',
//     'client_id': '41UFVgSxXqZ3A63QDKrgGSal',//API key
//     'client_secret': 'bvNxq0apab7yGU7335KqgcyKGvccoXwF',//Secret Key
// });

// https.get(
//     {
//         hostname: 'aip.baidubce.com',
//         path: '/oauth/2.0/token?' + param,
//         agent: false
//     },
//     function (res) {
//         // 在标准输出中查看运行结果
//         res.pipe(process.stdout);
//     }
// );

//3.对接口
//图片进行base64编码
/******
 * btoa()  任意值转为Base64编码
 * atob()  Base64编码转为原来的值
 */
// var img = b64Encode(imageURL);
// function b64Encode(str){
//     return btoa(encodeURIComponent(str))
// }
// console.log(img);
$(function(){
    //1.上传银行卡，将其展示在指定位置
var fileUpload = document.getElementById("picture");
var showPicture = document.querySelector(".identity_bank");

fileUpload.onchange = function(){
    var file = this.files;
    //图片路径
    // console.log(file);
    var reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = function () {
        var image = document.createElement("img");
        image.src = reader.result; 
        showPicture.appendChild(image);
        
        var imageURL = image.src;
        var strartIndex = imageURL.indexOf(',');
        var imgCode = imageURL.substring(strartIndex+1);

        // console.log(imgCode);

        $.ajax({
            type:'post',
            url:'https://aip.baidubce.com/rest/2.0/ocr/v1/bankcard?access_token=24.5ce6a9edcf4547531afe1329aa06abc4.2592000.1619846921.282335-23914533',
            // dataType:'jsonp',
            Headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
            data:{
                image:imgCode,//图像数据，base64编码后进行urlencode，要求base64编码和urlencode后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/jpeg/png/bmp格式
                //detect_direction:'true',//是否检测图像朝向，默认检测，即：true。可选值包括true - 检测朝向；false - 不检测朝向。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。
    
            },
            success:function(res){
                console.log(res);
                if(res.result.bank_card_type === 1){
                    var type = "借记卡";
                }
                if(res.result.bank_name === "建设银行"){
                    var cardName = "龙记储蓄卡（银联卡）";
                }
                document.getElementsByClassName("result")[0].innerHTML += `
                <p>卡号：${res.result.bank_card_number}</p>
                <p>银行卡类型:${type}</p>
                <p>银行卡名称:${cardName}</p>
                <p>银行名称:${res.result.bank_name}</p>
                <p>银行编号:${res.result.bank_card_type}</p>
                `;
                
            },
            fail:function(err){
                console.log(err);
            }
    
        });
    };
}

})

//'https://aip.baidubce.com/rest/2.0/ocr/v1/bankcard?access_token=24.5ce6a9edcf4547531afe1329aa06abc4.2592000.1619846921.282335-23914533'--data 'image=' -H 'Content-Type:application/x-www-form-urlencoded'