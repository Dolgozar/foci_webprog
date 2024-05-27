import { FormEvent, useEffect, useRef, useState } from 'react'
import './App.css'
//import { Focits } from './Focits.ts'
import { Foci } from '../components/Foci'
import { Focits } from './Focits'

function App() {
  const [data, setData] = useState([] as Focits[])
  const klubref = useRef<HTMLInputElement>(null);
  const gyozelemref =  useRef<HTMLInputElement>(null);
  const legutobbref = useRef<HTMLInputElement>(null);
  const mvpref = useRef<HTMLInputElement>(null);


  useEffect(() => {
    async function load(){
      const response = await fetch('http://localhost:3000/csapatok')
      const data = await response.json() as Focits[];
      setData(data);
    }
    load();
  }, [data]);

  async function addKlub(event: FormEvent){
    event.preventDefault();
    const klub = klubref.current?.value;
    const gyozelem_db = gyozelemref.current?.value;
    const legutobb_w = legutobbref.current?.value;
    const mvp = mvpref.current?.value;


    const csapat = {
      klubnev: klub,
      gyozelem_db: gyozelem_db, 
      legutobb_w: legutobb_w,
      mvp: mvp
    }

    const res = await fetch('http://localhost:3000/csapatok', {
      method: "POST",
      body: JSON.stringify(csapat),
      headers: {"Content-Type": "application/json"},
    });
    if(res.ok){
      console.log("Hozzáadva!")
      klubref.current!.value = "";
      gyozelemref.current!.value = "";
      legutobbref.current!.value = "";
      mvpref.current!.value = "";
    }
  }


  return <div>
  <form className="felvetel" onSubmit={event => addKlub(event)}>
    <h1 className='title'>Csapat Hozzáadása</h1>
    <input type="text" ref={klubref} placeholder='Klubnév...'/><br /><br />
    <input type="number" ref={gyozelemref} placeholder='Győzelmek...'/><br /><br />
    <input type="date" ref={legutobbref} placeholder='Legutóbb...'/><br /><br />
    <input type="text" ref={mvpref} placeholder='Mvp...'/><br /><br />
    <button type='submit'>Felvétel</button>
    <br />
  </form>
  <br />
  <br />

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
          data.map((data) =><Foci key={data.id} klubnev={data.klubnev} gyozelem_db={data.gyozelem_db} legutobb_w={data.legutobb_w} mvp={data.mvp}></Foci>) 
      }
    </tbody>
  </table>
  </div>
}

export default App
