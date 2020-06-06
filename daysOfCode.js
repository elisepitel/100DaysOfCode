document.addEventListener('DOMContentLoaded', () => {     
    var dateInput = document.getElementById('dateInput');
    var futureDateFormat = new Date();
    const calculate = document.getElementById('calculate');

    // return date with correct ordinal
    function dateOrdinal(d) {
        if (d == 31 || d == 21 || d == 1) return d + "st";
        else if (d == 22 || d == 2) return d + "nd";
        else if (d == 23 || d == 3) return d + "rd";
        else return d + "th";
    };

    // add x day(s) to the informed date
    function addDays(date, days) {
        var futureDate = new Date();

        futureDate.setDate(futureDate.getDate() + days);

        //format the date 
        var day = dateOrdinal(futureDate.getDay()); // day
        var month = futureDate.getMonth(); // month (in integer 0-11)
        var year = futureDate.getFullYear(); // year
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        futureDateFormat = day + " " + months[month] + " " + year;

        return futureDateFormat;
    }
    //test

    calculate.addEventListener ('click', (e) => {
        if (dateInput.value){
            addDays(dateInput.value, 100);
            alert("You are going to end the 100 days of code challenge the " + futureDateFormat);
        } else {
            alert("You need to inform your starting date first")
        }
    });

});