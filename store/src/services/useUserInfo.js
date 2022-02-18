import { useState } from 'react';

export default function useUserInfo() {
    const getUserInfo = () => {
        const userInfo = JSON.parse(sessionStorage.getItem('user'));
        return userInfo;
    };

    const [userInfo, setUserInfo] = useState(getUserInfo());

    const saveUserInfo = userInfo => {
        sessionStorage.setItem('user', JSON.stringify(userInfo));
        setUserInfo(userInfo);
    };

    return {
        setUserInfo: saveUserInfo,
        userInfo
      }
}