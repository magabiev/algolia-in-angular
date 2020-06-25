import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlgoliaService {
  header = [
    {
      id: 1,
      header: 'Чем мы можем вам помочь?',
    }
  ];
  searchMenu = [
    { id:'все', name: 'все', active: false },
    { id:'вебсайт', name: 'вебсайт', active: false },
    { id:'ресурсы', name: 'ресурсы', active: false },
    { id:'блог', name: 'блог', active: false },
    { id: 'документы', name: 'документы', active: false }

  ];
  category = [
    { id:'Поиск-сайта', name: 'Поиск сайта', active: false },
    { id:'Поиск-api',name: 'Поиск API', active: false },
    { id:'Персонализация', name: 'Персонализация', active: false },
    { id:'Аналитика', name: 'Аналитика', active: false },
    { id:'Быстрый-поиск', name: 'Быстрый поиск', active: false },
    { id:'Клиенты', name: 'Клиенты', active: false },
    { id:'Ценообразование', name: 'Ценообразование', active: false },
    { id:'мобильный поиск', name: 'Мобильный поиск', active: false },
    { id:'э-коммерция', name: 'Э-коммерция', active: false }
  ];
  logo = [
    { id:'site-search',
      link: 'https://res.cloudinary.com/hilnmyskv/image/upload/q_auto/v1590760208/Algolia_com_Website_assets/images/search/search-by-algolia.svg'
    }
  ];
  placeHolder = [
    'Введите поисковый запрос...'
  ];
  blockHeader = [
    {
      id: 1,
      header: 'Блог',
      results: 138,
      link: 'показать блог',
      pageActive: 1,
      resultPages: 12,
    }
  ];
  blocks = [

    {
      id: 1,
      img:'https://blog-api.algolia.com/wp-content/uploads/2020/04/BlogPost_Site_Search_API_How_They_Work_Together-720x400.jpg',
      header: `<span>Поиск</span> по сайту и <span>APIs</span>: Как они работают вместе`,
      text: `… написать. &nbsp; Как APIs интерфейсы поиска` +
        ` обеспечивают мощные возможности <span>поиска</span> а  <span>поисковые APIs</span>` +
        ` интерфейсы являются наиболее простым способом интеграции современного <span>поиска</span> …`,
      authorAvatar: 'https://secure.gravatar.com/avatar/ab5610fa71cfc5a9cfb78865ca64621b?s=96&d=mm&r=g',
      authorName:'Бенуа Перро',
      authorAction: 'Директор по проектированию'
    },
    {
      id: 2,
      img:'https://blog-api.algolia.com/wp-content/uploads/2020/04/2020-04_what-to-look-for-in-a-search-API-720x400.jpg',
      header: `Что искать в <span>API поиска</span>`,
      text: `… искать конфигурации и использовать аналитику, чтобы определить успех.
       Безупречная интеграция <span>поиска</span> с поисковыми <span>API</span>…`,
      authorAvatar: 'https://secure.gravatar.com/avatar/ab5610fa71cfc5a9cfb78865ca64621b?s=96&d=mm&r=g',
      authorName:'Бенуа Перро',
      authorAction: 'Директор по проектированию'
    },
    {
      id: 3,
      img:'https://blog-api.algolia.com/wp-content/uploads/2015/06/ssd-cheese.png',
      header: 'Когда твердотельные накопители не такие твердые',
      text: `Это было похоже на другую страницу посреди ночи. Один из серверов нашего <span>поискового API</span> …`,
      authorAvatar: 'https://secure.gravatar.com/avatar/0d23f348c8416b65e5acf54cd52edf57?s=96&d=mm&r=g',
      authorName:'Адам Сурак',
      authorAction: 'Директор по инфраструктуре и безопасности'
    },
    {
      id: 4,
      img:'https://blog-api.algolia.com/wp-content/uploads/2014/03/latency.png',
      header: `Новые клиенты <span>API поиска</span> Java & Android как услуга на DroidCon Paris!`,
      text: `Наше предложение «Поиск как услуга» приближается к официальному выпуску.
             Мы запустили наш <span>поиск</span> по Java и AndroidAPI…`,
      authorAvatar: 'https://secure.gravatar.com/avatar/25760a5d4e793e491f26da5db64bb738?s=96&d=mm&r=g',
      authorName:'Жюльен Лемуан',
      authorAction: 'Соучредитель & CTO в Algolia'
    },
    {
      id: 5,
      img:'https://blog-api.algolia.com/wp-content/uploads/2019/04/Blogpost-Loadbalancer-KB-4.18.19-720x400.png',
      header: `Один год балансировки нагрузки`,
      text: `… разместить любую инфраструктуру балансировки нагрузки между
               нашими пользователями и нашими серверами <span>API поиска</span>. Мы сделали этот
               выбор, чтобы сохранить вещи …`,
      authorAvatar: 'https://secure.gravatar.com/avatar/003a44a43bf820edb4d6a1cc2a8ee96c?s=96&d=mm&r=g',
      authorName:'Пол Берто',
      authorAction: 'Старший инженер по надежности сайта'
    },
    {
      id: 6,
      img:'https://blog-api.algolia.com/wp-content/uploads/2015/11/illus.png',
      header: `Объявление InstantSearch.js: все, что вам нужно для отличного <span>поиска</span> в одной библиотеке`,
      text: `… создать лучший опыт мгновенного <span>поиска</span> с помощью размещенного в Algolia
               <span>API поиска</span>. Так как же эта библиотека меняет <span>поиск</span>? наш …`,
      authorAvatar: 'https://secure.gravatar.com/avatar/9b5b54cd240a4e451639d3185ed8045d?s=96&d=mm&r=g',
      authorName:'Александр Станиславский',
    },
    {
      id: 7,
      img:'https://blog-api.algolia.com/wp-content/uploads/2015/10/Untitled-design.png',
      header: `OneSignal создает хакерские новости с небольшой помощью Алголии`,
      text: `… расскажем, как они использовали Algolia's Hacker News <span>Search API</span> для
                создания демонстрации своей платформы уведомлений …`,
      authorAvatar: 'https://secure.gravatar.com/avatar/37e607f71b47cc1e06a61e51d9cf5770?s=96&d=mm&r=g',
      authorName:'Гийом Дюморье',
    },
    {
      id: 8,
      img:'https://blog-api.algolia.com/wp-content/uploads/2017/06/15994409_935842486546596_8761301610453709536_o.png',
      header: `Сборка для разработчиков - обзор новых функций и ресурсов в 2017 году`,
      text: `… начал. Миллисекунды имеют значение, так что поехали! Новые функции <span>API Поиск</span>
               значений фасетов В марте мы объявили о <span>поиске</span> …`,
      authorAvatar: 'https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=96&d=mm&r=g',
      authorName:'Джош Дзиелак',
    },
    {
      id: 9,
      img:'https://blog-api.algolia.com/wp-content/uploads/2015/01/hn-blog.png',
      header: `Новая экспериментальная версия Hacker News <span>Search</span>, созданная с помощью Algoli`,
      text: `… для hn.algolia.com мы также предоставляем API <span>поиска</span> HN: многие из вас использовали его для …`,
      authorAvatar: 'https://secure.gravatar.com/avatar/e94df49f046da9bdb0c1006f72d570c2?s=96&d=mm&r=g',
      authorName:'Кевин',
    },
    {
      id: 10,
      img:'https://blog-api.algolia.com/wp-content/uploads/2019/02/2019-01_Migrating-Heroku-GKE-720x400.png',
      header: 'Он бросает вызов миграции с Heroku на Google Kubernetes Engine',
      text: `… загружать свои данные в поисковый индекс, используя API <span>поиска</span> Algolia.
                Несколько потенциальных клиентов спросили, можем ли мы заполнить …`,
      authorAvatar: 'https://secure.gravatar.com/avatar/0ada20c283f0ef471356c564d0336856?s=96&d=mm&r=g',
      authorName:'Адриен Джоли',
      authorAction: 'Старший инженер-программист'
    },
    {
      id: 11,
      img:'https://blog-api.algolia.com/wp-content/uploads/2014/05/jsonp.png',
      header: `Почему JSONP все еще является обязательным`,
      text: `… бэкэнд <span>поиска</span> , который отвечает в течение нескольких миллисекунд
                через API, который обрабатывает безопасность при вызове из браузера. Пересекать …`,
      authorAvatar: 'https://secure.gravatar.com/avatar/25760a5d4e793e491f26da5db64bb738?s=96&d=mm&r=g',
      authorName:'Жюльен Лемуан',
      authorAction: 'Соучредитель & CTO в Algolia'
    },
    {
      id: 12,
      img:'https://blog-api.algolia.com/wp-content/uploads/2018/09/08-2018_From-GSA-to-Algolia-01-720x400.png',
      header: `Переход от GSA в Algolia`,
      text: `… Начнем с немного о нас. Algolia - это <span>поисковый</span> API, который
               предоставляет разработчикам полный инструментарий для построения <span>поиска</span>. …`,
      authorAvatar: 'https://secure.gravatar.com/avatar/fc1cfea7486378aec9b576a1511d5209?s=96&d=mm&r=g',
      authorName:'Эллиот Глюк',
      authorAction: 'Менеджер по маркетингу продуктов'
    },
  ];


  constructor() { }
}
