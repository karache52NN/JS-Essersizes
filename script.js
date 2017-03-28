var string1="of beer on the wall";
var bottles=" Bottles";
var word=" of beer,";
var count=99;
while (count>0) {
    console.log(count+" "+bottles+string1+"<br>");
    console.log(count+" "+bottles+word+"<br>");
    console.log("Take on down and pass it around<br>");
    count=count-1;
    if (count>0) {
      console.log(count+" "+bottles+string1+"<br>");
    }
    else {
      console.log("no more beer on the wall");
    }
}
console.log(count);
