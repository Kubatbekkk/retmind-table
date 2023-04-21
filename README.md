### retmind-table

Task: https://docs.google.com/document/d/1yyKmHhd4OkhMlxe5t5Np-y_qEswIXKd3rklyybHHZsE/edit#

Deploy: https://retmindtest.netlify.app/

#### Done: 04-21-2023

- [x]  Нужно сверстать таблицу (custom component) распределения Бюджета по магазинам и месяцам (Store 1 -> 12 months)

- [x]  данные нужно вывести из фиктивных данных (mock data)

- [x] Components Hierarchy:
                App-> Main(RCC) -> Table(RSC)
<img width="1280" alt="Screenshot 2023-04-21 at 09 44 03" src="https://user-images.githubusercontent.com/74785255/233536002-8ca4f71b-bc36-42f1-b868-cd41c46aca8a.png">

На картине выше:
INPUT - поле для ввода бюджета, при вводе бюджета в поле, TOTAL по этому store суммируется, и TOTAL по месяцу (по всем магазинам) тоже суммируется

Обязательно:
  - [x] На чистом React, можно и нативный JS(ES6+)
  - [x] Сайт не должен глючить, все должно работать быстро

Note: 
1. Main сделал классовым компонентом
2. Table сделал стейтлес компонентом
3. TotalOfTotals является суммой Store Total (следовало уточнить, но выпало на праздник - не стал беспокоить)

Буду рад уточнениям и исправлениям.