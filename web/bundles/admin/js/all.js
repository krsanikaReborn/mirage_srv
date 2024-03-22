/**
 * Created by krsanika on 2017-05-17.
 */

$(function(){
    All.changeIdSelector();
    All.changeSelectorBox();
});


var All = {
    idSelector : null,

    load : function(){
        $('#loadId').val(All.idSelector);
        $('#load').submit();
    },
    create : function() {
        $('#loadId').val(0);
        $('#load').submit();
    },

    sendChangeXml : function(genre, code, type){
        text = $("#"+genre+type+"Text").val();
        $.ajax( {
                url : xmlUrl,
                type : "GET",
                data : { genre : genre, code : code, type : type, text : text}
            }
        ).done(function(data){
            console.log(data);
        });



    },

    changeIdSelector : function(id){
        All.idSelector = $("#idSelector").val();
    },

    changeSelectorBox : function(){
        var qs = document.location.search.split('+').join(' ');

        var params = {},
            tokens,
            re = /[?&]?([^=]+)=([^&]*)/g;

        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }

        $('#idSelector').val(params.id);
    },


};