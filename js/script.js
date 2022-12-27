const icon = document.querySelector("#icon");
const menu = document.querySelector("nav .nav-menu");
const navMenuDtl = menu.querySelector(".menu-detail");
const menuDetail = menu.querySelectorAll(".menu");
const btnRead = document.getElementById("read");
const nav = document.getElementById("nav");
const services = document.getElementById("services");
const card = services.querySelector(".service-two");
const sosial_media = document.getElementById("sosial-media");
const icon_sos = sosial_media.querySelector("#icon-sos");
const arr_icon_sos = icon_sos.querySelector("i");
const sosacc = sosial_media.querySelectorAll("#sosmed .sos a");
const live_chat = document.getElementById("waapi");
const btn_arr = live_chat.querySelector("#arr");
const icon_arr = btn_arr.querySelector("#wa");
const btn_wa = live_chat.querySelector("#icwa a");
const chat_box = live_chat.querySelector("#chat #live");
const arr_up = document.querySelector("#arr-up");
const arr_down = document.querySelector("#home div .arrow");

// console.log(arr_down);

// console.log(chat_box);

if (window.innerWidth <= 576) {
  sosial_media.style.top = "320px";
  live_chat.style.top = "410px";
}

if (window.innerWidth <= 768) {
  icon.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (menu.style.width == "100%") {
      navMenuDtl.style.width = "0%";
      menu.style.removeProperty("background-color");
      menu.style.width = "0%";
    } else {
      navMenuDtl.style.width = "40%";
      menu.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      menu.style.width = "100%";
    }

    // console.log(navMenuDtl.style.width , menu.style.backgroundColor);
  });
  window.onclick = (e) => {
    if (e.target == menu) {
      navMenuDtl.style.width = "0%";
      menu.style.removeProperty("background-color");
      menu.style.width = "0%";
      // console.log(e.target , navMenuDtl.style.width);
    }
  };
}

window.addEventListener("resize", () => {
  sosial_media.style.left = "-44px";
  live_chat.style.right = "-130px";
  icon_arr.style.transform = "rotate(0deg)";
  icon_arr.style.color = "rgb(126, 126, 126)";
  arr_icon_sos.style.transform = "rotate(0deg)";
  arr_icon_sos.style.color = "rgb(126, 126, 126)";

  if (window.innerWidth > 576) {
    sosial_media.style.top = "200px";
    live_chat.style.top = "395px";
  } else {
    sosial_media.style.top = "320px";
    live_chat.style.top = "410px";
  }

  if (window.innerWidth > 768) {
    navMenuDtl.style.width = "100%";
    menu.style.width = "70%";
  } else {
    navMenuDtl.style.width = "0%";
    menu.style.width = "0%";
  }

  if (window.scrollY < 160 && window.innerWidth > 768) {
    nav.style.backgroundColor = "transparent";
    nav.style.height = "70px";
    menu.style.backgroundColor = "transparent";
  } else if (window.scrollY > 160 && window.innerWidth > 768) {
    menu.style.backgroundColor = "transparent";
  } else if (window.scrollY < 160 && window.innerWidth <= 768) {
    nav.style.backgroundColor = "rgb(16, 15, 15)";
  }
});

btnRead.onclick = () => {
  window.scrollTo("0", "626");
  // window.location.href = '#about';
};

// function setOn(on) {
//     return on;
//  }

// function navScrollActive(value , index , arr ) {
//    if (index == setOn) {
//        arr[index].classList.add('active');
//        console.log(arr[index]);
//    }
//    else {
//         arr[index].classList.remove('active');
//         console.log(arr[index]);
//    }
// ;}

// menuDetail.forEach( navScrollActive , 0 );

// menuDetail.forEach( (value , index , arr , active = 0) => {
//     (index === active) ? arr[index].classList.add('active') : arr[index].classList.remove('active');
//     console.log(arr[index]);
// });

function scrollArrUp(WY) {
  if (window.scrollY < WY) {
    arr_up.style.right = "-20vw";
  } else {
    arr_up.style.right = "2vw";
  }
}

function scrollActive(active) {
  for (let i = 0; i < menuDetail.length; i++) {
    i == active
      ? menuDetail[i].classList.add("active")
      : menuDetail[i].classList.remove("active");
  }
}

