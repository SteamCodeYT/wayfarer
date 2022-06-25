$(document).ready(function(){
    let coins = 0;
    document.cookie = "coins=1000";
    $("#collect-coin-bttn").click(function(){
        coins++;
        let action = $("#action");
        action.html("You have " + coins + " coins.");
    });
});