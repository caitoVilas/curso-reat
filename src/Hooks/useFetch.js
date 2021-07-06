import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, SetIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) =>{
            try{
                let res = await fetch(url);
                if(!res.ok){
                    // eslint-disable-next-line no-throw-literal
                    throw {err: true, 
                           status: res.status, 
                           statusTest: !res.statusText ? "Ocurrio un Error" : res.statusText};
                }
                let data = await res.json();
                SetIsPending(false);
                setData(data);
                setError({err: false});
            }catch(err){
                SetIsPending(true);
                setError(err);
            }
        }
        getData(url);
    },[url]);

    return{data, isPending, error};

}