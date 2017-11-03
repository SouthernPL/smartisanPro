$(function(){
    var colorMark =[];
    $('#dowebok').fullpage({
        navigation: !0,
        loopTop:false,
        afterLoad:function(link,index){
            $('.section').removeClass('current');
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');
            }, 100);
            if(index==6){
                $(".sixth").addClass("phone-big");
            }else if(index==2){
                colorMark=[];
                colorMark.push($(".jg-nav").css("background-color"));
                colorMark.push($(".jg-nav").css("background-image"));
            }else if(index==1){
                $("#fp-nav").css("display","none");
            }

            if(index!==1){
                $(".jg-nav").removeClass("disappear").addClass("widen");
                $("#fp-nav").css("display","inline-block");
            }


        },
        onLeave: function(index, nextIndex, direction){
            if(nextIndex==2 && direction=="down"){
                $(".second").addClass("slideup");
                $(".jg-nav").addClass("disappear");
            }else if(nextIndex==5 && direction=="up"){
                $(".sixth").removeClass("phone-big");
            }else if(nextIndex==1 && direction=="up"){
                $(".second").removeClass("slideup");
                $(".jg-nav").removeClass("widen");
            }else if(nextIndex==2 && direction=="up" ){
                setTimeout(function () {
                    $(".jg-nav").css({
                        'background-color': colorMark[0],
                        'background-image': colorMark[1]
                    })
                },200);

            }

            if( nextIndex==3 || nextIndex==6 || nextIndex==7){
                setTimeout(function () {
                    $(".jg-nav").css({
                        'background-color': '#f9f9f9',
                        'background-image': 'linear-gradient(hsla(0,0%,100%,.9),hsla(0,0%,95%,.9))'
                    })
                },200);

            }else if(nextIndex==4 || nextIndex==5){
                setTimeout(function () {
                    $(".jg-nav").css({
                        'background-color': '#1a1a1a',
                        'background-image': 'linear-gradient(rgba(0,0,0,.9),rgba(26,26,26,.9))'
                    })
                },200);

            }

        }

    });
});