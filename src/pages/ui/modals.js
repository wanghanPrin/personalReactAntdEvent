import React from 'react';
import {Card, Button, Modal} from 'antd'
import './ui.less'

export default class Buttons extends React.Component{
    state = {
       showModal1: false,
       showModal2: false,
       showModal3: false,
       showModal4: false
    }
    //方法
    handleOpen = (type) => {
        this.setState({
           [type]: true
        }) 
    }
    //方法
    handleConfirm = (type) => {
        Modal[type]({
            title: '确认？',
            content:'你确认你学会了React了吗？',
            onOk() {
                //console.log('ok')
            },
            onCancel() {
                //console.log('Cancel')
            }
        })
    }
    render(){
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
                </Card>
                <Modal 
                    title="React" 
                    style={{top:20}}
                    visible={this.state.showModal1} 
                    okText="好的"
                    cancelText="算了"
                    onCancel={() => {
                        this.setState({
                            showModal1: false
                        })
                    }}>
                    <p>欢迎使用柳柳版弹框</p>
                </Modal>
                <Modal 
                    title="React" 
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4} 
                    onCancel={() => {
                        this.setState({
                            showModal4: false
                        })
                    }}>
                    <p>欢迎使用柳柳版弹框</p>
                </Modal>
                
            </div>
        )
    }
}

