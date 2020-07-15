function formValidate()
{
                
    var email = document.forms["RegForm"]["username"];   
    var password = document.forms["RegForm"]["password"];   
   
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    
     if (password.value == "") {
            window.alert("Please enter your password");
                return false;
            }
        
}