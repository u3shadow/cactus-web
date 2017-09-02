/*import React, { Component } from 'react';
import axios from 'axios'
import {unescape} from "querystring";

class FindGame extends React.Component {
    psw:string;
    username:string;
    id:Array;
    sid:Array;
    constructor() {
        super();
        var id,sid;
        this.handlePswChange=this.handlePswChange.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.login = this.login.bind(this)
    }
    handleNameChange(e){
        this.username = e.target.value;
    }
    handlePswChange(e){
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
        var userid = this.getCookie("userid")
        var params = new URLSearchParams();
        params.append('id',userid);
        var instance = axios.create({
            timeout: 1000,
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        });
        instance.post('/getgames',params)
            .then(function (response) {
                 this.id = response.data.id
                 this.sid = response.data.sid
                alert(this.id);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
     getCookie(c_name){
        if (document.cookie.length>0){　　
           var c_start=document.cookie.indexOf(c_name + "=")　
            if (c_start!=-1){
                c_start=c_start + c_name.length+1　
             var   c_end=document.cookie.indexOf(";",c_start)　
                if (c_end==-1) c_end=document.cookie.length
                return unescape(document.cookie.substring(c_start,c_end))　
            }
        }
        return ""
    }
  render() {
         this.login()

    return (
        <div>
            <iframe src={"http://steamspy.com/app/"+this.sid[0]} width="100%" height="1000" scrolling="no"></iframe>
        </div>
    );
  }
}
export default FindGame;*/
