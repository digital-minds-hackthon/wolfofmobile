import { FC } from "react";
import  "../App.css";
interface CustomizeProps {}

const Register: FC<CustomizeProps> = ({}) => {
  return (
  <div className="text-white mt-20 register">
    <input type="text" placeholder="UserName" id="username" className="border-2 text-black" />
    <input type="text" placeholder="Email" className="border-2 text-black" id="email" />
    <input type="password" placeholder="Password" className="border-2 text-black" id="password" />
    <input type="password" placeholder="Confirm Password" className="border-2 text-black" id="confirm-password" />
    <button className="bg-blue-500 text-white p-2 rounded" onClick={()=>{
        let password = (document.getElementById("password") as HTMLInputElement).value;
        let confirmPassword = (document.getElementById("confirm-password") as HTMLInputElement).value;
        if(password === confirmPassword){
          alert("Registration Successfull");
            const userData = {
                name: (document.getElementById("username") as HTMLInputElement).value,
                email: (document.getElementById("email") as HTMLInputElement).value,
                password: password
            }
            fetch("http://localhost:3000/register", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
                window.location.href = "/";
        }
        else{
          alert("Password and Confirm Password do not match");
          return;
        }

    }}>Register</button> 
  </div>
  ); 
};

export default Register;
