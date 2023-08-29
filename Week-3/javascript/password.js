function isStrongPassword(pass){
  if(pass.length < 8)
  {
    console.log("Password Is Too Short");
    return false;
  }
  else if(pass.toLowerCase() == pass)
  {
    console.log("Does Not Contain Any Capital Letter");
    return false;
  }
  else if(pass.includes("password"))
  {
    console.log("password contain the string password");
    return false;
  }
  else
  {
    return true;
  } 
}

var passowrd = "mandar"
isStrongPassword(passowrd)