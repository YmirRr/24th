define(["jquery","template"], function($,template){
    $(function(){
        // 使用模板引擎
        $.getJSON("/mock/xgtj.json", function(data){
            // 使用 artTemplate 渲染
            let html = template("xgtj_temp", {products : data.res_body.products});
            // 显示
            $(".goodslst").prepend(html);
        });

        $.getJSON("/mock/klyk.json", function(data){
            // 使用 artTemplate 渲染
            let html = template("xgtj_temp", {products : data.res_body.products});
            // 显示
            $(".userBuyView1").prepend(html);
        });

        $.getJSON("/mock/klyk.json", function(data){
            // 使用 artTemplate 渲染
            let html = template("xgtj_temp", {products : data.res_body.products});
            // 显示
            $(".userBuyView2").prepend(html);
        });
    });
});