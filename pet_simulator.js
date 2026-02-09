var x = promptNum("Enter a value");//Setting variables for pets, money, and lists (which are toys and food)
var backgroundsUser = [];
var money = 0;
var foodUser = [];
var food = [];
var foodsTotal = 0;
var toys = [];
var toysUser = [];
var toysTotal = 0;

//Begins the program and introduces the user to the game
function beginningSteps(user_Pet, user_PetName) {
  //Takes the time of when the user starts the game
  var timeStart = getTime();
  
  //When the user clicks dog, cat, penguin, or bitcoin, variables will be set for that respected pet
  onEvent("dog", "click", function( ) {
    user_Pet = "dog";
    setScreen("PetName?");
    //The below image came from: https://www.cnn.com/2021/08/26/health/national-dog-day-2021-benefits-of-dogs-wellness/index.html
    setProperty("image8", "image", "191006152638-01-pets-and-our-health.jpg");
    setProperty("image9", "image", "191006152638-01-pets-and-our-health.jpg");
    setProperty("image100", "image", "191006152638-01-pets-and-our-health.jpg");
    food = ["Peanut Butter, $5", "T-bone steak $20", "Biscuits $100", "Kibble $1000"];
    setProperty("f1", "text", food[0]);
    setProperty("f2", "text", food[1]);
    setProperty("f3", "text", food[2]);
    setProperty("f4", "text", food[3]);
    toys = ["Frisbee $10", "Rope $20", "Ball $40", "Stuffed animal $60"];
    setProperty("t1", "text", toys[0]);
    setProperty("t2", "text", toys[1]);
    setProperty("t3", "text", toys[2]);
    setProperty("t4", "text", toys[3]);

});

  onEvent("cat", "click", function( ) {
    user_Pet = "cat";
    setScreen("PetName?");
    //The below image came from: https://www.cattownoakland.org/cat-town-blog/2018/4/29/5-interesting-tabby-cat-facts
    setProperty("image8", "image", "DSC_0779.jpg");
    setProperty("image9", "image", "DSC_0779.jpg");
    setProperty("image100", "image", "DSC_0779.jpg");
    food = ["Tuna $5", "Cat kibble $20", "Cooked chicken $100", "Carrots $1000"];
    setProperty("f1", "text", food[0]);
    setProperty("f2", "text", food[1]);
    setProperty("f3", "text", food[2]);
    setProperty("f4", "text", food[3]);
    toys = ["Toy mouse $10", "Scratching post $20", "Wand toy $40", "Laser pointer $60"];
    setProperty("t1", "text", toys[0]);
    setProperty("t2", "text", toys[1]);
    setProperty("t3", "text", toys[2]);
    setProperty("t4", "text", toys[3]);
});

  onEvent("penguin", "click", function( ) {
    user_Pet = "penguin";
    setScreen("PetName?");
    setProperty("image8", "image", "icon://fa-linux");
    setProperty("image9", "image", "icon://fa-linux");
    setProperty("image100", "image", "icon://fa-linux");
    food = ["Salmon $5", "Krill $20", "Squid $100", "Ocellated Icefish $1000"];
    setProperty("f1", "text", food[0]);
    setProperty("f2", "text", food[1]);
    setProperty("f3", "text", food[2]);
    setProperty("f4", "text", food[3]);
    toys = ["Toy fish $10", "Arcade game $20", "Small tuxedo $40", "Swimming pool $60"];
    setProperty("t1", "text", toys[0]);
    setProperty("t2", "text", toys[1]);
    setProperty("t3", "text", toys[2]);
    setProperty("t4", "text", toys[3]);
});

  onEvent("bitcoin", "click", function( ) {
    user_Pet = "bitcoin";
    setScreen("PetName?");
    setProperty("image8", "image", "icon://fa-btc");
    setProperty("image9", "image", "icon://fa-btc");
    setProperty("image100", "image", "icon://fa-btc");
    food = ["Bull market $5", "Decrease supply $20", "Purchase more coins $100", "Inspire investors $1000"];
    setProperty("f1", "text", food[0]);
    setProperty("f2", "text", food[1]);
    setProperty("f3", "text", food[2]);
    setProperty("f4", "text", food[3]);
    toys = ["Bumper sticker $10", "Special ฿ symbol $20", "Coinbase account $40", "Mining program $60"];
    setProperty("t1", "text", toys[0]);
    setProperty("t2", "text", toys[1]);
    setProperty("t3", "text", toys[2]);
    setProperty("t4", "text", toys[3]);
});

//Once the user clicks the next button, it will take the name of the pet an assign it, and go to the next screen
  onEvent("next", "click", function( ) {
    user_PetName = getText("petName_input");
    var intro = "Hello little "+ user_PetName + "! Welcome to the simulator! To generate money, click your pet. To spend that money, click the shop button. Have fun!";
    setScreen("home");
    setText("introduction1", intro);
    
});

//Sets the screen to the shop and resets the text
  onEvent("2shop", "click", function( ) {
    setProperty("background", "text", "Background colors here!");
    setProperty("foodText", "text", "Food here!");
    setProperty("toysText", "text", "Toys here!");
    setScreen("shop");
});

//When a player clicks one of the available buttons, the following lines check to see if the user has money. If so, its added to their list, disappears, and a positive response is given. If there isn't enough money, a negative response is given.
  onEvent("f1", "click", function( ) {
    if(money >= 5){
      hideElement("f1");
      money = money-5;
      appendItem(foodUser, food[0]);
      setProperty("foodText", "text", "Purchase successful!");
      foodsTotal = foodsTotal + 5;
    }else if (money<5){
      setProperty("foodText", "text", "Insufficient funds!");
    }
  });
  onEvent("f2", "click", function( ) {
    if(money >= 20){
      hideElement("f2");
      money = money-20;
      appendItem(foodUser, food[1]);
      setProperty("foodText", "text", "Purchase successful!");
      foodsTotal = foodsTotal + 20;
    }else if (money<20){
      setProperty("foodText", "text", "Insufficient funds!");
    }
  });
  onEvent("f3", "click", function( ) {
    if(money >= 100){
      hideElement("f3");
      money = money-100;
      appendItem(foodUser, food[2]);
      foodsTotal = foodsTotal + 100;
      setProperty("foodText", "text", "Purchase successful!");
    }else if (money<100){
      setProperty("foodText", "text", "Insufficient funds!");
    }
  });
  onEvent("f4", "click", function( ) {
    if(money >= 1000){
      hideElement("f4");
      money = money-1000;
      appendItem(foodUser, food[3]);
      foodsTotal = foodsTotal + 1000;
      setProperty("foodText", "text", "Purchase successful!");
    }else if (money<1000){
      setProperty("foodText", "text", "Insufficient funds!");
    }
  });
  
  onEvent("t1", "click", function( ) {
    if(money >= 10){
      hideElement("t1");
      money = money-10;
      appendItem(toysUser, toys[0]);
      setProperty("toysText", "text", "Purchase successful!");
      toysTotal = toysTotal + 10;
    }else if (money<10){
      setProperty("toysText", "text", "Insufficient funds!");
    }
  });
  onEvent("t2", "click", function( ) {
    if(money >= 20){
      hideElement("t2");
      money = money-20;
      appendItem(foodUser, toys[1]);
      setProperty("toysText", "text", "Purchase successful!");
      toysTotal = toysTotal + 20;
    }else if (money<20){
      setProperty("toysText", "text", "Insufficient funds!");
    }
  });
  onEvent("t3", "click", function( ) {
    if(money >= 40){
      hideElement("t3");
      money = money-40;
      appendItem(toysUser, toys[2]);
      toysTotal = toysTotal + 40;
      setProperty("toysText", "text", "Purchase successful!");
    }else if (money<40){
      setProperty("toysText", "text", "Insufficient funds!");
    }
  });
  onEvent("t4", "click", function( ) {
    if(money >= 60){
      hideElement("t4");
      money = money-60;
      appendItem(toysUser, food[3]);
      toysTotal = toysTotal + 60;
      setProperty("toysText", "text", "Purchase successful!");
    }else if (money<60){
      setProperty("toysText", "text", "Insufficient funds!");
    }
  });

//Sets the screen to Home and resets the text
  onEvent("2home", "click", function( ) {
    setScreen("home");
    setProperty("moneyamount", "text"  ,"You now have " + money + " dollars!");
});

//Sends the user to the Done screen and ends the game, taking money, ending the time, and putting together how many items the user bought
  onEvent("DONE", "click", function( ) {
  setScreen("DONEscreen");
  var timeDone = getTime();
  var times = (timeDone - timeStart)/1000;
  var total = 0;
  for (var i = 0; i < backgroundsUser.length; i++){
    if(backgroundsUser[i] == "Yellow"){
      total = total + 10;
    }
    if(backgroundsUser[i] == "Purple"){
      total = total + 50;
    }
    if(backgroundsUser[i] == "Orange"){
      total = total + 100;
    }
    if(backgroundsUser[i] == "Brown"){
      total = total + 150;
    }
    if(backgroundsUser[i] == "Blue"){
      total = total + 300;
    }
    if(backgroundsUser[i] == ""){
      total = 0;
      appendItem(backgroundsUser, "none");
  }}
  
  //Sets the final statistics with how the user has played
  setProperty("timeSpent", "text", "You have spent " + times + " seconds playing!");
  setProperty("petStuffs", "text", "Your pets name is " + " ' "  + user_PetName + "'" +". Your pet is a " + user_Pet + ". You have finished with " + money + " dollars. Nice work!");
  setProperty("backBought", "text", "You have purchased the following colors: " + backgroundsUser + ". This sums up to "+ total + " dollars.");
  setProperty("food_St", "text", "You have purchased the following food: " + foodUser + ". This sums up to " + foodsTotal + " dollars!" );
  setProperty("toysStuff", "text", "You have purchased the following toys: " + toysUser + ". This sums up to " + toysTotal + " dollars!");
  
  //Easter eggs are here, including buying everything, naming your pet Forrest Gump, and spending 10+ minutes in game
  if (foodUser.length == 4 & toysUser.length == 4 & backgroundsUser.length == 5){
    showElement("secret");
    setText("secret", "Congratulations, you've found a secret! You bought everything in the shop. Did you cheat?");
  }
  if (user_PetName == "Forrest Gump"){
    showElement("secret");
    setText("secret", "Congratulations, you've found a secret! I love Forrest Gump, have you seen it?");
  }
  if (times >= 600){
    showElement("secret");
    setText("secret", "Congratulations, you've found a secret! Why're you spending so much time here?");
  }
  
});


//If the player wants to play again, this function resets all values and makes it available to replay
function restart(){
  backgroundsUser = [];
  setText("petName_input", "");
  money = 0;
  foodUser = [];
  food = [];
  foodsTotal = 0;
  toys = [];
  toysUser = [];
  toysTotal = 0;
  user_Pet = "";
  user_PetName = "";
  hideElement("secret");
  beginningSteps();
  setProperty("home", "background-color", "white");
  showElement("back1");
  showElement("back2");
  showElement("back3");
  showElement("back4");
  showElement("back5");
  showElement("f1");
  showElement("f2");
  showElement("f3");
  showElement("f4");
  showElement("t1");
  showElement("t2");
  showElement("t3");
  showElement("t4");
  setProperty("moneyamount", "text", "You now have " + money + " dollars!");
}

//If the restart button is clicked, it'll run the function
onEvent("restart", "click", function(){
  restart();
  setScreen("Start_screen");
});
  
}
beginningSteps();

