// Grab keystrokes and apply them to the game
        document.onkeyup = userGuess;
        
        
        
        //Variables to display win total and guesses left
        var wins = 0;
        var guessleft = 10;

        // Array with all words to be guessed//
        var wordlist = [ "auction", "storage","padlock","discovery","auctioneer","hester", "weiss"];

        // Upon page refresh, a word is randomly selected and assigned to currentword//
        var currentword = wordlist[Math.floor(Math.random() * wordlist.length)];

        // Arrays for storing blanks or guessed letters 
        var currentarray = [];
        var guessedarray = [];

        // Generates blanks based on currentword.length
        for (var i = 0; i < currentword.length; i++){currentarray.push("_")};
        document.getElementById("wordentry").textContent = currentarray.join(" ");
        
        function wordprogress(){console.log(currentarray.join(""))};
        function guesscheck(){console.log(guessedarray)};
        function logword(){console.log(currentword)}
        
        //upon keypress, this is all run




        function userGuess(event)
{ 
    //assigns input to letter variable
    var letter = event.key;
    //checks to see if letter has been guessed.
        if (letter == guessedarray[i])
            {alert("you guessed that already!")}
        else{guessedarray.push(letter)
            document.getElementById("guessedletters").textContent = guessedarray.join(" ");}
    


    //checks to see if letter is a part of the word, if so then push it
    for (var i = 0; i < currentword.length; i++) 
    {
        if (letter === currentword.charAt(i)){currentarray[i] = letter}
        
        document.getElementById("wordentry").textContent = currentarray.join(" ");
    }
    document.getElementById("guessesleft").textContent = guessleft--;
    //Check to see if user won!
    if (currentarray.join("") === currentword){alert("done"); wins++;}
    if (guessleft <= 0){alert("you loose")}
}
