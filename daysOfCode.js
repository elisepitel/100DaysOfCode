document.addEventListener('DOMContentLoaded', () => { 
    
    var dateInput = document.getElementById('dateInput');
    //var dateEntered = new Date(dateInput);

    const calculate = document.getElementById('calculate');

    calculate.addEventListener ('click', (e) => {
        if (dateInput.value){
            alert("You are going to start the " + dateInput.value);
        }
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
        dateInput.addEventListener ('click', (e) => {
        if (dateInput.value){
            console.log(dateInput.value);
        }
    });
  
    }*/
