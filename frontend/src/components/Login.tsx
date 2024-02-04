import { FC } from "react";
import  "../App.css";
interface CustomizeProps {}

const Login: FC<CustomizeProps> = ({}) => {
  return (
  <div className="text-white mt-20 register">
    <input type="text" placeholder="UserName" id="username" className="border-2 text-black" />
    <input type="text" placeholder="Email" className="border-2 text-black" id="email" />
    <input type="password" placeholder="Password" className="border-2 text-black" id="password" />
    <button className="bg-blue-500 text-white p-2 rounded" onClick={()=>{
        let password = (document.getElementById("password") as HTMLInputElement).value;
            const userData = {
                name: (document.getElementById("username") as HTMLInputElement).value,
                email: (document.getElementById("email") as HTMLInputElement).value,
                password: password
            }
            fetch("http://localhost:3000/login", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    alert("Login Successfull");
                    window.location.href = "/";
                })
                .catch((error) => {
                    alert("Login Failed");
                    return;
                });

    }}>Login</button> 
  </div>
  ); 
};

export default Login;
