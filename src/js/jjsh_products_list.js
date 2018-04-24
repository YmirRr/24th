define(["jquery","template"], function($,template){
    $(function(){
        // 使用模板引擎
        $.getJSON("/mock/jjsh_products.json", function(data){
            // 使用 artTemplate 渲染
            let html = template("jjsh_temp", {products : data.res_body.products});
            // 显示
            $(".jjsh_products_grid").prepend(html);
        });
    });
});