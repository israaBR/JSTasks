// Task 1
// function display_course(course){
//     let defaultCourse = {
//         name: "course name",
//         duration: "course duration",
//         owner: "course owner",
//     }
//     defaultCourse = Object.assign(defaultCourse, course);
//     console.log(`Course Name: ${defaultCourse.name}, Course Duration: ${defaultCourse.duration}, Course Owner: ${defaultCourse.owner}`);
// }
// display_course({name: "JavaScript", duration: "2 weeks"});


// Task 2
let buttons_parent = document.getElementById("buttons");
let info_parent = document.getElementById("user-info");

async function display_user_info(userID){
    try {
        let user = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`).json();
        Object.entries(user).forEach((item)=>{
            let newUserInfo = document.createElement("p");
            newUserInfo.textContent = `${item[0]}: ${item[1]}`;
            info_parent.append(newUserInfo);
        });

    } catch (errorMsg) {
        console.log(errorMsg);
    }
}
fetch("https://jsonplaceholder.typicode.com/users")
.then((users)=>{
    users = users.json();
    for(let i=0; i< users.length; i++)
    {
        let newUserBtn = document.createElement("button");
        newUserBtn.textContent = users[i].name;
        newUserBtn.setAttribute("id", users[i].id);
        newUserBtn.addEventListener("click", (e)=>{display_user_info(e.target.id)});
        buttons_parent.append(newUserBtn);
    }
})
.catch((errorMsg)=>{
    console.log(errorMsg);
});
