'use strict';

$(function(){

  //listens for values, appends template string using value captured
  //from input
  $('#js-shopping-list-form').on('submit', event => {
    event.preventDefault();
    const newItem = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    console.log(newItem);
    $('ul').append(`<li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`);
  });

  //check and uncheck by clicking
  //if click, toggle class from css

  $('ul').on('click', '.shopping-item-toggle',
    event => {
      const theTarget = $(event.target);
      console.log(theTarget);
      $(theTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

  /* why doesn't the CSS render rightly here? */

  //delete item
  //1. listen for click on delete,
  //2. use remove to remove list item associated with the element

  $('ul').on('click', '.shopping-item-delete', event => {
    const theTarget = $(event.target);
    $(theTarget).closest('li').remove();
  });
});