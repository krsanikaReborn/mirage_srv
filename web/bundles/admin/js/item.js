/**
 * Created by Administrator on 2016-03-15.
 */
$(function(){
    Item.changeIdItem();
//    Ark.$oribox = $('#ori_tags');
//    Ark.TagBoxInitialize();
    Item.initEditor();

});

var Item = {
    $idItem : null,
//    $oribox : null,
    $levelsHolder : null,
    $addLevelLink : null,
    $newLevelDiv : null,

    $effectsHolder : null,
    $addEffectLink : null,
    $newEffectDiv : null,

    changeIdItem : function(){
        Item.$idItem = $("#itemSelector").val();
    },

    loadItem : function(){
        $('#loadId').val(Item.$idItem);
        $('#load').submit();
    },
    createItem : function() {
        $('#loadId').val(0);
        $('#load').submit();
    },
    initEditor : function(){ /*
//        console.log(Encounter.arkData);
        Item.$levelsHolder = $('div.itemLevel');
        Item.$addLevelLink = $("<a href='#' class='add_level_link'>LV추가</a>");
        Item.$newLevelDiv = $("<div>").append(Item.$addLevelLink);
        Item.$levelsHolder.append(Item.$newLevelDiv);

        Item.$levelsHolder.data('index', Item.$levelsHolder.find('label[for*=_lv]').length);

        Item.$addLevelLink.on('click', function(e){
            e.preventDefault();
            Item.addLevelForm(Item.$levelsHolder, Item.$newLevelDiv);
        });

        Item.$effectsHolder = $('div.itemEffect');
        Item.$addEffectLink = $("<a href='#' class='add_effect_link'>Effect추가</a>");
        Item.$newEffectDiv = $('<div>').append(Item.$addEffectLink);
        Item.$effectsHolder.append(Item.$newLevelDiv);
*/
    },

/*
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

    }
*/
};

var idItem = null;
