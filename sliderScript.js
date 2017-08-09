/**
 * Created by ARTUR on 08.08.2017.
 */
// ** add img
let imgArr = [];

document.querySelector('.urlImg').onclick = function getUrl() {
    let imgUrl = document.querySelector('#urlInput').value;
    imgArr.push(imgUrl);
    console.log(imgArr.length);
};

document.querySelector('.addImg').onclick = function addImg() {
    for (let i = 0; i < imgArr.length; i++) {
        let li = document.createElement('li');
        let ul = document.querySelector('.BySideImages');
        ul.appendChild(li);
        let img = li.appendChild(document.createElement('img')).setAttribute('src', imgArr[i]);
    }
    imgArr.length = 0;
};
//**delete image
document.querySelector('.deleteImg').onclick = function redBorder() {
    let BySideImages = document.querySelectorAll('li');
    for (let i = 0; i < BySideImages.length; i++) {
        BySideImages[i].style.borderColor = 'red';
    }
    let pictures = document.querySelectorAll('li');
    for (let i = 0; i < pictures.length; i++) {
        pictures[i].onclick = function () {
            this.parentNode.removeChild(this);
        }
    }
};


//**slide image
document.querySelector('#left').onclick = function previousImg() {


};

document.querySelector('#right').onclick = function nextImg() {
    for (let i = 0; i < imgArr.length; i++) {

    }
};