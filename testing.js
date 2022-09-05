// define a handler
document.onkeydown = function () {
    $('.piece-search-form').show();
    $('.space-search').focus();
    console.log("focused");
}

// if, else statment. Filter  

$('.filter-trigger').on('click', function() {
    var color = $( this ).css("background-color");
    console.log(color)

if  ( $( this ).hasClass( "class" ) ) {
    $(this).siblings('.filter-trigger').css('background-color', 'rgb(78, 78, 78)').show();

} else if (color == "rgb(78, 78, 78)") {
    $(this).siblings('.filter-trigger').hide().css('background-color', 'rgb(78, 78, 78)');
    $(this).show().css('background-color', 'rgb(0, 145, 255)');

} else if ( $( this ).hasClass( "active" ) ) {
    $(this).siblings('.filter-trigger').show();
};

});

// hiding form on click of "reset" or piece 

$('.reset,.filter-list').on('click',function(){
    $('.piece-search-form').hide();
    $('.filter-trigger').hide().css('background-color', 'rgb(78, 78, 78)');
    $('.filter-trigger.class').show();
})

// Removing Horizontal Scroll 

$('.ci-testing').on('click', function() { // clicking a piece container

let piecename = $(this).find('.name').text();  // getting the NAME .textContent
let piecedemo = $(this).find('.demo').text();  // getting the ID .textContent
let pieceid = $(this).find('.id').text();  // getting the DEMO .textContent
let piecepdf = $(this).find('.pdf').text();  // getting the PDF .textContent

console.log(piecename,piecedemo,pieceid,piecepdf);

document.getElementById("name").textContent = piecename; // setting name of ACTIVE PIECE
document.getElementById("demo").textContent = piecedemo; // setting VALUE of ACTIVE PIECE
document.getElementById("id").textContent = pieceid;  // setting NAME 
document.getElementById("pdf").textContent = piecepdf;  // setting NAME 

});    

// pdf embed

function renderPdf(fileName, url, id) {
var adobeDCView = new AdobeDC.View({ clientId: "609ad58c69c240c4aa3062540404852e", divId: "adobe-dc-view" });
adobeDCView.previewFile({
    content: { location: { url } },
    metaData: { fileName, id }
}, {
    enableAnnotationAPIs: true,
    includePDFAnnotations: true,
}).then(function (adobeViewer) {
    console.log("id:", id);
    adobeViewer.getAnnotationManager().then(function (annotationManager) {
        annotationManager.getAnnotations().then(function (annotations) {
            console.log("annotations", annotations);
            annotationManager.addAnnotationsInPDF(annotations).then(function () {
                console.log("succcess");
            })
        })
    })
});

adobeDCView.registerCallback(
    AdobeDC.View.Enum.CallbackType.SAVE_API,
    function (metadata, content, options) {
        return new Promise((resolve, reject) => {
            resolve({
                code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
                data: { metaData: metadata }
            });
        });
    }, {
    autoSaveFrequency: 0,
    enableFocusPolling: false,
    showSaveButton: true
});
};

$('.ci-testing').on('click', function () {
renderPdf($(this).find('.piecename').text(), $(this).find('.pdf').text(), $(this).find('.id').text());
console.log(fileName, url, id); 
});
document.addEventListener("adobe_dc_view_sdk.ready", function () {
renderPdf("skyfall", "https://uploads-ssl.webflow.com/5fcc62d86ada3843c072ce92/62f459c10a419281d514338b_Adele_-_Skyfall.pdf", "62ea981978ff0023a7519ada")
});

console.log ("push is working")