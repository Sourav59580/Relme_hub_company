
// testimonal
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        slideSpeed:1000,
        singleItem:true,
        transitionStyle:"fade",
        autoPlay:true
    });
});



$(document).ready(function() {
    $('#gallery').flexPhotoGallery({
        imageArray: imageArray,
        isViewImageOnClick: true
    });
});


var imageArray = 
[
    {
        "url": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "width": 1600,
        "height": 1067 
    },
    {
        "url": "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "width": 1600,
        "height": 1067 
    },
    {
        "url": "https://norwegianscitechnews.com/wp-content/uploads/2020/03/istock-geber86.jpg",
        "width": 1600,
        "height": 1067 
    },
    {
        "url": "https://wrighttechnologies.com/wp-content/uploads/2019/04/wright-business-technologies-remote-working-2019.jpg",
        "width": 1600,
        "height": 1067 
    },
    {
        "url": "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1116&q=80",
        "width": 1600,
        "height": 1067 
    },
    {
        "url": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "width": 1600,
        "height": 1067 
    },
    
];