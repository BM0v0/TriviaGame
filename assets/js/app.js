$(document).ready(function(){
    var count = 0;
    var time = 20;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

// Questions and Answer
    var question = ["Who was throw out the window of the first episode?",
    "What was used at the Battle of Blackwater to defeat the Baratheon Navy?", 
    "What is the customary response to Valar Morghulis('All Men Must Die')?", 
    "What is the OathKeeper sword made of?",
     "What do you kill a White Walker with?",
    "What does the necklace of the Red Woman 'Melisandre' do?", 
    "The commander of the Unsullied army is called Torgo Nudho, what does it translate to?", 
    "(spoilers) What is the reveal relation between Jon Snow and Daenerys Targaryen?"];
    var answer = ["Brandon Stark", "Wild Fire", "Valar Dohaeris ('all men must serve')", "Valyrian Steel", "Dragon Glass(obsidian)", 
    "Makes her appear younger", "Grey Worm", "Daenerys is the aunt to Jon",];
    var firstChoice = ["Brandon Stark", "Dragon Fire", "Valar Actah('all shall see')", "Damascus Steel", "White Rock(quartz)", 
    "Makes her appear younger", "Lone Rat", "Jon and Daenerys are siblings"];
    var secondChoice = ["Arya Stark", "Flaming Catapults", "Valar Siempre('all children become men')", "Stainles Steel", "Green Dagger(jade)", 
    "Allows her to fly", "Red Hound", "Daenerys is the aunt to Jon"];
    var thirdChoice = ["Rickon Stark", "Wild Fire", "Valar Dohaeris ('all men must serve')", "Dragon Steel", "Spear of Man(bone)", 
    "Let her see the future", "Grey Worm", "Daenerys is Jon's cousin"];
    var fourthChoice = ["Sansa Stark", "Fire Arrows", "Valar Catules('all women will rise')", "Valyrian Steel", "Dragon Glass(obsidian)", 
    "Gives her mind control", "Small Snake", "Jon is the uncle to Daenerys"];

// hide - Show
    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion () {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);
    
    // Hover CSS
        $("#choice-holder-1").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#choice-holder-2").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#choice-holder-3").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#choice-holder-4").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "black");
        });
    }
    $("#choice-holder-1").on("click", checkAnswer) 
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)

// Check Answer
    function checkAnswer() {

        hideHolders();

        if($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        } 

        checkGameEnd();  
    }

// end to start
    function checkGameEnd() {
        if(count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 20;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);
      
            if(time <= 0) {
                hideHolders();
                stopTime();
                $("#answer-holder").show();
                $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
                displayImage();
                unanswered++;
                count++;
                checkGameEnd();
            }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if(count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();

// Images
    function displayImage() {
        if(count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/BrandonStark.gif>');
         }
        else if(count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/Wildfire.jpg">');
        }
        else if(count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/valarD.jpg">');
        }
        else if(count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/oathkeeper.jpg">');
        }
        else if(count === 4) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/dragonglass.jpg">');
        }
        else if(count === 5) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/redwoman.jpg">');
        }
        else if(count === 6) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/greyworm.png">');
        }
        else if(count === 7) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/jonANDdanny.jpg">');
        }
    }

 // Results   
    function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Click Start above to play again!");
    }

// Reset 
    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }

// Start Game
    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }

// Start Game On click
  $(".start").on("click", function() {
    startGame();
  });
});