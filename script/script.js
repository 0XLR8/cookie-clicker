$("#cookie").on("mousedown", () => {
    $("#cookie").addClass("active");
})

$("#cookie").on("mouseup", () => {
    $("#cookie").removeClass("active");
})

let game = true;
let timer = $(".timer-value");
let score = $("#score-value");
timer.html(10);


$("#cookie").on("click", () => {
    if(game){
        $(".instruction").addClass("tap-active");
        let count = Number(timer.html());
        const timerInterval = setInterval(() => {
            if(count === 1){
                clearInterval(timerInterval);
                timer.html(0);
                $(".instruction").removeClass("tap-active");
                $(".instruction").html("Reset the game!");
            }else{
                count--;
                timer.html(count);
            }
        }, 1000);
    }
    game = false;
    if(Number(timer.html()) > 0){
        score.html(Number(score.html()) + 1);
    }
})

$(".instruction").on("click", () => {
    if(!game && Number(timer.html() < 1)){
        game = true;
        score.html(0);
        timer.html(10);
        $(".instruction").html("Tap the cookie!");
    }
})
