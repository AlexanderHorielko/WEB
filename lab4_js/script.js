function dateOutput(date, elem) {
    let optionsDate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let optionsDay = {
        weekday: 'long'
    };
    let optionsTime = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    let currentDate = date.toLocaleString('uk', optionsDate);
    currentDate = 'Дата: ' + currentDate.replace("р.", 'року') + '<br>';
    currentDate += 'День тижня: ' + date.toLocaleString('uk', optionsDay) + '<br>';
    currentDate += 'Час: ' + date.toLocaleString('uk', optionsTime) + '<br>';

    elem.innerHTML = currentDate;
}
function isValidDate(date) {
    return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}


function currentDate() {
    let date = new Date();
    let optionsDate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let optionsDay = {
        weekday: 'long'
    };
    let optionsTime = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    let currentDate = date.toLocaleString('uk', optionsDate);
    currentDate = 'Дата: ' + currentDate.replace("р.", 'року') + '<br>';
    currentDate += 'День тижня: ' + date.toLocaleString('uk', optionsDay) + '<br>';
    currentDate += 'Час: ' + date.toLocaleString('uk', optionsTime) + '<br>';

    let elem = document.getElementById('currentDateTd');
    elem.innerHTML = currentDate;
}
function dayOfWeek(date){
    if(isValidDate){
        let output = document.getElementById('dayOfWeekTd');
        let optionsDay = {
            weekday: 'long'
        };
        let currentDayOfWeek = 'Номер дня: ' + date.getDay() + '<br>';
        if (currentDayOfWeek === 0){
            currentDayOfWeek = 7;
        }
        currentDayOfWeek += 'Назва дня: ' + date.toLocaleString('uk', optionsDay) + '<br>';

        output.innerHTML = currentDayOfWeek;
    }
}
function pastDate() {
    let n = document.getElementById('pastDateInput').value;

    let pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - n);

    dateOutput(pastDate, document.getElementById('pastDateTd'))
}
function lastDayOfMonth() {
    let year = document.getElementById('ldomYear').value;
    let month = document.getElementById('ldomMonth').value;
    let elem = document.getElementById('lastDayOfMonthTd');

    if (year === '' || month === '') {
        elem.innerHTML = '';
        return;
    }
    elem.innerHTML = 'Кількість днів: ' + new Date(year, month, 0).getDate();
}
function leftPassedSeconds() {
    let date = new Date();
    let secondsPassed = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    let secondsLeft = 86400 - secondsPassed;


    let elem = document.getElementById('leftPassedSecondsTd');
    elem.innerHTML = 'Секунд пройшло: ' + secondsPassed + '<br>' + 'Секунд залишилося: ' + secondsLeft;
}
function formatDate() {
    let date = document.getElementById('formattingDate').valueAsDate;

    let optionsDate = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };

    let parsedDate = 'Дата: ' + date.toLocaleString('uk', optionsDate);
    let elem = document.getElementById('formatDateTd');
    elem.innerHTML = parsedDate;
}
function datesDifference() {
    let date1 = document.getElementById('dateDifference1').valueAsDate;
    let date2 = document.getElementById('dateDifference2').valueAsDate;
    let elem = document.getElementById('datesDifferenceTd');

    date1 = new Date(date1);
    date2 = new Date(date2);


    let differenceMs = Math.abs( date1 - date2);
    let differenceDays = Math.floor(differenceMs / 1000 / 86400);

    elem.innerHTML = 'Різниця(дні): ' + differenceDays;
}
function formatDateByTime() {
    let date = document.getElementById('formattingDateByTime').valueAsDate;
    // let date = new Date(2020,1,25,22,30,0);
    let differenceMs = new Date() - date;
    let elem = document.getElementById('formatDateByTimeTd');

    if(differenceMs > 1 && differenceMs < 1e3){
        elem.innerHTML = 'тільки що';
    }else if(differenceMs > 999 && differenceMs < 6e4){
        differenceMs = Math.floor(differenceMs / 1000);
        elem.innerHTML = `${differenceMs} сек. назад`;
    }else if(differenceMs > 6e4 - 1 && differenceMs < 36e5){
        differenceMs = Math.floor(differenceMs / 1000 / 60);
        elem.innerHTML = `${differenceMs} хв. назад`;
    }
    else{
        let optionsDate = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        };
        elem.innerHTML = 'Дата: ' + date.toLocaleString('uk', optionsDate).replace(',', ' ');
    }

}
function parseDate() {
    let elem = document.getElementById('parseDateTd');
    let inputDate = document.getElementById('inputDate');

    let regexp = /\d{2}([\/.\-])\d{2}\1\d{4}/;
    let parsingDate = inputDate.value.match(regexp);

    if (parsingDate ){
        let splittedDate = parsingDate[0].split(parsingDate[1]);

        let date = new Date(+splittedDate[2], +splittedDate[1] - 1, +splittedDate[0]);
        dateOutput(date,elem);
    }else{
        elem.innerHTML = 'Невірний формат дати';
    }

}
function outputDateByLanguage() {
    let elem = document.getElementById('outputDateByLanguageTd');
    let selectLanguage = document.getElementById('languages');

    let language = selectLanguage.options[selectLanguage.selectedIndex].value;
    let date = new Date();
    let options = {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    if (language === 'uk'){
        elem.innerHTML = date.toLocaleString("uk", options);
    } else if(language === 'ru'){
        elem.innerHTML = date.toLocaleString("ru", options);
    } else {
        elem.innerHTML = date.toLocaleString("en", options);
    }
}