const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

if (urlParams.has("n")) {
  let n = urlParams.get("n");
  n = n.charAt(0).toUpperCase() + n.slice(1);
  document.getElementById("i").innerHTML = `🎄 Season's Greetings ${n}! 🎄`;
} else if (urlParams.has("f")) {
  let f = urlParams.get("f");
  f = f.charAt(0).toUpperCase() + f.slice(1);
  document.getElementById(
    "i"
  ).innerHTML = `🎄 Season's Greetings, ${f} Family! 🎄`;
} else {
  document.getElementById(
    "i"
  ).innerHTML = `🎄 Season's Greetings from the Hulse's! 🎄`;
}

let tl = gsap.timeline();

tl.from("#i", {
  opacity: 0,
  scale: 0,
  ease: "power4",
  duration: 1,
});
tl.from(
  "#text",
  {
    opacity: 0,
    scale: 0,
    ease: "power4",
    duration: 1,
  },
  "<0.1"
);

tl.from(
  "#photo",
  {
    opacity: 0,
    scale: 0,
    ease: "power4",
    duration: 1,
  },
  "<0.25"
);
tl.from(
  "#elders",
  {
    opacity: 0,
    scale: 0,
    ease: "power4",
    duration: 1,
  },
  "<0.25"
);
tl.from(
  "#ruby",
  {
    opacity: 0,
    scale: 0,
    ease: "power4",
    duration: 1,
  },
  "<0.25"
);
tl.from(
  "#isaac",
  {
    opacity: 0,
    scale: 0,
    ease: "power4",
    duration: 1,
  },
  "<0.25"
);
tl.from(
  "#seb",
  {
    opacity: 0,
    scale: 0,
    ease: "power4",
    duration: 1,
  },
  "<0.25"
);
tl.from(
  "#sustainability",
  {
    opacity: 0,
    scale: 0,
    ease: "power4",
    duration: 1,
  },
  "<0.1"
);
tl.from(
  "#sign",
  {
    opacity: 0,
    scale: 0,
    ease: "power4",
    duration: 1,
  },
  "<0.25"
);
