import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {


    const [token, setToken] = useState('');

    useEffect(() => {

        const getToken = async () => {
            // console.log(user?.email)
            const email = user?.email;
            if (email) {
                try {
                    const { data } = await axios.post('http://localhost:8000/get-token', { email })
                    const { accessToken } = await data;
                    localStorage.setItem('accessToken', accessToken);
                    // console.log(accessToken);
                    setToken(accessToken);

                }
                catch (e) {
                    console.log(e)
                }
            }



        }

        getToken();

    }, [user])

    // 

    return [token]



};

export default useToken;