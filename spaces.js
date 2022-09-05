// Entering & Exiting Full Screen  

let myDocument = document.documentElement;
let full = document.getElementById("fullscreen");

full.addEventListener("click", ()=>{
    if(full.textContent == "Fullscreen"){
        if (myDocument.requestFullscreen) {
            myDocument.requestFullscreen();
        } 
        else if (myDocument.msRequestFullscreen) {
            myDocument.msRequestFullscreen();
        } 
        else if (myDocument.mozRequestFullScreen) {
            myDocument.mozRequestFullScreen();
        }
        else if(myDocument.webkitRequestFullscreen) {
            myDocument.webkitRequestFullscreen();
        }
        full.textContent = "Minimize";
    }
    else{
        if(document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if(document.msexitFullscreen) {
            document.msexitFullscreen();
        }
        else if(document.mozexitFullscreen) {
            document.mozexitFullscreen();
        }
        else if(document.webkitexitFullscreen) {
            document.webkitexitFullscreen();
        }

        full.textContent = "Fullscreen";
    }
});

// Filtering By Member Data  

MemberStack.onReady.then(function(member) {
   var memberid = member["webflow-member-id"];
   document.getElementById("member").textContent = memberid;
});

//Adobe PDF reader 

src="https://documentcloud.adobe.com/view-sdk/viewer.js"
type="text/javascript"

    function renderPdf(fileName, url) {
       var adobeDCView = new AdobeDC.View({ clientId: "609ad58c69c240c4aa3062540404852e", divId: "adobe-dc-view" });
        adobeDCView.previewFile({ 
              content: { location: { url }}, 
              metaData: { fileName }
          }, {
             defaultViewMode: "FIT_WIDTH",
             enableSearchAPIs: false,
             showZoomControl: false,
          });
}

    $('.piecenamecontainer').on('click', function () { renderPdf($(this).find('.piecename').text(), $(this).find('.h0-testing.pdf').text()) });
    document.addEventListener("adobe_dc_view_sdk.ready", function () { renderPdf("{{wf {&quot;path&quot;:&quot;active-piece:name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}", "{{wf {&quot;path&quot;:&quot;active-piece:pdf&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}") });

// YT logic inital state  

$( document ).ready(function() {
    if ("{{wf {&quot;path&quot;:&quot;active-piece:demo-link&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}"=== "") {
        $('.tools.yt').hide();
    };
});


// adding in YT through Click  

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: '{{wf {&quot;path&quot;:&quot;active-piece:demo-link&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}',
        startSeconds: '5',
        playerVars: { 
            autoplay: 0, 
            controls: 1, 
            showinfo: 0,        // Hide the video title
            modestbranding: 1,  // Hide the Youtube Logo
            start: "{{wf {&quot;path&quot;:&quot;active-piece:start-time&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
        },
        events: {
        'onReady': onPlayerReady
        }
    });

}
function onPlayerReady(event) {
    event.target.playVideo();
}

$(function() {
    $('.cms-piece-item').on('click', function() {
    let demo = $(this).find('.piecedemo').text();
    let start = $(this).find('.start').text();
    console.log(start);
    player.cueVideoById(demo, start);

    if (demo === "" ){
        $('.demo-add').show();
    } else{
        $('.demo-add').hide();
    };
    
  });
    
  });

// Clicking on Piece   

  $('.piecenamecontainer').on('click', function () {
  $('.horizontal-simple.abs-right').removeClass('active');
  $(this).siblings('.horizontal-simple.abs-right').addClass('active');
  $('.things-content').toggleClass('active');
  
    let name = $(this).find('.piecename').text();
    let pieceid = $(this).find('.pieceid').text();

    document.getElementById("id-1").value = pieceid;
    document.getElementById("id-2").value = pieceid;
    document.getElementById("id-3").value = pieceid;
    
    document.getElementById("name-1").value = name; 
    document.getElementById("name-2").value = name;
    document.getElementById("name-3").value = name;
    document.getElementById("name-4").value = name;
    
    document.getElementById("name-text-1").textContent = name;
//    document.getElementById("name-text-2").textContent = name;
    document.getElementById("name-text-3").textContent = name;

});
    
