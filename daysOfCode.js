document.addEventListener('DOMContentLoaded', () => { 
    
    var dateInput = document.getElementById('dateInput').value;
    //var dateEntered = new Date(dateInput);

    const calculate = document.getElementById('calculate');


    console.log(dateInput);



    calculate.addEventListener ('click', (e) => {
        alert("You'll finish the 100 days of code challenge the");
    });

});





    /*
    window.onload = function(){
    function getDate() {
        var month_name = new Array('January', 'February', 'March',
            'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December');
        var date = new Date();
        var curr_month = date.getMonth();
        var curr_year = date.getFullYear();
        var input = document.getElementById('dateInput');
        dateEntered.value = month_name[curr_month] + "," + curr_year;
        console.log(input.value);
    }
    }*/
