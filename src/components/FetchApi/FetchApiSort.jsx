import axios from 'axios'
import { useEffect, useState } from 'react'

const URL = 'https://jsonplaceholder.typicode.com/comments'

const FetchApiSort = () => {
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const [sortValue, setSortValue] = useState('')

  // useEffect(() => {
  //   loadData()
  // }, [])

  const loadData = async () => {
    return axios
      .get(URL)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    return await axios
      .get(`https://jsonplaceholder.typicode.com/comments?id=${value}`)

      .then((res) => {
        setData(res.data)
        setValue('')
      })
      .catch((err) => console.log(err))
  }
  const handleSort = async (e) => {
    let value = e.target.value
    setSortValue(value)
    return await axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?_sort=${value}&_order=asc`
      )
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }

  const handleReset = () => {
    loadData()
  }

  const sortOptions = ['postId', 'id', 'name', 'email', 'body']

  return (
    <div className=' container'>
      <header>Search By ID</header>
      <div className='row'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
            placeholder='Search By body'
          />
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
          <button className='btn btn-danger' onClick={handleReset}>
            Reset
          </button>
        </form>
        <ul>
          {data?.map((item, index) => (
            <li key={index}>
              <h6>ID: {item.id}</h6>
              <h6>Name: {item.name}</h6>
              <h6>Email: {item.email}</h6>
              <h6>body: {item.body}</h6>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h5>Sort By Ascending: </h5>
        <select value={sortValue} onChange={handleSort}>
          {sortOptions.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FetchApiSort
