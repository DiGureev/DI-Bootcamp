import students from '../Data/students.json'

const Ex2 = (props) => {
    let arr = students.Skills

    return (
        <>
        <h2>Skills:</h2>
        {
            arr.map((item, index) => {
                let skillset = item.SkillSet
                return <div key={index}>
                    <h3>{item.Area}</h3>
                    <ul>
                        {skillset.map((element, elindex) => {
                            return <li key={elindex}>{element.Name}</li>
                        })
                        }
                    </ul>

                </div>
            })
        }
        </>
    )
}

export default Ex2