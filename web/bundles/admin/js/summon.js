/**
 * Created by Administrator on 2017-07-10.
 */
/**
 * Created by Administrator on 2016-03-15.
 */
$(function(){
    Summon.initEditor();
});

var Summon = {
//    $oribox : null,
    $modeHolder : null,
    $addmodeLink : null,
    $newmodeDiv : null,

    $tableHolder : null,
    $addTableLink : null,
    $newTableDiv : null,

    deleteSummon : function(deleteId){
        $('#deleteId').val(deleteId);
        $('#delete').submit();
    },

    initEditor : function(){
//        console.log(Encounter.arkData);
        
         Summon.$modeHolder = $('div.summonMode');
         Summon.$addModeLink = $("<a href='#' class='add_mode_link'>모드추가</a>");
         Summon.$newModeDiv = $("<div>").append(Summon.$addModeLink);
         Summon.$modeHolder.append(Summon.$newModeDiv);

         Summon.$modeHolder.data('index', Summon.$modeHolder.find('label[for*=_lv]').length);

         Summon.$addModeLink.on('click', function(e){
         e.preventDefault();
         Summon.addModeForm(Summon.$modeHolder, Summon.$newModeDiv);
         });

         Summon.$tableHolder = $('div.summonTable');
         Summon.$addTableLink = $("<a href='#' class='add_table_link'>테이블추가</a>");
         Summon.$newTableDiv = $('<div>').append(Summon.$addTableLink);
         Summon.$tableHolder.append(Summon.$newModeDiv);
        
    },

    addModeForm : function($holder, $newLinkLi){
        var prototype = $holder.data('prototype');
        var index = $holder.data('index');

        var newForm = prototype.replace(/summon_mode___name__/g, "summon_mode_"+index)
            .replace("summon[mode][__name__]", "summon[mode]["+index+"]");

        $holder.data('index', index+1);
        var $newFormLi = $("<div>").append(newForm);
        $newLinkLi.before($newFormLi);

    },

};
