$(function(){
    /* n a v i g a t i o n */
    var gnb1=$("#gnb>ul>li");
    var gnb2=$("#gnb>ul>li>ul");
    
    gnb2.hide();
    
    gnb1.on("mouseover focusin",function(){
        gnb2.stop().slideDown(200);
        $(this).addClass("selected");
    });
    
    gnb1.on("mouseout focusout",function(){
        gnb2.stop().slideUp(200);
        $(this).removeClass("selected");
    });
    
    $(window).scroll(function(){
        page();
    });
    $(window).resize(function(){
        page();
    });
    
    function page(){
        sct=$(window).scrollTop();
        winh=$(".hd_top").height();
        
        if(sct>winh){
            $("#gnb").addClass("fixed");
        }else{
            $("#gnb").removeClass("fixed");
        };
    };
    
    /* m o b i l e _ n a v */
    var n=0;
    $(".btn_m_gnb").click(function(){
        n++;
        if(n%2 == 1 ){
            $("#m_gnb_wrap").animate({"opacity":1},400);
        }else{
            $("#m_gnb_wrap").animate({"opacity":0},400);
        };
        $(".btn_m_gnb").toggleClass("on");
    });
    $(".m_gnb_2d").hide();
    $(".m_gnb_2d").eq(0).show();
    $(".m_gnb>li>a").click(function(){
        $(".m_gnb_2d").stop().slideUp(300);
        $(this).next("ul").stop().slideDown(300);
    });
    
    $(".m_gnb>li>a").focus(function(){
        $(".m_gnb>li>a").eq(0).removeClass("active");
        $(this).addClass("active");
    });
    $(".m_gnb>li>a").blur(function(){
        $(this).removeClass("active");
    });
    
    $(".m_gnb_2d>li>a").focus(function(){
        $(".m_gnb>li>a").eq(0).removeClass("active");
        $(this).addClass("active");
    });
    $(".m_gnb_2d>li>a").blur(function(){
        $(this).removeClass("active");
    });
    
    /* b a n n e r */
    var sliderLi=$(".slider_mb>li");
    var i=0;
    
    sliderLi.hide();
    sliderLi.eq(0).show();
    
    function sBanner(){
        i++;
        if(i==6){i=0};        
        sliderLi.stop().fadeOut(3500);
        sliderLi.eq(i).stop().fadeIn(3500);
    };
    var bannerFade=setInterval(sBanner,5000);
    
    
    $(".slider_mb_text").animate({"opacity":1},1300);
    $(".slider_mb_text>p").delay(1000).animate({"opacity":1},1500);
    
    /* c o n _ r o o m s */
    var roomsW=$(".con_rooms_gallery_wrap");
    var roomsLi=$(".con_rooms_gallery_wrap>ul>li");
    var btnP=$(".con_rooms_btn_prev");
    var btnN=$(".con_rooms_btn_next");
    var i2=0;
    
    roomsLi.css("opacity",0);
    roomsLi.eq(0).css("opacity",1);
    
    
    btnP.click(function(){
        roomSP();    
    });
    btnN.click(function(){
        roomSN();
    });
    
    function roomSP(){
        roomsLi.eq(i2).stop().animate({"left":"103%","opacity":"0.2"},500);
        i2--;
        if(i2==-1){i2=4;};
        roomsLi.eq(i2).css("left","0%").stop().animate({"left":"50%","opacity":"1"},500);
    };
    
    function roomSN(){
        roomsLi.eq(i2).stop().animate({"left":"-5%","opacity":"0.2"},500);
        i2++;
        if(i2==5){i2=0;};
        roomsLi.eq(i2).css("left","100%").stop().animate({"left":"50%","opacity":"1"},500);
    };
    
    /* c o n _ d i n i n g */
    $(window).scroll(function(){
        sct=$(window).scrollTop();
        
        if(sct>=2500){
            $(".con_dining_badang").animate({"opacity":1},700);
        };
        if(sct>=3000){
            $(".con_dining_parkview").animate({"opacity":1},700);
        };
        if(sct>=3400){
            $(".con_dining_palsun").animate({"opacity":1},700);
        };
        if(sct>=3650){
            $(".con_dining_pastry").animate({"opacity":1},700);
        };
    });    
});/* END */


    
    
        