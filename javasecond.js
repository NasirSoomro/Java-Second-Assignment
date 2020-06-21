//  ===============Chapter # 21 to 25 
//  Task # 01


  // var firstName = prompt("Enter Your First Name" + " ");
  // var  lastName = prompt("Enter Your Last Name" + " ");
  // alert( firstName + " " +  lastName)

//  ===============Chapter # 21 to 25 
// //  Task # 02

// var input = prompt("Enter your favorite Mobile Phone" + " ")
// var boo = input.length;
// document.write("My favorite Phone is : " + input + " <br>Length Of String :  " + boo)


//  ===============Chapter # 21 to 25 
//  Task # 03

// var word = "Pakistani"

// document.write("String Word :  Pakistani <br> Index of 'n' : " + word.indexOf("n"))



//  ===============Chapter # 21 to 25 
// //  Task # 04



// var word = "HELLO WORLD";

// document.write("String Word :  HELLO WORLD <br> Index of 'L' : " + word.lastIndexOf("L"))


//  ===============Chapter # 21 to 25 
// //  Task # 05


// var word = "Pakistani"
// var char = word.slice(3,4)
 
// document.write("String :  Pakistani <br> Character at Index of 3 : " +  char)



//  ===============Chapter # 21 to 25 
// //  Task # 06

 
// var firstName = prompt("Enter Your First Name" + " ");
// var  lastName = prompt("Enter Your Last Name" + " ");
// var fullName = firstName + " " +  lastName ;
// alert("Full Name \n" + fullName )




//  ===============Chapter # 21 to 25 
// //  Task # 07


// var text = " Hyderabad";
// var firstChar = text.indexOf("Hyder");
// if(firstChar !== -1){
//   text =text.slice(0,firstChar) + "Islam" + text.slice(firstChar+5)
//   console.log(text)
// }

//  ===============Chapter # 21 to 25 
//    Task # 08

// var text =("Ali and Sami are best friends . They play cricket and football together.");
//    for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 3) === "and"){
//     text = text.slice(0,i) + "&" + text.slice(i + 3);
//     console.log(text)
    
//     }
//     }


//  ===============Chapter # 21 to 25 
//  //    Task # 09
//  var num = ("472");
//   var num2 = parseInt(num) ;
//   document.write("Value:" + num + "<br>Type: String<br>" + "Value:" +num2+ "<br>Type : Number ")

//  ===============Chapter # 21 to 25 
 //    Task # 10


//  var inputUser =prompt("Enter Your Text" + " ");
//  var inputUser = inputUser.toUpperCase();
//  console.log(inputUser)


//  ===============Chapter # 21 to 25 
 //    Task # 11


    // var inputUser =prompt("Enter Your Text" + " ");
    // var firstChar = inputUser.slice(0,1)
    // var otherChar = inputUser.slice(1);
    // firstChar = firstChar.toUpperCase();
    // otherChar = otherChar.toLocaleLowerCase();
    // var out = firstChar + otherChar;
    // console.log(out)


    //  ===============Chapter # 21 to 25 
 //    Task # 12


//  var num = 35.36;
  

 //  ===============Chapter # 21 to 25 
 //    Task # 14

//  var search =prompt("What do you Order Sir/Ma'am" + " ");
//  search = search.toLowerCase();
//    var items = ["cake","apple pie", "cookie", "chips", "patties"];
//  for(var i=0; i <items.length; i++){
//    if (search === items[i] ){
//      alert("available")}
//    else{(search!== items[i] )  
//     alert("adfdfdfsdfsdfdf")}
//     break
//    }


 //  ===============Chapter # 21 to 25 
 //    Task # 16
//  "University of Karachi;"

//  var university =("University of Karachi");
//  var num2 = parseInt(university) ;
//  for(var i=0; i< 1; i++){
// document.write(num2 +"<br>")
 
//  } 



//  ===============Chapter # 21 to 25 
 //    Task # 17


//  var inp = prompt("User Input" + " ");
//  var lchracter = inp.charAt(inp.length - 1);
//  document.write("User Input : " + inp + " <br>Last Character is : " + lchracter)




//  ===============Chapter # 21 to 25 
 //    Task # 18




 //  ===============Chapter # 26 to 30 Math Methods 
 //    Task # 1


//  var number = +prompt();
//  var round =Math.round(number);
//  var c = Math.ceil(number);
//  var f = Math.floor(number);
//  document.write("Positive Number : " + number + "<br>Round Of Value : " + round + "<br>Floor  Value : " + f + "<br>Ceil Value : " + c )



 //  ===============Chapter # 26 to 30 Math Methods 
 //    Task # 2

//  var number = +prompt();
//  var round =Math.round(number);
//  var c = Math.ceil(number);
//  var f = Math.floor(number);
//  document.write(" Negative Number : " + number + "<br>Round Of Value : " + round + "<br>Floor  Value : " + f + "<br>Ceil Value : " + c )


//  ===============Chapter # 26 to 30 Math Methods 
 //    Task # 3



 
//  ===============Chapter # 26 to 30 Math Methods 
 //    Task # 4


//  var dice = +prompt();
//  var rand = Math.random() * 3;
//  var floor = Math.floor(rand);
//  document.write( "Random Value" +floor)




