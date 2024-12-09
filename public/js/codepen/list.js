let id = "";

$(".delete-btn").click(function () {
    id = $(this).data('id');

    var csrfToken = $('meta[name="csrf-token"]').attr('content');

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': csrfToken
        }
    });

    let onOk = () => {
        $.ajax({
            url: `/codepen/${id}`,
            method: "DELETE",
            success: function (response) {
                window.location.reload();
            },
            error: function (xhr, status, error) {
                new AWN().warning('Server Error.');
            }
        })
    };
    new AWN().confirm(
        'Are you sure?',
        onOk,
        {
            labels: {
                confirm: 'Are you agree to remove this code?'
            }
        }
    )
})


$(".preview-btn").click(function (e) {

    id = $(this).data("id");

    var csrfToken = $('meta[name="csrf-token"]').attr('content');

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': csrfToken
        }
    });

    $.ajax({
        url: `/codepen/preview/${id}`,
        type: 'GET',
        success: function (response) {
            // let preview = document.querySelector('#preview');
            // let clone = preview.cloneNode();
            // preview.replaceWith(clone);
            // preview = clone;

            // preview.contentWindow.document.open();
            // preview.contentWindow.document.writeln(
            //     `${response.content_html}
            //     <style>${response.content_css}</style>
            //     <script type="module">${response.content_js}<\/script>`
            // );
            // preview.contentWindow.document.close();
            let preview = document.querySelector('#preview');
            let clone = preview.cloneNode();
            preview.replaceWith(clone);
            preview = clone;

            // Clear the iframe's document
            const iframeDocument = preview.contentWindow.document;
            iframeDocument.open();
            iframeDocument.close();

            console.log(response);
            

            // Create a container for HTML content
            const htmlContent = `
                ${response.content_html}
                <style>${response.content_css}</style>
                <script type="module">${response.content_js}<\/script>
            `;

            // Write to the iframe's document safely
            iframeDocument.documentElement.innerHTML = htmlContent;
        },
        error: function (xhr, status, error) {
            new AWN().warning('Server Error.');
        }
    });


    $(".preview-modal").css("display", "block");
})

$(".close").click(function () {
    $(".preview-modal").css("display", "none");
})

$(".copy").click(function () {
    location.href = `/codepen/edit/${id}`;
})

$(".edit").click(function () {
    id = $(this).data("id");
    location.href = `/codepen/edit/${id}`;
})