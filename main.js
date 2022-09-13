$(document).ready(function(){
    function Func(){
      function F1(){
        $('.box1').css({"background-color":"white" , "transition":".5s"})
        $('.box13').css({"background-color":"rgba(57, 57, 57, 0.625) ", "transition":".5s"})
    }
    setTimeout(F1,100)
    function F2(){
        $('.box2').css({"background-color":"white", "transition":".5s"})
        $('.box1').css({"background-color":"rgba(57, 57, 57, 0.625)", "transition":".5s"})
    }
    setTimeout(F2,200)
    function F3(){
        $('.box3').css({"background-color":"white", "transition":".5s"})
        $('.box2').css({"background-color":"rgba(57, 57, 57, 0.625)", "transition":".5s"})
    }
    setTimeout(F3,300)
    function F4(){
        $('.box4').css({"background-color":"white", "transition":".5s"})
        $('.box3').css({"background-color":"rgba(57, 57, 57, 0.625)", "transition":".5s"})
    }
    setTimeout(F4,400)
    function F5(){
        $('.box5').css({"background-color":"white", "transition":".5s"})
        $('.box4').css({"background-color":"rgba(57, 57, 57, 0.625)", "transition":".5s"})
    }
    setTimeout(F5,500)
    function F6(){
        $('.box6').css({"background-color":"white", "transition":".5s"})
        $('.box5').css({"background-color":"rgba(57, 57, 57, 0.625)", "transition":".5s"})
    }
    setTimeout(F6,600)
    function F7(){
        $('.box7').css({"background-color":"white", "transition":".5s"})
        $('.box6').css({"background-color":"rgba(57, 57, 57, 0.625)", "transition":".5s"})
    }
    setTimeout(F7,700)
    function F9(){
        $('.box9').css({"background-color":"white", "transition":".5s"})
        $('.box7').css({"background-color":"rgba(57, 57, 57, 0.625)", "transition":".5s"})
    }
    setTimeout(F9,800)
    function F10(){
        $('.box10').css({"background-color":"white" , "transition":".5s"})
        $('.box9').css({"background-color":"rgba(57, 57, 57, 0.625)", "transition":".5s"})
    }
    setTimeout(F10,900)
    function F11(){
        $('.box11').css({"background-color":"white", "transition":".9s"})
        $('.box10').css({"background-color":"rgba(57, 57, 57, 0.625)", "transition":".5s"})
    }
    setTimeout(F11,1000)
    function F12(){
        $('.box12').css({"background-color":"white", "transition":".5s"})
        $('.box11').css({"background-color":"rgba(57, 57, 57, 0.625)", "transition":".5s"})
    }
    setTimeout(F12,1100)
    function F13(){
        $('.box13').css({"background-color":"white", "transition":".5s"})
        $('.box12').css({"background-color":"rgba(57, 57, 57, 0.625)", "transition":".5s"})
    }
    setTimeout(F13,1200)   
    }
    Func()
   setInterval(Func,1300)
})