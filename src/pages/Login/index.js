import React from 'react';
import {Card, Form, Input, Button, message, Icon, Checkbox} from 'antd'
import {userLogin} from '../../request/api.js'
const FormItem = Form.Item
 //打开等待圈
        //  let loading;
        //  if(options.data && options.data.isShowLoading !== false){
        //      loading = document.getElementById('ajaxLoading');
        //      loading.style.display = 'block';
        //  }
//关闭等待圈
                // if(options.data && options.data.isShowLoading !== false){
                //     loading = document.getElementById('ajaxLoading');
                //     loading.style.display = 'none';
                // }        
class Login extends React.Component{
    handleSubmit = () => {
        this.props.form.validateFields((err, values) => {
            if(!err){
                // message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
                this.enterIconLoading()
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="登录" style={{marginTop:10}}>
                    <Form layout="horizontal" style={{width:300}}>
                        <FormItem> 
                            {
                                getFieldDecorator('userName', {
                                    initialValue:'qweqwe',
                                    rules:[
                                        {
                                            required: true,
                                            message:'用户名不能为空'
                                        },
                                        {
                                            min:5, max:10,
                                            message: '长度不在范围内'
                                        },
                                        {
                                            pattern: new RegExp('^\\w+$','g'),
                                            message: '用户名必须为字母或数字'
                                        }
                                    ]
                                })(
                                <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                                )
                            }  
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue:'123567',
                                    rules:[
                                        {
                                            required: true,
                                            message:'密码不能为空'
                                        },
                                        {
                                            min:6, max:8,
                                            message: '长度不在范围内'
                                        }
                                    ]
                                })(
                                <Input prefix={<Icon type="lock"/>} type="password" placeholder="请输入密码"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                   <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
    
    enterIconLoading = () => {
        let userInfo = this.props.form.getFieldsValue();
        let params = {
            phone:userInfo.userName,
            password: userInfo.userPwd,
            loginWay:'pc',
            }
            userLogin(params).then(response => {
                if (response.data.code === 0) {
                //跳转路由
                this.props.history.push('/home');
                } else if (response.data.code !== 0) {
                    message.error(response.data.msg);
                    this.props.history.push('/home');
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
export default Form.create()(Login);