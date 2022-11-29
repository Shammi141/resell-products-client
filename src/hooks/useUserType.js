import { useEffect, useState } from "react";

const useUserType = email => {
    const [userType, setUserType] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/getusertype?email=${email}`, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `barer ${ localStorage.getItem('accessToken') }`
                }
            })
        .then(res => res.json())
        .then(data => {
            console.log(data)
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