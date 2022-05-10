'use strict';

{
  document.addEventListener("DOMContentLoaded", () => {

    document.getElementsByClassName("toggle_btn")[0].addEventListener('click', (e) => {
      document.getElementsByClassName("header")[0].classList.toggle("open");
    });

    // 「THIS」使う書き方試してみた（動かず）
    // document.getElementsByClassName("toggle_btn")[0].addEventListener('click', function() {
    //   this.classList.toggle("open");
    // }

    document.getElementById("mask").addEventListener('click', (e) => {
      document.getElementsByClassName("header")[0].classList.remove("open");
    });

  });
}