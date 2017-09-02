import React from 'react';
import axios from 'axios'

class Login extends React.Component<any,any> {
    psw:string;
    username:string;
    constructor() {
        super();
        this.handlePswChange=this.handlePswChange.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleNameChange(e:any){
        this.username = e.target.value ;
    }
    handlePswChange(e:any){
        this.psw = e.target.value;
    }
    handleClick(){
        if (this.psw.length > 0&&this.username.length > 0)
        {
                this.login()
        }
        else{
            alert("please fill all table")
        }
    }

    login(){
        var params = new URLSearchParams();
        params.append('name',this.username);
        params.append('psw',this.psw);
        var instance = axios.create({
            timeout: 1000,
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        });
        instance.post('/login',params)
            .then(function (response) {
            var exdate=new Date();
            exdate.setDate(exdate.getDate() + 30);
            document.cookie="userid"+ "=" + encodeURI(response.data.userid) + ((30==null) ? "" : ";expires="+exdate.toDateString());
            document.cookie="username"+ "=" + encodeURI("u3shadow") + ((30==null) ? "" : ";expires="+exdate.toDateString());
            console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        if(getCookie("userid") == "") {
            return (
                <div>
                    <input ref="name" value={this.username} onChange={this.handleNameChange.bind(this)}/>
                    <input ref="psw" value={this.psw} onChange={this.handlePswChange.bind(this)}/>
                    <button type="submit" onClick={this.handleClick}>Submit</button>
                </div>
            );
        }else{
           var username = getCookie("username")
           return(
               <p>hello {username}!</p>
           );
        }
  }
}
function getCookie(c_name:string){
        if (document.cookie.length>0){　　
           var c_start=document.cookie.indexOf(c_name + "=")　
            if (c_start!=-1){
                c_start=c_start + c_name.length+1　
             var   c_end=document.cookie.indexOf(";",c_start)　
                if (c_end==-1) c_end=document.cookie.length
                return decodeURI(document.cookie.substring(c_start,c_end))　
            }
        }
        return ""
    }

export default Login;
