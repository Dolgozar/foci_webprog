export interface FociAdat{
   klubnev: string,
   gyozelem_db: number, 
   legutobb_w: Date,
   mvp: string
}

export function Foci({klubnev, gyozelem_db, legutobb_w, mvp}: FociAdat){

    return <>
        <tr>
            <td>{klubnev}</td>
            <td>{gyozelem_db}</td>
            <td>{legutobb_w?.toLocaleString()}</td>
            <td>{mvp}</td>
        </tr>
    </>
}