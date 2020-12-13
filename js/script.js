function result(){
  var option1 = document.questionaire.question1.value;
  var option2 = document.questionaire.question2.value;
  var option3 = document.questionaire.question3.value;
  var option4 = document.questionaire.question4.value;
  var option5 = document.questionaire.question5.value;
  var option6 = document.questionaire.question6.value;
  var option7 = document.questionaire.question7.value;
  var option8 = document.questionaire.question8.value;
  var option9 = document.questionaire.question9.value;
  var option10 = document.questionaire.question10.value;
  var option11 = document.questionaire.question11.value;
  var option12 = document.questionaire.question12.value;
  var option13 = document.questionaire.question13.value;
  var option14 = document.questionaire.question14.value;
  var option15 = document.questionaire.question15.value;
  var option16 = document.questionaire.question16.value;
  var option17 = document.questionaire.question17.value;
  var option18 = document.questionaire.question18.value;
  var option19 = document.questionaire.question19.value;
  var option20 = document.questionaire.question20.value;
  var selected = 0;

  if (option1 == "Yes"){
    selected++;
  }
  if (option2 == "Yes"){
    selected++;
  }
  if (option3 == "Yes"){
    selected++;
  }
  if (option4 == "Yes"){
    selected++;
  }
  if (option5 == "Yes"){
    selected++;
  }
  if (option6 == "Yes"){
    selected++;
  }
  if (option7 == "Yes"){
    selected++;
  }
  if (option8 == "Yes"){
    selected++;
  }
  if (option9 == "Yes"){
    selected++;
  }
  if (option10 == "Yes"){
    selected++;
  }
  if (option11 == "Yes"){
    selected++;
  }
  if (option12 == "Yes"){
    selected++;
  }
  if (option13 == "Yes"){
    selected++;
  }
  if (option14 == "Yes"){
    selected++;
  }
  if (option15 == "Yes"){
    selected++;
  }
  if (option16 == "Yes"){
    selected++;
  }
  if (option17 == "Yes"){
    selected++;
  }
  if (option18 == "Yes"){
    selected++;
  }
  if (option19 == "Yes"){
    selected++;
  }
  if (option20 == "Yes"){
    selected++;
  }

  document.getElementById("after_submit").style.visibility="visible";
  document.getElementById("number_selected").innerHTML = "You selected " + selected + " options.";
}
