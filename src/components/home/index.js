/**
 * Created by yjf on 16-11-17.
 */
import React from '../../../node_modules/react';
import Nav from './nav';
import './index.styl';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      chatWords:'',
      img:'',
      color:'#ccc',
      fontSize:''
    };
    var name=this.props.nickname;
    this.handleChange=this.handleChange.bind(this);
    this.handleColor=this.handleColor.bind(this);
    this.handleEmoji=this.handleEmoji.bind(this);
    this.handleSize=this.handleSize.bind(this);
    this.handleClear=this.handleClear.bind(this);
    this.handleUp=this.handleUp.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  //输入框
  handleChange(e){
    e.preventDefault();
    let words=e.target.value;
    this.setState({
      chatWords:words
    });
  }

  //改变消息颜色
  handleColor(e){
    e.preventDefault();
    this.setState({
      color:e.target.value
    });
  }

  //表情
  handleEmoji(){
    this.refs.showTool.innerHTML='';
    this.refs.showTool.style.display='table-cell';
    var emojiContainer = this.refs.showTool,
      docFragment = document.createDocumentFragment();
    for (var i = 69; i > 0; i--) {
      var emojiItem = document.createElement('img');
      emojiItem.src = '../../images/emoji/' + i + '.gif';
      emojiItem.title = i;
      docFragment.appendChild(emojiItem);
     }
    emojiContainer.appendChild(docFragment);

    this.refs.showTool.addEventListener('click', (e)=> {
      var target = e.target;
      if (target.nodeName.toLowerCase() == 'img') {
        this.refs.sendContent.focus();
        this.refs.sendContent.value = this.refs.sendContent.value + '[emoji:' + target.title + ']';
        this.setState({img:target.src});
      }
    }, false);
  }

  //字体
  handleSize(e){
    e.preventDefault();
    let toolSize = this.refs.showTool;
    toolSize.innerHTML='';
    toolSize.style.display='block';
    let para = document.createElement('ul');
    const size=["小","中","大","超大"];
    for(let i = 0; i< size.length; i++){
      var li=document.createElement('li');
      var text=document.createTextNode(size[i]);
      li.id=i;
      li.appendChild(text);
      para.appendChild(li);
    }
    toolSize.appendChild(para);
    this.refs.showTool.addEventListener('click', (e)=>{
      var target = e.target;
      if (target.nodeName.toLowerCase() == 'li') {
        this.setState({fontSize:target.id})
      }
    })
  }

  //清屏
  handleClear(){
    this.refs.showWd.innerHTML='';
  }

  //收起
  handleUp() {
    this.refs.showTool.style.display = "none";
  }

  //发送
  handleSubmit(e){
    e.preventDefault();
    var msgToDisplay = document.createElement('p');
    var date = new Date().toTimeString().substr(0, 8);
    if(this.state.fontSize==0){
      msgToDisplay.style.fontSize='12px';
    }
    else if(this.state.fontSize==1){
      msgToDisplay.style.fontSize='15px';
    }
    else if(this.state.fontSize==2){
      msgToDisplay.style.fontSize='18px';
    }
    else if(this.state.fontSize==3){
      msgToDisplay.style.fontSize='21px';
    }

    msgToDisplay.style.color=this.state.color;
    msgToDisplay.innerHTML ='<img class="headImg" src="../../images/86d362ae1a00f6a434d4ac9a965a8e16.jpg" width="20px" height="20px"/>'+"lethe"+
      '<span class="timespan">(' + date + '): </span>' + this.state.chatWords+'<br/> '
      + '<a href="' + this.state.img + '" target="_blank"><img src="' + this.state.img + '"/></a>';
    this.refs.showWd.appendChild(msgToDisplay);
    this.refs.showWd.scrollTop=this.refs.showWd.scrollHeight;
    console.log(this.state.chatWords);
    console.log(date);
  }

  render(){
    return (
      <div className="home">
        <Nav title="chat room"/>
        <form>
          <div className="showWords" ref="showWd">
          </div>
          <div className="operation">
            <div className="send">
              <div className="send-item1">
                <input type="text" name="sendContent" ref="sendContent" onChange={this.handleChange}/>
              </div>
              <div className="send-item2">
                <button onClick={this.handleSubmit}>发送</button>
              </div>
            </div>
            <div className="toolkit">
              <div className="tool-items">
                <input id="colorStyle" type="color" placeholder='#000' title="font color" onChange={this.handleColor} />
              </div>
              <div className="tool-items">
                <input type="button" value="emoji" title="emoji" onClick={this.handleEmoji}/>
              </div>
              <div className="tool-items">
                <input type="button" value="字体" title="size" onClick={this.handleSize}/>
              </div>
              <div className="tool-items">
                <input id="clearBtn" type="button" value="clear" title="clear screen" onClick={this.handleClear}/>
              </div>
              <div className="tool-items">
                <input type="button" value="收起" onClick={this.handleUp}/>
              </div>
            </div>
            <div className="showTool" ref="showTool"></div>
          </div>
        </form>
      </div>
    );

  }
}
export default Home;
