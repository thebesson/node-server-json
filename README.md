# Лабораторная работа 1 - Создание JSON сервера с пользовательским интерфейсом
## Используемые технологии
* [React.js](https://reactjs.org/) - библиотека для разработки интерфейсов.
* [Node.js](https://nodejs.org/en/) - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код). Проще говоря, это среда для выполнения вашего JavaScript кода. В этой лабе мы используем Node.js для создания сервера.
* [JSON](http://www.json.org/json-ru.html) - популярный формат обмена данными.
* [npm](https://www.npmjs.com/) - менеджер пакетов. Он помогает нам управлять модулями. Например, загрузить нужную версию React.js. А с помощью npm-scripts можно собрать проект, запустить тесты и т.д.
* [Express](http://expressjs.com/ru/) - Node.js-фреймворк в котором есть множество HTTP-методов. Он облегчит нам процесс создания API нашего приложения.

### Шаг :one: -- Установка Node.js и npm
Скачайте исходник с [nodejs.org](https://nodejs.org/en/). После установки выполните команду `node -v` в командной строке для проверки.

### Шаг :two: -- package.json и npm-скрипты
В наших исходниках уже есть файл [package.json](https://maxfarseer.gitbooks.io/redux-course-ru/content/sozdaniepackagejson_md.html). Это файл-описание проекта. В нем перечислена различная информация, например используемые модули, версия, зависимости и т.д.
Там же вы найдете раздел `scripts` с командой, которая запускает UI. 
#### Задание 1
В корне каталога проекта создайте файл server.js, добавьте в package.json скрипт под названием `api`, который будет запускать наш сервер. В консоль должно выводиться сообщение о запуске сервера.

### Шаг :three: -- Express, routes
Запустить команду
```js
npm i express --save
```
[Маршрутизация](http://expressjs.com/ru/guide/routing.html)
Создать файл routes. Подключить в него Espress.
_Что такоe Common.js и require?_
_Методы get, post_
#### Задание 2
Создать маршрут который будет отвечать на запрос к серверу.

### Шаг :four: -- models
Создать папку models, добавить файл book.json. 
```js
//book.json
{
  "items": [
    { "id": 1, "title": "Jewels of Nizam", "author": "Geeta Devi", "img": "JewelsOfNizam.jpg", "stars": 5, "labels": "label1" },
    { "id": 2, "title": "Cakes & Bakes", "author": "Sanjeev Kapoor", "img": "CakesAndBakes.jpg", "stars": 5, "labels": "label1" },
    { "id": 3, "title": "Jamie\"s Kitchen", "author": "Jamie Oliver", "img": "JamiesKitchen.jpg", "stars": 4, "labels": "label1" },
    { "id": 4, "title": "Inexpensive Family Meals", "author": "Simon Holst", "img": "InexpensiveFamilyMeals.jpg", "stars": 3, "labels": "label2" },
    { "id": 5, "title": "Paleo Slow Cooking", "author": "Chrissy Gawer", "img": "PaleoSlowCooking.jpg", "stars": 4, "labels": "label1" },
    { "id": 6, "title": "Cook Like an Italian", "author": "Toble Puttock", "img": "CookLikeAnItalian.jpg", "stars": 3, "labels": "label1" },
    { "id": 7, "title": "Suneeta Vaswani", "author": "Geeta Devi", "img": "SuneetaVaswani.jpg", "stars": 5, "labels": "label2" },
    { "id": 8, "title": "Jamie Does", "author": "Jamie Oliver", "img": "JamieDoes.jpg", "stars": 3, "labels": "label2" },
    { "id": 9, "title": "Jamie\"s Italy", "author": "Jamie Oliver", "img": "JamiesItaly.jpg", "stars": 5, "labels": "label1" },
    { "id": 10, "title": "Vegetables Cookbook", "author": "Matthew Biggs", "img": "VegetablesCookbook.jpg", "stars": 3, "labels": "label2" }
  ]
}
```
Для работы с файлами json мы будем использовать модуль [fs](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html). Это модуль Node.js для работы с файловой системой.
Подключить модуль.
_Параметры запроса_
#### Задание 3
Создать маршрут для получения всех книг.
Создать маршрут для получения книги по id.

## // TODO:

- [ ] расписать каждый пункт подробнее
- [ ] добавить теории
- [ ] common.js и require
- [ ] добавить больше информации об api, express.
