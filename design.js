function makeGrid() {
    clearTable();
    //gets values from the input boxes and stores them in a variable
    var rn = document.getElementById('inputWidth').value;
    var cn = document.getElementById('inputHeight').value;

     for(var r=0;r<parseInt(rn);r++)
      {
       var x=document.getElementById('pixelCanvas').insertRow(r);
       for(var c=0;c<parseInt(cn);c++)
        {
         var y=  x.insertCell(c);
        }
       }


       document.querySelector("#pixelCanvas").addEventListener("click", function(event) {
            var td = event.target;
            while (td !== this && !td.matches("td")) {
                td = td.parentNode;
            }
            if (td === this) {
                console.log("No table cell found");
            } else {
                td.style.backgroundColor = document.getElementById('colorPicker').value;
            }
          });

       }


//function clears the table by deleting the rows and the columns in them
    function clearTable() {
        for(var i = document.getElementById("pixelCanvas").rows.length; i > 0;i--)
        {
            document.getElementById("pixelCanvas").deleteRow(i -1);
        }

    }
