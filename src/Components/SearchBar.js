import React,{useState , useEffect} from 'react';
import axios from 'axios';

const SearchBar=({setSearch})=>{
    const [valueInput,setValueInput]=useState('nature');
    const [previousSearch ,setPreviousSearch]=useState('');

    useEffect(()=>{
        fetchedFn();
        setValueInput('');
    },[]);


    function fetchedFn(){
        if(valueInput===previousSearch) return;

        axios.get("https://api.unsplash.com/search/photos", {
                    params:{
                        // client_id : "3izN2i3fcImpmaZNGgVf4F4ScL_5ckerUZyTU2WlvAU",
                        query : valueInput || "nature",
                        per_page:16
                    },
                    headers:{
                        Authorization: "Client-ID 3izN2i3fcImpmaZNGgVf4F4ScL_5ckerUZyTU2WlvAU"
                    }

                }
        )
        .then(respose=>{
            // console.log(respose.data.results)
            setSearch(respose.data.results);
            setPreviousSearch(valueInput);
        })
        .catch(err=>console.error(err));
    }

    function handledFn(e){
        console.log(e);
        if(e.keyCode===13){ //enter value ::alternative e.key=='Enter'
            fetchedFn();
        }
    }

    return(
        <div className="searchBar" onKeyDown={handledFn}>
            <input type="text" placeholder='Enter search input' onChange={(e)=>setValueInput(e.target.value)} value={valueInput}/>
            <button onClick={fetchedFn}>Search</button>
        </div>
    )
}

export default SearchBar;



































// extra api key-->Ky_9jAM0OpMsEnfbqsj1TPPszOA0ESCRBEPujj_6bnI