// Adding a space ot a member's profile  

 // Checks if member is logged in 

	MemberStack.onReady.then(async function(member) {
	if(member.loggedIn){
	var metadata = await member.getMetaData();

	// If no metadata.spaces exists, create it in MemberStack.
  	metadata.spaces = metadata.spaces || [];

	// Defines the webflow spaces ID to a const of itemID (Pull this from the CMS)
		const itemID = "{{wf {&quot;path&quot;:&quot;item-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}"

	// If they have the item ID in their profile, hide the form, show the 'completed button'
	if(metadata.spaces.includes(itemID)){
		document.getElementById('space-added').style.display = 'none';
	}
		
	// When the button is clicked, if the itemID doesn't exist on their profile
	// add it, then push the metadata to MemberStack. 
	$('#space-added').click(function(){

  		if(metadata.spaces.indexOf(itemID) === -1){
				metadata.spaces.push(itemID); 
  	  	member.updateMetaData(metadata);

      }
		});
  }
});    
    
// Saving Current Page in Memory (For Login)  


// sets the url of the page you're on
localStorage.setItem('locat', location.href);



// Sharing Page For Mobile  

      let shareData = {
        title: '{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }} Music Space',
        url: 'https://www.clairmusic.com/spaces/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}',
      }

      const btn = document.querySelector('.tag.share');

      btn.addEventListener('click', () => {
        navigator.share(shareData)
});

// Closing All Forms 

    $('.cancel,.close-all-forms,.esc,.apollo-button.submit,.apollo-button.cancel, .apollo-button.multi-step').on('click', function() {
      $('.a-form-container').hide()
       $('.forms-container').hide()
    });

// Setting an Active Piece 

$('.widget-icons.star').on('click', function() {
    $('#active-submit').click();
});

// toggling side bar  

    $('.side-pannel-toggle,.piecename,.onbaording').on('click', function() {
      $('.content').toggleClass('moooove');
      $('.side-bar-arrow').toggleClass('active');
    });

// showing the star if the space is private   

	if ({{wf {&quot;path&quot;:&quot;private&quot;,&quot;type&quot;:&quot;Bool&quot;\} }} == "0")
  $('.horizontal-simple.abs-right,.category.add,.tool-icon.edit').hide();

// disabling auto zoom  

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>

// if, else statment. Widgets  

$('.tool-icon').on('click', function() {
    var color = $( this ).css( "background-color" );
    $('.tool-icon').css('background-color', '#2f3136');
    $('.tools,.tool,.black-bottom').hide();
    $(this).css('background-color', '#0091ff');
    $('.tool-icon.close').show();
  
  if ( $( this ).hasClass( "yt" ) ) {
        $('.tools.yt').show();
        $('#editdemo').show();
    } else if ( $( this ).hasClass( "mt" ) ) {
        $('#tools').show();
        $('#metronome').show();
        $('#editdemo').hide();
        $('#blackBottom').show();
    } else if ( $( this ).hasClass( "tn" ) ) {
        $('#tools').show();
        $('#tuner').show();
        $('#editdemo').hide();
        $('#blackBottom').show();
    } else if ( $( this ).hasClass( "tm" ) ) {
        $('#tools').show();
        $('#pomo').show();
        $('#editdemo').hide();
        $('#blackBottom').hide();
    } else if ( $( this ).hasClass( "edit" ) ) {
        $('#editdemo').show();
        $('#editdemo').css('background-color', '#2f3136');
    } else {
        $('.tools,.tool,.black-bottom,.tool-icon.edit,.tool-icon.close').hide();
    };

    if (color == "rgb(0, 145, 255)"){
        $('.tools,.tool,.black-bottom,.tool-icon.edit,.tool-icon.close').hide();
        $('.tool-icon').css('background-color', '#2f3136');
    };

  });

// removing the address bar  

window.scrollTo(0,1)

 

