function result(){
  var option1 = document.questionaire.question1.value;
  var option2 = document.questionaire.question2.value;
  var option3 = document.questionaire.question3.value;
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

  document.getElementById("after_submit").style.visibility="visible";
  document.getElementById("number_selected").innerHTML = "You selected " + selected + " options.";
}
