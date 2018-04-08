// Select color input
// Select size input
var gridHeight, gridWidth, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    gridHeight = $('#inputHeight').val();
    gridWidth = $('#inputWidth').val();
    makeGrid(gridHeight, gridWidth);
});

//when eraser is clicked, remove all color from grid
$('#eraser').click(function eraseColor() {
    $('td').removeAttr('style');
});

function makeGrid(height, width) {
    //clears grid every time makeGrid is called
    $('tr').remove();

    //creates a grid based on values in the form
    for(var row = 1; row <= height; row++) {
        $('#pixelCanvas').append('<tr id=row' + row + '></tr>');
        for(var col = 1; col <= width; col++) {
            $('#row' + row).append('<td id=cell' + col + '></td>');
        }
    }

    //add color to cells by clicking and dragging
    isMouseDown = false;
    $('td').mousedown(function() {
        color = $('#colorPicker').val(); 
        isMouseDown = true;   
    }).mousemove(function () { // allows for click+drag to color cells(dependent on the mousedown state)
        if(isMouseDown) {
            $(this).attr('style', 'background-color:' + color);
        }
    }).mouseup(function() { //allows for clicking to color cells
        isMouseDown = false;
        $(this).attr('style', 'background-color:' + color);
    });

    //ensures that cursor doesn't continue to draw if you click outside of the grid
    $(document).mouseup(function () {
        isMouseDown = false;
    });

}
