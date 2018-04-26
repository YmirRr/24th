require(["config"], function(){
    require(["jquery","template","cookie","loadHF"], function($,template){
        $(function(){
            // 使用模板引擎
            $.getJSON("/mock/jjsh_products.json", function(data){
                // 使用 artTemplate 渲染
                let html = template("jjsh_temp", {products : data.res_body.products});
                // 显示
                $(".jjsh_products_grid").prepend(html);
            });
        });

        /* 添加到购物车 */
        $(function(){
            // 使用事件委派
            $(".jjsh_products_grid").delegate("button.button", "click", function(e){
                // 阻止默认行为：默认超级链接点击跳转
                e.preventDefault();
                // 将当前选购商品信息获取到
                let prod = {
                    pid : $(this).parents(".jjsh_product").find(".pid").text(),
                    title : $(this).parents(".jjsh_product").find(".pTitle").text(),
                    price : $(this).parents(".jjsh_product").find(".special_price").text().slice(1),
                    img : $(this).parents(".jjsh_product").find(".pImg").attr("src"),
                    amount : 1
                };
                console.log(prod)
                // 配置 cookie 插件，自动在JS值与JSON字符串之间转换
                $.cookie.json = true;
                // 获取 cookie 中已保存的 购物车
                let products = $.cookie("products") || [];
                // 判断原购物车中是否已存在选购商品
                let index = exist(prod.pid, products);
                if (index === -1) // 不存在
                    // 将当前选购商品添加到数组中保存
                    products.push(prod);
                else {// 存在
                    // 修改数量

                    products[index].amount++;
                }
                // 将购物车再保存回 cookie 中
                $.cookie("products", products, {expires:7, path:"/"});
            });


            function exist(id, products) {
                var existIndex = -1;
                $.each(products, function(index, prod){
                    if(prod.pid === id) {
                        existIndex = index;
                        return false;
                    }
                });
                return existIndex;
            }
        });
    });
});
