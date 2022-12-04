// js toggle menu

var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';

function menutoggle(){
     if(MenuItems.style.maxHeight == '0px'){
          MenuItems.style.maxHeight = '200px';
     }else{
          MenuItems.style.maxHeight = '0px';
     }
};




// js product gallery

var prodactImg = document.getElementById("prodactImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function()
{
     prodactImg.src = SmallImg[0].src;
}

SmallImg[1].onclick = function()
{
     prodactImg.src = SmallImg[1].src;
}

SmallImg[2].onclick = function()
{
     prodactImg.src = SmallImg[2].src;
}

SmallImg[3].onclick = function()
{
     prodactImg.src = SmallImg[3].src;
};



// form toggle


var loginForm = document.getElementById("loginForm");
var regForm = document.getElementById("regForm");
var indicator = document.getElementById("indicator");

function register(){
     regForm.style.transform = 'translateX(0px)';
     loginForm.style.transform = 'translateX(0px)';
     indicator.style.transform = 'translateX(100px)';
};

function login(){
     regForm.style.transform = 'translateX(300px)';
     loginForm.style.transform = 'translateX(300px)';
     indicator.style.transform = 'translateX(0px)';
};