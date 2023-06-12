const products = document.querySelectorAll(".product");
const container = document.querySelector("._container");
const nav = document.querySelector("._nav");
const cover = document.querySelector("._cover");
const productWidth = 1000;
const overlay = document.querySelector(".preview__overlay");

function getProductOffset() {
    return (container.offsetWidth - (container.offsetWidth * 70) / 100) / 2;
}
function removeActiveClass() {
    const activeProduct = document.querySelector(".product--active");
    if (activeProduct) {
        activeProduct.scrollTop = 0;
        activeProduct.classList.remove("product--active");
        container.classList.remove("container--detail");
    }
}
products.forEach((product) => {
    product.addEventListener("click", (e) => {
        if (e.target.classList.contains("product__close")) {
            overlay.style.display = "none";
            removeActiveClass();
            return;
        }
        if (!e.currentTarget.classList.contains("product--active")) {
            overlay.style.display = "block";
            removeActiveClass();
            e.currentTarget.classList.add("product--active");
            container.classList.add("container--detail");

            const left = productWidth * parseInt(e.currentTarget.getAttribute("data-index")) +
                cover.offsetWidth +
                parseInt(e.currentTarget.getAttribute("data-index")) * 6 +
                nav.offsetWidth -
                getProductOffset();

            container.scrollLeft = left;
            overlay.style.display = "none";
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )) {
                e.currentTarget.scrollIntoView({ inline: "start" });
            }
        }
    });
});
//const products = document.querySelectorAll(".preview");
//const container = document.querySelector("._container");
//const nav = document.querySelector("._nav");
//const cover = document.querySelector("._cover");
//const productWidth = 310;
//const overlay = document.querySelector(".preview__overlay");

//function getProductOffset() {
//    return (container.offsetWidth - (container.offsetWidth * 70) / 100) / 2;
//}
//function removeActiveClass() {
//    const activeProduct = document.querySelector(".preview--active");
//    if (activeProduct) {
//        activeProduct.scrollTop = 0;
//        activeProduct.classList.remove("preview--active");
//        container.classList.remove("_container--detail");
//    }
//}
//products.forEach((product) => {
//    product.addEventListener("click", (e) => {
//        if (e.target.classList.contains("preview__close")) {
//            overlay.style.display = "none";
//            removeActiveClass();
//            return;
//        }
//        if (!e.currentTarget.classList.contains("preview--active")) {
//            overlay.style.display = "block";
//            removeActiveClass();
//            e.currentTarget.classList.add("preview--active");
//            container.classList.add("preview__more");

//            const left = productWidth * parseInt(e.currentTarget.getAttribute("data-index")) +
//                cover.offsetWidth +
//                parseInt(e.currentTarget.getAttribute("data-index")) * 6 +
//                nav.offsetWidth -
//                getProductOffset();

//            container.scrollLeft = left;
//            overlay.style.display = "none";
//            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//                navigator.userAgent
//            )) {
//                e.currentTarget.scrollIntoView({ inline: "start" });
//            }
//        }
//    });
//});