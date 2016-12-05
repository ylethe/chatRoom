/**
 * Created by yjf on 16-11-17.
 */
import React from '../../../node_modules/react';
import io from 'socket.io-client';

class App extends React.Component{
  componentDidMount(){
    global.socket=io.connect('http://10.17.0.104:9001');
    socket.on('connect',()=>{
      console.log("连接成功");
      socket.emit("连接成功")
    })
  }
  render(){
    return (
      <div className="appComponent">
        {this.props.children}
      </div>
    );
  }
}
App.defaultProps = {
};

export default App;
