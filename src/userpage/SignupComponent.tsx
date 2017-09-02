/*import React from 'react';
import axios from 'axios'

class Signup extends React.Component {
    psw:string;
    username:string;
    email:string;
    cpsw:string;
    constructor() {
        super();
        this.handlePswChange=this.handlePswChange.bind(this);
        this.handleCPswChange=this.handleCPswChange.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleNameChange(e){
        this.setState({username:e.target.value});
    }
    handlePswChange(e){
        this.setState({psw:e.target.value});
    }
    handleCPswChange(e){
        this.setState({cpsw:e.target.value});
    }
     handleEmailChange(e){
        this.setState({email:e.target.value});
    }
    handleClick(){
        if (this.psw.length > 0&&this.username.length > 0
            &&this.cpsw.length>0&&this.email.length>0)
        {
            if (this.psw == this.cpsw) {
                this.signup()
            }else{
                alert("password not same,please check again")
            }

        }
        else{
            alert("please fill all table")
        }
    }
    signup(){
        var params = new URLSearchParams();
        params.append('name',this.username);
        params.append('psw',this.psw);
        params.append('email',this.email);
        var instance = axios.create({
            timeout: 1000,
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        });
        instance.post('/signup',params)
            .then(function (response) {
                if(response.data.code == 200){
                    alert("Signup success please login");
                }else if(response.data.code == 230){
                    alert("Name is exist please change");
                }else if(response.data.code == 231){
                    alert("Email is exist please change");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
  render() {
    return (
        <div>
            <p>Name</p>
            <input label="Name:"   onChange={this.handleNameChange.bind(this)}/>
            <p>Password</p>
            <input label="Psw:"  onChange={this.handlePswChange.bind(this)}/>
            <p>ConfrimPassword</p>
            <input label="ConfirmPsw:" onChange={this.handleCPswChange.bind(this)}/>
            <p>Email</p>
            <input label="email:"  onChange={this.handleEmailChange.bind(this)}/>
            <p></p>
            <button type="submit" onClick={this.handleClick}>Submit</button>
        </div>
    );
  }
}

export default Signup;*/
