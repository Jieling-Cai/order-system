import React, { useState, useEffect } from 'react';
import { useSessionStorageState } from 'ahooks';
import { Button, Checkbox, Form, Input, notification, Space, Card,Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login,getRestaurantList } from '../services';

const transNotificationInfo = {
    "success": "success fullname and phone number",
    "warning": "warning",
    "error": "error"
}
const openNotificationWithIcon = (type) => {

    notification[type]({
        message: transNotificationInfo[type],
    });
};
const Login = () => {
    const [loginInfo, setLoginInfo] = useSessionStorageState("isLoginInfo")
    const [name,setName]=useState("")
    const [phone,setPhone] = useState("")
    const [restaurantList,setRestaurantList] = useState([])
    const [flag,setFlag] = useState(false)
    const [userInfo, setuserInfo] = useSessionStorageState("userInfo")
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Success:', values)
        login(values)
            .then(res=>{
                if(res.status ==201){
                    setLoginInfo(true)
                    setuserInfo(values)
                    setTimeout(() => {
                        navigate("/")
                    }, 800)
                }
                console.log(res)
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        login(errorInfo.values)
    };
    useEffect(()=>{
        getRestaurantList()
        .then(
            res=>{
                setRestaurantList(res.data)
            }
        )
    },[])
    useEffect(()=>{
        let valueArray = name.split(" ").filter(item => item && item)
        let len = phone.toString().length
        let numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        let filervalue = phone.split("").filter(item => numberList.includes(item))
        if(valueArray.length >= 2&&(len >= 10 && len <= 11)&&(filervalue.length == phone.split("").length)){
            setFlag(!flag)
        }
    },[name,phone])
    useEffect(()=>{
        if(flag){
             setTimeout(()=>{
                openNotificationWithIcon("success")
            },800)
        }
    },[flag])
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Card title="Welcome To Mealpal" bodyStyle={{ width: "30vw" }}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="restaurant"
                        name="restaurant_id"
                        rules={[
                            { required: true, message: 'please select a restaurant' },
                        ]}
                    >
                        <Select>
                            {
                                restaurantList.map(item=>(
                                    <Select.Option value={item.id}>{item.name}</Select.Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="username"
                        name="name"
                        rules={[
                            { required: true, message: 'please input your full name' },
                            {
                                validator: (_, value) => {
                                    let valueArray = value.split(" ").filter(item => item && item)
                                    return (valueArray.length >= 2 || valueArray.length == 0) ? Promise.resolve() : Promise.reject(new Error('must be your first and last name (min. two words)'))
                                }
                            }
                        ]}
                    >
                        <Input onChange={(e)=>{
                            setName(e.target.value)
                        }} />
                    </Form.Item>

                    <Form.Item
                        label="phone number"
                        name="phone"
                        rules={[
                            { required: true, message: 'please input your phone number' },
                            {
                                validator: (_, value) => {
                                    let len = value.toString().length
                                    return ((len >= 10 && len <= 11) || value == "") ? Promise.resolve() : Promise.reject(new Error('must be 10 or 11 digits'))
                                }
                            },
                            {
                                validator: (_, value) => {
                                    let numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
                                    let filervalue = value.split("").filter(item => numberList.includes(item))
                                    return (filervalue.length == value.split("").length) ? Promise.resolve() : Promise.reject(new Error('numbers only (ex. 1231231234))'))
                                }
                            }

                        ]}
                    >
                        <Input onChange={(e)=>{
                            setPhone(e.target.value)
                        }} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            entry
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default Login;
