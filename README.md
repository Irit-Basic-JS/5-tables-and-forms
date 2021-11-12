# Таблицы и формы

В этом задании мы попробуем поработать с формами так, как они работали до эпохи веб-приложений: при каждой отправке перезагружалась страница, сервер формировал новую в ответ.

Будем делать форму для выбора себе питомца!

0. Поставь зависимости и запусти сервер. Перейди в директорию задачи и выполни команду `npm install`. После установки зависимостей, выполни команду `npm run server`. После запуска, перейди по адресу [localhost:3000](http://localhost:3000). Все следующие пункты выполняются в файле `index.html` в директории `static`.

1. Создай форму, в которая будет отправлять свои данные методом `POST` по адресу `/pets/orders`. Попробуй отправить форму и узнаешь, какие поля требуется в ней передавать.

2. Сделай такую форму с такими типами
 данных, которая будет приниматься сервером. Не забудь к каждому полю дописать `label` (и `placeholder` тем полям, у которых он есть). Задача предполагает, что каждое поле уникального типа или сделано уникальными тегами.

3. Сделай кнопку для сброса всех значений на дефолтные.

4. Укрась табличку с помощью CSS.

5. Добавь валидацию данных, которые отравляются на сервер. Валидацию сделай через сервер, не в `index.html`!

**Подсказки:**

1. Чтобы узнать, что отправляется на сервер, в браузерных инструментах разработчика есть вкладка `Network`, в ней можно поставить галочку `Preserve log`, чтобы при обновлении страницы запросы не стирались и так узнать, что твоя форма отправляет на сервер. Подробнее о работе с DevTools можешь почитать [в этой статье](https://developers.google.com/web/tools/chrome-devtools/network/reference#analyze)
2. Чтобы не вводить постоянно значения в форму, полям можно указать дефолтное значение при помощи атрибутов `value` и `selected`
