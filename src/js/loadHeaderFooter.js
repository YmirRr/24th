/* 加载头部尾部模块 */
define(["jquery"], function($){
    $(function(){
        $.ajax("/html/include/header.html").done(function(data){
            $(".header_container").html(data);
        }).done(function(){
            /* 加载完毕后，绑定搜索建议提示事件 */
            $(".search").on("keyup", function(){
                console.log("aaa");
                let val = $(this).val(), // 当前文本框中的值
                    url = `https://suggest.taobao.com/sug?code=utf-8&q=${val}&callback=?`; // jsonp URL
                // 使用 $.getJSON 来实现 jsonp 跨域
                $.getJSON(url, function(data){
                    let html = "";
                    data.result.forEach(function(curr){
                        html += `<div>${curr[0]}<div>`;
                    });
                    $(".suggest").html(html);
                });
            });

            /* 鼠标移入links改变宽高 */
            $("ul.links>li>a").hover(function(){
                // //mouseenter
                $(this).stop().animate({width:133,height:133,marginLeft:+4,marginTop:+4,padding:10}, 300);
                // $(this).animate({width:1000}, 2000);
            },function(){
                $(this).stop().animate({width:140,height:140,margin:0,padding:12}, 300);
            });


            /* 鼠标移入显示二级菜单 */
            $("ul.megamenu>li:lt(8):gt(0)").hover(function(){
                // mouseenter
                $(this).css("background","#3399cc")
                $(this).children("div.megapanel").show();
            }, function(){
                // mouseleave
                $(this).css("background","none")
                $(this).children("div.megapanel").hide();

            });
            $("ul.megamenu>li").hover(function(){
                // mouseenter
                $(this).css("background","#3399cc")
            }, function(){
                // mouseleave
                $(this).css("background","none")
            });

            //页面滚动产生吸顶效果
            $(document).scroll(function(e){
                if((document.documentElement.scrollTop || document.body.scrollTop) > 192)
                    $("nav").css({"position":"fixed","top":0,"width":"100%" ,"background":"#58bae9"});
            });
            $(document).scroll(function(e){
                if((document.documentElement.scrollTop || document.body.scrollTop) < 192)
                    $("nav").css({"position":"static","width":"100%" ,"background":"#fff"});
            });
        });

        $.ajax("/html/include/footer.html").done(function(data){
            $(".footer_container").html(data);
        })
    });
});