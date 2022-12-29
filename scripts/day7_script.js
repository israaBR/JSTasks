// Task 1
var table_body = document.getElementById("table-body");
function getUserData() {
  var xhr = new XMLHttpRequest();
  xhr.open("get", "https://jsonplaceholder.typicode.com/users");
  xhr.send("");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var result = xhr.response;
        var users = JSON.parse(result);
        for(var i=0; i<users.length; i++)
        {
            var row = document.createElement("tr");
            var ID = document.createElement("td");
            var Name = document.createElement("td");
            var Email = document.createElement("td");
            ID.innerHTML = users[i].id;
            Name.innerHTML = users[i].name;
            Email.innerHTML = users[i].email;
            row.append(ID, Name, Email);
            table_body.append(row);
        }
      }
    }
  };
}
document.getElementById("get-users-btn").addEventListener("click", getUserData);

// Task 2
function save_cookie(key, value)
{
    document.cookie = String(key)+"="+String(value);
}
function get_cookie(key)
{
    var cookies = document.cookie.split(";");
    var isFound = false;
    for(var i=0; i<cookies.length; i++)
    {
        var cookie_key_value = cookies[i].split("=");
        if(cookie_key_value[0] == key)
        {
            isFound = true;
            document.getElementById("cookies-paragragh").innerText = cookies[i]; 
        }
    }    
    if(!isFound)
        document.getElementById("cookies-paragragh").innerText = "cookie is not found";    
}
function delete_cookie(key)
{
    var date = new Date();
    console.log(date.toUTCString());
    var cookies = document.cookie.split(";");
    for(var i=0; i<cookies.length; i++)
    {
        var cookie_key_value = cookies[i].split("=");
        if(cookie_key_value[0] == key)
        {
            var expires = "; expires=" + date.toUTCString();
            document.cookie = cookie_key_value[0]+"="+cookie_key_value[1]+expires;
            console.log(expires);
        }    
    }  
}
document.getElementById("save-btn").addEventListener("click",()=>{
    save_cookie(document.getElementsByName("key")[0].value, document.getElementsByName("value")[0].value);
} );
document.getElementById("get-btn").addEventListener("click",()=>{
    get_cookie(document.getElementsByName("key")[0].value);
} );
document.getElementById("delete-btn").addEventListener("click",()=>{
    delete_cookie(document.getElementsByName("key")[0].value);
} );
