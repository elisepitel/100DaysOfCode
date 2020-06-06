document.addEventListener('DOMContentLoaded', () => { 
    
    var dateInput = document.getElementById('dateInput');
    var futureDate = new Date();
    const calculate = document.getElementById('calculate');

    function addDays(date, days) {
        futureDate.setDate(futureDate.getDate() + days);
        return futureDate;
    }

    calculate.addEventListener ('click', (e) => {
        if (dateInput.value){
            addDays(dateInput.value, 100);
            alert("You are going to start the " + futureDate);
        } else {
            alert("You need to inform your starting date first")
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
    });
  
    }*/
