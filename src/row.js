function Row(p){
    console.log(p)
    return(
        <tr>
            <td>{p.data.name}</td>
            <td>{p.data.id}</td>
            <td>{p.data.sem1}</td>
            <td>{p.data.sem2}</td>
            <td>{p.data.sem3}</td>
        </tr>
    )
}
export default Row 