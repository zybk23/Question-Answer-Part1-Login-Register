import React, {Component} from 'react';
import axios from "axios"


class Register extends Component {
    state={
        name:"",
        email:"",
        password:""
    };
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    onSubmit=(e)=>{
        e.preventDefault();
        const user={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        } ;
        this.register(user)
    };
    register=(newUser)=>{
        return axios.post("http://localhost:5000/auth/register",{
            name:newUser.name,
            email:newUser.email,
            password:newUser.password
        })
            .then(res=>{
                console.log(res)
                this.props.history.push("/login")
            })
            .catch(err=>{
                if (err){
                    alert("Lütfen bilgilerinizi kontrol ediniz")
                }
            })
    };

    render() {
        const {name,email,password}=this.state;
        return (
            <div className={"container mt-5"}>
                <form style={{width:"50%",paddingTop:"20%",paddingLeft:"20%"}} onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="name"
                               name={"name"}
                               value={name}
                               onChange={this.onChange}
                               className="form-control"
                               placeholder="Enter name"/>
                    </div>
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

export default Register;
