/**
 * Created by KRSANIKA on 2018-01-23.
 */
var skillStr = {};
$(function(){
    $('#phaseSelector').val(1).trigger('change');
    Deal.initSkillSelector();
});


Deal = {
    idGiver : null,
    idSkill : null,

    changeGiver : function(selector){
        Deal.idGiver = selector.value;
        $('#giverHp').val(phaseData[Deal.idGiver].hp);
        $('#giverAtk').val(phaseData[Deal.idGiver].atk);
        $('#giverDef').val(phaseData[Deal.idGiver].def);
        $('#giverAgi').val(phaseData[Deal.idGiver].agi);
        $('#giverCon').val(phaseData[Deal.idGiver].con);
        $('#skillSelector').empty();
        $.each(phaseData[Deal.idGiver].skills, function(i, idSkill){
            var skill = $('<input>').attr({id : 'skill'+i, value : i, type : 'radio', name : 'idSkill'});
            $('#skillSelector').append(skill).append(idSkill).append('<br>');
        });
        $('#giverHP').val(phaseData[Deal.idGiver].hp);
    },

    initSkillSelector : function(){
        $.ajax({
            type : "GET",
            url : skillXmlUrl,
            dataType : 'xml',
            error : function(){
                alert(xml);
            }
        }).done(function(xml){
            $(xml).find('skill').each(function(){
                skillStr[$(this).attr('id')] = $(this).find('name').text();
            });
            var buffer = $('#BuffSelector');
            var debuffer = $('#DebuffSelector');
            $.each(skillData, function(i, skill){
                var idCondition = null;
                var chanceStr = null;
                $.each(skill.levels[0].effects, function(j, effect){
                    $.each(effect.effect_contents, function(k, content){
                        if(content.id_condition != 0) idCondition = content.id_condition;
                        chanceStr = content.chance;
                    });
                });
                if (idCondition != null){
                    console.log(skill.id_skill, skillStr[skill.id_skill]);
                    var option = $('<option>').val(skill.id_skill).text("ID : "+ skill.id_skill +" "+ skillStr[skill.id_skill]);
                    $('#buffChance').text(chanceStr);
                    buffer.append(option);
                }
            });
        });

    },


}