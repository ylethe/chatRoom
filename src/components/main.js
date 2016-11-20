/**
 * Created by yjf on 16-11-17.
 */
import React from '../../../node_modules/react';

class App extends React.Component{
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
