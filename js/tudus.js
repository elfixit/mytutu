$(function(){
    $(".datepicker").datepicker();

    $(".new-prio-btn").click(function(e) {
        var prioval = $(e.target).val();
        $("#new-prio").val(prioval);
        $("#new-prio-btn > .prio-btn").removeClass('disabled');
        $(e.target).addClass('disabled');
    });
})
