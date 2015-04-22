$(function(){
    $(".youtube").YouTubeModal({autoplay:0, width:640, height:480});

    $('[data-toggle="popover"]').popover()

    $("#find").click(function(){
        
        var result = $("#keyword").val() || false;
        
        if(!result){
            $("#keyword").addClass("requiredErr");
        }else{
            $("#keyword").removeClass("requiredErr");
        }
        
        return result;
    });
    
});