var index=0,
//函数传参需要一字符串形式传过去
    timer=null,
    main=getId("main"),
    prev=getId("prev"),
    next=getId("next"),
    pics=getId("banner").getElementsByTagName("div"),//这一行报错
    size=pics.length,
    dots=getId("dots").getElementsByTagName("span"),
    menuContent=getId("menuContent"),
    banner=getId("banner"),
    menuItem=menuContent.getElementsByClassName("menu-item"),
    subMenu=getId("sub-menu"),
    subMenuItem=subMenu.getElementsByTagName("div");

function getId(idValue){
    return typeof(idValue)==="string" ? document.getElementById(idValue) : idValue;
}

//处理IE浏览器兼容问题
function addHandler(Element,type,handler){
    //针对谷歌、火狐等主流浏览器
    //也是很神奇，刚开始形参element与实际使用不一致时没有报addEventListener报of null，修改之后就报了，然后复制了几次又好了
    if(Element.addEventListener){
        Element.addEventListener(type,handler,true);
    }
    //针对IE8以下的浏览器
    else if(Element.attachEvent){
        Element.attachEvent('on'+type,handler);
    }
    //针对IE8以上的浏览器
    else{
        Element['on'+type]=handler;
    }
}
//切换图片
function imgChange(){
    for(var i=0;i<size;i++){
        pics[i].style.display="none"
        dots[i].className="";
    }
    pics[index].style.display="block";
    dots[index].className="active";
}
//设置自动轮播
function starAutoPlay(){
    timer=setInterval(function(){
        index++;
        if(index>=size){
            index=0
        }
        imgChange();
    },3000)
}
//设置取消自动轮播
function stopAutoPlay(){
    if(timer){
        clearTimeout(timer);
    }
}
addHandler(next,'click',function(){
    index++;
    if(index>=size){
        index=0;
    }
    imgChange();
});
addHandler(prev,'click',function(){
    index--;
    if(index<0){
        index=2;
    }
    imgChange();
});
//根据圆点切换图片
for(var j=0;j<size;j++){
    dots[j].setAttribute("date-id",j);
    addHandler(dots[j],'click',function(){
        index=this.getAttribute("date-id");
        imgChange();
    })
}

//鼠标滑过main时停止轮播
addHandler(main,'mouseover',stopAutoPlay);
//鼠标离开main时继续轮播
addHandler(main,"mouseout",starAutoPlay);
starAutoPlay();
//二级菜单显示
function showMenu(){
    for(var i=0;i<menuItem.length;i++){
        subMenuItem[i].style.display="none";
        menuItem[i].style.background="none"
    }
    subMenuItem[index].style.display="block";
    menuItem[index].style.background="rgba(0,0,0,0.1)"
}
//鼠标进入时显示二级菜单
for(var i=0;i<menuItem.length;i++){
    menuItem[i].setAttribute("date-id",i);
    addHandler(menuItem[i],'mouseover',function(){
        subMenu.className="sub-menu";
        index=this.getAttribute("date-id");
        showMenu();
    })
}
//鼠标移出时，不显示二级菜单

//鼠标进入main时，二级菜单不退出
addHandler(subMenu,'mouseover',function(){
    subMenu.className="sub-menu";
})
addHandler(subMenu,'mouseout',function(){
    subMenu.className="sub-menu hide";
})

//鼠标离开menu-conten时，不显示二级菜单
addHandler(menuContent,'mouseout',function(){
    subMenu.className="sub-menu hide";
})
addHandler(banner,'mouseout',function(){
    subMenu.className="sub-menu hide";
})

