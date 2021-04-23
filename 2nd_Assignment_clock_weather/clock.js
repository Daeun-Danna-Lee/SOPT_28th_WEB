const digitalTime = document.querySelector(".digital_time"),
    digitalButton = document.querySelector(".digital_button"),
    header = document.querySelector(".header"),
    analogHour = document.querySelector(".analog_hour"),
    analogMinute = document.querySelector(".analog_minute"),
    analogSecond = document.querySelector(".analog_second");

let hour24 = false;

const changeTime = () => {
    if (hour24) {
        hour24 = false;
    } else {
        hour24 = true;
        digitalButton.innerHTML = "24H";
    }
};

// 00 : 00의 형식을 맞추기 위해 한자리 수는 앞에 0을 채워주는 함수입니다
const fillZero = (num) => {
    num = num + ""; // 문자열로 변환
    // 한 자리 수면 앞에 0 붙이기
    if (num.length < 2) {
        return "0" + num;
    } else {
        return num;
    }
};

const getTime = () => {
    const now = new Date(); // 현재 시간 정보를 가지고 있는 객체입니다

    let hour = now.getHours(),
        month = now.getMonth(); // 시간, 월만 let으로 지정 & 0이 1월, 1이 2월입니다
    const minute = now.getMinutes(),
        second = now.getSeconds(),
        year = now.getFullYear(),
        day = now.getDate();

    const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    month = monthList[month];

    if (!hour24) {
        if (hour >= 0 && hour <= 11) {
            if (hour === 0) hour = 12;
            digitalButton.innerHTML = "AM";
        } else {
            if (hour >= 13) hour -= 12;
            digitalButton.innerHTML = "PM";
        }
    }

    return { year, month, day, hour, minute, second };
};

const drawClock = (hour, minute, second) => {
    // 시침의 각도를 계산합니다. 시침은 한 시간당 30도씩, 분당 0.5도씩 움직입니다
    // 90도를 더하는 이유는 바늘이 -90도로 누워있는 상태에서 시작하기 때문입니다 (css 참고)
    const hourDegree = (hour + minute / 60) * (360 / 12) + 90,
        minuteDegree = (minute + second / 60) * (360 / 60) + 90,
        secondDegree = second * (360 / 60) + 90;

    // css transform 속성 중 rotate를 다음과 같이 자바스크립트에서 사용할 수 있습니다
    analogHour.style.transform = `rotate(${hourDegree}deg)`;
    analogMinute.style.transform = `rotate(${minuteDegree}deg)`;
    analogSecond.style.transform = `rotate(${secondDegree}deg)`;
};

const drawTime = () => {
    const { year, month, day, hour, minute, second } = getTime();

    header.innerHTML = `Today is <span>${day} ${month}</span>, ${year}`;
    digitalTime.innerHTML = `${fillZero(hour)} : ${fillZero(minute)} : ${fillZero(
  second
)}`;

    drawClock(hour, minute, second);
};

const init = () => {
    setInterval(drawTime, 1000);
    digitalButton.addEventListener("click", changeTime);
};

init();