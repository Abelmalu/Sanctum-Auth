import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  const [category_id, setCategory] = useState(1);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);


  const handlePicInput = (e)=>{



  }


  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = new FormData();
    data.append('image',image)
    data.append('category_id',category_id)
    data.append('title',title)
    data.append('body',body)

    axios.post('http://localhost:8000/api/add/blog', data).then((res)=>{
        return res.data

    }).then((data)=>{

        console.log(data);

    })

  }






  return (
    <>
    <form onSubmit={handleSubmit} >
      <select name="category_id" id="" onChange={(e)=>{
        setCategory(e.target.value);
      }}>
        <option value={1}>1</option>
        <option value={1}>2</option>

      </select><br></br><br></br>

      <input name="title" type="text" placeholder='Enter title' onChange={(e)=>{
        setTitle(e.target.value)
      }}/><br></br><br></br>
      <input name="body" type="text" placeholder='Enter description' onChange={(e)=>{
        setBody(e.target.value)
      }}/><br></br><br></br>
      <input name="image" type="file" onChange={(e)=>{
         let image = e.target.files[0]
         setImage(image)

      }}/>
      <button>submit</button>
    </form>
    </>
  )
}

export default App
