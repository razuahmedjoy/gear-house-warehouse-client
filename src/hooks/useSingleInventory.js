import axios from "axios";
import { useEffect, useState } from "react";

const useSingleInventory = (id) => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false)


    useEffect(() => {


        const getSingleItem = async () => {
            setLoading(true)

            try {

                const res = await axios.get(`https://polar-sea-52958.herokuapp.com/inventory/${id}`);
                setItem(res.data);
                setLoading(false)


            }
            catch (e) {
                console.log(e)
            }

        }
        getSingleItem();

    }, [id])

    return [item, setItem,loading];



}

export default useSingleInventory;