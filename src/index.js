var game = require('./game');
var cardTemplate = require("./card.handlebars");

var offPrefix = "off-";

var getRemainingAgents = function () {
    return  {
        'blue': $("." + offPrefix + "blue").length,
        'red': $("." + offPrefix + "red").length
    };
};

var genCode = function () {
    var chars = "qwrtpsdfghjklzxcvbnm".split('');

    // shuffle array
    // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    var j, x, i;
    for (i = chars.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = chars[i];
        chars[i] = chars[j];
        chars[j] = x;
    }

    return chars.join('').slice(0,4);
};

var setScore = function () {
    var remainingAgents = getRemainingAgents();
    $('#red-agents').html(remainingAgents.red);
    $('#blue-agents').html(remainingAgents.blue);
}

var renderGame = function (g) {
    $("#board").empty();
    for (var i=0; i<25; i++) {
        $("#board").append(cardTemplate({
            word: g.words[i],
            cardType: offPrefix + g.cells[i],
        }));
    }
};

var setTurn = function (turn) {
    $("#turn").html(turn);
};

var getTurn = function () {
    return $("#turn").html();
};

var toggleTurn = function () {
    if (getTurn() == "red")
        setTurn("blue");
    else
        setTurn("red");
};

var initialTurn = function () {
    var remainingAgents = getRemainingAgents();

    if (remainingAgents.red > remainingAgents.blue)
        setTurn("red");
    else
        setTurn("blue");

};

var getOffClass = function (classList) {
    var cl = Array.from(classList);
    return cl.filter(e => e.startsWith(offPrefix))[0];
};

var initBoard = function (code) {
    renderGame(game(code));
    setScore();
    initialTurn();
};

var revealCard = function (card) {
    var offClass = getOffClass(card.classList);

    // this card has already been revealed
    if (typeof (offClass) == "undefined")
        return true;

    // reveal the card
    var cardType = offClass.slice(offPrefix.length);
    $(card).removeClass(offClass).addClass(cardType);

    // toggle turn if required
    if (getTurn() != cardType)
        toggleTurn();
};

$(document).ready(function () {
    $("#new-game-button").click(function() {
        var code = genCode();
        $("#seed").val(code);
        initBoard(code);

        $("#info").show();
        $("#board").show();
    });

    $("#load-button").click(function() {
        var code = $("#seed").val().toLowerCase();
        if (code.length > 0) {
            initBoard(code);
            $("#info").show();
            $("#board").show();
        }
    });

    $("#reveal-button").click(function() {
        $("#info").hide();
        $("#board").show();
        $(".card").each(function(){
            revealCard(this);
        });
    });

    $("#board").on('click', '.card', function() {
        // reveal card
        revealCard(this);

        // set the score
        setScore();
    });
});
