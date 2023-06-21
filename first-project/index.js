var openflag = false;
openBtn.addEventListener("click",function(){
    if(openflag==false){
        sideBar.classList.remove("side_hidden");
        overLay.classList.remove("overLay_hidden");
        openflag=true;
    }
    else{
        sideBar.classList.add("side_hidden");
        overLay.classList.add("overLay_hidden");
        openflag=false;
    }
    
})

overLay.addEventListener("click", function(){
    sideBar.classList.add("side_hidden");
    overLay.classList.add("overLay_hidden");
    openflag=false;
})

var changingText = document.getElementsByClassName("changing_text")[0];

var typingText= "Hello, World!".split("");
var typingText2="Hello, JavaScript!".split("");
var typingBool = false;
var typingIndex = 13;
var typingWrap = document.getElementsByClassName("changing_wrap")[0];
var tyInt;
if(typingBool==false){
    typingBool=true;
    setTimeout(function(){
        tyInt = setInterval(typing,200);
        var textpointer= setInterval(cursor,1000);
    },2000)
}

function cursor(){
    var cursor=document.getElementsByClassName("text_cursor")[0];
    cursor.classList.add("cursor_opacity");
    setTimeout(function(){
        cursor.classList.remove("cursor_opacity");
    },500);
}

function typing(){
    var aaa="";
    if(typingBool==true)
    {
        if(typingIndex>7){
            typingIndex--;
            for(var i=0; i<typingIndex; i++)
            {
                aaa+=typingText[i];
            }
            
            changingText.innerText=aaa;
        }
        if(typingIndex==7)
        {
            typingBool=false;
            clearInterval(tyInt);
            setTimeout(function(){
                tyInt=setInterval(typing,150);
            },1500)
        }
    }
    
    else{
        if(typingIndex<14)
        {
            typingIndex++;
            for(var i=0;i<typingIndex;i++)
            {
                aaa+=typingText[i];
            }
            changingText.innerText=aaa;
        }
        if(typingIndex==13)
        {
            typingBool=true;
            clearInterval(tyInt);
            setTimeout(function(){
                tyInt=setInterval(typing,150);
            },2500)
        }
        
    }
}




window.addEventListener("load", function(){
    var thanks_text = document.getElementsByClassName("section_title");
    var section_myname = document.getElementsByClassName("section_myname");
    var typingWrap = document.getElementsByClassName("changing_wrap")[0];

    thanks_text[0].classList.add("opacity_100");
    section_myname[0].classList.add("opacity_100");
    typingWrap.classList.add("opacity_100");
})
var header = document.getElementById("header");
var previousScrollTop = 0;
var record_box = document.getElementsByClassName("record_bigbox");
var profile = document.getElementsByClassName("profile");
var profile_textwrap = document.getElementsByClassName("profile_text_wrap");
var grid = document.getElementsByClassName("grid_background")[0];
var grid_item1=document.getElementsByClassName("grid_item");
var grid_item2 = document.getElementsByClassName("grid_item2");
var topBtn = document.getElementById("top_btn");

window.addEventListener("scroll", function(){
    var scrollTop = document.documentElement.scrollTop;

    if(scrollTop>previousScrollTop)
    {
        header.classList.add("hidden");
    }
    else{
        header.classList.remove("hidden");
        if(scrollTop>100){
            header.classList.add("bg")
        }
        else(
            header.classList.remove("bg")
        )
    }
    previousScrollTop=scrollTop;

    var viewPortHeight = window.innerHeight;
    
    for(var i=0; i<record_box.length; i++)
    {
        var record_y = record_box[i].getBoundingClientRect().y;

        if(record_y<viewPortHeight-100){
            record_box[i].classList.add("opacity_100");
        }
    }
    
    var profile_y = profile[0].getBoundingClientRect().y;
    if(profile_y<viewPortHeight-100){
        profile_textwrap[0].classList.add("move_left");
    }

    var grid_y = grid.getBoundingClientRect().y;

    if(grid_y<viewPortHeight-400){
        for(var i=0; i<grid_item1.length; i++)
        {
            grid_item1[i].classList.add("gird_width");
        }
        for(var i=0; i<grid_item2.length; i++)
        {
            grid_item2[i].classList.add("opacity_100");
        }
    }

    if(scrollTop>500){
        topBtn.classList.remove("invisible");
    }
    else{
        topBtn.classList.add("invisible");
    }
})

