function clickSubmit(form)
{
  if(form.userID.value == "admin@gmail.com" && form.pass.value == "admin") //checks if in data base (for now if one person logs in (admin))
  {
    alert("Correct") //testing purpose. script for checking to see if correct then the action if right.
  }
  else {
    {
      alert("The username or password is incorrect.")
    }
  }
}

function saveAccount()
{
  var confirmAccount = confirm(`Save infomation as account?\n\nEmail Address: ${form.userID.value}\nPassword: ${form.pass.value}`);
               if( confirmAccount == true ) {
                  //insert saving infomation
                  return true;
               }
               else {
                  return false; //just cancels form.
               }
}
