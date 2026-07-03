var imgarr = ["1.png","2.png", "3.png", "4.png", "5.png", "6.png","7.png" ];

var index = 0;

document.querySelector('img').attributes.src.value = imgarr[index];

document.querySelector('.btn-outline-secondary1').onclick = function(){

    index--;
    if(index<=0){
        index=imgarr.length-1;
    }
    document.querySelector('img').src = imgarr[index];
}

document.querySelector('.btn-outline-secondary2').onclick = function(){
    index++;
    if(index>=imgarr.length){
        index=0;
    }
    document.querySelector('img').src = imgarr[index];
}