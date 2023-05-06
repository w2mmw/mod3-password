const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
pass1text = document.querySelector(".pass1");
pass2text = document.querySelector(".pass2");
function generatePassword(){
    var passKey =""
    for (var i = 0; i < 15; i++){
        var passKeyNum = Math.floor(Math.random() * characters.length);
        var passKeyChar = characters[passKeyNum];
        passKey += passKeyChar;
    }
    return passKey;
}


function makePassword(){
    alert("Button pressed");
    var pass1 = generatePassword();
    var pass2 = generatePassword();
    pass1text.textContent = pass1;
    pass2text.textContent = pass2;
}



