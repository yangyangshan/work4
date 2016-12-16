//数组forEach方法补丁
Array.prototype.forEach = function(callback){
  var a = 0,
    len = this.length;
  while(a < len){
    callback(this[a], a++, this);
  }
};
//数组map方法补丁
Array.prototype.map = function(callback){
  var a = 0,
    len = this.length,
    result = [];
  while(a < len){
    result.push(callback(this[a], a++, this));
  }
  return result;
};
//数组map方法补丁
Array.prototype.filter = function(callback){
  var a = -1,
    len = this.length,
    result = [];
  while(++a < len){
    callback(this[a], a, this) && result.push(this[a]);
  }
  return result;
};
var dataimg=[
  {
    url:"./images/50677_0_1397288723.jpg",
    hrefs:"https://www.baidu.com"
  },
  {
    url:"./images/7386216.jpg",
    hrefs:"https://nuomi.baidu.com"
  },
  {
    url:"./images/a_112815785.jpg",
    hrefs:"https://tieba.baidu.com"
  },
  {
    url:"./images/fgh.jpg",
    hrefs:"https://tieba.baidu.com"
  }
];
function lunbo(dataimg){
  function lunbotu(url,href){
    var pic=document.createElement("a");
      pic.href=href;
      pic.style.background="url("+url+") no-repeat";
      return pic;
  }
  var imagesall=document.createElement("div");
    imagesall.className="mainimg";
  var images=dataimg.map(function(item){
    var img=lunbotu(item.url,item.hrefs);
    imagesall.appendChild(img);
    return img;
    });
  var a=0,
    imageslen=dataimg.length,
    imagesindex=dataimg.length-1;
    images[0].className="current";
  var timer=setInterval(function(){
    now=(now+1)%yuandian.length;
      my();  
  },3000);

  imagesall.onmouseover= function () { 
     clearInterval(timer); 
    };

  imagesall.onmouseout= function() { 
     timer=setInterval(function(){
    now=(now+1)%yuandian.length;
      my();
    },3000);
    }
    
  var lefter=document.createElement("div");
    lefter.className="lefter";
  lefter.onclick=function(){
    if(now==0){now=yuandian.length};
   now=(now-1)%yuandian.length;
      my(); 
  }
  var righter=document.createElement("div");
    righter.className="righter";
  righter.onclick=function(){
  now=(now+1)%yuandian.length;
      my();
  }
  var yuandian= document.getElementById('point').getElementsByTagName('li');
  var now=0;
  function my(){
          for(var i=0; i<yuandian.length; i++){
          yuandian[i].style.background='black'; 
          images[i].className="currentmove"
                } 
          images[now].className="current";
          yuandian[now].style.background='red'
            };
  for(var i=0; i<yuandian.length; i++){
    yuandian[i].index=i;
    yuandian[i].onclick= function(){
    now=this.index;
    my();
  }
  };
  var Fragment=document.createDocumentFragment(); 
  imagesall.appendChild(righter);
  imagesall.appendChild(lefter);
  Fragment.appendChild(imagesall);
  document.getElementById("main").appendChild(Fragment);
  }
  lunbo(dataimg);




 var title=document.getElementById('choosecard').getElementsByTagName('a'),
      choose=document.getElementById('choose').getElementsByTagName('ul');
      title[0].style.background='rgb(244,244,244)';
      title[0].style.color='red';
      choose[0].style.display='block';
  for(var i=0;i<title.length;i++){
                title[i].index=i;
                  title[i].onclick= function () {
                    for(var i=0;i<title.length;i++){
                        title[i].style.background='rgb(111,111,111)';
                        choose[i].style.display='none';
                        title[i].style.color='white';
                    }
                    this.style.background='rgb(244,244,244)';
                    this.style.color='red';
                    choose[this.index].style.display='block';
                }
            };


var moveimg=document.getElementById('moveimg'),
    moveul=document.getElementById('moveimg').getElementsByTagName('ul'),
    movelr=document.getElementById('movelr').getElementsByTagName('a'),
    now=0,
    panduan=true;
movelr[0].onclick=function(){
    if (now==0){
      now=moveul.length;
    }
    moveimg.style.marginLeft=-1110*now+'px';
    now--;
    moveimg.style.marginLeft=-1110*now+'px';
  
};
movelr[1].onclick=function(){
    now++;
    if (now==moveul.length) {
      now=0;
    };
    moveimg.style.marginLeft=-1110*now+'px';
  
};
// function moveall(){
//   moveimg.style.transition='1s all ease';
//   moveimg.style.mrginLeft=-1200*now+'px';
//   moveimg.addEventListener('transitionend', function () {
//                     panduan=true;
//                     if(now==4){
//                         moveimg.style.left=0;
//                         now=0;
//                     }
//                     /*if(now==-1){
//                         now=4;
//                         //oBody.style.left=oBody.offsetWidth/2+'px';
//                         //alert(oBody.style.left);
//                         //now=4;
//                     }*/
//                     moveimg.style.transition='';
//                 },false);
// }