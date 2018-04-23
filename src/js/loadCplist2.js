/* 加载头部尾部模块 */
define(["jquery","template"], function($,template){
    $(function(){
        // 使用模板引擎
        $.getJSON("/mock/cplist2.json", function(data){
            // 使用 artTemplate 渲染
            let html = template("cplist2_temp", {products : data.res_body.products});
            // 显示
            $(".cplist2_ul").prepend(html);
        });

        // $.getJSON("/mock/cplist2.json", function(data){
        //     let html = "";
        //     data.res_body.products.forEach(function(prod){
        //         html += `<a href="single.html"><li><img src="${prod.img}" class="img-responsive" alt=""/>
        //                     <p>${prod.title}</p>
        //                     <span class="id" style="display:none">${prod.pid}</span>
        //                 </li></a>`;
        //     });
        //     $(".cplist2_ul").prepend(html);
        // });



    });
});