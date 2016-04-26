    CountDownTimer('07/10/2016 1:30 PM', 'countdown');

    function CountDownTimer(dt, id)
    {
        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {

                clearInterval(timer);
                document.getElementById(id).innerHTML = 'Nadszedł wielki dzień!!';

                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            if (days == 1) {
                document.getElementById(id).innerHTML = days + ' dzień  ';
            } else {
                document.getElementById(id).innerHTML = days + ' dni  ';
            }
            document.getElementById(id).innerHTML += hours + ' h  ';
            document.getElementById(id).innerHTML += minutes + ' min';
        }

        timer = setInterval(showRemaining, 1000);
    }
