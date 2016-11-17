/**
 * Created by yjf on 16-11-17.
 */
import React from '../../../node_modules/react';
import './index.styl';

class Home extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return (
      <div className="home">
        <nav><span>welcome to chat room</span></nav>
        <form>
          <div className="showWords">
            <input type="text" disabled="disabled"/>
          </div>
          <div className="operation">
            <div className="toolkit">
              <div className="tool-items">
                <input id="colorStyle" type="color" placeholder='#000' title="font color" />
              </div>
              <div className="tool-items">
                <input id="emoji" type="button" value="表情" title="emoji" />
              </div>
              <div className="tool-items">
                <input type="button" value="字体" title="emoji" />
              </div>
              <div className="tool-items">
                <input id="clearBtn" type="button" value="clear" title="clear screen" />
              </div>
            </div>
            <div className="send">
              <div className="send-item1">
                <input type="text" name="sendContent"/>
              </div>
              <div className="send-item2">
                <button>发送</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );

  }
}
export default Home;
