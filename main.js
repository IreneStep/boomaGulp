let modal = document.getElementById("popup");
let btn = document.getElementById("popupBtn");
let cl = document.getElementsByClassName("popup__content__close")[0];

btn.onclick = () => {
  modal.style.display = "block";
};
cl.onclick = () => {
  modal.style.display = "none";
};

window.onclick = e => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

let linkNav = document.querySelectorAll('[href^="#"]'),
  V = 1;
for (let i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener(
    "click",
    function(e) {
      e.preventDefault();
      let w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, "$1");
      (t = document.querySelector(hash).getBoundingClientRect().top),
        (start = null);
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
          r =
            t < 0
              ? Math.max(w - progress / V, w + t)
              : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    },
    false
  );
}
