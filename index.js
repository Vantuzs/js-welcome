// || - "або" 
// бинарный оператор, повертае Boolean 
// Повертае true (истину) только тогда, если хотябы один с операндив есть true(Истинным)

// Задача: если у нас выходные или праздник - то это прекрасный день для отдыха
// сделать висновок.

const isWeekend = false;
const isHolidey = false;

if(isWeekend || isHolidey) {  // isWeekend === true || isHolidey 
    console.log('Чудовый день для Отдыха');
} else {
    console.log('РАБОТАЙ!!!');
}