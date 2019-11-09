//Check off specific todos by clicking

$("ul").on("click","li",function() {
    $(this).children("p").toggleClass("completed");
})
$("ul").on("click","span",function() {
    $(this).parent().fadeOut(500,function() {
        $(this).remove();
    });
});
$("input").keypress(function(event) {
    if(event.which === 13) {
        if($("input").val() != "") {
            $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> "  + "<p>" + $(this).val() + "</p>" + "</li>");
            $("input").val("");
        }
       
    }
})
$(".fa-plus").click(function() {
    $("input").fadeToggle("fast", function() {
        $("input").toggleClass("display-input");
    });
})