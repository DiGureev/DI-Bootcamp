import React from "react";

class Child extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentWillUnmount (){
        alert('The component is going to be unmounted');
    }

    render(){
        return <h1>Hello World!</h1>
    }
}

export default Child