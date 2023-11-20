import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {hasError: false}
    }
  
    componentDidCatch(error) {
        this.setState({
            hasError:true
        })
    }

    render(){
        if (this.state.hasError) {
            return (
                <div style={{ whiteSpace: 'pre-wrap' }}>
                An error has occured
                </div>
            )
        } else {
            return this.props.children
        }
        
    }

}

export default ErrorBoundary