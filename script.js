function createTable() {
    //Write your code here
	let rows=prompt("Input number of rows");
	let cols=prompt("Input number of columns");
	let table=document.getElementById("myTable");
	for(let i=0;i<rows;i++){
		let rn=document.createElement("tr");
		for(let j=0;j<cols;j++){
			let newCell=rn.insertCell(j);
			newCell.innerText=`Row-${i} Column-${j}`
		}
		table.append(rn);
	}
  
}
