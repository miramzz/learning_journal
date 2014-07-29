$(function(){
    $(".add_entry").on('submit', function(addEntry){
        addEntry.preventDefault();
        $.ajax("/add", {
            type:'POST',
            data:$('form').serialize(),
            success: function(show_entries){
              show_entries.preventDefault();
              $('.entry').html(entryData);
              $('.add_entry').remove();
            }
        });
    });
});

$(function(){
    $(".edit").on('submit', function(updateEntry){
        updateEntry.preventDefault();
        $.ajax("/edit/{{ entry[0] }}", {
            type:'POST',
            data:$('form').serialize(),
            success: function(entryData){
              entryData.preventDefault(),
              $('.edit').html(updateEntry);
              $('.edit_entry').remove();
            }
        })
    });
});

