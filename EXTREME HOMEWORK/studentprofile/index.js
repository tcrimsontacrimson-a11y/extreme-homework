function inform() {
var getNames=document.getElementById("name").value.trim();
var getClass=document.getElementById("class").value.trim();
var getScore=Number(document.getElementById("score").value);
document.write(`<center> Name ${getNames}, <br><br>  Class:  ${getClass}<br><br>  Grade:</center> `);
if (getScore >= 75) {
    document.write("<center>You got an A</center>");
}

else if (getScore >= 74) {
    document.write("<center>You got a B</center>");
}

else if (getScore >= 65) {
    document.write("<center>You got a C</center>");
}

else if (getScore >= 55) {
    document.write("<center>You got a D</center>");

}

else if (getScore >= 45) {
    document.write("<center>You got an E</center>");

}

else if (getScore >= 39) {
    document.write("<center>You got a F</center>");

}


//  else{
//     document.write("To poor");
//  }

 
}