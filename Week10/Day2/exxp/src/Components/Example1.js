import students from '../Data/students.json'

const Ex1 = (props) => {
    let arr = students.SocialMedias

    return (
        <>
        <h2>SocialMedias:</h2>
        {
            arr.map((item, index) => {
                return <div key={index}>{item}</div>
            })
        }
        </>
    )
}

export default Ex1