
function validlogin(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email !=""){
        if(email.length>3  && email.length<20){

            if(password!=""){
                if(password.length>3 && password.length<20){
                    document.getElementById("resp").innerHTML=" Login Successfully";
                }else{
                    document.getElementById("resp").innerHTML=" Invaild Password";
                }
            }else{
                document.getElementById("resp").innerHTML=" Please Enter the Password";
            }
        }else{
            document.getElementById("resp").innerHTML=" Invalid Email";
        }
    }else{
        document.getElementById("resp").innerHTML=" Please enter the Email";
    }

}