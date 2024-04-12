function Create(){
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const con_password = document.getElementById("confirm-password").value;
console.log(name+" "+email+" "+password+" "+con_password);
console.log();
}
function fetchData() {
    return new Promise((resolve, reject) => {
      fetch("./data.json")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  function Login() {
    fetchData()
      .then((data) => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const match = data.find((a) => a.email == email && a.password == password);
        if (match) {
          window.location.href = "/index.html";
          console.log("Found");
          localStorage.setItem("token", email);
        } else {
          console.log("Not Found");
        }
      })
      .catch((error) => {
        
        console.error("Error fetching data:", error);
      });
  }
  