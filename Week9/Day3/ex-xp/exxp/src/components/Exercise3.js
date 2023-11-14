import './Exercise.css'

const mystyle = {
    color: 'red',
    backgroundColor: 'lightblue',
};

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };


export const Exercise =()=> {
    return (
    <>
        <h1 style={style_header}>This is a Header</h1>
        <p className='para'>This is paragraph.</p>
        <a href='https://octopus.developers.institute/'>This is a link</a>
        <h2>This is a form</h2>
        <form>
            <p>Enter your name:</p>
            <input type='text'/>
            <button>Submit</button>
        </form>
        <h2>Here is an image</h2>
        <img src='https://images.unsplash.com/photo-1682686581220-689c34afb6ef?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width='400'/>
        <h2>Here is a list</h2>
        <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>
    </>
    )
}