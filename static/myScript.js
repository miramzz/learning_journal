$(function(){
    $(".add_entry").on('submit', function(addEntry){
        $.ajax("{{ url_for('add_entry') }}", {
            type:'POST',
            data:$('form').serialize(),
            success: function(show_entries){
              show_entries.preventDefault();
              $('.edit').html(entryData);
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

