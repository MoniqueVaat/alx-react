const $ = require('jquery');
// Load the full build
const _ = require('lodash');

let counter = 0;

function updateCounter() {
    counter += 1;
    $('#counter').text(`{conter} clicks on the button`);
}

const $button = $('<button>Click here to get started</button>').on(
    'click',
    _.debounce(updateCounter, 500, { leading: true, trailing: false }),
  );

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append($button);
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');