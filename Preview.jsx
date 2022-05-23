class App extends React.Component{
    constructor(props){
	super(props);
	this.state = {name:"", num:"", fg:"", bg:""};
    }

    componentDidMount(){
    }
    
    componentWillUnmount(){
    }
    
    onNameChange(event){
	console.log(event);
    }
    
    onNumChange(event){
	console.log(event);
    }

    onBackgroundChange(event){
	console.log(event);
    }
    
    onForegroundChange(event){
	console.log(event);
    }
    
    render(){
	return(
	    <div>
	      <form>
		<NameForm onNameChange={this.onNameChange.bind(this)} />
		<NumForm onNumChange={this.onNumChange.bind(this)} />
		<BGForm onBackgroundChange={this.onBackgroundChange.bind(this)} />
		<FGForm onForegroundChange={this.onForegroundChange.bind(this)} />
	      </form>
	      <Preview name={this.state.name} num={this.state.num} bg={this.state.bg}/>
	    </div>
	);
    }
}

function NameForm(props){
    return(
	<input type="text" name="name" onChange={props.onNameChange} />
    );
}

function NumForm(props){
    return(
	<input type="tel" name="name"
	       onChange={props.onNumChange}
	       pattern="\d{2,4}-\d{2,4}-\d{3,4}" />
    );
}

function BGForm(props){
    return(
	<input type="text" onChange={props.onBackgroundChange} />
    );
}

function FGForm(props){
    return(
	<input type="text" onChange={props.onForegroundChange} />
    );
}

function Preview(props){
    return(
	<svg id="preview">
	  <path id="path_name" fill="none" d="M 20 190 a 140 140 0 0 1 280 0"/>
	  <path id="path_num" fill="none" d="M 20 120 a 140 140 0 0 0 280 0"/>	    
	  <Background bg={props.bg}/>
	  <Text text={props.name} path_id="#path_name" />
	  <Text text={props.num} path_id="#path_num" />
	</svg>
    );
}

function Background(props){
    return(
	<image href={props.bg}/>
    );
}

function Text(props){
    return(
	<text>
	  <textPath textAnchor="middle" startOffset="50%" href={props.path_id}>
	    {props.text}
	  </textPath>
	</text>
    );
}

const root = ReactDOM.createRoot(document.getElementById("testReact"));
root.render(<App />);
