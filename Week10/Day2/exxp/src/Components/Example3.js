import students from '../Data/students.json'

const Ex3 = (props) => {
    let arr = students.Experiences

    return (
        <>
        {
            arr.map((item,index) => {
                return <div key={index}>
                     <img src={item.logo} style={{borderRadius:'50%', width: '150px', height:'150px'}}/><br/>
                     <a href={item.url}>{item.companyName}</a>
                     <p style={{fontWeight:'700'}}>{item.roles[0].title}</p>
                     <p>{item.roles[0].startDate} {item.roles[0].location}</p>
                     <p>{item.roles[0].description}</p>

                </div>
            })
        }
        </>
    )
}

export default Ex3