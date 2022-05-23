const root = ReactDOM.createRoot(document.getElementById("testReact"));

\
class Test extends React.Component{
    constructor(props){
	super(props);
	this.state= {counter: 0};
    }

    componentDidMount(){
	this.timerID = setInterval( () => this.tick(),1000);
    }
    
    componentWillUnmount(){
	clearInterval(this.timerID);
    }

    tick(){
	this.setState((state, props) => ({counter:state.counter + 1}));
	//this.setState({counter: this.state.counter + 1}); The manual says it's wrong.
    }
    
    render(){
	return(
	    <div>
	      <h1>Hello it is {this.state.counter}.</h1>
	    </div>
	);
    }
}

root.render(<Test />);
