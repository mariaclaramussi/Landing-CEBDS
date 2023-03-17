AOS.init();
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recipient = button.data('whatever') 
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })

$('.messages-slide').owlCarousel({
    loop: false,
    margin: 13,
    nav: false,
    dots: false,
    responsive:{
        0: {
            items: 1,
            mouseDrag: true
        },
        768: {
            items: 2,
        },
        1000: {
            items: 4,
            mouseDrag: false
        }
    }
})

$('.gallery-top').owlCarousel({
    loop: true,
    autoplay: true,
    nav: false,
    dots: false,
    margin: 40,
    autoWidth: true,
    responsive:{
        0: {
            items: 1,
            mouseDrag: true,
            stagePadding: 70
        },
        600: {
            items: 3,
        },
        1000: {
            items: 3
        }
    }
})

$('.gallery-bottom').owlCarousel({
    loop: true,
    autoplay: true,
    nav: false,
    dots: false,
    margin: 40,
    autoWidth: true,
    responsive:{
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 3
        }
    }
})

if($('#key-messages')[0]) {
    document.getElementById('next-slide').addEventListener('click', function(){
        $('.messages-slide').trigger('next.owl.carousel');
     });
     
    document.getElementById('prev-slide').addEventListener('click', function(){
        $('.messages-slide').trigger('prev.owl.carousel');
     });
    
    $( ".read-more-message" ).click(function() {
        $(this).parent().toggleClass('active');
    });
}

function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
    zoomer.style.backgroundSize = '150%';
}

if($("#culture-container")[0]) {
    $(function() { //scrollTop - current position
        var mainSection = $('#culture-container')
        var spanTarget = $('.title-map')
        var mapTarget = $('.graphic-container')
        var imageMap = $('.image-map')
        var initialPosition = mainSection.offset().top; // posicao do elemento em relacao ao inicio da pagina = 2784
        var elementHeight = mainSection[0].offsetHeight; //altura do elemento = 2868
        var imageHeight = imageMap[0].offsetHeight;
    
        var sectionArea = initialPosition + elementHeight //5652
    
        var image1 = $('.map1')
        var image2 = $('.map2')
        var image3 = $('.map3')
        var image4 = $('.map4')
        var image5 = $('.map5')
        var image6 = $('.map6')
        
    
        $(window).scroll(function() { //when window is scrolled
            var scrollPosition =  $(window).scrollTop()
    
           if((sectionArea - imageHeight) >= scrollPosition && scrollPosition >= initialPosition) {
                mapTarget.addClass('fixed')
                mapTarget.removeClass('opacity')
    
                spanTarget.addClass('fixed')
                spanTarget.removeClass('opacity')
            } else {
                spanTarget.addClass('opacity')
                mapTarget.addClass('opacity')
            }
    
            if(scrollPosition > initialPosition && scrollPosition < (initialPosition + (imageHeight))) {
                image1.addClass('is-visible')
                image2.removeClass('is-visible')
            } else if(scrollPosition > (initialPosition + (imageHeight)) && scrollPosition < (initialPosition + (imageHeight*2))) {
                image1.removeClass('is-visible')
                image2.addClass('is-visible')
                image3.removeClass('is-visible')
            } else if(scrollPosition > (initialPosition + (imageHeight * 2)) && scrollPosition < (initialPosition + (imageHeight*3))) {
                image2.removeClass('is-visible')
                image3.addClass('is-visible')
                image4.removeClass('is-visible')
            } else if(scrollPosition > (initialPosition + (imageHeight * 3)) && scrollPosition < (initialPosition + (imageHeight*4))) {
                image3.removeClass('is-visible')
                image4.addClass('is-visible')
                image5.removeClass('is-visible')
            }  else if(scrollPosition > (initialPosition + (imageHeight * 4)) && scrollPosition < (initialPosition + (imageHeight*5))) {
                image4.removeClass('is-visible')
                image5.addClass('is-visible')
                image6.removeClass('is-visible')
            } else if (scrollPosition > (initialPosition + (imageHeight * 5))) {
                image5.removeClass('is-visible')
                image6.addClass('is-visible')
            }
    
            
        });
    
    });
}

if($('.menu-index')[0]) {
    var screenHeight = screen.height
    $(window).scroll(function() {
        var scrollPosition =  $(window).scrollTop()

        if(scrollPosition >= screenHeight) {
            $('.menu-mobile .navbar').addClass('fixed')
        } else {
            $('.menu-mobile .navbar').removeClass('fixed')
        }
    })
}