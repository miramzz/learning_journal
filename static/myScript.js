$(function(){
    $(".add_entry").on('submit', function(addEntry){
        addEntry.preventDefault();
        $.ajax("/add", {
            type:'POST',
            data:$('form').serialize(),
            success: function(entryData){
              entryData.preventDefault();
              $('.entry').html(entryData);
              $('.add_entry').remove();
            }
        });
    });
});

