document.addEventListener("DOMContentLoaded", function () {
    fetchUserData();
});
async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const dataContainer = document.getElementById("api-data");
    try {
        let response = await fetch(apiUrl);
       
        const users =await response.json();
        dataContainer.innerHTML = '';
        const userList = document.createElement('ul');
        console.log(users);
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
            
        });
        dataContainer.appendChild(userList);
    }

    catch {
        dataContainer.innerHTML = '';
        dataContainer.innerText = "Failed to load user data.";

    }
}