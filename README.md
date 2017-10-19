# Лабораторная работа 1 - Создание JSON сервера с пользовательским интерфейсом
## Используемые технологии
* [React.js](https://reactjs.org/) - библиотека для разработки интерфейсов.
* [Node.js](https://nodejs.org/en/) - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код). Проще говоря, это среда для выполнения вашего JavaScript кода. В этой лабе мы используем Node.js для создания сервера.
* [JSON](http://www.json.org/json-ru.html) - популярный формат обмена данными.
* [npm](https://www.npmjs.com/) - менеджер пакетов. Он помогает нам управлять модулями. Например, загрузить нужную версию React.js. А с помощью npm-scripts можно собрать проект, запустить тесты и т.д.
* [Express](http://expressjs.com/ru/) - Node.js-фреймворк в котором есть множество HTTP-методов. Он облегчит нам процесс создания API нашего приложения.

### Шаг :one: -- Установка Node.js и npm
Скачайте исходник с [nodejs.org](https://nodejs.org/en/). После установки выполните команду `node -v` в командной строке для проверки установленной версии Node JS и `npm -v` для просмотра версии NPM.

### Шаг :two: -- package.json и npm-скрипты
В наших исходниках уже есть файл [package.json](https://maxfarseer.gitbooks.io/redux-course-ru/content/sozdaniepackagejson_md.html). Это файл-описание проекта. В нем перечислена различная информация, например используемые модули, версия, зависимости и т.д.
Там же вы найдете раздел `scripts` с командой, которая запускает UI. 
#### Задание 1
В корне каталога проекта создайте файл server.js, добавьте в package.json скрипт под названием `api`, который будет запускать наш сервер. В консоль должно выводиться сообщение о запуске сервера.

### Шаг :three: -- Установка Express, настройка роутинга.
Установите Express, для этого запустите команду
```js
npm i express --save
```
Обратите внимание на флаг `--save`, который запишет Express в список зависимостей нашего проекта.<br />
Теперь нужно подключить Express в файле server.js. Для работы с модулями в Node JS используется стандарт [CommonJS](https://habrahabr.ru/company/nixsolutions/blog/261141/), поэтому определение константы `express` в нашем коде будет иметь вид:
```js
const express = require('express');
```
Если в функции `require` мы передаем имя модуля без уточнения пути, он будет искаться в установленных модулях, а именно в папке node_modules. <br />
Теперь нужно настроить роутинг. Для начала инициализируем наш сервер командой 
```js
const app = express();
```
и запустим его на 3000-м порту
```js
app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
```
Теперь все готово для настройки [роутинга](http://expressjs.com/ru/guide/routing.html).<br />
Простейший пример:
```js
app.get('/', function (req, res) {
  res.send('Hello World!');
});
```
Первое, что мы определяем при настройке наших роутов - это типа запроса. Два самых распространенных типа - это [GET](https://ru.wikipedia.org/wiki/HTTP#GET) и [POST](https://ru.wikipedia.org/wiki/HTTP#POST).<br />
Для настройки роута по каждому из запросов Express предоставляет удобные методы с соответствующим именем. Первым аргументом мы передаем путь, по которому сервер будет выполнять функцию-колбэк, переданную вторым аргументом. 
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