import { useEffect, useState } from "react";

const useUserType = email => {
    const [userType, setUserType] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://resell-products-server.vercel.app/getusertype?email=${email}`, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `barer ${ localStorage.getItem('accessToken') }`
                }
            })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'forbidden access' || data.status === 'unauthorized access') {
                    
            }
            else {
                setUserType(data.userType);
            }
        })
        }
    }, [email])
    return [userType];
}

export default useUserType;