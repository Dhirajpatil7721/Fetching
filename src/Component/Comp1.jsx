import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Comp1() {

    const [mydata, setMydata] = useState([])
    const [error, setError] = useState("")

    const url = ("https://jsonplaceholder.typicode.com/posts")
    //Note: Error handaling 

    // useEffect(() => {
    //     axios.get(url)
    //         .then((res) => setMydata(res.data))
    //         .catch((error) => setError(error.message))
    // }, [])


    //Note: Promisess 
    const getdata = async () => {
        try {
            const res = await axios.get(url);
            setMydata(res.data);
        } catch (error) {
            setError(error.message)
        }
    };
    useEffect(() => {
        getdata();
    }, [])
    return (
        <div>
            <h1>Data Fetch Axios</h1>
            {error == !"" && <h2>{error}</h2>}
            {mydata.map((post) => {
                const { id, title, body } = post;

                return <div className='card' style={{}} key={id}>
                    <h1>{title.toUpperCase()}</h1>
                    <p>{body.slice(0, 100)}</p>
                    <hr />
                </div>

            })}
        </div>
    )
}

export default Comp1
