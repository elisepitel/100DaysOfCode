document.addEventListener('DOMContentLoaded', () => { 


    const form = document.getElementById('submitTask');

    const input = form.querySelector('input');


    function getDate() {
        var month_name = new Array('January', 'February', 'March',
            'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December');
        var date = new Date();
        var curr_month = date.getMonth();
        var curr_year = date.getFullYear();
        var input = document.getElementById('submitTask');
        input.value = month_name[curr_month] + "," + curr_year;
    }
    window.onload = function(){
        getDate();
    }

}