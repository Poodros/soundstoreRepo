//Custom Client side JaveScript for UI Functionality

//Delete Confirmation popup - attach to an HTML element with the class of "delete"
$('.delete').on('click', () =>
{
    return confirm('Are you sure you want to delete this?')
})

//compare passwords when register
function comparePasswords()
{
    var pw1 = document.getElementById("password").value
    var pw2 = document.getElementById("confirm").value
    var pwMsg = document.getElementById("pwMsg")

    if(pw1 != pw2)
    {
        pwMsg.innerHTML = "Passwords do NOT match"
        pwMsg.className = "text-danger"
        return false
    }
    else
    {
        pwMsg.innerHTML = ""
        pwMsg.className = ""
        return true
    }
}
