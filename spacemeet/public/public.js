
window.onload = () => {
    userBtn.onclick = function () {
        ShowPage1.style.display = 'flex';
        ShowPage2.style.display = 'none';
        ShowPage4.style.display = 'none';
        photoOverlay.style.display = "none";
        photoOverlay1.style.display = "none";
    }

    commentBtn.onclick = function () {
        ShowPage1.style.display = 'none';
        ShowPage2.style.display = 'flex';
        ShowPage4.style.display = 'none';
        photoOverlay.style.display = "none";
        photoOverlay1.style.display = "none";
    }

    photoBtn.onclick = function () {
        ShowPage1.style.display = 'none';
        ShowPage2.style.display = 'none';
        ShowPage4.style.display = 'flex';
        photoOverlay.style.display = "none";
        photoOverlay1.style.display = "none";

    }
}

// date = new Date();
// year = date.getFullYear();
// month = date.getMonth() + 1;
// day = date.getDate();
// document.getElementById("comment_date").innerHTML = year + "/" + month + "/" + day;
// 相簿頁籤
// 彈出視窗
function openphoto() {
    let element = document.getElementById('photoOverlay')
    element.style.display = 'block'
    ShowPage4.style.display = 'none'
}

function closephoto() {
    let element = document.getElementById('photoOverlay')
    element.style.display = 'none'
    ShowPage4.style.display = 'flex'
}

function openphoto1() {
    let element = document.getElementById('photoOverlay1')
    element.style.display = 'block'
    ShowPage4.style.display = 'none'
}

function closephoto1() {
    let element = document.getElementById('photoOverlay1')
    element.style.display = 'none'
    ShowPage4.style.display = 'flex'
}
// function openphoto2() {
//     let element = document.getElementById('photoOverlay2')
//     element.style.display = 'block'
//     ShowPage4.style.filter = 'blur(5px)  grayscale(80%)'
// }

// function closephoto2() {
//     let element = document.getElementById('photoOverlay2')
//     element.style.display = 'none'
//     ShowPage4.style.filter = 'none'
// }

// function openphoto3() {
//     let element = document.getElementById('photoOverlay3')
//     element.style.display = 'block'
//     // ShowPage3.style.filter = 'blur(5px)  grayscale(80%)'
//     ShowPage3.style.display = 'none'
// }

// function closephoto3() {
//     let element = document.getElementById('photoOverlay3')
//     element.style.display = 'none'
//     // ShowPage3.style.filter = 'none'
//     ShowPage3.style.display = 'flex'
// }

