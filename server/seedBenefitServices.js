const { Benifit, Category_benifit } = require('./db/models');



const category = [
  {
    title: 'Выгул собак',
    link: 'https://i.timeout.ru/pix/resize/503/994/750x485.jpeg',
  },
  {
    title: 'Клининг',
    link: 'https://art-losk.ru/images/ceni-klininga.jpg',
  },
  {
    title: 'Ремонт,бытовые услуги',
    link: 'https://kolomna.muz-doma.ru/data/content/gallery/1096140205b66f96b563d9.jpg',
  },
  {
    title: 'Няня,сиделка,образование',
    link: 'https://www.mostimportant.ru/picts/blog/tn1000x1500-njanja-dlja-rebenka-cena-voprosa-1.jpg',
  },
  {

    title: 'Красота',
    link: 'https://avatars.mds.yandex.net/get-zen_doc/1362253/pub_5beec0738d3c9f00ab0aabde_5beec1808d3c9f00ab0aabed/scale_1200',
  },
];
async function addBenefitCategory(obj) {
  await Category_benifit.create({
    title: obj.title,
    link: obj.link,
  });
}

// category.map((el) => {
//   addBenefitCategory(el)
// });
const services = [
  {
    user_id: 1,
    title: 'Выгул собак',
    text: 'Могу выгуливать небольших собак.',
    price: 500,
    category_id: 1,
  },
  {
    user_id: 2,
    title: 'Клининг',
    text: 'Занимаюсь уборкой квартир',
    price: 1000,
    category_id: 4,
  },
  {
    user_id: 3,
    title: 'Установка фильтров для воды',
    text: 'Я занимаюсь услугами профессионального сантехника с бесплатным выездом и опытом работы более 10 лет.Установка фильтров для воды.',
    price: 800,
    category_id: 2,
  },
  {
    user_id: 4,
    title: 'Репетитор по математике',
    text: 'Подготовлю вашего ребенка к экзамену в школе',
    price: 800,
    category_id: 3,
  },
  {
    user_id: 5,
    title: 'Репетитор по математике',
    text: 'Репетитор по физике и математике, школьная программа 5-11 классов, олимпиады и подготовка к ОГЭ и ЕГЭ. Занятия провожу дистанционно.',
    price: 800,
    category_id: 3,
  },
  {
    user_id: 6,
    title: 'Решение задач по математике и физике',
    text: 'Помогу школьникам и студентам.По каким предметам могу помочь: 🎓 Студентам:✅ Математический анализ (все разделы), Физика, Линейная алгебра, Аналитическая геометрия.🏫Школьникам: ✅ Любые задачи из школьного курса по математике (алгебре) , физике и геометрии.Учусь на втором курсе в НИЯУ МИФИ. Призер Олимпиады "Ломоносов" по Космонавтике.',
    price: 200,
    category_id: 3,
  },
  {
    user_id: 7,
    title: 'Репетитор по английскому языку',
    text: 'Всем привет! Меня зовут Катя. Я даю частные уроки английского, как тет-а-тет, так и в группах, вот уже 12 лет.Преподаю в любом удобном формате: как онлайн, так и оффлайн. Возраст: от 10 до бесконечности :)Объясняю максимально доступно, так, что вы забудете фразу «Языки - это не моё». Первое пробное занятие - бесплатно!',
    price: 2000,
    category_id: 3,
  },
  {
    user_id: 8,
    title: 'Няня/срочный выезд',
    text: 'Добрый день, я студентка 3 курса Московского Государственного Областного Университета (бывш.МОПИ им.Крупской) факультета Специальной педагогики и психологии, направление: дошкольный дефектолог.Я пунктуальная, добрая, ответственная, коммуникабельная, спокойная и неконфликтная. С детьми легко нахожу общий язык. Нам не будет скучно! Мои хобби: рисование (на одежде или обычных листах), пение, готовка и часто прохожу вебинары по детям с ОВЗ. ',
    price: 1000,
    category_id: 3,
  },
  {
    user_id: 9,
    title: 'Няня',
    text: 'Услуги няни от 1-го часа.Меня зовут Анастасия, образование- психолого-педагогический факультет 3 курс высшего учебного заведения, работала вожатой в лагере.Куда бы не пришла детки всегда ко мне тянутся, чувствуют мою любовь к ним.Мне доставляет удовольствие с ними находиться))(Покормить, погулять, поиграть, отвести или забрать из садика или школы и т.д.). Так же рассмотрю варианты на целый день несколько раз в неделюКвалифицированный воспитатель,стаж 10 лет ',
    price: 800,
    category_id: 3,
  },
  {
    user_id: 10,
    title: 'Уборка квартир',
    text: '✅Частный Kлинep✅Убиpаюсь как для себя! Убopкa любoй слoжнoсти и oбъемoв. Oпыт paбoты 9 лет. Не делaю нaценoк. Paбoтаю пo всему гopoду, пpиезжaю быстpo. Убиpaюсь сaмa и с пoмoщницaми. С сoбoй вся химия и oбopудoвание для убopки. Сейчас свoбoднa.',
    price: 600,
    category_id: 4,
  },
  {
    user_id: 11,
    title: 'Вывоз мусора',
    text: 'Предоставляем услуги по вывозу строительного мусора, старой мебели и прочего хлама.',
    price: 1000,
    category_id: 4,
  },
  {
    user_id: 12,
    title: 'Маникюр',
    text: 'Делаю маникюр и наращивание за пожертвование или за материалы, обсуждается индивидуально',
    price: 3500,
    category_id: 5,
  },
  {
    user_id: 13,
    title: 'Волосы',
    text: 'Дорогие мои девчонки)) я мастер по наращиванию волос! Приятно удивлю вас ценами и результатом, подскажу где купить волосы и как ухаживать за ними. Принимаю дома, хорошая обстановка)) чай, кофе 😉 по желанию). Работаю с 2004г, имею сертификат! Капсулы от супер микро до стандарта. Перекрываю каре и наращиваю на челку ! Есть волосы любой длины !Есть волос в наличие чёрного цвета 60 см 250 капсул цена за работу и волос 12т !Другие цвета волос выкупаю только по предоплате !',
    price: 12000,
    category_id: 5,
  },
  {
    user_id: 14,
    title: 'Ресницы',
    text: 'Приветствую всех на моей странице, меня зовут Валерия занимаюсь я наращивание 8 лет. Имею большой опыт .Время наращивания занимает 2 часа.',
    price: 2500,
    category_id: 5,
  },
  {
    user_id: 15,
    title: 'Ремонт стиральных машин',
    text: 'Выполню кaчeственный и недоpогoй ремонт стиральных машин у вас дoма! Oпыт в cфepe peмонта cтиpaльныx мaшин бoлeе 10 лeт. Пeрeдвигaюcь нa личном aвтoмобилe, пpиeду в любой район Москвы или пригород. C пocредникaми нe рабoтаю. Ремонт стиральных машин любой сложности. Если у Вас есть какие-либо вопросы, лучше звоните сразу, дам беспалатную консультацию.',
    price: 1500,
    category_id: 2,
  },
  {
    user_id: 16,
    title: 'Электрик, ремонт электрики срочный',
    text: 'Электрик, ремонт электрики срочный ,ремонт.Наш мастер уже подготовлен к решению вашей проблемы.Выезд инженера в течение 1 часа после звонка.Ремонт осуществляется при ПЕРВОМ ВЫЕЗДЕ.Гарантия на все наши услуги до 1 года',
    price: 1700,
    category_id: 2,
  },
  {
    user_id: 17,
    title: 'Реставрация ванн акрилом и литьевым мрамором',
    text: 'Реставрация ванн, раковин, душевых поддонов высококачественным жидким акрилом и литьевым мрамором премиум класса.Стоимость реставрации окончательная без увеличения после оформления заказа. Стоимость зависит от размеров и других факторов, поэтому при оформлении заказа уточняйте полную стоимость работ по реставрации.Работы выполняются без демонтажа ванны.За 2 часа ваша ванна заблестит как новая.',
    price: 3000,
    category_id: 2,
  },
  {
    user_id: 4,
    title: 'Передержка животных',
    text: 'Приму мелких животных на передержку💗🦋Грызуны,рыбки,собачки,кошечки💟Могу прийти помочь посидеть/выгулить вашего питомца',
    price: 2000,
    category_id: 1,
  },
  {
    user_id: 2,
    title: 'Выгульщик собак',
    text: 'Люблю всех собак! Каждое домашнее животное -это маленькое чудо семьи!) к сожалению, не у всех есть время на бытовые вещи связанные с животными, я всегда готова помочь!!!',
    price: 1000,
    category_id: 1,
  },

];

async function addBenifitServices(obj) {
  try {
    await Benifit.create({
      text: obj.text,
      user_id: obj.user_id,
      title: obj.title,
      price: obj.price,
      category_id: obj.category_id,
    });
    
  } catch (error) {
    console.log(err);
  }
}

// services.map((el) => addBenifitServices(el));
