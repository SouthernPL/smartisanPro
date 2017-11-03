window.onload=function(){
    $("#fp-nav>ul").children().first().css("opacity","0");
    $("#fp-nav>ul").children().last().css("opacity","0");
    $("#fp-nav").css("top","250px")

//    语言选择
    var choice = document.getElementById("language");

    choice.onclick=function(event){
        event=event||window.wvent;
        if(event&&event.stopPropagation){
            event.stopPropagation();
        }else {
            event.cancelBubble=true;
        }

        this.classList.add("current");
    }

    document.onclick=function (event) {
        event=event||window.event;
        var source =event.target? event.target:event.srcElement;

        if(source.id !== "language"){
            choice.classList.remove("current");
        }

    }


//			主题变色

    $(".second-color").children().eq(0).click(function(){
        console.log(1);
        $(".first").css({
            'background': '#1a1a1a',
            'background-image': 'linear-gradient(#000,#121212)',
            'color': '#c8c8c8'
        })
        $(".first-nav").find("a").each(function (index,ele) {
            if(index==2){
                $(ele).css("color","#fff")
            }else{
                $(ele).on("mouseover",function(){
                    $(this).css("color","#fff")
                }).on("mouseleave",function(){
                    $(this).css("color","#c8c8c8")
                })
            }
        })
        $(".jg-nav").css({
            'background': '#1a1a1a',
            'background-image': 'linear-gradient(#000,#121212)',
//                    'border-bottom': '1px solid #1a1a1a',
            'box-shadow': '0 0 1px #1a1a1a',
        })
        $(".logo").children().css({
            'background-position': '0 -205px'
        })
        $(".sec-color").css("display","none");
        $(".black").css("display","block");

        $(this).children().css({"color":"#d2d1d2",'font-weight': '500'})
        $(this).siblings().children().css("color","#828282")
        $(".slogan").css("color","#d7d7d7")

    })
    $(".second-color").children().eq(1).click(function(){
        console.log(1);
        $(".first").css({
            'background': '#511824',
            'background-image': 'linear-gradient(#46101b,#4e141f)',
            'color': '#b0a59e'
        })
        $(".first-nav").find("a").each(function (index,ele) {
            if(index==2){
                $(ele).css("color","#837266")
            }else{
                $(ele).on("mouseover",function(){
                    $(this).css("color","#837266")
                }).on("mouseleave",function(){
                    $(this).css("color","#b0a59e")
                })
            }
        })
        $(".jg-nav").css({
            'background': '#511824',
            'background-image': 'linear-gradient(#46101b,#4e141f)',
//                    'border-bottom': '1px solid #511824',
            'box-shadow': '0 0 1px #511824',
        })
        $(".logo").children().css({
            'background-position': '0 -270px'
        })
        $(".sec-color").css("display","none");
        $(".red").css("display","block");

        $(this).children().css({"color":"#eab8c4",'font-weight': '500'})
        $(this).siblings().children().css("color","#9b626c")
        $(".slogan").css("color","#d7d7d7")

    })
    $(".second-color").children().eq(2).click(function(){
        console.log(1);
        $(".first").css({
            'background': '#1a1a1a',
            'background-image': 'linear-gradient(#000,#121212)',
            'color': '#c8c8c8'
        })
        $(".first-nav").find("a").each(function (index,ele) {
            if(index==2){
                $(ele).css("color","#fff")
            }else{
                $(ele).on("mouseover",function(){
                    $(this).css("color","#fff")
                }).on("mouseleave",function(){
                    $(this).css("color","#c8c8c8")
                })
            }
        })
        $(".jg-nav").css({
            'background': '#1a1a1a',
            'background-image': 'linear-gradient(#000,#121212)',
//                    'border-bottom': '1px solid #1a1a1a',
            'box-shadow': '0 0 1px #1a1a1a',
        })
        $(".logo").children().css({
            'background-position': '0 -205px'
        })
        $(".sec-color").css("display","none");
        $(".copper").css("display","block");

        $(this).children().css({"color":"#d2d1d2",'font-weight': '500'})
        $(this).siblings().children().css("color","#828282")
        $(".slogan").css("color","#d7d7d7")

    })
    $(".second-color").children().eq(3).click(function(){
        console.log(1);
        $(".first").css({
            'background': '#211210',
            'background-image': ' linear-gradient(#211210,#261510)',
            'color': '#b0a59e'
        })
        $(".first-nav").find("a").each(function (index,ele) {
            if(index==2){
                $(ele).css("color","#837266")
            }else{
                $(ele).on("mouseover",function(){
                    $(this).css("color","#837266")
                }).on("mouseleave",function(){
                    $(this).css("color","#b0a59e")
                })
            }
        })
        $(".jg-nav").css({
            'background': '#211210',
            'background-image': 'linear-gradient(#211210,#261510)',
//                    'border-bottom': '1px solid #211210',
            'box-shadow': '0 0 1px #211210',
        })
        $(".logo").children().css({
            'background-position': '0 -403px'
        })
        $(".sec-color").css("display","none");
        $(".chocolate").css("display","block");

        $(this).children().css({"color":"#9f7e71",'font-weight': '500'})
        $(this).siblings().children().css("color","#806257")
        $(".slogan").css("color","#b39182")

    })
    $(".second-color").children().eq(4).click(function(){
        console.log(1);
        $(".first").css({
            'background': '#f9f9f9',
            'background-image': ' linear-gradient(#fff,#f8f8f8)',
            'color': '#b0a59e'
        })
        $(".first-nav").find("a").each(function (index,ele) {
            if(index==2){
                $(ele).css("color","#837266")
            }else{
                $(ele).on("mouseover",function(){
                    $(this).css("color","#837266")
                }).on("mouseleave",function(){
                    $(this).css("color","#b0a59e")
                })
            }
        })
        $(".jg-nav").css({
            'background': '#f9f9f9',
            'background-image': 'linear-gradient(#fff,#f8f8f8)',
//                    'border-bottom': '1px solid #f9f9f9',
            'box-shadow': '0 0 1px #f9f9f9',
        })
        $(".logo").children().css({
            'background-position': '0 -336px'
        })
        $(".sec-color").css("display","none");
        $(".lightgold").css("display","block");

        $(this).children().css({"color":"#654f40",'font-weight': '500'})
        $(this).siblings().children().css("color","#b0a59e")
        $(".slogan").css("color","#b39182")

    })

}
