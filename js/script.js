window.onload = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("../service-worker.js")
      .then((res) => console.log("service worker registered", res))
      .catch((err) => console.log("service worker not suppport", err));
  }
};

import styles from "../style/styles.css";
import sass from "../style/test.scss";
require("../style/styles.css");
import imga from "../assets/img.JPG";
import fonta from "../build/fonts/regular.ttf";
import icon1 from '../images/hello-icon-128.png';
import icon2 from '../images/hello-icon-144.png';
import icon3 from '../images/hello-icon-152.png';
import icon4 from '../images/hello-icon-192.png';
import icon5 from '../images/hello-icon-256.png';
import icon6 from '../images/hello-icon-512.png';

console.log(icon1, icon2, icon3, icon4, icon5, icon6);

console.log("imga :", imga);
console.log("fonta :", fonta);

// variables
const law1 = document.getElementById("law1");
const law2 = document.getElementById("law2");
const main1 = document.getElementById("main1");
const main2 = document.getElementById("main2");
const input_a = document.getElementById("input-a");
const input_str = document.getElementById("input-str");
const result = document.getElementById("result");

let final;
let failResult = "! اشتباه است";
let successResult = "! درست است";

// even or odd ?
const isEven = (str) => {
  let a = 0;
  let b = 0;
  let ab = Array.from(str);

  ab.filter((i) => {
    if (i === "a") a++;
    else if (i === "b") b++;
  });

  return a % 2 === 0 && b % 2 === 0;
};

// maximum 2 b
const twoB = (str) => {
  let b = 0;

  // convert str to array
  let arrStr = Array.from(str);

  arrStr.filter((i) => i == "b" && b++);

  return b === 2;
};

// minimum 1 a
const oneA = (str) => {
  if (str.includes("a")) return true;
  else {
    return false;
  }
};

// clear all inputs
const clearLaw1Inputs = (input1) => {
  input1.value = "";
};

const clearLaw2Input = (input2) => {
  input2.value = "";
};

// law 1
const processLawOne = (str) => {
  if (isEven(str)) {
    final = true;
  } else {
    final = false;
  }
};

// law 2
const processLawTwo = (str) => {
  if (twoB(str) && oneA(str)) {
    final = true;
  } else {
    final = false;
  }
};

// handle redio check and set law's 1,2 classes
document.getElementById("chooseLaw1").addEventListener("click", chooseLaw1);
document.getElementById("chooseLaw2").addEventListener("click", chooseLaw2);

function chooseLaw1() {
  law1.setAttribute("checked", true);
  law2.setAttribute("checked", false);
  main1.classList.replace("main-1", "main-1-active");
  main2.classList.replace("main-2-active", "main-2");
}

function chooseLaw2() {
  law1.setAttribute("checked", false);
  law2.setAttribute("checked", true);
  main1.classList.replace("main-1-active", "main-1");
  main2.classList.replace("main-2", "main-2-active");
}

// handle input change
document.getElementById("submit-btn1").addEventListener("click", submitLaw1);
function submitLaw1() {
  console.log("before func");
  if (law1.checked) {
    if (!input_a.value.length) {
      alert("لطفا فیلدهارا پر کنید !");
    } else if (input_a.value.length) {
      processLawOne(input_a.value);
      clearLaw1Inputs(input_a);
      if (final) {
        result.style.color = "#2beb2b";
        result.innerHTML = successResult;
      } else {
        result.style.color = "red";
        result.innerHTML = failResult;
      }
    }
  }
}

document.getElementById("submit-btn2").addEventListener("click", submitLaw2);

function submitLaw2() {
  if (law2.checked) {
    if (!input_str.value.length) {
      alert("لطفا فیلد را پر کنید !");
    } else if (input_str.value.length) {
      processLawTwo(input_str.value);
      clearLaw2Input(input_str);
      if (final) {
        result.style.color = "#2beb2b";
        result.innerHTML = successResult;
      } else {
        result.style.color = "red";
        result.innerHTML = failResult;
      }
    }
  }
  console.log("final :", final);
}
