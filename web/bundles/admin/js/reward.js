/**
 * Created by Administrator on 2016-03-15.
 */
$(function(){
    Reward.changeIdReward();
//    Ark.$oribox = $('#ori_tags');
//    Ark.TagBoxInitialize();
    Reward.initEditor();

});

var Reward = {
    $idReward : null,
//    $oribox : null,
    $levelsHolder : null,
    $addLevelLink : null,
    $newLevelDiv : null,

    $effectsHolder : null,
    $addEffectLink : null,
    $newEffectDiv : null,

    changeIdReward : function(){
        Reward.$idReward = $("#rewardSelector").val();
    },

    loadReward : function(){
        $('#loadId').val(Reward.$idReward);
        $('#load').submit();
    },
    createReward : function() {
        $('#loadId').val(0);
        $('#load').submit();
    },
    initEditor : function(){ /*
//        console.log(Encounter.arkData);
        Reward.$levelsHolder = $('div.rewardLevel');
        Reward.$addLevelLink = $("<a href='#' class='add_level_link'>LV추가</a>");
        Reward.$newLevelDiv = $("<div>").append(Reward.$addLevelLink);
        Reward.$levelsHolder.append(Reward.$newLevelDiv);

        Reward.$levelsHolder.data('index', Reward.$levelsHolder.find('label[for*=_lv]').length);

        Reward.$addLevelLink.on('click', function(e){
            e.preventDefault();
            Reward.addLevelForm(Reward.$levelsHolder, Reward.$newLevelDiv);
        });

        Reward.$effectsHolder = $('div.rewardEffect');
        Reward.$addEffectLink = $("<a href='#' class='add_effect_link'>Effect추가</a>");
        Reward.$newEffectDiv = $('<div>').append(Reward.$addEffectLink);
        Reward.$effectsHolder.append(Reward.$newLevelDiv);
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

var idReward = null;
