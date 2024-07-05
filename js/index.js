// import { english } from "./en.js";
// import { france } from "./fr.js";
import { refs } from "./querySelector.js";
import { translate } from "./translate.js";
// import { ukraine } from "./ua.js";

// const translate = {
//   english,
//   ukraine,
//   france,
// };

const {
  btnBox,
  text: { page_banner_text, landing_page_desc_text, landing_page_desc_title },
  banerBtn: { banner_btn1, banner_btn2, banerBtn, btn, desc_info },
} = refs;

btn.forEach((el) => {
  el.addEventListener("click", () => {
    btnBox.querySelector(".active").classList.remove("active");
    el.classList.add("active");
    const attr = el.getAttribute("lang");
    // Object.values(translate).forEach((key) => {
    //   page_banner_text.textContent = translate[key][attr].page_banner_text;
    // landing_page_desc_text.textContent = translate[attr].landing_page_desc_text;
    // landing_page_desc_title.textContent =translate[attr].landing_page_desc_title;
    // banner_btn1.textContent = translate[attr].banner_btn1;
    // banner_btn2.textContent = translate[attr].banner_btn2;
    // banerBtn.textContent = translate[attr].banerBtn;
    // desc_info.textContent = translate[attr].desc_info;
    // });

    page_banner_text.textContent = translate[attr].page_banner_text;
    landing_page_desc_text.textContent = translate[attr].landing_page_desc_text;
    landing_page_desc_title.textContent =
      translate[attr].landing_page_desc_title;
    banner_btn1.textContent = translate[attr].banner_btn1;
    banner_btn2.textContent = translate[attr].banner_btn2;
    banerBtn.textContent = translate[attr].banerBtn;
    desc_info.textContent = translate[attr].desc_info;
  });
});
