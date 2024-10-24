/*

Розробити алгоритм, который будет отображать режим нашего дня

Нужно розробити функцию, которая принимает ту или иную пору дня (утро, обед, ужин)
 и выполняет те или иные действия,которые мы выполняем в указанною пору дня

*/

function todo(timeOfDay){ // HOF
  // morning - список справ на ранок
  // lunch - список дел на обед
  // evening - список дел на вечер
  switch(timeOfDay){
    case 'morning':{
      brushingTeeth();
      skincare();
      breakfast();
      break;
      
    }
    case 'lunch':{
      goToOffice();
      coding();
      lunch();
      coding();
      break;
    }
    case 'evening':{
      education();
      coding;
      goToHome();
      shower();
      brushingTeeth();
      skincare();
      sleep();
      break;
    }
    default:{
      console.log('Ошибка! Такова времени суток не расчитывалось=(');
    }
  }
}

todo('evening')



function brushingTeeth(){
  console.log('brushing teeth');
}

function skincare(){
  console.log('skincare');
}

function breakfast(){
  console.log('breakfast');
}

function goToOffice(){
  console.log('goToOffice');
}

function coding(){
  console.log('coding');
}

function lunch(){
  console.log('lunch');
}

function education(){
  console.log('education');
}

function goToHome(){
  console.log('Go to home');
}

function shower() {
  console.log('shower');
}

function sleep(){
  console.log('sleep');
}
