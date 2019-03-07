/**
 * @author Yoichiro Hirano
 * @description Develop Environment Model
 * @created 2018/12/03
 * @link https://
 */

// import CONSTANT from './helper/CONSTANT';
// import { getIndexValueOfGivenPercentage } from './helper/util';
import '../scss/style.scss';

import Swiper from 'swiper';

export default class Index {
  /**
   * constructor
   */
  constructor() {
    const mySwiper = new Swiper('.swiper-container', {
      loop: true,
      speed: 500,
      autoHeight: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.DEV_ENV_MODEL = window.DEV_ENV_MODEL || {};
  window.DEV_ENV_MODEL.INDEX = window.DEV_ENV_MODEL.INDEX || new Index();
});
