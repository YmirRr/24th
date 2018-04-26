require(["config"], function(){
    require(["jquery","template","bootstrap","cookie"],function($,template){

        // 使用 jquery.cookie.js 插件
        $.cookie.json = true;
        // 读取所有cookie中保存的购物车数据
        let _products = $.cookie("products") || [];

        // 显示读取到的 cookie 购物车数据
        let html = template("confirm_temp", {products: _products});
        $(".products_container").html(html);

        $(function(){
            calcTotal();
             // 计算合计
            function calcTotal() {
                let sum = 0;
                $(".sub").each(function(index, element){
                    sum += Number($(this).text().slice(1));
                });
                $(".total").text("￥" + sum.toFixed(2));
                $(".total_").text("￥" + (sum + 15).toFixed(2));
            }
        })
  });
});