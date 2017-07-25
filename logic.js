
        function startResume() {
            document.getElementById('minusBT').disabled = true;
            document.getElementById('plusBT').disabled = true;
            document.getElementById('minusP').disabled = true;
            document.getElementById('plusP').disabled = true;
            var htmlval = document.getElementById('startResume').innerHTML;
            if (htmlval == 'Start') {
                document.getElementById('startResume').innerHTML = 'Pause';
                countDownPomodoro();
               
            }
            else if (htmlval == 'Pause') {
                document.getElementById('startResume').innerHTML = 'Resume';
            }
            else if (htmlval == 'Resume') {
                document.getElementById('startResume').innerHTML = 'Pause';
            }
        }
        function countDownPomodoro() {
            var secsPomodoro = 59;
            
            var minsPomodoro = Number(document.getElementById("pomodoroTime").innerHTML) - 1;
            
             var counterPomodoro = setInterval(cleanSlatePomodoro, 1000);
             function cleanSlatePomodoro() {
                 
                 document.getElementById("timer").innerHTML = minsPomodoro + ":" + secsPomodoro;
                     secsPomodoro--;
                     document.getElementById("timer").style.borderColor = "Green";
                     document.getElementById("timer").style.borderStyle = "solid";
                     document.getElementById("timer").style.color = "Green";
                     document.getElementById("label").innerHTML = "Pomodoro Session !!";
                     document.getElementById("label").style.color = "Green";
                     document.getElementById("label").style.textShadow = '2px 2px 2px gray';
                     if (secsPomodoro <= 0 && minsPomodoro !== 0) {
                         secsPomodoro = 59;
                         minsPomodoro = minsPomodoro - 1;
                     }
                     else if (secsPomodoro <= 0 && minsPomodoro === 0) {
                         clearInterval(counterPomodoro);
                         beep();
                         countDownBreak();
                     }
                 }
                 //here addded this code for pause untill here
            
          
        }
        function pauseResume() {
            while (document.getElementById('startResume').innerHTML === "Resume") {
                var counterPause = setInterval(pausedPomodoro, 1000);
                var flag = 1;
                function pausedPomodoro() {
                    document.getElementById("label").innerHTML = "Paused";
                    document.getElementById("label").style.color = "Violet";
                }
            }
              
            return counterPause;
              
               
        }
        function countDownBreak() {
            var secsBreak = 59;
          
            var minsBreak = Number(document.getElementById("breakTime").innerHTML) - 1;
            var counterBreak = setInterval(cleanSlateBreak, 1000);
            function cleanSlateBreak() {
               
                document.getElementById("timer").innerHTML = minsBreak + ":" + secsBreak;
                secsBreak--;
                document.getElementById("timer").style.borderColor = "Orange";
                document.getElementById("timer").style.borderStyle = "solid";
                document.getElementById("timer").style.color = "Red";
                document.getElementById("label").innerHTML = "Break Time !!";
                document.getElementById("label").style.color = "Red";
                document.getElementById("label").style.textShadow = '2px 2px 2px gray';
                if (secsBreak <= 0 && minsBreak !== 0) {
                    secsBreak = 59;
                    minsBreak = minsBreak - 1;
                }
                else if (secsBreak <= 0 && minsBreak === 0) {
                    clearInterval(counterBreak);
                    beep();
                    thanks();
                   
                }
            }
        }
        
        function beep() {
            var audio = new Audio('http://soundbible.com/grab.php?id=1377&type=mp3');
            audio.play();
        }
        function thanks() {
            document.getElementById("label").innerHTML = "Pomodoro session is over. Thank You :) ";
            document.getElementById("label").style.color = "White";
            document.getElementById("timer").innerHTML = "-- : --";
            document.getElementById("timer").style.borderColor = "white";
            document.getElementById("timer").style.borderStyle = "solid";
            document.getElementById("timer").style.color = "white";
            document.getElementById('startResume').innerHTML = "Start";
        }
        function reset() {
            window.location.reload(false);
          
        }
        function minusBT() {
            //  val = val.toString();
            var btVal = Number(
                document.getElementById("breakTime").innerHTML);
            if (btVal >= 2) {
                btVal = btVal - 1;
            }
            document.getElementById("breakTime").innerHTML = btVal;
        }
        function minusP() {
            var btVal = Number(
                document.getElementById('pomodoroTime').innerHTML);
            if (btVal >= 2) {
                btVal = btVal - 1;
            }
            document.getElementById('pomodoroTime').innerHTML = btVal;
        }
        function plusBT() {
            var btVal = Number(
                document.getElementById('breakTime').innerHTML);
            if (btVal <= 59) {
                btVal = btVal + 1;
            }
            document.getElementById('breakTime').innerHTML = btVal;
        }
        function plusP() {
            var btVal = Number(
                document.getElementById('pomodoroTime').innerHTML);
            if (btVal <= 59) {
                btVal = btVal + 1;
            }
            document.getElementById('pomodoroTime').innerHTML = btVal;
        }
