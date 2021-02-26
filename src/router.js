import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
//封装一个高阶组件，用来实现将普通的组件转换成动态组件
import AsyncComponent from './components/common'
import App from './App'

//对我们需要用到的普通组件进行引入和包装处理
const Login = AsyncComponent(() => import("./pages/Login"))
const Home = AsyncComponent(() => import("./pages/Home"))
const NoMatch = AsyncComponent(() => import("./pages/NoMatch"))
const Admin = AsyncComponent(() => import("./admin"))
const Buttons = AsyncComponent(() => import("./pages/ui/buttons"))
const Modals = AsyncComponent(() => import("./pages/ui/modals"))
const Loadings = AsyncComponent(() => import("./pages/ui/loadings"))
const Notice = AsyncComponent(() => import("./pages/ui/notice"))
const Messages = AsyncComponent(() => import("./pages/ui/messages"))
const Tabs = AsyncComponent(() => import("./pages/ui/tabs"))
const Gallery = AsyncComponent(() => import("./pages/ui/gallery"))
const Carousel = AsyncComponent(() => import("./pages/ui/carousel"))
const BasicTable = AsyncComponent(() => import("./pages/table/basicTable"))
const HighTable = AsyncComponent(() => import("./pages/table/highTable"))
const RichText = AsyncComponent(() => import("./pages/rich/index"))
const City = AsyncComponent(() => import("./pages/city/index"))
const User = AsyncComponent(() => import("./pages/user/index"))
const BikeMap = AsyncComponent(() => import("./pages/map/bikeMap"))
const Common = AsyncComponent(() => import("./common"))
const Order = AsyncComponent(() => import("./pages/order/index"))
const OrderDetail = AsyncComponent(() => import("./pages/order/detail"))
const Bar = AsyncComponent(() => import("./pages/echarts/bar"))
const Pie = AsyncComponent(() => import("./pages/echarts/pie"))
const Line = AsyncComponent(() => import("./pages/echarts/line"))
const Permission = AsyncComponent(() => import("./pages/permission"))

class RouterView extends React.Component{
    render() {
        return (
           <HashRouter>
               <App>
                  <Switch> 
                  <Route path="/login" component={Login}></Route>
                  <Route path="/common" render={() => 
                      <Common>
                          <Route path="/common/order/detail/:orderId" exact component={OrderDetail} />
                      </Common> 
                  }/> 
                  <Route path="/" render={() => 
                      <Admin>
                          <Switch>
                            <Route path="/home" component={Home}></Route>
                            <Route path="/ui/buttons" component={Buttons}></Route>
                            <Route path="/ui/modals" component={Modals}></Route>
                            <Route path="/ui/loadings" component={Loadings}></Route>
                            <Route path="/ui/notification" component={Notice}></Route>
                            <Route path="/ui/messages" component={Messages}></Route>
                            <Route path="/ui/tabs" component={Tabs}></Route>
                            <Route path="/ui/gallery" component={Gallery}></Route>
                            <Route path="/ui/carousel" component={Carousel}></Route>
                            <Route path="/table/basic" component={BasicTable}></Route>
                            <Route path="/table/high" component={HighTable}></Route>
                            <Route path="/rich" component={RichText}></Route>
                            <Route path="/city" component={City}></Route>
                            <Route path="/order" component={Order}></Route>
                            <Route path="/user" component={User}></Route>
                            <Route path="/bikeMap" component={BikeMap}></Route>
                            <Route path="/charts/bar" component={Bar}></Route>
                            <Route path="/charts/pie" component={Pie}></Route>
                            <Route path="/charts/line" component={Line}></Route>
                            <Route path="/permission" component={Permission}></Route>
                            <Redirect to="/home" />
                            <Route component={NoMatch}></Route>
                          </Switch>
                      </Admin>
                  }/>
                  </Switch>
               </App>
           </HashRouter>
        )
    }
}
export default RouterView;