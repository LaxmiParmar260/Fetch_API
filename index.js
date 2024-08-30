let button = document.querySelector(".btn");
let tablebody = document.querySelector("#table_body");
console.log(tablebody);

const fetchData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    let tabledata = "";
    console.log(users);
    users.forEach((user) => {
      tabledata += `<tr>
            <td> ${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
          </tr>`;
    });
    tablebody.innerHTML = tabledata;
  } catch (error) {
    console.log("something went wrong");
  }
};
button.addEventListener("click", fetchData);
