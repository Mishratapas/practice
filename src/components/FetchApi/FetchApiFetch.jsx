import { useEffect, useState } from 'react'

const URL = 'https://jsonplaceholder.typicode.com/users'

export default function FetchApiFetch() {
  const [datas, setDatas] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error is ${error.status} `)
        }
        setLoading(true)
        return response.json()
      })
      .then((actualData) => {
        setLoading(false)
        setDatas(actualData)
        setError(null)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
      })
  }, [])

  return (
    <>
      <div style={{ textAlign: 'center' }}>Fetch APi</div>
      {loading && <h1>Please Wait</h1>}
      {error && <h1>En error occured</h1>}
      <ul>
        {datas.map((data) => (
          <li key={data.id}>{data.name} </li>
        ))}
      </ul>
    </>
  )
}
