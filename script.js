var health = 5;
var angry = 0;
$( document ).ready(function() {
  // Текущий код вопросов
  var curPosition = 1;

  $('.start_section__main-play').on('click', function(){
    $('#mainGame').css('display', 'block');
    const anchors = document.querySelectorAll('a[href*="#"');
    for (let anchor of anchors){
      anchor.addEventListener("click", function(){
        event.preventDefault();
        const blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      })
    }
  });


  // Получаем 1 ответ
   $('.game_answer-1').on('click', function(){
     var newAnswerId = '#' + 'game_answer__' + curPosition + '1';
     var curQuestionId = '#game_question__' + curPosition;
     if (curPosition == 2){
       ChangeAngry(60);
       ChangeHealth(-2);
     }
     if (curPosition == 6){
       var prob = Math.random();
       if(prob <= 0.5){
         newAnswerId = '#game_answer__61';
       }
       else{
         newAnswerId = '#game_answer__62';
       }
     }
     if (curPosition == 3){
       ChangeAngry(20);
     }
     if (curPosition == 7){
       var prob = Math.random();
       if(prob <= 0.5){
         newAnswerId = '#game_answer__71';
       }
       else{
         newAnswerId = '#game_answer__72';
       }
     }
     $(curQuestionId).css('display', 'none');
     $(newAnswerId).css('display', 'block');
  });

  // Получаем 2 ответ
   $('.game_answer-2').on('click', function(){
     var newAnswerId = '#' + 'game_answer__' + curPosition + '2';
     var curQuestionId = '#game_question__' + curPosition;
     if (curPosition == 0){
       ChangeAngry(20);
       ChangeHealth(-1);
     }
     if (curPosition == 6){
       var prob = Math.random();
       if(prob <= 0.5){
         newAnswerId = '#game_answer__61';
       }
       else{
         newAnswerId = '#game_answer__62';
       }
     }

     $(curQuestionId).css('display', 'none');
     $(newAnswerId).css('display', 'block');
  });

  // Получаем 3 ответ
   $('.game_answer-3').on('click', function(){
     var newAnswerId = '#' + 'game_answer__' + curPosition + '3';
     var curQuestionId = '#game_question__' + curPosition;
     if (curPosition == 3){
       ChangeAngry(20);
       ChangeHealth(-1);
     }

     $(curQuestionId).css('display', 'none');
     $(newAnswerId).css('display', 'block');
  });

  // Получаем 4 ответ
   $('.game_answer-4').on('click', function(){
     var newAnswerId = '#' + 'game_answer__' + curPosition + '4';
     var curQuestionId = '#game_question__' + curPosition;
     $(curQuestionId).css('display', 'none');
     $(newAnswerId).css('display', 'block');
  });

  // Получаем 5 ответ
   $('.game_answer-5').on('click', function(){
     var newAnswerId = '#' + 'game_answer__' + curPosition + '5';
     var curQuestionId = '#game_question__' + curPosition;
     $(curQuestionId).css('display', 'none');
     $(newAnswerId).css('display', 'block');
  });

  $('.game_section-answer-continue-2').on('click', function(){
    var line = 'game_section-answer-continue-2';
    var nextQuestion = "#game_question__" + line.slice(-1);
    $('.game_section-answer-continue-2').css('display', 'none');

    var newAnswerId1 = '#' + 'game_answer__' + curPosition + '1';
    var newAnswerId2 = '#' + 'game_answer__' + curPosition + '2';
    var newAnswerId3 = '#' + 'game_answer__' + curPosition + '3';
    $(newAnswerId1).css('display', 'none');
    $(newAnswerId2).css('display', 'none');
    $(newAnswerId3).css('display', 'none');

    curPosition = 2;

    $(nextQuestion).css('display', 'flex');
  });

  $('.game_section-answer-continue-3').on('click', function(){
    var line = 'game_section-answer-continue-3';
    var nextQuestion = "#game_question__" + line.slice(-1);
    $('.game_section-answer-continue-3').css('display', 'none');

    var newAnswerId1 = '#' + 'game_answer__' + curPosition + '1';
    var newAnswerId2 = '#' + 'game_answer__' + curPosition + '2';
    var newAnswerId3 = '#' + 'game_answer__' + curPosition + '3';
    $(newAnswerId1).css('display', 'none');
    $(newAnswerId2).css('display', 'none');
    $(newAnswerId3).css('display', 'none');

    curPosition = 3;

    $(nextQuestion).css('display', 'flex');
  });

  // 2.1 вопрос
  $('.game_section-answer-continue-0').on('click', function(){
    var line = 'game_section-answer-continue-0';
    var nextQuestion = "#game_question__0";
    $('.game_section-answer-continue-0').css('display', 'none');

    var newAnswerId1 = '#' + 'game_answer__' + curPosition + '1';
    var newAnswerId2 = '#' + 'game_answer__' + curPosition + '2';
    var newAnswerId3 = '#' + 'game_answer__' + curPosition + '3';
    $(newAnswerId1).css('display', 'none');
    $(newAnswerId2).css('display', 'none');
    $(newAnswerId3).css('display', 'none');
    curPosition = 0;

    $(nextQuestion).css('display', 'flex');
  });

  $('.game_section-answer-continue-4').on('click', function(){
    var line = 'game_section-answer-continue-4';
    var nextQuestion = "#game_question__" + line.slice(-1);
    $('.game_section-answer-continue-4').css('display', 'none');

    var newAnswerId1 = '#' + 'game_answer__' + curPosition + '1';
    var newAnswerId2 = '#' + 'game_answer__' + curPosition + '2';
    var newAnswerId3 = '#' + 'game_answer__' + curPosition + '3';
    $(newAnswerId1).css('display', 'none');
    $(newAnswerId2).css('display', 'none');
    $(newAnswerId3).css('display', 'none');

    if (angry == 0){
      $('#check1').removeAttr('disabled');
      $('#check1').css('opacity', 1);
      $('#check2').removeAttr('disabled');
      $('#check2').css('opacity', 1);
    }
    if (angry == 20){
      $('#check5').removeAttr('disabled');
      $('#check5').css('opacity', 1);
    }
    if (angry >= 40){
      $('#check3').removeAttr('disabled');
      $('#check3').css('opacity', 1);
      $('#check4').removeAttr('disabled');
      $('#check4').css('opacity', 1);
    }

    curPosition = 4;

    $(nextQuestion).css('display', 'flex');
  });

  $('.game_section-answer-continue-5').on('click', function(){
    var line = 'game_section-answer-continue-5';
    var nextQuestion = "#game_question__" + line.slice(-1);
    $('.game_section-answer-continue-5').css('display', 'none');

    var newAnswerId1 = '#' + 'game_answer__' + curPosition + '1';
    var newAnswerId2 = '#' + 'game_answer__' + curPosition + '2';
    var newAnswerId3 = '#' + 'game_answer__' + curPosition + '3';
    $(newAnswerId1).css('display', 'none');
    $(newAnswerId2).css('display', 'none');
    $(newAnswerId3).css('display', 'none');

    curPosition = 5;

    $(nextQuestion).css('display', 'flex');
  });

  $('.game_section-answer-continue-6').on('click', function(){
    var line = 'game_section-answer-continue-6';
        var newAnswerId1 = '#' + 'game_answer__' + curPosition + '1';
        var newAnswerId2 = '#' + 'game_answer__' + curPosition + '2';
        var newAnswerId3 = '#' + 'game_answer__' + curPosition + '3';
        var newAnswerId4 = '#' + 'game_answer__' + curPosition + '4';
        var newAnswerId5 = '#' + 'game_answer__' + curPosition + '5';
        $(newAnswerId1).css('display', 'none');
        $(newAnswerId2).css('display', 'none');
        $(newAnswerId3).css('display', 'none');
        $(newAnswerId4).css('display', 'none');
        $(newAnswerId5).css('display', 'none');
        $('.game_section-answer-continue-6').css('display', 'none');
    var prob = Math.random();
    if (prob <= 0.2){
      curPosition = 6;
      var nextQuestion = "#game_question__6";
      $(nextQuestion).css('display', 'flex');
    }
    else{
      curPosition = 7;
      var nextQuestion = "#game_question__7";
      $(nextQuestion).css('display', 'flex');
    }
    if (health >= 4){
      $('#check6').removeAttr('disabled');
      $('#check6').css('opacity', 1);
      $('#check7').removeAttr('disabled');
      $('#check7').css('opacity', 1);
    }
  });

  // Получаем 2 ответ
  $('.game_section__answer-2').on('click', function(){
    curPosition += "2";
    var newAnswerId = GiveMeNewAnswerId(curGameNumber, curPosition);
    newAnswerId = "#"+newAnswerId;
    var newQuestionId = GiveMenewQuestionId(curGameNumber, curPosition);
    newQuestionId = "#"+newQuestionId;
    var oldQuestionId = newQuestionId.substring(0, newQuestionId.length - 1);
    $(oldQuestionId).css('display', 'none');
    $(newAnswerId).css('display', 'block');
  });

  // Получаем 3 ответ
  $('.game_section__answer-3').on('click', function(){
    curPosition += "3";
    var newAnswerId = GiveMeNewAnswerId(curGameNumber, curPosition);
    newAnswerId = "#"+newAnswerId;
    var newQuestionId = GiveMenewQuestionId(curGameNumber, curPosition);
    newQuestionId = "#"+newQuestionId;
    var oldQuestionId = newQuestionId.substring(0, newQuestionId.length - 1);
    $(oldQuestionId).css('display', 'none');
    $(newAnswerId).css('display', 'block');

  });

  // Получаем 4 ответ
  $('#game_section__answer-4').on('click', function(){
    curPosition += "4";
    var newAnswerId = GiveMeNewAnswerId(curGameNumber, curPosition);
    newAnswerId = "#"+newAnswerId;
    var newQuestionId = GiveMenewQuestionId(curGameNumber, curPosition);
    newQuestionId = "#"+newQuestionId;
    var oldQuestionId = newQuestionId.substring(0, newQuestionId.length - 1);
    $(oldQuestionId).css('display', 'none');
    $(newAnswerId).css('display', 'block');
  });

});

function GiveMenewQuestionId(curGameNumber, curPosition) {
  var x = curGameNumber+curPosition;
  return "game_question__" + curGameNumber + curPosition;
}

function GiveMeNewAnswerId(curGameNumber, curPosition) {
  return "game_question__" + curGameNumber + curPosition + "-answer";
}

function ChangeHealth(changeHealth){
  health += changeHealth;
  for (var i = 0; i < 5; i++) {
    var hearthId = '#hearth'+i;
    $(hearthId).css('display', 'none');
  }
  for (var i = 0; i < health; i++) {
    var hearthId = '#hearth'+i;
    $(hearthId).css('display', 'block');
  }
}
function ChangeAngry(changeAngry){
  angry += changeAngry;
  var op = angry/100;
  $('#wolfImage').css('opacity', op)
}
