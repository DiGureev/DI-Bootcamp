const User = (props) => {
    const {name, username, email, id} = props.info
    return (
    <div>
        <img src={`https://robohash.org/${id}`}/>
        <h4>{name}</h4>
        <p>{username}</p>
    </div>)
};

export default User