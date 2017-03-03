import React from 'react';
let whole;
let handle;
let contentKey;
 class Data extends React.Component{
componentDidMount() {
	 	$(document).foundation();


}
showContent(){
	alert("dfdfdfd")
}

 render(){
 whole=this.props.child
 console.log(whole)
 let array=[];
 if(whole!=undefined){

 	let keyName=Object.keys(whole);
 	let content0=Object.values(whole[keyName[0]]);
 	let content1=Object.values(whole[keyName[1]]);
    
 	for(let i=0;i<content0.length;i++){
 	
    let row=$("<tr id='detail' ></tr>");
    let sno=$("<td></td>").text(i+1);
    let rowdata0=$("<td></td>").text(content0[i]);
    let rowdata1=$("<td></td>").text(content1[i]);
    row.append(sno).append(rowdata0).append(rowdata1);
    
    $("#tabledata").append(row);
 	}
 	

 	}

return(
<div className="table">
	
    <table >
    <tbody id="tabledata">
    <tr id="head" onClick={this.showContent}>
    <th>S.No</th>
    <th>Name</th>
    <th>Date</th>
    </tr>
    </tbody>
    </table>
</div>	
 );
 }
 }
 export default Data; 