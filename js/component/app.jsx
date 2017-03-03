import React from 'react';
import Data from './data.jsx';
import Header from './header.jsx';
let parent;
 class App extends React.Component{
constructor(){
		super();
		this.state= {
			data:"",
			dataKey:""	
				
	};
	};

	componentDidMount() {
	    $.ajax({
	      url: './datas.json',
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	        parent=data;
	        
	       this.setState({dataKey:Object.keys(data)})
	       
          
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)

	    })
	    
	  }

 render(){
 return(
 
 <div className="wrapper">
<Header/>
<Data child={parent} />
</div>
 );
 }
 }
 export default App;