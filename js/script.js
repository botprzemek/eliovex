const navbar = document.getElementById("navbar");
const content = document.getElementById("content");
const menubuttons = document.querySelectorAll(".menu_element");

let h = innerHeight;

let aboutbox = document.createElement("div");
let aboutimg = document.createElement("img");
let aboutdesc = document.createElement("span");

content.style.transition = "all 400ms ease-in";

let loading = document.createElement("div");
document.body.appendChild(loading);
loading.setAttribute(
  "style",
  "position:absolute; background-color:#333; width:100vw; height:100vh; transition:all 1000ms ease-in; z-index:999;"
);
function loaded() {
  content.style.display = "block";
  setTimeout(() => {
    loading.style.backgroundColor = "transparent";
    document
      .querySelector(".header")
      .setAttribute("style", "opacity:1; letter-spacing:0.1px;");
  }, 5);
  setTimeout(() => {
    loading.style.display = "none";
  }, 1000);
}
window.onload = loaded();

//if (navigator.userAgent.indexOf("Safari")) {
//  let test = document.getElementById("test");
//  test.innerHTML = "You're using Safari";
//}

function about() {
  aboutdesc.innerHTML = "About us";
  document.body.appendChild(aboutbox);
  aboutbox.appendChild(aboutimg);
  aboutbox.setAttribute(
    "style",
    "z-index:9;position: absolute;bottom: 0;left: 0;border-radius: 50vw;background-color: white;margin: 6rem 1.5rem;transition: all 400ms ease-in;display: flex;align-items:center;"
  );
  aboutimg.src = "../eliovex/img/user.svg";
  aboutimg.setAttribute(
    "style",
    "width: auto;height: 3.5rem;opacity: 1;transition: all 400ms ease-in;box-shadow: 0px 0px 17px 5px rgba(35,35,35,0.16);border-radius: 50vw;"
  );

  aboutdesc.setAttribute(
    "style",
    "color: #333;font-size: 2rem;transition: all 400ms ease-in;padding: 0.6rem 2.6rem"
  );
}

about();

let c = 0;

aboutbox.addEventListener("mouseover", () => {
  setTimeout(() => {
    if (c == 0) {
      c++;
      aboutbox.style.opacity = "0";
      setTimeout(() => {
        aboutbox.appendChild(aboutdesc);
        aboutbox.style.opacity = "1";
        aboutbox.removeChild(aboutimg);
      }, 400);
      return;
    }
    aboutbox.style.cursor = "pointer";
    aboutbox.addEventListener("click", () => {
      loading.style.display = "flex";
      setTimeout(() => {
        loading.style.backgroundColor = "#333";
      }, 1);
      setTimeout(() => {
        location.href = "../eliovex/blank.html";
      }, 1000);
    });
    c--;
  }, 400);
});

aboutbox.addEventListener("mouseleave", () => {
  setTimeout(() => {
    aboutbox.style.opacity = "0";
    setTimeout(() => {
      aboutbox.appendChild(aboutimg);
      aboutbox.style.opacity = "1";
      aboutbox.removeChild(aboutdesc);
    }, 400);
  }, 400);
});

let groupimg = document.querySelectorAll(".group_img");

