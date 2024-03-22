/**
 * Created by Administrator on 2016-03-15.
 */
$(function(){
    Skill.initEditor();
});

var Skill = {
//    $oribox : null,
    $levelsHolder : null,
    $addLevelLink : null,
    $newLevelDiv : null,

    $effectsHolder : null,
    $addEffectLink : null,
    $newEffectDiv : null,

    deleteSkill : function(deleteId){
        $('#deleteId').val(deleteId);
        $('#delete').submit();
    },

    initEditor : function(){
//        console.log(Encounter.arkData);
/*
        Skill.$levelsHolder = $('div.skillLevel');
        Skill.$addLevelLink = $("<a href='#' class='add_level_link'>LV추가</a>");
        Skill.$newLevelDiv = $("<div>").append(Skill.$addLevelLink);
        Skill.$levelsHolder.append(Skill.$newLevelDiv);

        Skill.$levelsHolder.data('index', Skill.$levelsHolder.find('label[for*=_lv]').length);

        Skill.$addLevelLink.on('click', function(e){
            e.preventDefault();
            Skill.addLevelForm(Skill.$levelsHolder, Skill.$newLevelDiv);
        });

        Skill.$effectsHolder = $('div.skillEffect');
        Skill.$addEffectLink = $("<a href='#' class='add_effect_link'>Effect추가</a>");
        Skill.$newEffectDiv = $('<div>').append(Skill.$addEffectLink);
        Skill.$effectsHolder.append(Skill.$newLevelDiv);
*/
    },

    addLevelForm : function($holder, $newLinkLi){
        var prototype = $holder.data('prototype');
        var index = $holder.data('index');

        var newForm = prototype.replace(/skill_levels___name__/g, "skill_levels_"+index)
            .replace("skill[levels][__name__]", "skill[levels]["+index+"]");

        $holder.data('index', index+1);
        var $newFormLi = $("<div>").append(newForm);
        $newLinkLi.before($newFormLi);

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
    allChange : function(colume){
        var $value = $('#all_'+colume).val();
        $('.'+colume).each(function(){
            $(this).val($value);
        });
    },


};
