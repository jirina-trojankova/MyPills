
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            items: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }    
    
    onSubmit(event) {
        event.preventDefault()
        return(
            this.setState({
                text: '',
                items: [this.state.text, ...this.state.items]
            }));
        }

    onChange(event) {
        return(
            this.setState({text: event.target.value})
        );
    }
        
    render() {
        return(
            <div>
            <form className="App" onSubmit={this.onSubmit}>
                 <input type="text" value={this.state.text} onChange={this.onChange} />
                 <input type="submit" value="Submit me"/>
             </form>
             <List items={this.state.items} />
            </div>
        );
    }
}
 

 const List = props => (
     <ul>
         {
             props.items.map((item, index) => (<li key={index}>{item}</li>))
         }
     </ul>
 )
 

 ReactDOM.render(
     <ErrorBoundary>
     <App />
     </ErrorBoundary>,
     document.getElementById('root')
 );
