var body = document.getElementsByName("body");
var first_ani = document.getElementsByClassName("first_ani");
var homeBtn= document.getElementsByClassName("home_btn")[0];
var nextpageBtn= document.getElementsByClassName("nextpage_btn")[0];
var titleBox=document.getElementsByClassName("title_box")[0];
var allWrap = document.getElementsByClassName("all_wrap")[0];

window.addEventListener("load",function(){
    first_ani[0].classList.add("full");

    setTimeout(function(){
        homeBtn.classList.add("opacity_100");
        titleBox.classList.add("opacity_100");
        titleBox.classList.add("margin_reset");
    },1000);

    setTimeout(function(){
        slideBox.classList.add("slide_load");
        slide_textwrap.classList.add("opacity_100");
        first_ani[0].classList.add("add_scroll");
        nextpageBtn.classList.add("opacity_100");
    },1500);

})



var slide_container = document.getElementById("slide_container");
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");
var imageWidth =300;
var previousIndex =0;
var thisIndex=0;
var items = document.getElementsByClassName("item");
var nextflag=true;
var prevflag=true;

function navigateTo(data){
    thisIndex+=data;
    slide_container.style.transform=`translateX(-${thisIndex*imageWidth}px)`;

    if(thisIndex>=items.length-2)
    {
        nextBtn.classList.add("slide_btn_hidden");
        nextflag=false;
        thisIndex=items.length-2;
        slide_container.style.transform=`translateX(-${thisIndex*imageWidth}px)`
    }
    else{
        nextBtn.classList.remove("slide_btn_hidden");
        nextflag=true;
    }
    if(thisIndex<=0)
    {
        prevBtn.classList.add("slide_btn_hidden");
        prevflag=false;
        slide_container.style.transform="translateX(0px)";
        thisIndex=0;
    }
    else{
        prevBtn.classList.remove("slide_btn_hidden");
        prevflag=true;
    }

    previousIndex=thisIndex;
}

prevBtn.addEventListener("click",function(){
    navigateTo(-1);
})
nextBtn.addEventListener("click",function(){
    navigateTo(1);
})


var startPoint =0;
var endPoint =0;
var mouse_arr=[];

slide_container.addEventListener("drag",(e)=>{
    e.preventDefault();
    mouse_arr.push(e.pageX);
})
slide_container.addEventListener("dragend",(e)=>{
    e.preventDefault();
    // console.log(mouse_arr[0])
    // console.log("mousedrop", e.pageX);
    endPoint=e.pageX;

    if(mouse_arr[0]<endPoint)
    {
        if(prevflag==true)
        {
            if(endPoint-mouse_arr[0]>200){
            
                navigateTo(-2);
            }
            else
                navigateTo(-1);
            
            // if(endPoint-mouse_arr[0]>50){
            //     navigateTo(-1);
            // }
        }
    }

    else if(mouse_arr[0]>endPoint){
        if(nextflag==true)
        {
            if(mouse_arr[0]-endPoint>200)
            {
                navigateTo(2);
            }
            else    
                navigateTo(1);
            // if(mouse_arr[0]-endPoint>50){
            //     navigateTo(1);
            // }
        }
    }
    mouse_arr=[];
})


var project = document.getElementById("my_project");
var slideBox = document.getElementsByClassName("slide_box")[0];
var slide_textwrap = document.getElementsByClassName("slide_explain_wrap")[0];


homeBtn.addEventListener("click",function(){
    first_ani[0].classList.remove("full");
    homeBtn.classList.remove("opacity_100");
    first_ani[0].classList.remove("add_scroll");
    first_ani[0].classList.add("overflow_hidden");
    setTimeout(function(){
        location.href="index.html";
    },1000)
})

var go_nextpage = document.getElementsByClassName("nextpage_btn_img")[0];

go_nextpage.addEventListener("click",function(){
    first_ani[0].classList.remove("full");
    homeBtn.classList.remove("opacity_100");
    first_ani[0].classList.remove("add_scroll");
    first_ani[0].classList.add("overflow_hidden");
    setTimeout(function(){
        location.href="project2.html"
    },1000);
})

var go_prevpage = document.getElementsByClassName("prevpage_btn_img")[0];

go_prevpage.addEventListener("click",function(){
    first_ani[0].classList.remove("full");
    homeBtn.classList.remove("opacity_100");
    first_ani[0].classList.remove("add_scroll");
    first_ani[0].classList.add("overflow_hidden");
    setTimeout(function(){
        location.href="project1.html"
    },1000);
})