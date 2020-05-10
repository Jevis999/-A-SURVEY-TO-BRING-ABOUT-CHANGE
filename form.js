class Form {
  constructor() {

  }
  
  display(){
    var title = createElement('h1');
    title.html("National Government Orphanage Voting App For Childrens Fund");
    title.position(250,0);

    var title2 = createElement('h3');
    title2.html("Please Enter Your E-mail ID :");
    title2.position(50,110);

    var title2b = createElement('h3');
    title2b.html("Please Enter Your Name :");
    title2b.position(50,185);

    var button = createButton('Continue');
    button.position(175,300);
    button.size(100,25);

      
  var button2 = createButton('Continue');
  
  button2.size(100,25);

    var input = createInput('Example@example.com');
    input.position(60,170);

    var input2 = createInput('Your Name');
    input2.position(60,230);

    var suggestion = createInput('Your suggestion');
    suggestion.size(430,20)



    var greeting = createElement('h2');
    var greeting2 = createElement('h2');
    var greeting3 = createElement('h1');

    var question1 = createElement('h4');
    var question2a = createElement('h4');
    var question2b = createElement('h4');
    var question3 = createElement('h4');
    var question4 = createElement('h4');
    var question5 = createElement('h4');

 
    
    checkbox1a = createCheckbox('Yes', false);
    checkbox1b = createCheckbox('No', false);

    checkbox2a = createCheckbox('1000', false);
    checkbox2b = createCheckbox('2500', false);
    checkbox2c = createCheckbox('5000', false);

    checkbox3a = createCheckbox('Yearly', false);
    checkbox3b = createCheckbox('monthly', false);

    checkbox4a = createCheckbox('Clothing', false);
    checkbox4b = createCheckbox('toys', false);
    checkbox4c = createCheckbox('others', false);

    checkbox2a.hide();
    checkbox2b.hide();
    checkbox2c.hide();
    checkbox1a.hide();
    checkbox1b.hide();
    checkbox3a.hide();
    checkbox3b.hide();
    checkbox4a.hide();
    checkbox4b.hide();
    checkbox4c.hide();
    suggestion.hide();
    button2.hide();
  
    button2.mousePressed(function(){
      h = 1;

      sug = suggestion.value();

      
    checkbox2a.hide();
    checkbox2b.hide();
    checkbox2c.hide();
    checkbox1a.hide();
    checkbox1b.hide();
    checkbox3a.hide();
    checkbox3b.hide();
    checkbox4a.hide();
    checkbox4b.hide();
    checkbox4c.hide();
    suggestion.hide();
    button2.hide();
    input.hide();
    input2.hide();
    title2b.hide();
    title2.hide();
    button.hide();
    question1.hide();
    question2a.hide();
    question2b.hide();
    question3.hide();
    question4.hide();
    question5.hide();
    greeting.hide();
    greeting2.hide();
    greeting3.hide();
    
    var ending = createElement('h3');
    var ending2 = createElement('h3');
    ending.html("THANKS FOR VOTING");
    ending2.html("WE HAVE CONFIRMED YOUR SUBMISSION");
    ending.position(450,250);
    ending2.position(360,325);

     a = 1
    
     });
//___________________________________________________________________________
    button.mousePressed(function(){
        input.hide();
        input2.hide();
        title2b.hide();
        title2.hide();
        button.hide();
         name = input.value();
         name2 = input2.value();
        playerCount += 1;

        suggestion.position(320,600);
        checkbox1a.position(375,280)
        checkbox1b.position(425,280)

        checkbox2a.position(375,370)
        checkbox2b.position(435,370)
        checkbox2c.position(495,370)

        checkbox3a.position(375,430)
        checkbox3b.position(450,430)

        checkbox4a.position(375,490)
        checkbox4b.position(465,490)
        checkbox4c.position(525,490)

        checkbox2a.show();
checkbox2b.show();
checkbox2c.show();
checkbox1a.show();
checkbox1b.show();
checkbox3a.show();
checkbox3b.show();
checkbox4a.show();
checkbox4b.show();
checkbox4c.show();
suggestion.show();
button2.show();


        
        
        
    
        greeting.html("Welcome "+name2+" For Voting");
        greeting2.html("Please Choose the following to vote :");
        greeting3.html("_______________________________");

        question1.html("1) Would you like to help the orphan ?");
        question2a.html("2) How much would you contribute for");
        question2b.html("this ?");
        question3.html("3) How frequently would you contibute ?");
        question4.html("4) would you like to donate any other things ?");
        question5.html("please Enter Your suggestoin : ");

        player.UpdateCount(playerCount);
        player.Update(name2,name);
        
      
        // displaying the greeting message

        button2.position(680,660);
 
        greeting.position(320,100);
        greeting2.position(320,170);
        greeting3.position(310,110);

        question1.position(350,230);
        question2a.position(350,290);
        question2b.position(350,320);
        question3.position(350,380);
        question4.position(350,440);
        question5.position(350,550);
    })

    
  }
  
}
