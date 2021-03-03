import React from 'react'
import { Map, Marker, APILoader } from '@uiw/react-baidu-map';
import './index.less'

const icon = new window.BMap.Icon('http://developer.baidu.com/map/jsdemo/img/fox.gif', new window.BMap.Size(300, 157));
class Home extends React.Component {
    //constructor( )——构造方法
    constructor(props) {
        //super( ) ——继承
        super(props)
        this.state = {
            zoom: 15,
            allPoints: [{
                code: '1',
                name: '名字1',
                longitude: 116.404,
                latitude: 39.915,
            }, {
                code: '2',
                name: '名字2',
                longitude: 116.427337,
                latitude: 39.925504,
            }],
            nowStationCode: '1'
        }
    }
    // componentDidMount() {
    // }
    renderMenu() {
        return this.state.allPoints.map((item) => {
            return <Marker key={item.code} onClick={this.clickPoint.bind(this, item.code)}
                position={{ lng: item.longitude, lat: item.latitude }}
                icon={icon} animation={this.state.nowStationCode === item.code ? 2 : 1} />
        });
    }
    render() {
        return (
            <div className="distributormap" style={{ width: '100%', height: '75vh' }}>
                <APILoader akay="sWu18oy4dIMWHLHoSMHsUvI58zrjWU89">
                    <Map enableScrollWheelZoom="true" zoom={this.state.zoom} center="北京">
                        {this.renderMenu()}
                    </Map>
                </APILoader>
            </div>
        )
    }
    clickPoint = (data) => {
        this.setState(state => {
            state.nowStationCode = data
            console.log(state)
            return { state }
        })
    }
}
export default Home