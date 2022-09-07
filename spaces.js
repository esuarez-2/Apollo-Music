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
    document.getElementById("name-text-3").textContent = name;

});

// Saving Current Page in Memory (For Login)  

// sets the url of the page you're on

localStorage.setItem('locat', location.href);

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

$('.side-pannel-toggle,.onbaording').on('click', function() {
    $('.content').toggleClass('moooove');
    $('.side-bar-arrow').toggleClass('active');
});

//

$('.piecename').on('click', function() {
    $('.content').addClass('moooove');
    $('.side-bar-arrow').addClass('active');
});

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

// Opening Search

$('.search-icon').on('click', function() {
    $('.piece-search-form').show();
    $('.space-search').focus();
    $('.filter-trigger.class').css('background-color', 'rgb(78, 78, 78)');
    $('.x.class').hide();
    
});

$('.x.reset').on('click', function() {
    
    $('.filter-trigger.class').css('background-color', 'rgb(78, 78, 78)');
    $('.filter-trigger.family').hide();
    $('.filter-class').show();
    
});
    
//IF ELSE STATMENT, searchFILTER 

    $('.filter-trigger').on('click', function() {
    var color = $( this ).css( "background-color" );
		console.log(color);

    if  ( $( this ).hasClass( "class" ) ) {
        $('.filter-class').hide();
        $(this).closest('.filter-class').show();
        $(this).siblings('.filter-trigger').show();
    } else if ( $( this ).hasClass( "family" ) ) {
        let familyName = $(this).text();
        console.log(familyName);
        $(this).siblings('.filter-trigger.class').css('background-color', 'rgb(0, 145, 255)');
        $(this).siblings('.filter-trigger.class').find('.x').show();
        $(this).closest('.filter-class').find('.class-name').textContent = familyName;
        $('.filter-trigger.family').hide();
        $('.filter-class').show();
    } else if (color == "rgb(0, 145, 255)") {
        console.log('color is blue');
        $(this).css('background-color', 'rgb(78, 78, 78)');
        $(this).find('.x').hide();
        $('.filter-trigger.family').hide();
        $('.filter-class').show();
    };
    
    });


//reset search form  

    $('.reset,.filter-list,.exit-filter').on('click', function(){
        $('.piece-search-form').hide();
        $('.x.class').hide();
        $('.filter-trigger.class').css('background-color', 'rgb(78, 78, 78)');
        $('.filter-trigger.class').show();
        $('#search').val('');
        $('.filter-trigger.family').hide();
        $('.filter-class').show();
    })

    $('.x.class').on('click', function() {
        
        $(this).closest('.filter-trigger.class').css('background-color', 'rgb(78, 78, 78)');
        $(this).hide();
        $('.filter-trigger.family').hide();
        $('.filter-class').show();
        
    });
    

/* BUGS

1. pdf focusing on-render
2. youtube autoplaying
3. Turn on/off triggers based on width ()
4. combine doesnt allow for empty state
5. down-arrow, focus next
6. enter, click focused item
7. code logic - passing text value into parent name

    /*    if (event.keyCode === 40) {
            $('.piecenamecontainer.search').focus();
            console.log('piecefocused')
 */




    