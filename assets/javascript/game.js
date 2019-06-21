$(document).ready(function () {

    var randomNumber = 0;
    var wins = 0;
    var losses = 0;
    var totalScore = 0;


    //var buttons = ["button1", "button2", "button3", "button4"];

    //random #'s generated in randomNumberbox
    var randombox = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    $(".randomNumber").html(randombox);

    //grab div containing wins and losses
    $('.wins').append(wins)

    $('.losses').append(losses)


    // crystals variable to generate random crystal point
    var crystal1 = Math.floor((Math.random() * 12) + 1)

    var crystal2 = Math.floor((Math.random() * 12) + 1)

    var crystal3 = Math.floor((Math.random() * 12) + 1)

    var crystal4 = Math.floor((Math.random() * 12) + 1)

    var crystals = [crystal1, crystal2, crystal3, crystal4]


    //button click event in jquery generates hidden crystal points
    $('#gameButtons').attr('data-num', crystals)

    $('')


    //console.log(crystals) ***crystals are generating random #s***

    //add crystal values together to get total score





    //on click event points generated from crystals added to total score
    $(".box").on("click", function () {

        
        var crystalValue = ($(this).attr("data-num"));
        crystalValue = parseInt(crystalValue);

        

       // totalScore = totalScore + randomNumber;
        

        //if (totalScore === randomNumber) {
            //alert("You win");
       // }
        //else if (totalScore > randomNumber) {
            //alert("You lose");
        //}






    })
















});