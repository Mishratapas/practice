import axios from 'axios'
import { useEffect, useState } from 'react'

const URL = 'https://jsonplaceholder.typicode.com/users'

const FetchApiAxios = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(URL)
      setData(response.data)
      console.log(response.data)
    }
    getData()
  }, [])

  return (
    <div>
      <ul>
        {data &&
          data.map((data) => (
            <li key={data.id}>
              <h3>{data.name}</h3>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default FetchApiAxios
