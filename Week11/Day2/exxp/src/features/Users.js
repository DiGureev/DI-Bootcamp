import { useSelector, useDispatch } from "react-redux"
import {usersState, statusState, fetchUsers} from './usersSlice.js'
import { useEffect } from "react"

const Users = (props) => {
    const users = useSelector(usersState)
    const status = useSelector(statusState)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUsers())
    }, [])

    if (status === "loading"){
        return <div>Wait...</div>
    } else if (status === "rejected"){
        return <div>Can't get the data</div>
    } 
    return (
        <>
            {
                users.map(user => {
                    return(
                        <div className="userCards" key={user.id}>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Users
