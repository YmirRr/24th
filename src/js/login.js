require(["config"], function(){
    require(["jquery","bootstrap","loadHF"],function($){
        $(".login_form").submit(function(e){
            /* 校验输入信息是否正确 */


            var reg1 = /\d{11}/,
                _phone = $("#phone").val();

            //电话不能为空
            if(_phone === ""){
                e.preventDefault();
                $(".phone_err").show().text("这是必填区域。");
                $("#phone").css({"border-style":"dashed","border-color":"#eb340a","background-color":"#faebe7"});
            }else if(!reg1.test(_phone)){//校验电话格式
                e.preventDefault();
                $(".phone_err").show().text("请输入正确的邮箱或电话号码。");
                $("#phone").css({"border-style":"dashed","border-color":"#eb340a","background-color":"#faebe7"});
            }

            //密码必须以英文字母开头，至少6位
            var reg2 = /^[a-zA-Z].{5,}/,
                _pwd= $("#password").val();

            //密码不能为空

            if(_pwd === ""){
                e.preventDefault();
                $(".password_err").show().text("这是必填区域。");
                $("#password").css({"border-style":"dashed","border-color":"#eb340a","background-color":"#faebe7"});
            }else if(!reg2.test(_pwd)){//校验密码格式
                e.preventDefault();
                $(".password_err").show().text("密码必须以英文字母开头，至少6位。");
                $("#password").css({"border-style":"dashed","border-color":"#eb340a","background-color":"#faebe7"});
            }






        });




        /*/var _uname = cookie("uname"),
                _upwd = cookie("upwd");
            if (_uname)
                $("#username").value = _uname;
            if (_upwd)
                $("#password").value = _upwd;


        on($("#dl"), "click", function(){
            // 获取用户名与密码
            var _username = $("#username").value,
                _password = $("#password").value;
            // .....验证服务器端用户名与密码
            // 是否要记住用户名与密码
            if ($("#remember").checked) {
                // 10天后失效
                var date = new Date();
                date.setDate(date.getDate() + 10);
                document.cookie = "uname=" + _username + ";expires=" + date.toUTCString();
                document.cookie = "upwd=" + _password + ";expires=" + date.toUTCString();
                cookie("uname", _username, {expires:10});
                cookie("upwd", _password, {expires:3});
            } else {
                var date = new Date();
                date.setDate(date.getDate() - 10);
                document.cookie = "uname=;expires=" + date.toUTCString();
                document.cookie = "upwd=;expires=" + date.toUTCString();
                // cookie("uname", "", {expires:-1})
                // cookie("upwd", "", {expires:-1})
                removeCookie("uname");
                removeCookie("upwd");
            }
        });*/

    });
});