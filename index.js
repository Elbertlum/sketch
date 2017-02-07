var width = 960;

$(document).ready(function() {
  createGrid(16);
});

function createGrid (dim) {
  var count = 0;
  var cellWidth = Math.floor(width / dim);
  while (count < dim) {
    $('div.container').append('<tr></tr>');
    count ++;
  };
  $('tr').each(function() {
    count = 0;
    while (count < dim) {
      $(this).append('<td><div class="cell"></div></td>');
      count ++;
    }
  });
  $('.cell').height(cellWidth).width(cellWidth);
};

function clearGrid () {
  $('div.container').empty();
};

function createNewGrid () {
  clearGrid();
  var newSize = window.prompt("How many squares per side?");
  createGrid(newSize);
};

$(document).on('mouseenter', '.cell', function() {
  if ($(this).hasClass('entered') === false) {
    $(this).css('background-color', randomRGB());
    $(this).addClass('entered')
  }
});

function randomRGB () {
  var r = Math.floor(Math.random() * 256).toString();
  var g = Math.floor(Math.random() * 256).toString();
  var b = Math.floor(Math.random() * 256).toString();
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}