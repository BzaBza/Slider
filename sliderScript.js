/**
 * Created by ARTUR on 08.08.2017.
 */
// ** add img
let imgArr = [];

document.querySelector('.addImg').onclick = function getUrl() {
    let imgUrl = document.querySelector('#urlInput').value;
    imgArr.push(imgUrl);
    console.log(imgArr.length);
};



document.querySelector('#left').onclick = function previousImg() {

        let li = document.createElement('li');
        let ul = document.querySelector('.BySideImages');
        ul.appendChild(li);
    for (let i = 0; i < imgArr.length; i++) {
        let img = li.appendChild(document.createElement('img')).setAttribute('src', imgArr[i]);
    }

};

document.querySelector('#right').onclick = function nextImg() {
    for (let i = 0; i < imgArr.length; i++) {

    }
};