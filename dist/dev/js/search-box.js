$("#searchInPage").keyup(function(e) {
    if(e.which == 13) {
        $('.search_submit').click();
    } else {
        if ($(this).val().length > 0) {
            $('.search-pane').slideDown();
        } else {
            $('.search-pane').text("");
            $('.search-pane').slideUp();
        }
        $('.search-pane').text( $(this).val() );
    }
});

//Removed per HCL request
//$(".search-trigger__icon svg").click(function(){
//    if($(".search-trigger__icon--open").length!=0){
//        var str = "https://www.metlife.com/searchresults?query=";
//        var val= $('#searchInPage').val();
//        var val2 = "&spell_check=true&and_on=Y&sel_path=metlife%2Findividual%2Findex.html&remoteUser=";
//        str += val+val2;
//        window.location.href = str;
//    }
//});