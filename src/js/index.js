require(["config"], function(){
    require(["jquery","template","bootstrap","loadHF"],function($,template){

        // 使用模板引擎
        $.getJSON("/mock/cplist2.json", function(data){
            // 使用 artTemplate 渲染
            let html = template("cplist2_temp", {products : data.res_body.products});
            // 显示
            $(".cplist2_ul").prepend(html);
        });

        $.getJSON("/mock/xsqg.json", function(data){
            // 使用 artTemplate 渲染
            let html = template("panicB_temp", {products : data.res_body.products});
            // 显示
            $(".panic_container").prepend(html);
        });


        $(".btn a:nth-child(1)").on("mouseover",function(){
            $(this).parents(".layout_block2_box")
                            .children(".show").children().hide();
            $(this).parents(".layout_block2_box")
                            .children(".show").children("a:nth-child(1)").show().css("display","block");

        });
        $(".btn a:nth-child(2)").on("mouseover",function(){
            $(this).parents(".layout_block2_box")
                            .children(".show").children().hide();
            $(this).parents(".layout_block2_box")
                            .children(".show").children("a:nth-child(2)").show().css("display","block");

        });
        $(".btn a:nth-child(3)").on("mouseover",function(){
            $(this).parents(".layout_block2_box")
                            .children(".show").children().hide();
            $(this).parents(".layout_block2_box")
                            .children(".show").children("a:nth-child(3)").show().css("display","block");

        });

        $(".layout_block1_3 img").hover(function(){
            $(this).stop().animate({width:104,height:104,marginLeft:-1,marginTop:-1},100)
        },function(){
            $(this).stop().animate({width:100,height:100,margin:0},50)
        });

        $(".layout_block3 a").hover(function(){
            $(this).css("color","#000");
        },function(){
            $(this).css("color","#999");
        });


        //限时抢购点击按钮向前向后
        $(".prev").click(function(){
            if($(".panic_container").css("margin-left") === "-1385px"){
                $(".panic_container").animate({marginLeft: 0},500).animate({marginLeft: -2770},0);
            }else if($(".panic_container").css("margin-left") === "-2770px"){
                $(".panic_container").animate({marginLeft: -1385},500)
            }

        });
        $(".next").click(function(){
            if($(".panic_container").css("margin-left") === "-1385px"){
                $(".panic_container").animate({marginLeft: -2770},500)
            }else if($(".panic_container").css("margin-left") === "-2770px"){
                $(".panic_container").animate({marginLeft: -4115},500).animate({marginLeft: -1385},0);
            }

        });


    });
});