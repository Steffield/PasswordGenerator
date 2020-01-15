
function generate(){
// user questions
    var amount =prompt("Define the length of your password by choosing a number between 8 and 128");
    console.log(amount);
    var special = confirm("Should your password include special characters? Click 'OK' if it should.");
    if (special===true){
        special = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    } else{
        special= "";
    }
    var num =confirm("Should your password include numeric characters? Click 'OK' if if it should.");
    if(num===true){
        num ="1234567890";
    }else{
        num="";
    }
    var lowerCase = confirm("Should your password include lower case characters? Click 'OK' if if it should.");
    if(lowerCase===true){
        lowerCase ="abcdefghijklmnopqrstuvwxyz";
    } else {
        lowerCase="";
    }
    var upperCase = confirm("Should your password include upper case characters? Click 'OK' if if it should.");
    if(upperCase===true){
        upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }else {
        upperCase="";
    }
    

    var charOptions= (special+num+lowerCase+upperCase);
    console.log(charOptions);

    // Alert if no character type was selected
    if (charOptions===""){
        alert("You have to select at least one character type to generate a password! Click GENERATE PASSWORD again and select one or more character types!");
    }

    //password
    var password= "";
    for(var i=0; i< amount; i++){
        password += charOptions.charAt(Math.floor(Math.random() * charOptions.length));
    }


    console.log(password);

    //display password
    document.getElementById('display').value =password;

}


//clipboard copy
function copy(){
    document.getElementById("display").select();
    document.execCommand("copy");
    alert("The password was copied to your clipboard");
}



