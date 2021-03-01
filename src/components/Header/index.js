import React from 'react'
// import {Link} from 'react-router-dom'
import {withRouter} from 'react-router';
import { Row, Col, message } from 'antd'
import './index.less'
import Util from '../../utils/utils'
import {userLogout} from '../../request/api.js'
import {connect} from 'react-redux'  //连接器

class Header extends React.Component {  
    state = {}
    componentWillMount() {
        this.setState({
            userName: '超级管理员'
        })
        setInterval(() => {
            let sysTime = Util.formatDate(new Date().getTime());
            this.setState({
                sysTime
            })                                   
        }, 1000)
    }
    render() {
        const {menuName} = this.props;
        return ( 
            <div className="header">
               <Row className="header-top">
                  <Col span={6} className="logo">
                     <img src="/assets/logo-ant.svg" alt="图像" />
                     <span>网站内容管理系统</span>
                  </Col> 
                  <Col span={18}> 
                      <span>欢迎，{this.state.userName}</span>
                      <span onClick={this.loginOut}>退出</span>            
                  </Col> 
               </Row>
               <Row className="breadcrumb">
                        <Col span={4} className="breadcrumb-title">
                            {menuName}
                        </Col>
                        <Col span={20} className="weather">
                            <span className="date">{this.state.sysTime}</span>
                            <span className="weather-detail">晴转多云</span>
                        </Col>
               </Row>
            </div>
        )
    } 
    loginOut = () => {
      this.loginOutLink()
    }
    loginOutLink = () => {
            userLogout().then(response => {
                if (response.data.code === 0) {
                this.props.history.push('/login');
                } else if (response.data.code !== 0) {
                    message.error(response.data.msg);
                }
              })
              .catch(err => {
                if (err.response) {
                    message.error('系统错误');
                  } else {
                    message.error('网络错误');
                  }
              });
    }
}
//将state.menuName 绑定到 props 的menuName
const mapStateToProps = state => {
    return {
        menuName: state.menuName
    }
}
//从redux传递过来
export default withRouter(connect(mapStateToProps)(Header))