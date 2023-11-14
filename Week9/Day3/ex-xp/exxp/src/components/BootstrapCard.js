const Card = (props) => {
    const {img, name, desc, btn, lable} = props
    return (
        <div className="card m-5" style={{width: '30rem'}}>
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{desc}</p>
                <a href={btn} class="btn btn-primary">{lable}</a>
            </div>
        </div>
    )
}

export default Card