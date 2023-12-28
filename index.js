$(document).ready(function() {
    $('.container').on('change', '.fileInput', function(event) {
        var x = URL.createObjectURL(event.target.files[0]);
        var img = $('<img>').attr('src', x);
        $(this).closest('.inner-div-2').find('.inner-div-1').empty().append(img);
    });

    $('.addAnother').on('click', function() {
        const container = $('.container');
        const newDiv = $('<div class="inner-div-2"></div>');

        const newFileInput = $('<input type="file" class="fileInput">');

        const newDropdown = $('<select class="dropdown">' +
            '<option value="Primary">Primary</option>' +
            '<option selected value="Secondary">Secondary</option>' +
            '</select>');

        const removeLink = $('<button class="removeLink">Remove</button>');
        removeLink.addClass('remove-button');
       
        removeLink.on('click', function(event) {
            event.preventDefault();
            $(this).closest('.inner-div-2').remove();
        });

        const imgDiv = $('<div class="inner-div-1"></div>');

        newDiv.append(imgDiv);
        newDiv.append(newFileInput);
        newDiv.append(newDropdown);
        newDiv.append(removeLink);
        
        container.append(newDiv);

        updateDropdowns()
 
    });

    $('.container').on('change', '.dropdown', function() {
        if ($(this).val() === 'Primary') {
            $('.dropdown').not(this).val('Secondary');
            updateDropdowns();
        }
    });

    function updateDropdowns() {
        let primaryCount = 0;
        $('.dropdown').each(function() {
            if ($(this).val() === 'Primary') {
                primaryCount++;
            }
        });

        
    }
   
});










