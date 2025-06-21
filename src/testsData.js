// Этот файл будет содержать все данные для тестов.
// Мы выносим их сюда, чтобы не загромождать основной компонент.

export const tests = [
  {
    slug: 'html',
    name: 'HTML',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question:
          'Какой тег используется для создания самой важной надписи на странице?',
        options: ['<h1>', '<h6>', '<header>', '<strong>'],
        correctAnswer: 0,
        explanation:
          'Тег <h1> используется для создания заголовка первого уровня. Это самый важный заголовок на странице.',
      },
      {
        id: 2,
        type: 'multiple-choice',
        question:
          'Какой тег является устаревшим и не рекомендуется к использованию для выделения текста курсивом?',
        options: ['<em>', '<i>', '<italic>', '<mark>'],
        correctAnswer: 1,
        explanation:
          'Тег <i> является устаревшим. Для семантического выделения текста курсивом следует использовать <em>.',
      },
      {
        id: 3,
        type: 'fill-blank',
        question:
          'Дополните код, чтобы создать ссылку, которая открывается в новой вкладке:',
        code: '<a href = "https://example.com" target="___">Example</a>',
        correctAnswer: '_blank',
        explanation:
          'Значение `_blank` атрибута `target` указывает браузеру открыть ссылку в новой вкладке или окне.',
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'Какой атрибут обязателен для тега <img> для доступности?',
        options: ['src', 'title', 'alt', 'href'],
        correctAnswer: 2,
        explanation:
          'Атрибут `alt` предоставляет альтернативный текст для изображения, если оно не может быть отображено. Это критически важно для скрин-ридеров и доступности (a11y).',
      },
    ],
  },
  {
    slug: 'css',
    name: 'CSS',
    gradient: 'linear-gradient(135deg, #16a085 0%, #f4d03f 100%)',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question:
          'Какое свойство используется для изменения цвета фона элемента?',
        options: ['color', 'background-color', 'bgcolor', 'background'],
        correctAnswer: 1,
        explanation:
          '`background-color` устанавливает цвет фона. `background` является сокращенным свойством.',
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'Как выбрать все элементы <p> внутри <div>?',
        options: ['div p', 'div + p', 'div > p', '.div p'],
        correctAnswer: 0,
        explanation:
          'Селектор потомков `div p` выберет все элементы <p>, которые находятся внутри <div>, независимо от уровня вложенности.',
      },
      {
        id: 3,
        type: 'fill-blank',
        question: 'Дополните код, чтобы сделать текст жирным:',
        code: 'p { font-___: bold; }',
        correctAnswer: 'weight',
        explanation:
          'Свойство `font-weight` используется для установки "веса" или жирности шрифта.',
      },
    ],
  },
  {
    slug: 'js',
    name: 'JavaScript',
    gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Что выведет `console.log(typeof null)`?',
        options: ['"null"', '"undefined"', '"object"', '"function"'],
        correctAnswer: 2,
        explanation:
          'Это одна из самых известных ошибок в JavaScript. Исторически `typeof null` возвращает "object".',
      },
      {
        id: 2,
        type: 'multiple-choice',
        question:
          'Какой метод используется для удаления последнего элемента из массива?',
        options: ['.pop()', '.shift()', '.slice()', '.push()'],
        correctAnswer: 0,
        explanation:
          'Метод `pop()` удаляет последний элемент из массива и возвращает его значение.',
      },
    ],
  },
  {
    slug: 'js-advanced',
    name: 'JS Продвинутый',
    gradient: 'linear-gradient(135deg, #d35400 0%, #c0392b 100%)',
    questions: [
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Для чего используется `Promise.all()`?',
        options: [
          'Для выполнения промисов поочередно',
          'Для получения результата самого быстрого промиса',
          'Для ожидания выполнения всех промисов в массиве',
          'Для отмены всех промисов',
        ],
        correctAnswer: 2,
        explanation:
          '`Promise.all()` принимает массив промисов и возвращает новый промис, который будет выполнен, когда все промисы в массиве будут выполнены, или отклонен, если хотя бы один из них будет отклонен.',
      },
    ],
  },
  {
    slug: 'react',
    name: 'React',
    gradient: 'linear-gradient(135deg, #00c6fb 0%, #005bea 100%)',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question:
          'Какой хук используется для управления состоянием в функциональном компоненте?',
        options: ['useState', 'useEffect', 'useContext', 'useReducer'],
        correctAnswer: 0,
        explanation:
          '`useState` — это хук, который позволяет добавлять состояние React в функциональные компоненты.',
      },
    ],
  },
  {
    slug: 'react-advanced',
    name: 'React Продвинутый',
    gradient: 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)',
    questions: [
      {
        id: 4,
        type: 'multiple-choice',
        question: 'Когда стоит использовать `useReducer` вместо `useState`?',
        options: [
          'Когда состояние — это простое число или строка',
          'Когда у вас сложная логика состояния или следующий state зависит от предыдущего',
          'Всегда лучше использовать `useReducer`',
          'Когда нужно работать с API',
        ],
        correctAnswer: 1,
        explanation:
          '`useReducer` предпочтительнее для управления сложными объектами состояния и в случаях, когда логика обновления состояния сложна или следующий стейт зависит от предыдущего (например, счетчик).',
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Что такое "прокидывание пропсов" (prop drilling)?',
        options: [
          'Передача props через множество уровней компонентов',
          'Ошибка, когда props не доходят до компонента',
          'Паттерн для быстрой передачи props',
          'Способ шифрования props',
        ],
        correctAnswer: 0,
        explanation:
          'Prop drilling — это ситуация, когда props передаются вниз по дереву компонентов через промежуточные компоненты, которым эти props не нужны. Для решения этой проблемы часто используют Context API или библиотеки управления состоянием.',
      },
    ],
  },
  {
    slug: 'typescript',
    name: 'TypeScript',
    gradient: 'linear-gradient(135deg, #007acc 0%, #3178c6 100%)',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question:
          'Какой тип используется для переменной, которая может быть строкой или числом?',
        options: [
          'string | number',
          'string & number',
          'any',
          'string or number',
        ],
        correctAnswer: 0,
        explanation:
          '`|` используется в TypeScript для создания объединенных типов (Union Types).',
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Что делает ключевое слово `as` в TypeScript?',
        options: [
          'Создает псевдоним для типа',
          'Выполняет приведение типов (type assertion)',
          'Объявляет асинхронную функцию',
          'Импортирует модуль под другим именем',
        ],
        correctAnswer: 1,
        explanation:
          '`as` используется для приведения типов, когда вы знаете о типе значения больше, чем TypeScript. Например, `(myValue as string).length`.',
      },
    ],
  },
  {
    slug: 'stupid',
    name: 'Stupid',
    gradient: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Что выведет в консоль `[] + {}`?',
        options: ['"[]{}', 'Error', 'NaN', '"[object Object]"'],
        correctAnswer: 3,
        explanation:
          'При сложении массива и объекта, оба приводятся к строке. Пустой массив `[]` становится пустой строкой `""`, а объект `{}` становится строкой `"[object Object]"`. Результат их конкатенации и есть `"[object Object]"`.',
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: '`"банана" - 1`. Что получится?',
        options: ['"банан"', 'NaN', 'Error', '0'],
        correctAnswer: 1,
        explanation:
          'При попытке вычесть число из строки, которая не может быть преобразована в число, JavaScript вернет `NaN` (Not a Number).',
      },
    ],
  },
]
