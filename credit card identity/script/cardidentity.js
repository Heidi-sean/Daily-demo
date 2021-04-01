//2.获取Access Token
//3.对接口
//图片进行base64编码
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

        $.ajax({
            type:'post',
            url:'https://aip.baidubce.com/rest/2.0/ocr/v1/bankcard?access_token=24.5ce6a9edcf4547531afe1329aa06abc4.2592000.1619846921.282335-23914533',
            Headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
            data:{
                image:imgCode,//图像数据，base64编码后进行urlencode，要求base64编码和urlencode后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/jpeg/png/bmp格式
    
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