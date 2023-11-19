// import {useState, useEffect} from 'react'
import React from "react";

class Color extends React.Component {
    constructor(props){
        super(props)
        this.state = {favoriteColor: 'red', show: true}
    }

    componentDidMount(){
        // alert('useEffect reached')
        // console.log('useEffect reached');
        setTimeout( () => {
            this.setState({favoriteColor:'yellow'})
        }, 1000)
        
    };

    shouldComponentUpdate(){
        return true
    }

    componentDidUpdate(){
        console.log("after update")
    }

    getSnapshotBeforeUpdate(){
        console.log("in getSnapshotBeforeUpdate")
    }

    deleteHeader = () => {
        this.setState({show: false})
    }

    render(){
        if (this.state.show){
            return (
                <>
                {this.props.children}<br/>
                <button onClick={this.deleteHeader}>Delete</button>
                </>
            )
        }

    return (
    <>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={()=> this.setState({favoriteColor:'blue'})}>Click</button>
    </>
)
    }
    

}

export default Color