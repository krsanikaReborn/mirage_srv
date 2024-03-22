/**
 * Created by Administrator on 2016-03-15.
 */
$(function(){
    Encounter.$addTileLink = $('<a href="#" class="add_tile_link">타일추가</a>');
    Encounter.$newTileLink = $('<div></div>').append(Encounter.$addTileLink);
    // Get the ul that holds the collection of tags
    $tileHolder = $('#encounter_tiles');

    // add the "add a tag" anchor and li to the tags ul
    $tileHolder.append(Encounter.$newTileLink);

    // count the current form inputs we have (e.g. 2), use that as the new
    // index when inserting a new item (e.g. 2)
    $tileHolder.data('index', $tileHolder.find(':input').length);

    Encounter.$addTileLink.on('click', function(e) {
        // prevent the link from creating a "#" on the URL
        e.preventDefault();
        // add a new tag form (see next code block)
        Encounter.addForm($tileHolder, Encounter.$newTileLink);
    });

    Encounter.$addTriggerLink = $('<a href="#" class="add_trigger_link">트리거추가</a>');
    Encounter.$newTriggerLink = $('<div></div>').append(Encounter.$addTriggerLink);
    // Get the ul that holds the collection of tags
    $triggerHolder = $('#encounter_triggers');

    // add the "add a tag" anchor and li to the tags ul
    $triggerHolder.append(Encounter.$newTriggerLink);

    // count the current form inputs we have (e.g. 2), use that as the new
    // index when inserting a new item (e.g. 2)
    $triggerHolder.data('index', $triggerHolder.find(':input').length);

    Encounter.$addTriggerLink.on('click', function(e) {
        // prevent the link from creating a "#" on the URL
        e.preventDefault();
        // add a new tag form (see next code block)
        Encounter.addForm($triggerHolder, Encounter.$newTriggerLink);
    });


});

var Encounter = {


// setup an "add a tag" link
    $addTileLink : null,
    $newTileLink : null,
    $addTriggerLink : null,
    $newTriggerLink : null,


    addForm : function ($collectionHolder, $newLinkLi) {
        // Get the data-prototype explained earlier
        var prototype = $collectionHolder.data('prototype');

        // get the new index
        var index = $collectionHolder.data('index');

        // Replace '__name__' in the prototype's HTML to
        // instead be a number based on how many items we have
        var aa = prototype.replace(/__name__/g, index);
        var newForm = aa.replace(/label__/g, "");

        // increase the index with one for the next item
        $collectionHolder.data('index', index + 1);

        // Display the form in the page in an li, before the "Add a tag" link li
        var $newFormLi = $('<div></div>').append(newForm);
        $newLinkLi.before($newFormLi);
    },



};

