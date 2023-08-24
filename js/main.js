let menWidth=$('#main').innerWidth()
$('#menu').css('left',-menWidth)
let flag=false
$('#menico').click(()=>{
    if(flag){
    $('#menu').animate({left:`-${menWidth}`},800)
        flag=false
    }else{
        $('#menu').animate({left:0},800)
        flag=true
    }
})
$('#close').click(()=>{
    $('#menu').animate({left:`-${menWidth}`},800)
    flag=false
})
/////////////////////////////////////////////////
// Menu Scrollto
$('#main ul li a[href^="#"]').click(function(){
    $('#main ul li a').removeClass('active')
    $(this).addClass('active')
    let href =$(this).attr('href')
    let offset=$(href).offset().top
    $('html,body').animate({scrollTop:offset},400)
})
///////////////////////////////////////////////////
$('.card-body').css('display','none')
$('.card-header').click(function(){
    $(this).siblings().find('.card-body').slideUp(500)
    $(this).find('.card-body').slideToggle(500)
})
let toDate=new Date('2024-03-25').getTime()
let interval=setInterval(function(){
    let currentDate=new Date().getTime();
    let countDown=toDate-currentDate;
    let day=Math.floor(countDown/(1000*60*60*24));
    let hours=Math.floor((countDown%(1000*60*60*24))/(1000*60*60));
    let minutes=Math.floor((countDown%(1000*60*60))/(1000*60));
    let seconds=Math.floor((countDown%(1000*60))/1000);
    document.getElementById('displayCount').innerHTML=`
    <span>${day} Days</span>
    <span>${hours} Hr</span>
    <span>${minutes} Min</span>
    <span>${seconds} Sec</span>
    `
    if(countDown<0){
        clearInterval(interval)
    }
},1000)
let total=100
$('#textArea').keyup(function(){
     total=100-this.value.length;
     if(total<0){
        display2()
     }else{
     display()
     }    
})
function display(){
document.getElementById('displayRemain').innerHTML=`
   ${total} <span>Character Remaining</span>
    `
}
display()
function display2(){
    document.getElementById('displayRemain').innerHTML=`
    Exceded The Recomended Character Number
    `
}   