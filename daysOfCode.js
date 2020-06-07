document.addEventListener('DOMContentLoaded', () => {     
    var dateInput = document.getElementById('dateInput');
    var futureDate = new Date();
    const calculate = document.getElementById('calculate');
    var dateCorrectFormat = new Date();



    // return date with correct ordinal
    function dateOrdinal(d) {
        if (d == 31 || d == 21 || d == 1) return d + "st";
        else if (d == 22 || d == 2) return d + "nd";
        else if (d == 23 || d == 3) return d + "rd";
        else return d + "th";
    };

    // format the date
    function formatDate (dateToFormat) {

        // /!\ getDay get you the day of the week between 0 and 6 when getDate get you the day of the month between 1 and 31
        var day = dateOrdinal(dateToFormat.getDate()); // day
        var month = dateToFormat.getMonth(); // month (in integer 0-11)
        var year = dateToFormat.getFullYear(); // year
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        dateCorrectFormat = day + " " + months[month] + " " + year;
    };

    // add x day(s) to the informed date
    function addDays(date, days) {
        // create a date by passing a date-string into new Date : YYYY-MM-DD
        const futureDate = new Date(Number(date));
        futureDate.setDate(date.getDate() + days);

        formatDate(futureDate);

        return dateCorrectFormat;
    }



    calculate.addEventListener ('click', (e) => {
        if (dateInput.value){
            var dateValue = new Date(dateInput.value);
            alert("You are going to end the 100 days of code challenge the " + addDays(dateValue, 100));
        } else {
            alert("You need to inform your starting date first")
        }
    });

});