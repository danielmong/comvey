// Initialize Ace Editor for HTML, CSS, and JavaScript
// HTML Editor
const htmlEditor = ace.edit("html-editor");
htmlEditor.session.setMode("ace/mode/html");

// CSS Editor
const cssEditor = ace.edit("css-editor");
cssEditor.session.setMode("ace/mode/css");

// JavaScript Editor
const jsEditor = ace.edit("js-editor");
jsEditor.session.setMode("ace/mode/javascript");

let result = document.querySelector('#result');

// Store debounce timer
let debounce;

/**
 * Update the iframe
 */
function updateIframe() {

    // Create a new iframe to replace the old one (to reset it)
    let clone = result.cloneNode();
    result.replaceWith(clone);
    result = clone;

    // Clear the iframe's document
    const iframeDocument = result.contentWindow.document;
    iframeDocument.open();
    iframeDocument.close();

    // Create a container for HTML content
    const htmlContent = `
    ${htmlEditor.getValue()}
    <style>${cssEditor.getValue()}</style>
    `;

    // Write to the iframe's document safely (without the <script> tag here)
    iframeDocument.documentElement.innerHTML = htmlContent;

    // Create the script element to execute JavaScript
    const scriptElement = iframeDocument.createElement('script');
    scriptElement.type = 'module';
    scriptElement.innerHTML = jsEditor.getValue();

    // Append the script to the iframe document to execute the JS code
    iframeDocument.body.appendChild(scriptElement);

}

function inputHandler() {
    clearTimeout(debounce);
    debounce = setTimeout(updateIframe, 500);
}

// Listen for input events
htmlEditor.on("change", function (delta) {
    inputHandler();
});

cssEditor.on("change", function (delta) {
    inputHandler();
});

jsEditor.on("change", function (delta) {
    inputHandler();
});

function initEditorSize() {
    let init_opts = window.localStorage.getItem("init_opts");

    if (init_opts) {
        init_opts = JSON.parse(init_opts);

        console.log(init_opts);


        $("#html-editor").height(window.innerHeight * init_opts.html_rate);
        $("#css-editor").height(window.innerHeight * init_opts.css_rate);
        $("#js-editor").height(window.innerHeight - 98 - 96 - window.innerHeight * init_opts.html_rate - window.innerHeight * init_opts.css_rate);

        $("#container-left").width(window.innerWidth * init_opts.left_rate);

    } else {
        let editorHeight = (window.innerHeight - 98 - 96) / 3;
        $(".editor").css("height", editorHeight);
    }
}

// Custom resize handle
// For resizing rows within the left container
var isResizingRows = false;
var lastY = 0;
var prevHeight = 0;
var nextHeight = 0;
var prevRow = null;
var nextRow = null;

// For resizing the width of the left and right containers
var isResizingWidth = false;
var lastX = 0;
var leftContainerWidth = 0;
var rightContainerWidth = 0;
var prevCol = null;
var nextCol = null;

$(".handler").on("mousedown", function (e) {
    isResizingRows = true;
    lastY = e.pageY;

    prevRow = $(this).prev();
    nextRow = $(this).next();

    prevHeight = prevRow.height();
    nextHeight = nextRow.height();

    e.preventDefault();
});

$(".resizable-handler").on("mousedown", function (e) {
    isResizingWidth = true;
    lastX = e.pageX;

    leftContainerWidth = $("#container-left").width();
    rightContainerWidth = $("#container-right").width();

    $('.overlay').css('display', 'block');

    e.preventDefault();
});

$(document).on("mousemove", function (e) {
    if (isResizingRows) {
        var diff = e.pageY - lastY;
        var newPrevHeight = prevHeight + diff;
        var newNextHeight = nextHeight - diff;

        if (newPrevHeight > 10 && newNextHeight > 10) {
            prevRow.height(newPrevHeight);
            nextRow.height(newNextHeight);
        }
    }

    if (isResizingWidth) {
        var diff = e.pageX - lastX;

        var newLeftWidth = leftContainerWidth + diff;
        var newRightWidth = rightContainerWidth - diff;

        if (newLeftWidth > 100 && newRightWidth > 100) { // Prevent widths too small
            $("#container-left").width(newLeftWidth);
            $("#container-right").width(newRightWidth);

            // Update the position of the resizable handler after moving
            $(".resizable-handler").css("left", newLeftWidth + "px");
        }
    }
});

$(document).on("mouseup", function () {
    if (isResizingRows || isResizingWidth) {
        let html_h = $("#html-editor").height();
        let css_h = $("#css-editor").height();

        let left_w = $("#container-left").width();

        console.log(html_h, css_h, left_w);


        let html_rate = html_h / window.innerHeight;
        let css_rate = css_h / window.innerHeight;

        let left_rate = left_w / window.innerWidth;

        let init_opts = {
            html_rate,
            css_rate,
            left_rate
        }

        localStorage.setItem("init_opts", JSON.stringify(init_opts));
    }

    isResizingRows = false;
    isResizingWidth = false;

    $('.overlay').css('display', 'none');
});

initEditorSize();