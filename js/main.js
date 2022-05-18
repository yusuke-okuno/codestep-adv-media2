'use strict';

{
  document.addEventListener("DOMContentLoaded", () => {

    // 【ハンバーガーメニューのボタン】

    document.getElementsByClassName("toggle_btn")[0].addEventListener('click', (e) => {
      document.getElementsByClassName("header")[0].classList.toggle("open");
    });

    // 「THIS」使う書き方試してみた（動かず）
    // document.getElementsByClassName("toggle_btn")[0].addEventListener('click', function() {
    //   this.classList.toggle("open");
    // }

    // 【ボタン押した時の背景（マスク）かぶさる】

    document.getElementById("mask").addEventListener('click', (e) => {
      document.getElementsByClassName("header")[0].classList.remove("open");
    });
    
    // 【各セクションへ飛ぶリンクを押した時に背景（マスク）消える】

    const menu = document.querySelectorAll("#navi a")
    menu.forEach(function(element){
      // console.log(element);
      element.addEventListener('click', (e) => {
        document.getElementsByClassName("header")[0].classList.remove("open");
      });
    });
    // menu.addEventListener('click', (e) => {
    //   document.getElementsByClassName("header")[0].classList.remove("open");
    // });

    // 【各セクションへ飛ぶリンクを押した時にスムースにスクロール】

    const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < smoothScrollTrigger.length; i++){

      smoothScrollTrigger[i].addEventListener('click', (e) => {

        e.preventDefault();
        
        let href = smoothScrollTrigger[i].getAttribute('href');
        let targetElement = document.getElementById(href.replace('#', ''));
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const gap = 60;
        const target = rect + offset - gap;

        window.scrollTo({
          top: target,
          behavior: 'smooth',
        });

      });

    }

  });
}