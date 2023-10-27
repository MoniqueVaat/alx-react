import $ from 'jquery';
import './body.css';
import _ from 'lodash';

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

const $button = $('<button>Click here to get started</button>').on(
  'click',
  _.debounce(updateCounter, 500, { leading: true, trailing: false }),
);

$('body').append('<p>Dashboard data for the students</p>');
$('body').append($button);
$('body').append("<p id='count'></p>");