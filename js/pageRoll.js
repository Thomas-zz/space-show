// let oBox = document.getElementsByClassName("boxs");
// let oHtml = 60;

// let app = new Vue({
//     el: '#container',
//     data: {

//         pageNo: [1, 2, 3, 4],
//         currentPage: 0,
//     },
//     methods: {
//         switchPage(pageNo) {
//             // oBox[0].style.transition = "0.5s ease";
//             oBox[0].style.top = -pageNo * oHtml + 'px';
//             this.currentPage = pageNo;
//             console.log(this.currentPage + ' ' + this.pageNo.length)

//         }
//     },
// })

// document.addEventListener("mousewheel", (event) => {
//     if (event.wheelDelta < 0) {
//         if (app.currentPage < app.pageNo.length - 1) {
//             oBox[0].style.top = -app.currentPage * oHtml - oHtml + 'px';
//             app.currentPage += 1;
//             console.log(app.currentPage + ' ' + app.pageNo.length)
//         }
//     } else if (event.wheelDelta > 0) {
//         if (app.currentPage > 0) {
//             oBox[0].style.top = -app.currentPage * oHtml + oHtml + 'px';
//             app.currentPage -= 1;
//             console.log(app.currentPage + ' ' + app.pageNo.length)

//         }
//     }
// })

let oPages = document.getElementsByClassName("pages");
let pageHeigth = window.innerHeight;

let app = new Vue({
    el: "#container",
    data: {
        pageNo: [1, 2, 3, 4],
        currentPage: 0,
    },
    methods: {
        switchPage(pageNo) {
            // oBox[0].style.transition = "0.5s ease";
            oPages[0].style.top = -pageNo * pageHeigth + "px";
            this.currentPage = pageNo;
            console.log(this.currentPage + " " + this.pageNo.length);
        },
    },
});

document.addEventListener("mousewheel", (event) => {
    if (event.wheelDelta < 0) {
        if (app.currentPage < app.pageNo.length - 1) {
            oPages[0].style.top = -app.currentPage * pageHeigth - pageHeigth + "px";
            app.currentPage += 1;
            console.log(app.currentPage + " " + app.pageNo.length);
        }
    } else if (event.wheelDelta > 0) {
        if (app.currentPage > 0) {
            oPages[0].style.top = -app.currentPage * pageHeigth + pageHeigth + "px";
            app.currentPage -= 1;
            console.log(app.currentPage + " " + app.pageNo.length);
        }
    }
});
