function validateRegister()
{
    var Email=document.getElementById("Email").value;
    var Name=document.getElementById("Name").value;
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;
    
    if(Email !="")
    {
     if(Email.length>2)
     {
        if(Name!=""){
            if(Name.length>3){
         
        if(password!=""){
          if(password.length>3){
              
            
            
            if(confirmpassword!=""){
                if(confirmpassword.length>4 &&confirmpassword.length<16){

                
                        document.getElementById("resp").innerHTML="Account created";
                    }
                    else{
                        document.getElementById("resp").innerHTML="Invalid Confirmed password  ";
                    }
                }
                else{
                    document.getElementById("resp").innerHTML="Confirmed password cannot be empty";
                }
            }
            else{
                document.getElementById("resp").innerHTML="Invalid password";
                }
            } 
        else{
            document.getElementById("resp").innerHTML="password cannot be empty";
        }
 
        
    }
        else{
         document.getElementById("resp").innerHTML="Invalid Name ";
    }

    }
   
    else{
        document.getElementById("resp").innerHTML=" Name cannot be empty";
     }

    }  
    
    else{
        document.getElementById("resp").innerHTML="Invalid Email Number";
    }
  
    }
    else{
            document.getElementById("resp").innerHTML=" Email cannot be empty";
        }       

}