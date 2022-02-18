import { useState } from 'react';

export default function useUserInfo() {
    const getUserInfo = () => {
        const userInfo = sessionStorage.getItem('user');
        return userInfo;
    };

    const [userInfo, setUserInfo] = useState(getUserInfo());

    const saveUserInfo = userInfo => {
        sessionStorage.setItem('user', userInfo);
        setUserInfo(userInfo);
    };

    return {
        setUserInfo: saveUserInfo,
        userInfo
      }
}