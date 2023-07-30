// import { Pagination } from 'tui-pagination';

// const Pagination = require('tui-pagination');

// const container = document.querySelector('page');
// const myPagination = new Pagination(container, {
//   // Total number of items
//   totalItems: 30,
//   // Items per page
//   itemsPerPage: 18,
//   // Visible pages
//   visiblePages: 7,
//   // Current page
//   page: 1,
//   // center aligned
//   centerAlign: true,
//   // default classes
//   firstItemClassName: 'tui-first-child',
//   lastItemClassName: 'tui-last-child',
//   // enable usage statistics
//   usageStatistics: true,
// });

import { Pagination } from 'tui-pagination';
// Pobierz elementy DOM

const paginationList = document.getElementById('paginationList');
const page = document.querySelector('.page');

// Imitacja danych, które mogą pochodzić z serwera
const totalCount = 30;
const itemsPerPage = 18;
const totalPage = Math.ceil(totalCount / itemsPerPage);

// Opcje dla paginacji
const options = {
  totalItems: totalCount,
  itemsPerPage: itemsPerPage,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<li class="tui-page-btn">{{page}}</li>',
    currentPage: '<li class="tui-page-btn tui-is-selected">{{page}}</li>',
    moveButton: '<li class="tui-page-btn tui-{{type}}">{{type}}</li>',
    disabledMoveButton: '<li class="tui-page-btn tui-is-disabled tui-{{type}}">{{type}}</li>',
  },
};

// Inicjalizacja paginacji
const pagination = new tui.Pagination(paginationList, options);

// Obsługa zmiany strony
pagination.on('afterMove', eventData => {
  'Aktualna strona:', eventData.page;
});
// Tutaj możesz wykonać żądanie do serwera, aby pobrać odpowiednie dane dla danej strony

createPagination(20);
