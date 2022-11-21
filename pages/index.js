import Movies from "./movies3";
import { Space , ConfigProvider} from 'antd'

export default function Homne (){
    return(
        <div>
            <Space direction="horizontal" style={{width: '100%', justifyContent: 'center' }}>
                <Movies/>
            </Space>
        </div>
    )
}