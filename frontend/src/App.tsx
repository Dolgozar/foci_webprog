import { FormEvent, useEffect, useRef, useState } from 'react'
import './App.css'
//import { Focits } from './Focits.ts'
import { Foci } from '../components/Foci'
import { Focits } from './Focits'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [data, setData] = useState([] as Focits[]);
  const klubref = useRef<HTMLInputElement>(null);
  const gyozelemref = useRef<HTMLInputElement>(null);
  const legutobbref = useRef<HTMLInputElement>(null);
  const mvpref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function load() {
      const response = await fetch('http://localhost:3000/csapatok');
      const data = await response.json() as Focits[];
      setData(data);
    }
    load();
  }, [data]);

  async function addKlub(event: FormEvent) {
    event.preventDefault();
    const klub = klubref.current?.value;
    const gyozelemdb = gyozelemref.current?.value;
    const legutobb = legutobbref.current?.value;
    const mvp = mvpref.current?.value;

    const csapat = {
      klubnev: klub,
      gyozelmek_szama: gyozelemdb,
      legutobb_gyozott: legutobb,
      mvp: mvp,
    };
    const res = await fetch('http://localhost:3000/csapatok', {
      method: 'POST',
      body: JSON.stringify(csapat),
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
      console.log('Hozzáadva!');
      klubref.current!.value = '';
      gyozelemref.current!.value = '';
      legutobbref.current!.value = '';
      mvpref.current!.value = '';
    }
  }

  return (
    <div className="container">
      <form className="felvetel" onSubmit={(event) => addKlub(event)}>
        <h1 className="title">Csapat Hozzáadása</h1>
        <div className="mb-3">
          <input type="text" className="form-control" ref={klubref} placeholder="Klubnév..." />
        </div>
        <div className="mb-3">
          <input type="number" min="0" className="form-control" ref={gyozelemref} placeholder="Győzelmek..." />
        </div>
        <div className="mb-3">
          <input type="date" className="form-control" ref={legutobbref} placeholder="Legutóbb..." />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" ref={mvpref} placeholder="Mvp..." />
        </div>
        <button type="submit" className="btn btn-primary">Felvétel</button>
      </form>

      <table className="table mt-5">
        <thead>
          <tr>
            <th>Klubnév</th>
            <th>Győzelmek száma</th>
            <th>Legutóbb győzőtt</th>
            <th>Mvp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <Foci
              key={data.id}
              klubnev={data.klubnev}
              gyozelem_db={data.gyozelmek_szama}
              legutobb_w={data.legutobb_gyozott}
              mvp={data.mvp}
            />
          ))}
        </tbody>
      </table>
      <footer className="green-footer">
        Készítette: Dohy Olivér, Gál Dániel, Szabó Dávid
      </footer>
    </div>
  );
}

export default App;