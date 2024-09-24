import { User } from "../interfaces/User";

interface userProps{
    users:User[]
}

const TableComponent:React.FC<userProps>=({users})=>{
    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <th>Sl.no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>(
                            <tr key={index}>
                                <td>{++index}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default TableComponent;