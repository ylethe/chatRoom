/**
 * Created by yjf on 16-11-16.
 */
import React from 'react';
import img from '../../images/1a2d4c53aa47ff96bd87c894cfdf2b6c.jpg';
import {hashHistory} from 'react-router';
import './index.styl';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      nickname:''
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
  handleChange(e){
    e.preventDefault();
    let name=e.target.value;
    if(name=""){
      this.setState({
        error:"昵称不能为空"
      })
    }
    else{
      this.setState({
        nickname:name
      });
      localStorage.setItem('nickname',name);
    }
    console.log(name);
  }
  handleClick(val){
    if(val!=null){
      socket.emit('login',val);
      hashHistory.push('/home');
    }
    else{
      document.getElementsByName('nickname').focus();
    }

  }
  render(){
    return(
      <div className="login">
        <div className="login-content">
          <div className="headPic">
            <img src={img} style={{width:'100px',height:'100px'}}/>
          </div>
          <form>
            <div className="form-item">
              <input placeholder="昵称" type="text" name="nickname"
                     onChange={this.handleChange}/>
              <label className="error">{this.state.error}</label>
            </div>
            <div className="form-item">
              <button onClick={()=>this.handleClick(this.state.nickname)}>登录</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
