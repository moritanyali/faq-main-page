


$('.arrow-1, .p-q-1').click(function(){
    $('.p-q-1').toggleClass('bold-text');
    $('.p-q-2, .p-q-3, .p-q-4, .p-q-5').removeClass('bold-text');
    $('.q-t-2, .q-t-3, .q-t-4, .q-t-5').removeClass('show-text').slideUp('medium', function(){
    });
    
    $('.q-t-1').addClass('show-text').slideToggle('medium', function(){
        
        
    });
});

$('.arrow-2, .p-q-2').click(function(){
    $('.p-q-2').toggleClass('bold-text');
    $('.p-q-1, .p-q-3, .p-q-4, .p-q-5').removeClass('bold-text');
    $('.q-t-1, .q-t-3, .q-t-4, .q-t-5').removeClass('show-text').slideUp('medium', function(){
    });
    $('.q-t-2').addClass('show-text').slideToggle('medium', function(){
       
    });
});

$('.arrow-3, .p-q-3').click(function(){
    $('.p-q-3').toggleClass('bold-text');
    $('.p-q-1, .p-q-2, .p-q-4, .p-q-5').removeClass('bold-text');
    $('.q-t-1, .q-t-2, .q-t-4, .q-t-5').removeClass('show-text').slideUp('medium', function(){
    });
    $('.q-t-3').addClass('show-text').slideToggle('medium', function(){
        
    });
});

$('.arrow-4, .p-q-4').click(function(){
    $('.p-q-4').toggleClass('bold-text');
    $('.p-q-1, .p-q-2, .p-q-3, .p-q-5').removeClass('bold-text');
    $('.q-t-1, .q-t-2, .q-t-3, .q-t-5').removeClass('show-text').slideUp('medium', function(){
    });
    $('.q-t-4').addClass('show-text').slideToggle('medium', function(){
        
    });
});

$('.arrow-5, .p-q-5').click(function(){
    $('.p-q-5').toggleClass('bold-text');
    $('.p-q-2, .p-q-3, .p-q-4, .p-q-1').removeClass('bold-text');
    $('.q-t-2, .q-t-3, .q-t-4, .q-t-1').removeClass('show-text').slideUp('medium', function(){
    });
    
    $('.q-t-5').addClass('show-text').slideToggle('medium', function(){
        
    });
});









