import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Shrink() {
    
    const [posturls,setPosturls] = useState({
        url: ""
    });
    
    const{url}=posturls;

    const onInputChange = e =>{
        setPosturls({...posturls,[e.target.name]: e.target.value})
    }

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.post(`https://localhost:5000/post/?url=${posturls.url}`);
    }
  return (
    <div className="container">
    <form className = "my-4 form-inline" onSubmit={e=>onSubmit(e)}>
        <input required type="text" name="url" id="url" placeholder="URL" value={url} onChange={e=>onInputChange(e)} className="form-control col mr-2"/>
        <button type="submit"  onClick={() => window.location.reload(false)} className="btn btn-success">Shrink</button>
    </form>
    
    </div>
  );
}

export default Shrink;
