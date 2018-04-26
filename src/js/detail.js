require(["config"], function(){
    require(["jquery","template","bootstrap","cookie","loadHF","zoom"],function($,template){
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

        $(".add_to_cart_").on("click", ".add,.dec", function(){
            let _val = Number($(this).parent(".qty_pan").find("#qty").val());
            if ($(this).is(".add")){
                _val++;
                $(this).parent(".qty_pan").find("#qty").val(_val);
            }

            else{
                if ($(this).parent(".qty_pan").find("#qty").val() <= 1)
                    return;
                _val--;
                $(this).parent(".qty_pan").find("#qty").val(_val);
            }


            // // 获取修改数量的商品id
            // let _id = $(this).data("id");
            // // 获取数组中的元素下标
            // let _index = exist(_id, _products);
            // // 数量加/减
            // if ($(this).is(".add"))
            //     _products[_index].amount++;
            // else{
            //     if (_products[_index].amount <= 1)
            //         return;
            //     _products[_index].amount--;
            // }

            // // 覆盖保存cookie
            // $.cookie("products", _products, {expires:7, path:"/"});
            // // 显示修改结果
            // $(this).siblings(".amount").val(_products[_index].amount);
            // // 显示小计
            // let _sub = _products[_index].price * _products[_index].amount;
            // $(this).parents("tr").children(".sub").text("￥" + _sub.toFixed(2));

            // // 计算合计
            // calcTotal();
            // yxsp();
        });


        /* 放大镜插件 */
        $(".zoom").elevateZoom({
            zoomType: "inner",
            gallery:'jcarousel_list',
            cursor: 'pointer',
            galleryActiveClass: "active"
        });


        /* 添加到购物车 */
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