const { useState, useEffect } = require("react")

const useAdmin = email =>{
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://resell-products-server.vercel.app/getusertype?email=${email}`, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `barer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsAdminLoading(false);
                    if (data.status === 'forbidden access' || data.status === 'unauthorized access') {
                        
                    }
                    else {
                        setIsAdmin(data.isAdmin);
                    }
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading];
}

export default useAdmin; 