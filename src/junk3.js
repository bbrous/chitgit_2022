
<script>
    function getTheDays() {

        // THE DATE OBJECT.
        var dt = new Date(document.getElementById('theDate').value);

        // GET THE MONTH AND YEAR OF THE SELECTED DATE.
        var month = dt.getMonth(),
            year = dt.getFullYear();

        // GET THE FIRST AND LAST DATE OF THE MONTH.
        var FirstDay = new Date(year, month, 1);
        var LastDay = new Date(year, month + 1, 0);

        // FINALLY, GET THE DAY.
        var weekday = new Array();
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        if (typeof weekday[FirstDay.getDay()] != 'undefined') {     // CHECK FOR 'undefined'.
            document.getElementById('fday').innerHTML = weekday[FirstDay.getDay()] +
                ' (' + FirstDay.toDateString('dd/mon/yyyy') + ')';
            document.getElementById('lday').innerHTML = weekday[LastDay.getDay()] +
                ' (' + LastDay.toDateString('dd/mon/yyyy') + ')'; ;
        }
        else {
            document.getElementById('fday').innerHTML = '';
            document.getElementById('lday').innerHTML = '';
        }
    }
</script>