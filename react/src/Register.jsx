import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [first_name, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setpsCon] = useState('')
    const navigate = useNavigate()



     const handleSubmit = (e)=>{
         e.preventDefault();
         console.log('handle submit working')


    const data = new FormData();
    data.append('name',first_name)
    data.append('email',email)
    data.append('password',password)
    data.append('password_confirmation',password_confirmation)

        axios.post('http://localhost:8000/api/register',data).then((data)=>{

        console.log(data);
        navigate('/')

    })



        }




    return (






        <form onSubmit={handleSubmit}  method="POST">

            <input type="text" value={first_name} onChange={(e)=>{
                setFirstName(e.target.value);

            }}
             name="name" id="" placeholder="Enter ur name"/><br></br> <br></br>



            <input value={email}type="email" onChange={(e)=>{
                setEmail(e.target.value);

            }} name="email" placeholder="enter email"/><br></br><br></br>



            <input value={password} type="password" placeholder="enter password" onChange={(e)=>{
                setPassword(e.target.value);

            }}name="password"cplaceholder="Enter ur password"/><br></br><br></br>


            <input value={password_confirmation}
            type="password" name="password_confirmation"  onChange={(e)=>{
                setpsCon(e.target.value);

            }} placeholder="re enter your password" /><br></br><br></br>
            <button>Register</button>


        </form>


     );
}

export default Register;
