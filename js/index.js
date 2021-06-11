var question = $(".question");
var ask = $("h6");
var arrow = $(".arrow");
var answer = $(".answer");

answer.hide();

for (var i = 0; i < question.length; i++) {
  addAnswer(i);
}

function addAnswer(i) {
  question[i].addEventListener("click", function() {
    if (ask[i].getAttribute("class") !== "blur chosen-ask") {
      $(".box").css("left", "168px");

      ask.removeClass("chosen-ask");
      ask[i].setAttribute("class", "blur chosen-ask");

      arrow.removeClass("rotate-arrow");
      arrow[i].setAttribute("class", "arrow rotate-arrow");

      answer.hide();
      answer[i].style.display = "block";
    }
    else {
      $(".box").css("left", "128px");

      ask.removeClass("chosen-ask");

      arrow.removeClass("rotate-arrow");

      answer.hide();
    }
  });
}
