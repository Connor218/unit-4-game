
var random_result;
var lost = 0;
var win = 0;
var previous = 0;

$(".crystal").attr('class');
var resetAndStart = function(){
$(".crystals").empty();

    var images = [
        'https://www.rd.com/wp-content/uploads/2017/08/02_crystal_Reasons-Why-You-Should-Give-Crystals-a-Try_364248173_Abra-Cadabraaa-380x254.jpg',
        'http://www.crystalclearintentions.co.nz/wp-content/uploads/crystals.jpg',
        'https://vignette.wikia.nocookie.net/shop-heroes/images/c/c1/Frostfire_Crystal.png',
        'https://www.happyglastonbury.co.uk/wp-content/uploads/2016/08/amethyst.jpg',
    ]

random_result = Math.floor(Math.random() * 91) + 12;
$("#result").html('Random Result: ' + random_result);
for(var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) + 1;
    
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        })
    
        $(".crystals").append(crystal);
    
    }
    $("#previous").html("Total Score: " + previous);
}

resetAndStart();


$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr('data-random'));
    
    previous += num;

    $("#previous").html("Total Score: " + previous);

    if (previous > random_result){

        lost--;

        $("#lost").html("You Lost: " + lost);
        previous = 0;
       
        resetAndStart();
    }
    else if(previous === random_result){
        win++

        $("#win").html("You Win: " + win);
        
        previous = 0;
        resetAndStart();
    }
});