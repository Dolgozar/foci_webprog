export interface FociAdat{
   id: number,
   klubnev: string,
   gyozelem_db: number, 
   legutobb_w: Date,
   mvp: string
}

export function Foci({id, klubnev, gyozelem_db, legutobb_w, mvp}: FociAdat){
    
    return <div>
        <tr>
            <td>{klubnev}</td>
            <td>{gyozelem_db}</td>
            <td>{legutobb_w.toLocaleString()}</td>
            <td>{mvp}</td>
        </tr>
    </div>
}