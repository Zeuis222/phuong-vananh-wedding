const weddingDate =
new Date("2026-07-19T08:30:00");

function updateCountdown(){

```
const now = new Date();

const diff =
weddingDate - now;

if(diff <= 0){

    document.getElementById(
    "countdown"
    ).innerHTML =
    "💍 Hôm nay là ngày cưới!";

    return;
}

const days =
Math.floor(diff / 1000 / 60 / 60 / 24);

const hours =
Math.floor(
diff / 1000 / 60 / 60
) % 24;

const mins =
Math.floor(
diff / 1000 / 60
) % 60;

const secs =
Math.floor(
diff / 1000
) % 60;

document.getElementById(
"countdown"
).innerHTML =
`${days} ngày ${hours} giờ ${mins} phút ${secs} giây`;
```

}

setInterval(
updateCountdown,
1000
);

updateCountdown();

function copySTK(){

```
navigator.clipboard.writeText(
"1025206033"
);

alert(
"Đã sao chép số tài khoản!"
);
```

}

function createPetal(){

```
const petal =
document.createElement("div");

petal.classList.add("petal");

petal.innerHTML = "🌹";

petal.style.left =
Math.random() * 100 + "vw";

petal.style.fontSize =
(20 + Math.random()*20)
+ "px";

petal.style.animationDuration =
(5 + Math.random()*6)
+ "s";

document.body.appendChild(
petal
);

setTimeout(()=>{

    petal.remove();

},12000);
```

}

setInterval(
createPetal,
500
);
