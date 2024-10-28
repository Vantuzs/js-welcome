/* Разработка програмы для управления книжным магазом

Предметная область: В книжном магазе у нас будет много книг. Мы их продаём.

Все наши книги по сути можно представить в виде объекта с одинаковой структурой.

done -->> Задача: создать констуктор объектов для представления книг с следующими властивостями.
Название книги, автор, год создания, цена

Спроэктировать методы:
Спроэктировать методы для получения и установления значений этих властивостей

done -->> Задача 2: Сделать для всех книг метод, который бы повернул цену книги, але с скидкой
*/

function Book(title, author, year, price){
    this.title = title;
    this.author = author;
    this.year = year;
    this.price = price;

    this.getTitle = function(){
        // мы можем реализовать, проверку права на доступ до властивости

        return this.title;
    }

    this.getAuthor = function(){
        // мы можем реализовать, проверку права на доступ до властивости

        return this.author;
    }

    this.getYear = function(){
        // мы можем реализовать, проверку права на доступ до властивости
        return this.year;
    }

    this.getPrice = function(){
        // мы можем реализовать, проверку права на доступ до властивости

        return this.price;
    }

    this.setTitle = function(newTitle){
        // Могли реализовать, напривер, какието проверки - например на право(может не может)
        this.title = newTitle;
    }

    this.steAuthor = function(newAuthor){
        // Могли реализовать, напривер, какието проверки - например на право(может не может)

        this.author = newAuthor;
    }

    this.setYear = function(newYear){
        // Могли реализовать, напривер, какието проверки - например на право(может не может)

        this.year = newYear;
    }

    this.setPrice = function(newPrice){
        // Могли реализовать, напривер, какието проверки - например на право(может не может)

        this.price = newPrice;
    }

    this.calcaleteDiscountPrice = function(discountPercentage){
        const discountedPrice = this.price - (this.price*(discountPercentage/100));
        return discountedPrice;
    }
}

const book1 = new Book('Чотири витры', 'Кристин Генна', 2021, 450.00);

// console.log( book1.getTitle());
// console.log( book1.getAuthor());
// console.log( book1.getYear());
// console.log( book1.getPrice());

// book1.setTitle('New Title');
// book1.steAuthor('New Author');
// book1.setYear(2025);
// book1.setPrice(350);

console.log(book1.calcaleteDiscountPrice(50));