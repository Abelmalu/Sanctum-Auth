import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const Home = () => {



     const [count, setCount] = useState(0)

  const [category_id, setCategory] = useState(1);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
    const navigate = useNavigate()


  


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
        navigate('/')

    })


  }





    return (

        <>
   <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
  <div className="mb-4">
    <label htmlFor="category_id" className="block text-sm font-medium text-gray-700">Category</label>
    <select
      name="category_id"
      id="category_id"
      onChange={(e) => setCategory(e.target.value)}
      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
    >
      <option value={1}>1</option>
      <option value={2}>2</option>
    </select>
  </div>

  <div className="mb-4">
    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
    <input
      name="title"
      type="text"
      placeholder="Enter title"
      onChange={(e) => setTitle(e.target.value)}
      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="body" className="block text-sm font-medium text-gray-700">Description</label>
    <input
      name="body"
      type="text"
      placeholder="Enter description"
      onChange={(e) => setBody(e.target.value)}
      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
    <input
      name="image"
      type="file"
      onChange={(e) => {
        let image = e.target.files[0];
        setImage(image);
      }}
      className="mt-2 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-lg file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
    />
  </div>

  <button
    type="submit"
    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  >
    Submit
  </button>
</form>

    </>


     );
}

export default Home;