//  ===============Chapter # 26 to 30 Math Methods 
 //    Task # 5

  // var a = +prompt()
  //  var rand = Math.random() * 3;
  // var floor = Math.floor(rand);
  // if(floor === 2){
  //   document.write(a + "<br>Random Coin Value Is : Heads <br>")}
  //   else if(floor === 1){
  //     document.write( a + "<br>Random Coin Value Is : Tails<br>")
  //   }
 


//  ===============Chapter # 26 to 30 Math Methods 
 //    Task # 6


//  var inputNumber = Math.random();
  
//   var number2 = (inputNumber * 100) + 1;
//   var number3 = Math.floor(number2);

//  document.write("Random Number Between 1 and 100 is :  " + number3 )



//  ===============Chapter # 26 to 30 Math Methods 
 //    Task # 7


//  var weight = prompt("Enter your Weight in Kg");
//   var outWeight =parseInt (weight);
//   document.write("The Weight Of User is " + outWeight + " Killograms")


//  ===============Chapter # 26 to 30 Math Methods 
 //    Task # 8


//  var inputNumber = +prompt("Enter a Number Between 1 And 10");
//  for (var i=1; i<11; i++)
//  if(inputNumber === 6){
// alert("congratulations")
// break}
// if(inputNumber !== 6){
// console.log("Try Again")
 
// }
 

  //  ===============Chapter # 31 to 34 Date Methods 
 // Task # 1


//  var today = new Date();
//  document.write(today)
  
//  ===============Chapter # 31 to 34 Date Methods  
 // Task # 2

 
// var d = new Date();
//    d.setMonth(11);
//  alert(d)




 //  ===============Chapter # 31 to 34 Date Methods  
 // Task # 3


//  var days7 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//    var now = new Date();
//    var getDay = now.getDay();
//    var nameOfToday = days7 [getDay];
//    alert("To Day is " +nameOfToday)


//  ===============Chapter # 31 to 34 Date Methods 
 // Task # 4



//  var daysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//    var toDay = new Date();
//    var theDay = toDay.getDay();
//   var nameOfToday = daysNames[theDay];
//   if(nameOfToday==="Sun","Sat")
//   alert("it is fun Day")

//  ===============Chapter # 31 to 34 Date Methods s 
 // Task # 5

//  var a = new Date();
//  var b = a.getDate();
//  if(b < 16){
//    document.write("First fifteen days of the month")
//  }
//  else{
//   document.write("Last days of the month")
//  }


//  ===============Chapter # 31 to 34 Date Methods  
 // Task # 6

// var nasir = new Date();
// var nasirDay = nasir.getTime();
// var minuts = nasirDay / 1000 *60 * 60; 
 
//  document.write("Current Date :  " + nasir)
//  document.write("<br>Elapsed milisecond since january 1 ,1970 :  " + nasirDay)
//  document.write("<br>Elapsed minutes since january 1 ,1970 :  " + minuts)

//  ===============Chapter # 31 to 34 Date Methods  
 // Task # 7



//  var get = new Date();
//  var get1 = get.getHours();
 
// if(get1 <12){
//   document.write("Its' AM")
// }
// else{
//   document.write("Its' PM")
// }
 

//  ===============Chapter # 31 to 34 Date Methods 
 // Task # 8

//  var a = new Date();
//  var optional = new Date("Dec 31, 2020");
//  document.write(" Later Date : " + optional)

//  ===============Chapter # 31 to 34 Date Methods 
 // Task # 9

//   var a = new Date();
//  var optional = new Date("May 31, 2020");
//  var optional1 = a.getTime();
//  var optional2 = optional.getTime();
//  var diff = optional2 - optional1 ;
//  var ldiff = diff / (1000 * 60 * 60 * 24);
//  ldiff = Math.floor(ldiff); 
//  console.log( ldiff)



//  ===============Chapter # 31 to 34 Date Methods 
 // Task # 13

//  var enter =new Date(prompt("Enter your Date of Birth as Sep 1 1999"));
//  var enterMili = enter.getTime();
//  var toDay = new Date();
//  var toDaymili = toDay.getTime();
//  var diff = toDaymili - enterMili;
//  var age = Math.floor(diff/(1000*60*60*24*30*12));
//  var c = enter.toString();
//  var d = c.slice(10,15);
  
//  document.write("Your Age is : "+age + "<br> Your Birth Year Is :  " + d)




// console.log( "Customer Name : Nasir" + "<br> Month : February" + "<br> Number of Units" + "<br> Charge per units")



//  ===============Chapter # 35 to 38 Date Methods 
 // Task # 1 


//  function timeLine(){
//    a  = new Date();  
//  }
//  timeLine();
//  document.write(a)



//  ===============Chapter # 35 to 38 Date Methods 
//  Task # 2


//  var name = prompt("Enter Your First Name");
//  var name2 = prompt("Enter Your First Name");
//  function fullName(){
//    alert(name + " " + name2)
//  }
//  fullName();



//  ===============Chapter # 35 to 38 Date Methods 
//  Task # 3



//  var num1 =+ prompt("Enter Your First Number");
//  var num2 =+ prompt("Enter Your First Number");
//  function fullName(){
//    return num1+num2
//  }
  
//  console.log(fullName(num1,num2))

// ===============Chapter # 35 to 38 Date Methods 
//  Task # 4


//  var num1 =+ prompt("Enter a Number");
 
//  function fullName(){
//    return  num1 * num1
//  }
// console.log(fullName(num1))


// ===============Chapter # 35 to 38 Date Methods 
//  Task # 5