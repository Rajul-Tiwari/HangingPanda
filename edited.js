$(document).ready(function() {
    function createNewInnerDiv() {
        const newInnerDiv2 = $('<div class="inner-div-2">\
                                    <div class="inner-div-1"></div>\
                                    <input type="file" class="fileInput">\
                                    <select>\
                                        <option value="secondary">Secondary</option>\
                                        <option value="primary">Primary</option>\
                                    </select>\
                                    <button class="remove-button">Remove</button>\
                                </div>');

        newInnerDiv2.find('.remove-button').on('click', function(event) {
            event.preventDefault();
            $(this).closest('.inner-div-2').remove();
        });

        // this is for file upload
        handleFileUpload(newInnerDiv2);

        return newInnerDiv2;
    }

    function handleFileUpload(divElement) {
        divElement.find('.fileInput').on('change', function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = function(event) {
                const img = $('<img>').attr('src', event.target.result);
                divElement.find('.inner-div-1').empty().append(img);
            };

            reader.readAsDataURL(file);
        });
    }

    $('.addAnother').on('click', function() {
        const container = $('.container');
        const newInnerDiv2 = createNewInnerDiv();
        container.append(newInnerDiv2);
    });

    // Primary Secondary functionality for dropdown
    $(document).on("change", ".inner-div-2 select", function() {
        const primaryCount = $(".inner-div-2 select").filter(function() {
            return $(this).val() === "primary";
        }).length;

        if ($(this).val() === "primary" && primaryCount > 1) {
            $(this).val("secondary");
            alert("You have already selected one dropdown as primary");
        }
    });

   
    const initialDiv = $('.container').find('.inner-div-2').first(); 
    handleFileUpload(initialDiv);
});



