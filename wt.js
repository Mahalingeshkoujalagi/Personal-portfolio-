
function validate()
{
     var q = document.getElementById("1").value;
//    var r = document.getElementById("4");
    
    if(q==="")
    {
        alert("enter data correctly");
    }
    
//    var p1 = p.value.search(/^[A-Z]{1}[a-z]+,[A-Z]{1}[a-z]+,[A-Z]{1}[a-z]+.$/);
   
    if(q.search(/^[a-z]+\@[a-z]+\.[a-z]+$/)!==-1){
        a=true;
        
    }
    else
    {
        a=false;
        alert("enter correctly");
        
    }
     var s = document.getElementById("2");
     if(s==="")
    {
        alert("enter data correctly");
    }
    
    if(s.value.search(/^[A-Z]+[a-z]+\d+$/)!==-1)
    {
        b=true;
        
        
    }
    else
    {
        b=false;
    }

    
    if(a===true && b===true)
    {
        window.location.assign("Home.html");
    }
    else
    {
        alert("enter correctly");
    }
}

