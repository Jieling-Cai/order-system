import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionStorageState } from 'ahooks';
const Home = () => {
    const navigate = useNavigate()
    const [loginInfo, setLoginInfo] = useSessionStorageState("isLoginInfo")
    const [userInfo, setuserInfo] = useSessionStorageState("userInfo")
    useEffect(()=>{
        !loginInfo&&navigate('/login')
    },[])
    return (
        <div>
            <div>Mealpal</div>
            <div>Hi, {userInfo?.name}</div>
            <div>phone: {userInfo?.phone}</div>
        </div>
    );
}

export default Home;
