class App extends React.Component{
    constructor(props){
	super(props);
	// TODO: Get some information about foreground/background images from server
	// something like props.foregrounds props.backgrounds 
	this.state = {name:"Put Name Here", num:"Put Number Here", fg:"Dog1.png", bg:"BlueBack.png"};
    }

    componentDidMount(){
    }
    
    componentWillUnmount(){
    }

    onNameChange(event){
		this.setState({name:event.target.value})
    }
    
    onNumChange(event){
		this.setState({num:event.target.value})
    }

    onBackgroundChange(choice){
		this.setState({bg:choice.value})
		console.log(choice)
    }
    
    onForegroundChange(choice){
		this.setState({fg:choice.value})
    }
    
    render(){
	return(
	    <div>
	      <form>
			<NameForm value={this.state.name} onNameChange={this.onNameChange.bind(this)} />
			<NumForm value={this.state.num} onNumChange={this.onNumChange.bind(this)} />
			<BGForm onBackgroundChange={this.onBackgroundChange.bind(this)} />
			<FGForm onForegroundChange={this.onForegroundChange.bind(this)} />
	      </form>
	      <Preview name={this.state.name} num={this.state.num} bg={this.state.bg} fg={this.state.fg}/>
	    </div>
	);
    }
}

function NameForm(props){
    return(
	<input type="text" name="name" value={props.value} onChange={props.onNameChange} />
    );
}

function NumForm(props){
    return(
	<input type="tel" name="name"
		value={props.value}
	    onChange={props.onNumChange}
		pattern="\d{2,4}-\d{2,4}-\d{3,4}" />
    );
}

function BGForm(props){
    return(
		<select onChange={props.onBackgroundChange}>
			<option value="BlueBack.png">Blue</option>
		</select>
    );
}

function FGForm(props){
    return(
		<select onChange={props.onForegroundChange}>
			<option value="Dog1.png">Dog1</option>
		</select>
    );
}

function Preview(props){
    return(
	<svg id="preview">
	  <path id="path_name" fill="none" d="M 20 190 a 140 140 0 0 1 280 0"/>
	  <path id="path_num" fill="none" d="M 20 120 a 140 140 0 0 0 280 0"/>	    
	  <Image href={props.bg} />
	  <Image href={props.fg} />
	  <Text text={props.name} path_id="#path_name" />
	  <Text text={props.num} path_id="#path_num" />
	</svg>
    );
}

function Image(props){
    return(
	<image href={"./image/"+props.href} width="100%"/>
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
