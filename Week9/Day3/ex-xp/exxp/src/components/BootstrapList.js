import ListGroup from 'react-bootstrap/ListGroup';

const Planets = (props) => {
    const {planet} = props
    return <ListGroup.Item>{planet}</ListGroup.Item>
}

export default Planets