window.addEventListener("scroll", () => {
  sosial_media.style.left = "-44px";
  live_chat.style.right = "-130px";
  icon_arr.style.transform = "rotate(0deg)";
  icon_arr.style.color = "rgb(126, 126, 126)";
  arr_icon_sos.style.transform = "rotate(0deg)";
  arr_icon_sos.style.color = "rgb(126, 126, 126)";

  // (window.scrollY >= 626) ? arr_down.style.color = 'transparent' : arr_down.style.color = 'white';

  if (window.innerWidth <= 768) {
    if (menu.style.width == "100%") {
      navMenuDtl.style.width = "0%";
      menu.style.removeProperty("background-color");
      menu.style.width = "0%";
    }
  }

  if (window.scrollY >= 160 && window.innerWidth > 768) {
    nav.style.backgroundColor = "rgb(16, 15, 15)";
    nav.style.height = "80px";
  } else if (window.scrollY >= 160 && window.innerWidth <= 768) {
    nav.style.backgroundColor = "rgb(16, 15, 15)";
    nav.style.height = "70px";
  } else if (window.scrollY < 160 && window.innerWidth > 768) {
    nav.style.backgroundColor = "transparent";
    nav.style.height = "70px";
  }

  if (window.innerWidth > 1150) {
    if (window.scrollY >= 0 && window.scrollY < 325) {
      scrollActive(0);
    } else if (window.scrollY >= 325 && window.scrollY < 2000) {
      scrollActive(1);
    } else if (window.scrollY >= 2000 && window.scrollY < 2800) {
      scrollActive(2);
    } else if (window.scrollY >= 2800 && window.scrollY < 3800) {
      scrollActive(3);
    } else {
      scrollActive(4);
    }

    scrollArrUp(325);
  } else if (window.innerWidth <= 1150 && window.innerWidth > 992) {
    if (window.scrollY >= 0 && window.scrollY < 325) {
      scrollActive(0);
    } else if (window.scrollY >= 325 && window.scrollY < 3300) {
      scrollActive(1);
    } else if (window.scrollY >= 3300 && window.scrollY < 4100) {
      scrollActive(2);
    } else if (window.scrollY >= 4100 && window.scrollY < 7400) {
      scrollActive(3);
    } else {
      scrollActive(4);
    }

    scrollArrUp(325);
  } else if (window.innerWidth <= 992 && window.innerWidth > 768) {
    if (window.scrollY >= 0 && window.scrollY < 325) {
      scrollActive(0);
    } else if (window.scrollY >= 325 && window.scrollY < 3100) {
      scrollActive(1);
    } else if (window.scrollY >= 3100 && window.scrollY < 4800) {
      scrollActive(2);
    } else if (window.scrollY >= 4800 && window.scrollY < 7400) {
      scrollActive(3);
    } else {
      scrollActive(4);
    }

    scrollArrUp(325);
  } else if (window.innerWidth <= 768 && window.innerWidth > 576) {
    if (window.scrollY >= 0 && window.scrollY < 400) {
      scrollActive(0);
    } else if (window.scrollY >= 400 && window.scrollY < 3100) {
      scrollActive(1);
    } else if (window.scrollY >= 3100 && window.scrollY < 4700) {
      scrollActive(2);
    } else if (window.scrollY >= 4700 && window.scrollY < 7300) {
      scrollActive(3);
    } else {
      scrollActive(4);
    }

    scrollArrUp(400);
  } else if (window.innerWidth <= 576) {
    if (window.scrollY >= 0 && window.scrollY < 420) {
      scrollActive(0);
    } else if (window.scrollY >= 420 && window.scrollY < 2800) {
      scrollActive(1);
    } else if (window.scrollY >= 2800 && window.scrollY < 4300) {
      scrollActive(2);
    } else if (window.scrollY >= 4300 && window.scrollY < 6500) {
      scrollActive(3);
    } else {
      scrollActive(4);
    }

    scrollArrUp(420);
  }
  // console.log(window.scrollY);
});

sosacc.forEach(function (e) {
  e.addEventListener("click", () => {
    sosial_media.style.left = "-44px";
  });
});

// console.log(arr_icon_sos);

icon_sos.addEventListener("click", function () {
  if (sosial_media.style.left === "0px") {
    sosial_media.style.left = "-44px";
    arr_icon_sos.style.transform = "rotate(0deg)";
    arr_icon_sos.style.color = "rgb(126, 126, 126)";
  } else {
    sosial_media.style.left = "0px";
    arr_icon_sos.style.transform = "rotate(-180deg)";
    arr_icon_sos.style.color = "white";
  }
});
// console.log(icon_arr);
btn_arr.addEventListener("click", function (e) {
  if (live_chat.style.right === "0px") {
    live_chat.style.right = "-130px";
    icon_arr.style.transform = "rotate(0deg)";
  } else {
    live_chat.style.right = "0px";
    icon_arr.style.transform = "rotate(180deg)";
    icon_arr.style.color = "white";
  }
});

btn_wa.addEventListener("click", () => {
  live_chat.style.right = "-130px";
});

const style_chat_box = chat_box.style;

btn_wa.addEventListener("mouseover", () => {
  style_chat_box.top = "0px";
  style_chat_box.left = "0px";
  style_chat_box.transform = "rotate(0deg)";

  // console.log ("top : " + style_chat_box.top);
  // console.log ("left : " + style_chat_box.left);
  // console.log ("transform : " + style_chat_box.transform);
});

btn_wa.addEventListener("mouseout", () => {
  style_chat_box.top = "58px";
  style_chat_box.left = "80px";
  style_chat_box.transform = "rotate(90deg)";

  // console.log ("top : " + style_chat_box.top);
  // console.log ("left : " + style_chat_box.left);
  // console.log ("transform : " + style_chat_box.transform);
});

arr_up.addEventListener("click", () => {
  window.location.href = "#home";
});
