import React, {Component} from 'react';
import "./log-reg.css"
import axios from "axios";

class Login extends Component {
    state={
        email:"",
        password:"",
    };
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    Login=(user)=>{
        axios.post("http://localhost:5000/auth/login",{
            email:user.email,
            password:user.password
        })
            .then(res=>{
                this.props.history.push("/")
            })
            .catch(err=>{
                if(err){
                    alert("Bilgilerinizi Kontrol ediniz")
                }
            })
    };
    onSubmit=(e)=>{
        e.preventDefault();
        const user={
            email:this.state.email,
            password:this.state.password
        };
        this.Login(user)
    };
    render() {
        const {email,password}=this.state;
        return (
            <div className={"container mt-5"}>
                <form style={{width:"50%",paddingTop:"20%",paddingLeft:"20%"}} onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email"
                               name={"email"}
                               value={email}
                               onChange={this.onChange}
                               className="form-control"
                               placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password"
                               name={"password"}
                               value={password}
                               onChange={this.onChange}
                               className="form-control"
                               placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Kayıt ol</button>
                </form>
            </div>
        );
    }
}
export default Login;