Array.from(groupimg).forEach((img) => {
  let grouptext = document.createElement("span");
  let groupbox = document.createElement("div");
  groupbox.setAttribute(
    "style",
    "width: 100%;height: 100%;position: absolute;background-color: rgba(255, 255, 255, 0.55);display: none;opacity: 0;transition: all 400ms ease-in;overflow: hidden;border-radius: 1.5rem;"
  );
  let groupdiv = document.createElement("div");
  img.appendChild(groupdiv);
  groupdiv.appendChild(grouptext);
  groupdiv.appendChild(groupbox);
  groupdiv.style.display = "flex";
  groupdiv.style.width = "100%";
  groupdiv.style.height = "100%";
  groupdiv.style.justifyContent = "center";
  groupdiv.style.alignItems = "center";
  groupdiv.style.position = "relative";
  groupdiv.style.backgroundImage = "url(../eliovex/img/background.jpeg)";
  groupdiv.style.backgroundSize = "cover";
  groupdiv.style.backgroundPosition = "bottom";
  groupdiv.style.backgroundRepeat = "no-repeat";
  groupdiv.style.transition = "all 400ms ease-in";
  grouptext.innerHTML = "Click to see more";
  grouptext.setAttribute(
    "style",
    "z-index: 11;color: #333;font-size: 2rem;width: 100%;text-align: center;display: none;opacity: 0;transition: all 400ms ease-in;"
  );

  img.addEventListener("mouseover", () => {
    img.style.cursor = "pointer";
    groupbox.style.zIndex = "3";
    groupbox.style.display = "inline";
    grouptext.style.display = "inline";
    setTimeout(() => {
      groupbox.style.opacity = "1";
      grouptext.style.opacity = "1";
      groupdiv.style.backgroundPosition = "center";
    }, 1);
  });

  img.addEventListener("mouseleave", () => {
    setTimeout(() => {
      groupbox.style.opacity = "0";
      grouptext.style.opacity = "0";
      groupdiv.style.backgroundPosition = "bottom";
    }, 1);
    setTimeout(() => {
      grouptext.style.display = "none";
      groupbox.style.display = "none";
    }, 400);
  });

  img.addEventListener("click", () => {
    loading.style.display = "flex";
    setTimeout(() => {
      loading.style.backgroundColor = "#333";
    }, 1);
    setTimeout(() => {
      location.href = "../eliovex/blank.html";
    }, 1000);
  });
});

// MENU

menubuttons[0].addEventListener("click", () => {
  setTimeout(() => {
    content.focus();
    content.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, 10);
});

menubuttons[1].addEventListener("click", () => {
  let menubox = document.createElement("div");
  let menulist = document.createElement("ul");
  document.body.appendChild(menubox);
  menubox.appendChild(menulist);
  for (let i = 1; i < 6; i++) {
    let menuelement = document.createElement("li");
    menulist.appendChild(menuelement);
    let menutext = "null";
    if (i == 1) menuelement.innerHTML = "Home";
    else if (i == 2) menuelement.innerHTML = "Projects";
    else if (i == 3) menuelement.innerHTML = "Gallery";
    else if (i == 4) menuelement.innerHTML = "Services";
    else if (i == 5) menuelement.innerHTML = "Contact";
    menuelement.setAttribute(
      "style",
      "border-radius: 50vw;padding: 0.2rem 3rem;font-size: 3rem;font-weight: bold;list-style-type: none; color: #333;margin: 0.2rem;"
    );
    menuelement.addEventListener("mouseover", () => {
      menuelement.style.cursor = "pointer";
    });
    menuelement.addEventListener("mouseleave", () => {
      menuelement.style.cursor = "default";
      menuelement.style.backgroundColor = "transparent";
    });
    menuelement.addEventListener("click", () => {
      if (i == 1) {
        setTimeout(() => {
          menubox.style.opacity = 0;
          menulist.style.opacity = 0;
          content.style.filter = "none";
        }, 1);
        setTimeout(() => {
          document.body.removeChild(menubox);
        }, 400);
        return;
      }
      loading.style.display = "flex";
      setTimeout(() => {
        loading.style.backgroundColor = "#333";
      }, 1);
      setTimeout(() => {
        location.href = "../eliovex/blank.html";
      }, 1000);
    });
  }
  menubox.setAttribute(
    "style",
    "opacity: 0;transition: all 400ms ease-in;position: absolute;width: 100vw;height: 100vh;background-color: rgba(255, 255, 255, 0.75);z-index: 999;"
  );
  menulist.setAttribute(
    "style",
    "opacity: 0;transition: all 400ms ease-in;display: flex;width: 100%;height: 100%;justify-content: center;align-items: center;flex-direction: column;"
  );
  setTimeout(() => {
    menubox.style.opacity = 1;
    menulist.style.opacity = 1;
    content.style.filter = "none";
  }, 1);
  content.style.filter = "blur(0.35rem)";
  menubox.addEventListener("click", () => {
    setTimeout(() => {
      menubox.style.opacity = 0;
      menulist.style.opacity = 0;
      content.style.filter = "none";
    }, 1);
    setTimeout(() => {
      document.body.removeChild(menubox);
    }, 400);
  });
});

menubuttons[2].addEventListener("click", () => {
  setTimeout(() => {
    content.focus();
    content.scrollTo({
      top: h,
      left: 0,
      behavior: "smooth",
    });
  }, 10);
});
