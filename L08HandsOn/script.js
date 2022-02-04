$(document).ready(function(){
    $(".header").hover(function(){
        $(this).css("background-color", "#ccf281");
    },function(){
        $(this).css("background-color","#4832d5");
    });
    $("p").click(function(){
        $(this).text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it.");
        $(this).css("background-color","#ccf281");
        $(this).css("font-family", "'Titillium Web', sans-serif");
        $(this).css("padding-left","20px");
        $(this).css("font-size","20px");
        $(this).css("font-weight","bold");
        
    });
    $("ul").dblclick(function(){
        $(this).hide();
    
    });
    
    $("input").keydown(function(){
        $(this).css("color","red");
    });
    $("li").hover(function(){
        $(this).css("font-family", "'Rock 3D', cursive");
    },function(){
        $(this).css("font-family", "'Times New Roman'")
    });
 
    
});

