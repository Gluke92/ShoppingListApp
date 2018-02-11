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
  },

    //check and uncheck by clicking
    //if click, toggle class from css

    $('.').on('click', event => {
       const itemID = $(this).currentTarget;
       $('ul')
    })
},

    //delete item
    //1. listen for click on delete,
    //2. use remove to remove list item associated with the element

    $('').on('click', event => {

    })
    
  });
});