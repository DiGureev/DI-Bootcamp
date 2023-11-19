import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {error: null, errorInfo: ''}
    }
  
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })
    }

    render(){
        if (this.state.error != null) {
            return (
                <div style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error && this.state.error.toString()}
                </div>
            )
        } else {
            return this.props.children
        }
        
    }

}

export default ErrorBoundary