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

$(document).on('mouseenter', '.cell', function() {
  if ($(this).css('background-color') !== 'rgb(0, 0, 0)') {
    $(this).css('background-color', 'black');
  }
});