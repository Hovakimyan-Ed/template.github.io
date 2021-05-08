var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop:true,
});

let one = 1;

function o1() {
    if (one === 1) {
        document.getElementById("div_id").style.display="block";
        document.getElementById("icon_id").style="transform: rotate(180deg); transition: 0.2s";
        document.getElementById("id5").style="background-color: #ffa200";
        one = 2;
    }
    else if (one === 2) {
        document.getElementById("div_id").style.display="none";
        document.getElementById("icon_id").style="transform: rotate(0deg); transition: 0.2s";
        document.getElementById("id5").style="background-color: #15c1e5";
        one = 1;
    }
}

let two = 1;

function o2() {
    if (two === 1) {
        document.getElementById("id2").style.display="block";
        document.getElementById("id3").style="transform: rotate(180deg)";
        document.getElementById("id4").style="background-color: #ffa200";
        two = 2;
    }
    else if (two === 2) {
        document.getElementById("id2").style.display="none";
        document.getElementById("id3").style="transform: rotate(0deg)";
        document.getElementById("id4").style="background-color: #15c1e5";
        two = 1;
    }
    
}

let three = 1;

function o3() {
    if (three === 1) {
        document.getElementById("id6").style="right: 41%; transition: 0.3s"
        document.getElementById("bd1_id").style="transform: rotate(-40deg); width: 14px; position: absolute; top: -4px; left: -1px;";
        document.getElementById("bd3_id").style="width: 14px; transform: rotate(40deg); position: absolute; top: 4px; left: -1px;";
        three = 2;
    }
    else if (three === 2) {
        document.getElementById("id6").style="right: 100%; transition: 0.3s"
        document.getElementById("bd1_id").style="transform: rotate(0deg); width: 24px;";
        document.getElementById("bd3_id").style="width: 24px; transform: rotate(0deg);";
        three = 1;
    }
}