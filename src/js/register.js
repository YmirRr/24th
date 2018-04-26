require(["config"], function(){
    require(["jquery","bootstrap","loadHF"],function($){

        $(".register_form_").submit(function(e){

            /* 校验输入信息是否正确 */

            //电话格式正确
            var reg1 = /\d{11}/,
                _phone = $("#phone").val();

            if(!reg1.test(_phone)){
                e.preventDefault();
                $(".m1").detach();
                $(".err_msg").show().find(".e_m").append('<li class="m1">请检查您输入的手机号是否正确</li>');
                console.log($(".m1"));

            }

            //密码必须以英文字母开头，至少6位
            var reg2 = /^[a-zA-Z].{5,}/,
                _pwd= $("#password").val();

            if(!reg2.test(_pwd)){
                e.preventDefault();
                $(".m2").detach();
                $(".err_msg").show().find(".e_m").append('<li  class="m2">密码必须以英文字母开头，至少6位</li>');
            }

            //两次密码输入一致
            if($("#password").val() !== $("#password_").val()){
                e.preventDefault();
                $(".m3").detach();
                $(".err_msg").show().find(".e_m").append('<li  class="m3">请确认两次密码输入一致</li>');
            }




        });



    });
});