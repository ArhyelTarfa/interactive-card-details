
    function textcheck() {
        var card = document.getElementById("cardnumber");
        var number = document.getElementById('number');
        card.addEventListener("input",(e)=>{
            if(isNaN(e.target.value))
            {
              document.getElementById("error").classList.add("error");
              document.getElementById("error").style.display="block";
              document.getElementById("cardnumber").style.borderColor="red";
            }
            else
            {
            number.innerHTML=e.target.value
            document.getElementById("error").style.display="hidden";
              
            }
        })
    }
    function namecheck() {
        var card = document.getElementById("cardname");
        var name = document.getElementById('name');
        card.addEventListener("input",(c)=>{
            name.innerHTML=c.target.value
        })
    }
    
    function textcheck1() {
        var card = document.getElementById("month");
        var  m = document.getElementById("M")
        card.addEventListener("input",(f)=>{
            if(isNaN(f.target.value))
            {
              document.getElementById("error1").classList.add("error");
              document.getElementById("error1").style.display="block";
              document.getElementById("month").style.borderColor="red";
            }
            else
            {
              m.innerHTML=f.target.value
              document.getElementById("error1").style.display="hidden";
              
            }
        })
    }
    function textcheck2() {
        var year = document.getElementById("year");
        var  y = document.getElementById("Y")
        year.addEventListener("input",(g)=>{
            if(isNaN(g.target.value))
            {
              document.getElementById("error2").classList.add("error");
              document.getElementById("error2").style.display="block";
              document.getElementById("month").style.borderColor="red";
            }
            else
            {
              y.innerHTML=g.target.value
              document.getElementById("error1").style.display="hidden";
            }
        })
    }
    function textcheck3() {
        var cvc= document.getElementById("cvc");
        var  inputcvc = document.getElementById("inputcvc")
        inputcvc.addEventListener("input",(f)=>{
            if(isNaN(f.target.value))
            {
              document.getElementById("error2").classList.add("error");
              document.getElementById("error2").style.display="block";
              document.getElementById("month").style.borderColor="red";
            }
            else
            {
              cvc.innerHTML=f.target.value
              document.getElementById("error1").style.display="hidden";
            }
        })
    }

  var button= document.getElementById("button")
    button.addEventListener("click",()=>{
        
       document.getElementById("form").style.display="none";
       document.getElementById("complete").style.display="block"
    })
  var complete= document.getElementById("submit")
    complete.addEventListener("click",()=>{
      window.location.reload();
    })