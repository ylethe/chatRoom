/**
 * Created by yjf on 16-12-4.
 */
import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import back from '../../../images/back.svg';
import './index.styl';

class Nav extends Component{
  constructor(props){
    super(props);
    this._handleClick=this._handleClick.bind(this);
  }
  _handleClick(){
    hashHistory.push('/login');
  }
  render(){
    return(
      <nav>
        <div onClick={this._handleClick} className="top-left">
          <img src={back}/>
          <div className="arrow">返回</div>
        </div>
        <div className="top-name">{this.props.title}</div>
      </nav>
    );
  }
}

export default Nav;
