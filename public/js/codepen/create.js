$("#save-btn").click(function () {
    let html = htmlEditor.getValue();
    let css = cssEditor.getValue();
    let js = jsEditor.getValue();

    let desc = $("#desc").val();
    let title = $("#title").val();
    let is_public = $('#is_public').is(':checked');

    var csrfToken = $('meta[name="csrf-token"]').attr('content');

    if (!html && !css && !js) {
        new AWN().info('No code has been written...');
        return;
    }

    if (!title) {
        new AWN().info('Please input the title of your code');
        return;
    }

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': csrfToken
        }
    });

    $.ajax({
        url: '/codepen/save',  // Your endpoint URL
        type: 'POST',           // Method (GET, POST, etc.)
        data: {
            content_html: html,
            content_css: css,
            content_js: js,
            title: title,
            description: desc,
            status: is_public ? 'public' : 'private'
        },
        success: function (response) {
            if(response.message == 'success') {
                new AWN().success('Your code has been saved successfully.');
    
                location.href = '/codepen/edit/' + response.id;
            } else if(response.message == 'exceed') {
                new AWN().warning('You have exceeded your free usage limit(5 times).');
            }
        },
        error: function (xhr, status, error) {
            new AWN().warning('Server Error.');
        }
    });
});
