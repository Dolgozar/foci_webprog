import { useEffect, useState } from 'react'
import './App.css'
//import { Focits } from './Focits.ts'
import { Foci, FociAdat } from '../components/Foci'

function App() {
  const [data, setData] = useState([] as FociAdat[])


  useEffect(() => {
    async function load(){
      const response = await fetch('http://localhost:3000/foci')
      const data = await response.json() as FociAdat[];
      setData(data)
    }
    load();
  }, [data])

  return <div>

  <table className='tabla'>
    <thead>
      <tr>
        <th>Klubnév</th>
        <th>Győzelmek száma</th>
        <th>Legutóbb győzőtt</th>
        <th>Mvp</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map(data => <Foci key={data.id} klubnev={data.klubnev} gyozelem_db={data.gyozelem_db} legutobb_w={data.legutobb_w} mvp={data.mvp}></Foci >)
      }
    </tbody>
  </table>



  </div>
}

export default App
