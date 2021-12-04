const answer = $(".answer");
const question = $("button");

question.click(function() {
    if ($(this).hasClass("active")) {
        question.removeClass("active");
    }
    else {
        question.removeClass("active");
        $(this).addClass("active");
    }

    const thisAnswer = answer.eq(question.index($(this)));
    
    if (thisAnswer.hasClass("active")) {
        answer.removeClass("active");
    }
    else {
        answer.removeClass("active");
        thisAnswer.addClass("active");
    }
});