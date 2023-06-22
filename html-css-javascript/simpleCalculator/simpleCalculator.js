let total = ' ';
let operation = ' ';
let flag = true;
let num1;
let num2;


//HOW I WAS ABLE TO ADD CSS VALUES INSIDE OF THE FUNCTION PROMPT?? IT DOES NOT DETECT <br>

operation = prompt("Menu:\n 1. +\n 2. -\n 3. *\n 4. /\n");
while(flag){
    num1 = parseFloat(prompt("Give me the first number."));
    if (num1 !== "" && !isNaN(num1))
    {
        flag = false;
    }
}
flag = true;
while(flag){
    num2 = parseFloat(prompt("Give me the second number."));
    if (num2 !== "" && !isNaN(num2))
    {
        flag = false;
    }
}


// here we are going to validate that the user will enter a number






if (operation == '+'){
    total = num1 + num2;
} else if (operation == '-'){
    total = num1 - num2;
}else if (operation == '*'){
    total = num1 * num2;
}else if (operation == '/'){
    total = num1 / num2;
}else{
    document.write("Try Again...")
    exit;
}

document.write('<br>' + '<h2 class="ctext">' + num1 + ' ' + operation + ' ' + num2 + ' = ' + total + '</h2>' + '<br>');







// total = num1 + operation + num2;


// document.write('num1 + operation + num2 = total1')





