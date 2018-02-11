'use strict';

$(function(){
  $('.').on('submit', event => {
    event.preventDefault();
    const newItem = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    console.log(newItem);
  });
});

//make a new item with data submitted
//   function makeNewItem() {
//     $('ul').on('submit', event => {
//         $('ul').append(`<li>
//                 <span class="shopping-item">`${newItem}`</span>
//                 <div class="shopping-item-controls">
//                     <button class="shopping-item-toggle">
//                         <span class="button-label">check</span>
//                     </button>
//                     <button class="shopping-item-delete">
//                         <span class="button-label">delete</span>
//                     </button>
//                 </div>
//             </li>`));
    