//Money generator is here
onEvent("image9", "click", function( ) {
  money++;
  if (money == 0){
    setProperty("moneyamount", "text", "You now have " + money + " dollars! You should go raise some money.");
  }else if (money == 1){
    setProperty("moneyamount", "text", "You now have " + money + " dollar!");
  }else if (money <= 50){
    setProperty("moneyamount", "text", "You now have " + money + " dollars!");
  }else if (money <= 100){
    setProperty("moneyamount", "text", "You now have " + money + " dollars! Wow, that's a lot of money!");
  }else if (money <= 1000){
    setProperty("moneyamount", "text", "You now have " + money + " dollars! Maybe you should go spend all that money?");
  }
});

//Part of the shop, and sets the background color of Home if user has enough money
function backgroundCOLORS() {
onEvent("back1", "click", function( ) {
  if(money >= 10){
    hideElement("back1");
    money = money-10;
    setProperty("home", "background-color", "yellow");
    playSound("sound://category_achievements/lighthearted_bonus_objective_1.mp3");
    setProperty("background", "text", "Purchase successful!");
    appendItem(backgroundsUser, "Yellow");
  }else if (money < 10){
    setProperty("background", "text", "Insufficient funds!");
    }});
    
onEvent("back2", "click", function( ) {
  if(money >= 50){
    hideElement("back2");
    money = money-50;
    setProperty("home", "background-color", "#6A0DAD");
    setProperty("background", "text", "Purchase successful!");
    playSound("sound://category_achievements/lighthearted_bonus_objective_1.mp3");
    appendItem(backgroundsUser, "Purple");
  }else if (money < 50){
    setProperty("background", "text", "Insufficient funds!");
}});
  onEvent("back3", "click", function( ) {
  if(money >= 100){
      hideElement("back3");
      money = money-100;
      setProperty("home", "background-color", "#FF5F00");
      setProperty("background", "text", "Purchase successful!");
      playSound("sound://category_achievements/lighthearted_bonus_objective_1.mp3");
      appendItem(backgroundsUser, "Orange");
    }else if (money < 100){
      setProperty("background", "text", "Insufficient funds!");
  }
  });
  onEvent("back4", "click", function( ) {
  if(money >= 150){
      hideElement("back4");
      money = money-150;
      setProperty("home", "background-color", "#97572b");
      setProperty("background", "text", "Purchase successful!");
      playSound("sound://category_achievements/lighthearted_bonus_objective_1.mp3");
      appendItem(backgroundsUser, "Brown");
    }else if (money < 150){
      setProperty("background", "text", "Insufficient funds!");
  }
  });
  onEvent("back5", "click", function( ) {
  if(money >= 300){
      hideElement("back5");
      money = money-300;
      setProperty("home", "background-color", "blue");
      setProperty("background", "text", "Purchase successful!");
      playSound("sound://category_achievements/lighthearted_bonus_objective_1.mp3");
      appendItem(backgroundsUser, "Blue");
    }else if (money < 300){
      setProperty("background", "text", "Insufficient funds!");}
  });
  
}
backgroundCOLORS();
