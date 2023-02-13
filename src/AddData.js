import Row from "./row"
function AddData(p){
    
    return(<table>

        <thead>
            <th>Name</th>
            <th>ID</th>
            <th>SEM1</th>
            <th>SEM2</th>
            <th>SEM3</th>
        </thead>
        <tbody>
            {p.sdata.map((item)=>{return(<Row data={item}/>)})}
        </tbody>
    </table>)
}
export default AddData