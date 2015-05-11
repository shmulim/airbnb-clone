$(document).ready(function() {
    var sliderInterval;
    var counter = 0;
    var images = ['image1.jpg',
        'image2.jpg',
        'image3.jpg'
    ];

    sliderInterval = setInterval(function() {
        $('#slide-right').trigger('click');
    }, 4000);

    function changeImage(counter) {
        $('img').attr('src', images[counter]);
        clearInterval(sliderInterval);
        sliderInterval = setInterval(function() {
            $('#slide-right').trigger('click');
        }, 4000);
    }

    $('#slide-right').on('click', function() {
        counter >= 1 ? counter-- : counter = 2;
        changeImage(counter);
    });

    $('#slide-left').on('click', function() {
        counter <= 1 ? counter++ : counter = 0;
        changeImage(counter);
    });
});
