$(document).ready(function(){
    let coins = 0;
    //if(document.cookie){
        coins = 100//document.cookie;
    //}
    document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
    //document.cookie = "username=1000";
    document
    $("#collect-coin-bttn").click(function(){
        coins++;
        let action = $("#action");
        action.html("You have " + coins + " coins.");
        //document.cookie = "username=" + coins;
        //alert(document.cookie);
    });


});