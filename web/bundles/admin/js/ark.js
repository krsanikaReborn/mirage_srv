/**
 * Created by Administrator on 2016-03-15.
 */
$(function(){
    Ark.changeArkId();
    Ark.$oribox = $('#ori_tags');
    Ark.changeArkSelecterBox();

});

var Ark = {
    $arkId : null,
    $oribox : null,

    changeArkId : function(){
        Ark.$arkId = $("#arkSelector").val();
    },

    changeArkSelecterBox : function(){
        var qs = document.location.search.split('+').join(' ');

        var params = {},
            tokens,
            re = /[?&]?([^=]+)=([^&]*)/g;

        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }

        $('#arkSelector').val(params.id);


    },

    loadArk : function(){
        $('#loadId').val(Ark.$arkId);
        $('#load').submit();
    },

    initEditor : function(){
        console.log(Encounter.arkData);

    },
    $tags : [],

    TagBoxInitialize : function(){
        $.each($('.tagBox'), function(i, tagbox){
            var setterBox = Ark.$oribox.clone().show();
//            var setterNum = $(tagbox).attr('id').replace(/[^0-9^\.]/g,"");
            setterBox.attr({id : "setterBox"+i, class : "setterBox"});
            $(tagbox).after(setterBox);
            var tag = [];
            $.each($(tagbox).children(), function(j, data){
                tag.push($(data).val());
                setterBox.children($(data).val()).attr('selected', 'selected');
            });
            Ark.$tags[i] = tag;
        });

    },

    toSkillEditor : function(id){
        event.preventDefault();
        window.open(skillUrl+"?id="+id, "blank");
        return false;
    },

    switchTagTable : function(){
        event.preventDefault();
        $('#tag_table').toggle();
    }
};

var arkId = null;
