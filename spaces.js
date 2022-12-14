// On-Load States

$('.modal-bg-blur').hide();
$('.a-form-container').hide();

// Entering & Exiting Full Screen

let myDocument = document.documentElement;
let full = document.getElementById("fullscreen");

$('.tag.full-screen').on("click", ()=>{
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
        $('#full-screen').hide();
        $('#minimize').show();
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
        $('#full-screen').show();
        $('#minimize').hide();
    }
});

// Keyboard Shortcuts

$(document).keydown(function(e) { // e + ctrl
    if (e.ctrlKey && e.which === 69){
        $('.piece-search-form').show();
        $('.space-search').focus();
        e.preventDefault();
    }
});

$(document).keydown(function(e) { // ctrl + space
    if (e.ctrlKey && e.which === 32){
        $('.piece-search-form').show();
        $('.space-search').focus();
        e.preventDefault();
    }
});

$(document).keydown(function(e) { // alt + space
    if (e.altKey && e.which === 32){
        $('.piece-search-form').show();
        $('.space-search').focus();
        e.preventDefault();
    }
});

// Clicking on Piece   

    $('.piecenamecontainer').on('click', function () {
    $('.horizontal-simple.abs-right').removeClass('active');
    $(this).siblings('.horizontal-simple.abs-right').addClass('active');
    $('.things-content').toggleClass('active');
    $('.set-value-modal').hide();
    
    let name = $(this).find('.piecename').text();
    let pieceid = $(this).find('.pieceid').text();

    document.getElementById("id-1").value = pieceid;
    document.getElementById("id-2").value = pieceid;
    document.getElementById("id-3").value = pieceid;
    document.getElementById("id-4").value = pieceid;
    
    document.getElementById("name-1").value = name; 
    document.getElementById("name-2").value = name;
    document.getElementById("name-3").value = name;
    document.getElementById("name-4").value = name;
    document.getElementById("name-5").value = name;
    
    document.getElementById("name-text-1").textContent = name;
    document.getElementById("name-text-3").textContent = name;
    document.getElementById("name-text-4").textContent = name;

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

// piecename sidebar toggle

$('.piecenamecontainer').on('click', function() {
    $('.content').removeClass('moooove');
    $('.side-bar-arrow').removeClass('active');
});

// if, else statment. Widgets  

$('.tool-icon').on('click', function() {

    var color = $( this ).css( "background-color" );
    $('.tool-icon').css('background-color', '#2f3136');
    $('.tools,.tool,.black-bottom,.tool-icon.edit').hide();
    $(this).css('background-color', '#0091ff');
    $('.tool-icon.close').show();
    
    if ( $( this ).hasClass( "yt" ) ) {
        $('.tools.yt').show();
        $('.tool-icon.edit.yt').show().css('display', 'flex');
    } else if ( $( this ).hasClass( "mt" ) ) {
        $('.tools.mt').show().css('display', 'flex');
        $('.tool.mt').show();
        $('.button.guitar-link').show();
        $('.tool-icon.edit.mt').show().css('display', 'flex');
    } else if ( $( this ).hasClass( "tn" ) ) {
        $('#tools').show().css('display', 'flex');
        $('#tuner').show();
        $('.button.guitar-link').show();
        $('.tool-icon.edit').hide();
    } else if ( $( this ).hasClass( "tm" ) ) {
        $('#tools').show();
        $('#pomo').show();
        $('.tool-icon.edit.button.guitar-link').hide();
    } else if ( $( this ).hasClass( "edit" ) ) {
        $(this).show();
        $(this).css('background-color', '#2f3136');
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
    
});

$('.x.reset').on('click', function() {
    
    $('.filter-trigger.class').css('background-color', 'rgb(78, 78, 78)');
    $('.filter-trigger.family').hide();
    $('.filter-class').show();
    
});
    
//IF ELSE STATMENT, searchFILTER 

    $('.filter-trigger').on('click', function() {
    var color = $( this ).css( "background-color" );
    

    if  ( $( this ).hasClass( "class" ) ) {
        $('.filter-class').hide();
        $(this).closest('.filter-class').show();
        $(this).siblings('.filter-trigger').show();
    } else if ( $( this ).hasClass( "family" ) ) {
        let familyName = $(this).text();
        $(this).siblings('.filter-trigger.class').css('background-color', 'rgb(0, 145, 255)');
        $(this).closest('.filter-class').find('.class-name').textContent = familyName;
        $('.filter-trigger.family').hide();
        $('.filter-class').show();
    } else if (color == "rgb(0, 145, 255)") {
        $(this).css('background-color', 'rgb(78, 78, 78)');
        $('.filter-trigger.family').hide();
        $('.filter-class').show();
    };
    
    });


//reset search form  

    $('.reset,.filter-list,.exit-filter').on('click', function(){
        $('.piece-search-form').hide();
        $('.filter-trigger.class').css('background-color', 'rgb(78, 78, 78)');
        $('.filter-trigger.class').show();
        $('#search').val('');
        $('.filter-trigger.family').hide();
        $('.filter-class').show();
    })

    $('.x').on('click', function() {
        
        $(this).closest('.filter-trigger.class').css('background-color', 'rgb(78, 78, 78)');
        $('.filter-trigger.family').hide();
        $('.filter-class').show();
        
    });
    

/* BUGS

1. pdf focusing on-render
2. Turn on/off triggers based on width ()
3. down-arrow, focus next
6. enter, click focused item
7. code logic - passing text value into parent name

/*    if (event.keyCode === 40) {
        $('.piecenamecontainer.search').focus();
        console.log('piecefocused')
*/


// converting tiggers into JS & Jquery

// space-icon hover in/out

// editing  

    $('.channel-mini-icon.embed.playlist,.area-button.playlist').on('click', function() {
        $('.forms-container.edit').show().css('display', 'flex');
        $('.a-form-container.edit-playlists').show();
    });

    $('.tool-icon.edit.yt,.area-button.demo,.set-value-modal.yt').on('click', function() {
        $('.forms-container.edit').show().css('display', 'flex');
        $('.a-form-container.demo-video').show();
    });

    $('.area-button.zoom,.tag.zoom.edit').on('click', function() {
        $('.forms-container.edit').show().css('display', 'flex');
        $('.a-form-container.zoom-link').show();
    });

    $('#edit-space').on('click', function() {
        $('.forms-container.edit').show().css('display', 'flex');
        $('.a-form-container.new-space').show();
    });

    $('.area-button.profile').on('click', function() {
        $('.forms-container.edit').show().css('display', 'flex');
        $('.a-form-container.edit-profile').show();
    });

    $('.channel-mini-icon.embed.piece').on('click', function() {
        $('.forms-container.edit').show().css('display', 'flex');
        $('.a-form-container.edit-piece').show();
    });

// playlists

    $('#add-playlist-1').on('click', function() {
        $('.forms-container.add').show().css('display', 'flex');
        $('.a-form-container.new-playlist-1').show();
    });

    $('#add-playlist-2').on('click', function() {
        $('.forms-container.add').show().css('display', 'flex');
        $('.a-form-container.new-playlist-2').show();
    });

    $('#add-playlist-3').on('click', function() {
        $('.forms-container.add').show().css('display', 'flex');
        $('.a-form-container.new-playlist-3').show();
    });

    $('#add-playlist-4').on('click', function() {
        $('.forms-container.add').show().css('display', 'flex');
        $('.a-form-container.new-playlist-4').show();
    }); 
    
// bulk add

$('#bulk-p1').on('click', function() {
    $('.forms-container.add').show().css('display', 'flex');
    $('.a-form-container.bulk-add-1').show();
    $('.a-form-container.playlist-1').hide();
});

$('#bulk-p2').on('click', function() {
    $('.forms-container.add').show().css('display', 'flex');
    $('.a-form-container.bulk-add-2').show();
    $('.a-form-container.playlist-2').hide();
});

$('#bulk-p3').on('click', function() {
    $('.forms-container.add').show().css('display', 'flex');
    $('.a-form-container.bulk-add-3').show();
    $('.a-form-container.playlist-3').hide();
});

$('#bulk-p4').on('click', function() {
    $('.forms-container.add').show().css('display', 'flex');
    $('.a-form-container.bulk-add-4').show();
    $('.a-form-container.playlist-4').hide();
});

// singe add

    $('#bulk-add-p1,#add-p1,#single-p1').on('click', function() {
        $('.forms-container.add').show().css('display', 'flex');
        $('.a-form-container.playlist-1').show();
        $('.a-form-container.bulk-add-1').hide();
    });

    $('#bulk-add-p2,#add-p2,#single-p2').on('click', function() {
        $('.forms-container.add').show().css('display', 'flex');
        $('.a-form-container.playlist-2').show();
        $('.a-form-container.bulk-add-2').hide();
    });

    $('#bulk-add-p3,#add-p3,#single-p3').on('click', function() {
        $('.forms-container.add').show().css('display', 'flex');
        $('.a-form-container.playlist-3').show();
        $('.a-form-container.bulk-add-3').hide();
    });

    $('#bulk-add-p4,#add-p4,#single-p4').on('click', function() {
        $('.forms-container.add').show().css('display', 'flex');
        $('.a-form-container.playlist-4').show();
        $('.a-form-container.bulk-add-4').hide();
    });

// toggling category visibility

    $('.horizontal-simple.playlists,.area-button.playlists').on('click', function() {
        $(this).closest('.category').find('.collapsing-container').toggleClass('hide');
        $('.channel-mini-icon').toggleClass('rotate');

    });

// all other categories
    
    $('.profile-button.login').on('click', function() {
        $('.forms-container.add').show().css('display', 'flex');
        $('.a-form-container.login').show();
    });

    $('.profile-button.signup.edit').on('click', function() {
        $('.forms-container.add').show().css('display', 'flex');
        $('.a-form-container.login').show();
    });

    $('#settings,.absolute-bottom').on('click', function() {
        $('#settings').toggleClass('active');
        $('.absolute-bottom').toggleClass('active');
    });

    $('#new-space').on('click', function() {
        $('.forms-container.add').show().css('display', 'flex');
        $('.a-form-container.new-space').show();
    });

    $('.area-button.remove').on('click', function() {
        $('.forms-container.delete').show().css('display', 'flex');
        $('.a-form-container.space-remove').show();
    });

    $('.checkbox-cover').on('click', function() {
        $(this).closest('checkbox-field').toggleClass('active');
    });

    $('.star').on('click', function() {
        $('.active-piece').removeClass('active-piece');
        $(this).addClass('active-piece');
    });

    $('.piecenamecontainer').on('click', function() {
        $('.active-piece-edit').removeClass('active-piece-edit');
        $(this).siblings('.horizontal-simple').addClass('active-piece-edit');
    });

    $('.set-value-modal.tempo,.tool-icon.edit.mt').on('click', function() {
        $('.forms-container.edit').show().css('display', 'flex');
        $('.a-form-container.new-tempo').show();
    });

// widget hover out

    $('.tool-icon').on('mouseenter mouseleave', function() {
        $(this).find('.modal-bg-blur.widgets').show().toggleClass('active');
    });

// space hover in/out

    $('.space-icon.new-area.modal-space,.space-icon.modal-hover').on('mouseenter', function() {
        $(this).addClass('hover');
        $(this).siblings('.modal-bg-blur').show();
        $(this).siblings('.modal-bg-blur').addClass('hover');
    });
    
    $('.space-icon.new-area.modal-space').on('mouseleave', function() {
        $(this).removeClass('hover');
    });

    $('.space-icon.space,.space-icon.new-area').on('mouseenter', function() {
        $(this).addClass('hover');
        $(this).siblings('.modal-bg-blur').show().addClass('hover-dark');
        $(this).find('.space-div').css('opacity', '100%');
    });

    $('.space-icon.space,.space-icon.new-area').on('mouseleave', function() {
        $(this).removeClass('hover');
        $(this).siblings('.modal-bg-blur').removeClass('hover-dark');
        $(this).siblings('.modal-bg-blur').hide();
        $(this).find('.space-div').css('opacity', '0%');
    });

    $('.modal-bg-blur').on('mouseleave', function() {
        $(this).removeClass('hover');
      });

// exiting the youtube / tempo modal

$('.exit-modal').on('click', function(){
    $(this).closest('.modal-container').hide();
});

// replacing SCR's ??? YT & Metronome

$('.piecenamecontainer').on('click', function() {

// getting values from 'click' of piecename

    $('.set-value-modal').hide();
    let tempo = $(this).find('.tempo').text();
    let demo = $(this).find('.piecedemo').text();
    let time = $(this).find('.start').text();
    let timeSignature = $(this).find('.pattern').text();

    
// combining URL's to add into SRC's
    let metronomeURL = "https://guitarapp.com/metronome-embed.html?tempo=";
    let ytURL = "https://www.youtube.com/embed/";
    let newMetronomeSrc = metronomeURL.concat(tempo,"&timeSignature=",timeSignature,"&logo=none");
    let newYTSrc = ytURL.concat(demo,"?start=",time);

// null states for SRC's

    
if (demo === "") {
    $('.set-value-modal.yt').show().css('display', 'flex');
} else {
    $('.set-value-modal.yt').hide();
    };

if (tempo === "") {   
    newMetronomeSrc = "https://guitarapp.com/metronome-embed.html?tempo=90&timeSignature=2&logo=none"
};

// transpanting src's and reloading iframes
    $('#youtube').attr('src', newYTSrc);
    $('#metronome').attr('src', newMetronomeSrc);
    $('#metronome')[0].contentWindow.location.reload(true);
    $('#youtube')[0].contentWindow.location.reload(true);

});
