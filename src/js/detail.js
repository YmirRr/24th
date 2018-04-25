require(["config"], function(){
    require(["jquery","bootstrap","template","cookie","loadHF","xgtj","zoom"],function($){
                $(".zoom").elevateZoom({
                    zoomType: "inner",
                    gallery:'jcarousel_list',
                    cursor: 'pointer',
                    galleryActiveClass: "active"
                });


        $(function(){
            // 使用事件委派
            $(".product-essential").delegate("button.button", "click", function(e){
                // 阻止默认行为：默认超级链接点击跳转
                e.preventDefault();
                // 将当前选购商品信息获取到
                let prod = {
                    pid : $(this).parents(".product-essential").find("#pid").text(),
                    title : $(this).parents(".product-essential").find("#pTitle").text(),
                    price : $(this).parents(".product-essential").find(".special_price").text().slice(1),
                    img : $(this).parents(".product-essential").find("#pImg").attr("src"),
                    amount : $(this).parents(".product-essential").find("#qty").val()
                };
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

                    products[index].amount = Number(products[index].amount) + Number(prod.amount);
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