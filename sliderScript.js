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
document.querySelector('.deleteImg').onclick = function deleteImg() {
        let BySideImages = document.querySelectorAll('li');
        BySideImages.;

};

//**slide image
document.querySelector('#left').onclick = function previousImg() {


};

document.querySelector('#right').onclick = function nextImg() {
    for (let i = 0; i < imgArr.length; i++) {

    }
};