/**
 * Created by Administrator on 2016-03-15.
 */
$(function(){
    Equipment.changeIdEquipment();
//    Ark.$oribox = $('#ori_tags');
//    Ark.TagBoxInitialize();
    Equipment.initEditor();

});

var Equipment = {
    $idEquipment : null,
//    $oribox : null,
    $levelsHolder : null,
    $addLevelLink : null,
    $newLevelDiv : null,

    $effectsHolder : null,
    $addEffectLink : null,
    $newEffectDiv : null,

    changeIdEquipment : function(){
        Equipment.$idEquipment = $("#equipmentSelector").val();
    },

    loadEquipment : function(){
        $('#loadId').val(Equipment.$idEquipment);
        $('#load').submit();
    },
    createEquipment : function() {
        $('#loadId').val(0);
        $('#load').submit();
    },
    initEditor : function(){ /*
//        console.log(Encounter.arkData);
        Equipment.$levelsHolder = $('div.equipmentLevel');
        Equipment.$addLevelLink = $("<a href='#' class='add_level_link'>LV추가</a>");
        Equipment.$newLevelDiv = $("<div>").append(Equipment.$addLevelLink);
        Equipment.$levelsHolder.append(Equipment.$newLevelDiv);

        Equipment.$levelsHolder.data('index', Equipment.$levelsHolder.find('label[for*=_lv]').length);

        Equipment.$addLevelLink.on('click', function(e){
            e.preventDefault();
            Equipment.addLevelForm(Equipment.$levelsHolder, Equipment.$newLevelDiv);
        });

        Equipment.$effectsHolder = $('div.equipmentEffect');
        Equipment.$addEffectLink = $("<a href='#' class='add_effect_link'>Effect추가</a>");
        Equipment.$newEffectDiv = $('<div>').append(Equipment.$addEffectLink);
        Equipment.$effectsHolder.append(Equipment.$newLevelDiv);
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

var idEquipment = null;
