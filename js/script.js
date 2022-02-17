const navbar = document.getElementById("navbar");
let h = $(window).height();
allLi = document.querySelectorAll("li");
content = document.getElementById("content");

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");

const s1button = document.getElementById("s1button");

b1.addEventListener("click", () => {
  setTimeout(() => {
    content.focus();
    content.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, 10);
});
b2.addEventListener("click", () => {
  setTimeout(() => {
    content.focus();
    content.scrollTo({
      top: h,
      left: 0,
      behavior: "smooth",
    });
  }, 10);
});
b3.addEventListener("click", () => {
  setTimeout(() => {
    content.focus();
    content.scrollTo({
      top: 2 * h,
      left: 0,
      behavior: "smooth",
    });
  }, 10);
});
b4.addEventListener("click", () => {
  setTimeout(() => {
    content.focus();
    content.scrollTo({
      top: 2 * h,
      left: 0,
      behavior: "smooth",
    });
  }, 10);
});
b5.addEventListener("click", () => {
  setTimeout(() => {
    content.focus();
    content.scrollTo({
      top: 2 * h,
      left: 0,
      behavior: "smooth",
    });
  }, 10);
});
b6.addEventListener("click", () => {
  setTimeout(() => {
    content.focus();
    content.scrollTo({
      top: 2.15 * h,
      left: 0,
      behavior: "smooth",
    });
  }, 10);
});

s1button.addEventListener("click", () => {
  setTimeout(() => {
    content.focus();
    content.scrollTo({
      top: h,
      left: 0,
      behavior: "smooth",
    });
  }, 10);
});

const group_img = document.querySelector(".group_img");
const chuj_img = document.querySelector(".img");
const desc = document.createElement("p");
group_img.appendChild(desc);

group_img.forEach((group) => {
  group.addEventListener("mouseover", () => {
    group.style.cursor = "pointer";
    desc.innerHTML = "Click to see more";
    desc.classList.add("desc");
    desc.style.opacity = "100";
    chuj_img.style.filter = "blur(0.2rem) opacity(0.75)";
    chuj_img.style.backgroundPosition = "center";
  });
});
group_img.addEventListener("mouseout", () => {
  group_img.style.cursor = "none";
  chuj_img.style.filter = "none";
  chuj_img.style.backgroundPosition = "bottom";
  desc.style.opacity = "0";
});
group_img.addEventListener("click", () => {
  location.href = "../index.html";
});
