# Лабораторная работа 1 - Создание JSON сервера с пользовательским интерфейсом
## Используемые технологии
* [React.js](https://reactjs.org/) - библиотека для разработки интерфейсов.
* [Node.js](https://nodejs.org/en/) - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код). Проще говоря, это среда для выполнения вашего JavaScript кода. В этой лабе мы используем Node.js для создания сервера.
* [JSON](http://www.json.org/json-ru.html) - популярный формат обмена данными.
* [npm](https://www.npmjs.com/) - менеджер пакетов. Он помогает нам управлять модулями. Например, загрузить нужную версию React.js. А с помощью npm-scripts можно собрать проект, запустить тесты и т.д.
* [Express](http://expressjs.com/ru/) - Node.js-фреймворк в котором есть множество HTTP-методов. Он облегчит нам процесс создания API нашего приложения.

### Шаг :one: -- Установка Node.js и npm
Скачайте исходник с [nodejs.org](https://nodejs.org/en/). После установки выполните команду `node -v` в командной строке для проверки установленной версии Node JS и `npm -v` для просмотра версии NPM. _Что бы открыть командную строку в VS Code, нажмите Ctrl+~_
В корне каталога проекта создайте файл server.js. Все что нам сейчас нужно сделать это вывести информацию на консоль, что бы понять, что наш сервер заработал. В JS и Node.js для этого используется `console.log('Сообщение')`.
Что бы запустить приложение, выполните команду в командной строке:
```
node server.js
```
#### Задание 1
Создайте файл server.js, запустите приложение и убедитесь что все работает.

### Шаг :two: -- package.json и npm-скрипты
В наших исходниках уже есть файл [package.json](https://maxfarseer.gitbooks.io/redux-course-ru/content/sozdaniepackagejson_md.html). Это файл-описание проекта. Node-приложения настраиваются внутри package.json. В этом файле можно настроить имя своего проекта, версию, хранилище, автора и все важные зависимости. В нем перечислена различная информация, например используемые модули, версия, зависимости и т.д.
Например, раздел `scripts` с командами, которая запускает UI.
```javascript
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
}
```
`"start"` - скрипт который запускает UI часть нашего приложения в режиме разработки. Чтобы запустить этот скрипт достаточно выполнить `npm run start` в командной строке.
#### Задание 2
Добавьте в package.json скрипт под названием `api`, который будет запускать наш сервер. _Что бы открыть вторую командную строку в VS Code, нажмите __+__ в верхней правой части открытой командной строки. Переключаться между ними можно выбирая нужную в дропдауне._ 

### Шаг :three: -- Установка Express, настройка роутинга.
Node поддерживается многими пакетами на все случаи жизни. Пакеты расширяют функциональность приложения. Существуют пакеты с решениями самых разных задач. Express — фреймворк для создания веб-приложений с использованием Node.js. Express помогает организовать веб-приложение на стороне сервера. Express скрывает много внутренней работы Node и позволяет работать намного быстрее. Он прост для изучения и ещё даёт вам немного гибкости с его структурой.
Установите Express, для этого запустите команду
```
npm i express --save
```
Обратите внимание на флаг `--save`, который запишет Express в список зависимостей нашего проекта.<br />
Теперь нужно подключить Express в файле server.js. Для работы с модулями в Node JS используется стандарт [CommonJS](https://habrahabr.ru/company/nixsolutions/blog/261141/), поэтому определение константы `express` в нашем коде будет иметь вид:
```javascript
//Берем Express и "подключаем" его в файл server.js
const express = require('express');
```
Если в функции `require` мы передаем имя модуля без уточнения пути, он будет искаться в установленных модулях, а именно в папке node_modules. <br />
Теперь нужно настроить роутинг. Для начала инициализируем наш сервер командой 
```javascript
//создаем Express-приложение
const app = express();
```
и запустим его на 8080-м [порту](https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D1%80%D1%82_(%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D1%8B%D0%B5_%D1%81%D0%B5%D1%82%D0%B8))
```javascript
app.listen(8080, function () {
  console.log('App listening on port 8080!');
});
```
Теперь все готово для настройки [роутинга](http://expressjs.com/ru/guide/routing.html).<br />
Простейший пример:
```javascript
app.get('/', function (req, res) {
  res.send('Hello World!');
});
```
Первое, что мы определяем при настройке наших роутов - это тип запроса. Два самых распространенных типа - это [GET](https://ru.wikipedia.org/wiki/HTTP#GET) и [POST](https://ru.wikipedia.org/wiki/HTTP#POST).<br />
Для настройки роута по каждому из запросов Express предоставляет удобные методы с соответствующим именем. Первым аргументом мы передаем путь, по которому сервер будет выполнять [функцию-колбэк](https://ru.hexlet.io/blog/posts/javascript-what-the-heck-is-a-callback), переданную вторым аргументом. У этой колбэк-функции есть два аргумента - `req` и `res`.
`req` представляет собой HTTP-запрос. `res` это HTTP-ответ, который Express посылает в ответ на HTTP-запрос. И у `req` и у `res` есть много методов и свойств, например `res.send('Hello World!');`. `send` может вернуть json, строку, объект или массив. В нашем примере он вернет строку "Hello World!" и мы увидим ее в браузере если перейдем по адресу [localhost:8080](http://localhost:8080/).
#### Задание 2
Создать маршрут который будет отвечать на запрос к серверу. Перейдите в браузере на адресс [localhost:8080](http://localhost:8080/) что бы увидеть реакцию сервера на запрос.

### Шаг :four: -- models
Чтобы наше приложение было приближено к реально рабочим приложениями, нам нужно что бы наш сервер возвращал какие-то реальные данные. UI-часть нашего приложения уже готова и посылает запрос на адрес `http://localhost:8080/books`. Нам нужно создать маршрут который будет отвечать на запрос по этому адресу и возвращать данные которые нужны UI.
Создадим папку models, добавим файл book.json. 
```javascript
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
Для работы с файлами json мы будем использовать модуль [fs](https://js-node.ru/site/article?id=23). Это встроенный модуль Node.js для работы с файловой системой. Встроенные модули Node.js не нужно устанавливать или добавлять в package.json, достаточно подключить его в файл.
```javascript
const fs = require('fs');
```
#### Задание 3
Создать маршрут для получения всех книг.