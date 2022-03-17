var position_x = 0,
    position_y = 0,
    max_x = 0,
    max_y = 0,
    block_size = 10;

function initgame(){

    var game_container = $("#gameContainer");

    max_x = window.innerWidth;
    max_y = window.innerHeight;

    console.dir(game_container);

    while( (position_x <= max_x) || (position_y <= max_y) ){
        var new_block = $('<div class="block"></div>');

        // console.dir(new_block);

        $(new_block).css("left", position_x);
        $(new_block).css("top", position_y);

        game_container.append(new_block);

        if(position_x > max_x){
            position_x = 0;
            position_y += 10;
        }else{
            position_x += 10;
        }
    }

    
    $(".block").click( function(){ 
        $(this).toggleClass( "live" )
    });
}

$( document ).ready( initgame() );

