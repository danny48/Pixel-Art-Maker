//is called in html code and creates the grid to users desire
function makeGrid() {
    clearTable();
    //gets values from the input boxes and stores them in a variable
    var column = document.getElementById('inputHeight').value;
    var row = document.getElementById('inputWidth').value;

    //uses the values obtained from column and loops it until the desired height is reached
    for (var c = 0; c < parseInt(column); c++) {
        var x = document.getElementById('pixelCanvas').insertRow(c);
        //uses the value from the width and loops it until the desired width is reached
        for (var r = 0; r < parseInt(row); r++) {
            var y = x.insertCell(r);
        }
    }

    //function uses an event listener to fill in a square of the grid when clicked
    document.querySelector("#pixelCanvas").addEventListener("click", function(event) {
        var td = event.target;
        while (td !== this && !td.matches("td")) {
            td = td.parentNode;
        }
        if (td === this) {
            console.log("No table cell found");
        } else {
            //code that fills in the square
            td.style.backgroundColor = document.getElementById('colorPicker').value;
        }
    });

}


//function clears the table by deleting the rows and the columns in them
function clearTable() {
    for (var i = document.getElementById("pixelCanvas").rows.length; i > 0; i--) {
        document.getElementById("pixelCanvas").deleteRow(i - 1);
    }

}
