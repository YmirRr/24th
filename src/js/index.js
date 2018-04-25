require(["config"], function(){
    require(["jquery","bootstrap","template","loadHF","loadCL2","jjsh","xgtj","zoom"],function($){

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

        $(".layout_block3 img").hover(function(){
            $(this).parent("a").css("color","#000");
        },function(){
            $(this).parent("a").css("color","#999");
        });



    });
});