var resume_indexbox = document.getElementsByClassName("resume_index_box");

resume_indexbox[0].addEventListener("mouseover",function(){
        resume_indexbox[0].children[0].classList.add("box_hover");
})
resume_indexbox[0].addEventListener("mouseout",function(){
    resume_indexbox[0].children[0].classList.remove("box_hover");
})

resume_indexbox[1].addEventListener("mouseover",function(){
    resume_indexbox[1].children[0].classList.add("box_hover");
})
resume_indexbox[1].addEventListener("mouseout",function(){
resume_indexbox[1].children[0].classList.remove("box_hover");
})

resume_indexbox[2].addEventListener("mouseover",function(){
    resume_indexbox[2].children[0].classList.add("box_hover");
    more_btn.classList.add("opacity_100");
})
resume_indexbox[2].addEventListener("mouseout",function(){
resume_indexbox[2].children[0].classList.remove("box_hover");
})

resume_indexbox[3].addEventListener("mouseover",function(){
    resume_indexbox[3].children[0].classList.add("box_hover");
    career_more_btn.classList.add("opacity_100");
})
resume_indexbox[3].addEventListener("mouseout",function(){
resume_indexbox[3].children[0].classList.remove("box_hover");
})

resume_indexbox[4].addEventListener("mouseover",function(){
    resume_indexbox[4].children[0].classList.add("box_hover");
    career_more_btn.classList.add("opacity_100");
})
resume_indexbox[4].addEventListener("mouseout",function(){
resume_indexbox[4].children[0].classList.remove("box_hover");
})

var contact_list = document.getElementsByClassName("contact_list");
var iconWrap = document.getElementsByClassName("icon_wrap");
var contact_icon=document.getElementsByClassName("contact_icon");


contact_list[0].addEventListener("mouseover",function(){
    iconWrap[0].classList.add("icon_bg_trans");
    contact_icon[0].classList.add("icon_color_trans");
})
contact_list[0].addEventListener("mouseout",function(){
    iconWrap[0].classList.remove("icon_bg_trans");
    contact_icon[0].classList.remove("icon_color_trans")
})

contact_list[1].addEventListener("mouseover",function(){
    iconWrap[1].classList.add("icon_bg_trans");
    contact_icon[1].classList.add("icon_color_trans");
})
contact_list[1].addEventListener("mouseout",function(){
    iconWrap[1].classList.remove("icon_bg_trans");
    contact_icon[1].classList.remove("icon_color_trans")
})

contact_list[2].addEventListener("mouseover",function(){
    iconWrap[2].classList.add("icon_bg_trans");
    contact_icon[2].classList.add("icon_color_trans");
})
contact_list[2].addEventListener("mouseout",function(){
    iconWrap[2].classList.remove("icon_bg_trans");
    contact_icon[2].classList.remove("icon_color_trans")
})

contact_list[3].addEventListener("mouseover",function(){
    iconWrap[3].classList.add("icon_bg_trans");
    contact_icon[3].classList.add("icon_color_trans");
})
contact_list[3].addEventListener("mouseout",function(){
    iconWrap[3].classList.remove("icon_bg_trans");
    contact_icon[3].classList.remove("icon_color_trans")
})

topBtn.addEventListener("click",function(){
    document.documentElement.scrollTop=0;
})


more_btn.addEventListener("click",function(){
    location.href="project1.html";
})