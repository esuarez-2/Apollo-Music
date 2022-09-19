// passing new SRC value

$('.piece-container').on('click', function() {

    let tempo = $(this).find('.tempo').text();
    let demo = $(this).find('.demo').text();
    let timeSignature = $(this).find('.time-signature').text();
    let metronomeURL = "https://guitarapp.com/metronome-embed.html?tempo=";
    let ytURL = "https://www.youtube.com/embed/"
    let newMetronomeSrc = metronomeURL.concat(tempo,"&timeSignature=",timeSignature);
    let newYTSrc = ytURL.concat(demo,"t=17");
    console.log("tempo",tempo,"demo",demo,"new timeSig",timeSignature,"new Tempo src",newMetronomeSrc,newYTSrc);

    $('#youtube').attr('src', newYTSrc);
    $('#metronome').attr('src', newMetronomeSrc);
    $('#youtube')[0].contentWindow.location.reload(true);
    $('#metronome')[0].contentWindow.location.reload(true);

    if (demo=== "") {
        $('#youtube').hide();
    };

    if (tempo=== "") {
        $('#metronome').hide();
    };

    });

$('.exit-modal').on('click', function(){
    $(this).closest('.modal-container').hide();
});

    /* 
        1. if youtube is empty, show .add, hide, YT player 
        2. if demo is emptry ~ same 
        3. add form fields (youtube, metronome) 
        4. 
    */ 

// define a handler
document.onkeydown = function () {
    $('.piece-search-form').show();
    $('.space-search').focus();
}

// if, else statment. Filter  

$('.filter-trigger').on('click', function() {
    var color = $( this ).css("background-color");

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
    adobeViewer.getAnnotationManager().then(function (annotationManager) {
        annotationManager.getAnnotations().then(function (annotations) {
            annotationManager.addAnnotationsInPDF(annotations).then(function () {
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
});

document.addEventListener("adobe_dc_view_sdk.ready", function () {
renderPdf("skyfall", "https://uploads-ssl.webflow.com/5fcc62d86ada3843c072ce92/62f459c10a419281d514338b_Adele_-_Skyfall.pdf", "62ea981978ff0023a7519ada")
});