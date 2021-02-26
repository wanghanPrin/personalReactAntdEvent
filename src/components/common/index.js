import React from 'react'
//封装一个高阶组件，用来实现将普通的组件转换成动态组件
export default function asyncComponent(importComponent){
  class AsyncComponent extends React.Component {
    
    constructor(props) {
     super(props);
     this.state = {
       component:null//动态加载的组件
     }
    }

    componentDidMount(){
      importComponent().then((mod)=>{
        this.setState({
          component:mod.default ? mod.default :mod
        });
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> :null
    }
  }

return AsyncComponent;

}