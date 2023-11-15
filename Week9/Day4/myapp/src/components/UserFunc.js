import {useState} from 'react'

const Users = () => {
    const [users, setUsers] = useState([])

    const getAllUsers = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            setUsers(data);
        }catch (e){
            console.log(e);
        }
    }

    return (
            <>
                <div>
                    <button onClick={()=> getAllUsers()}>Get Users</button>
                </div>
                {
                    users.map(item => {
                        return(
                            <div key={item.id}>
                                <h4>{item.name}, {item.email},</h4>
                            </div>
                        )
                    })
                }
            </>
        )
    }

export default Users