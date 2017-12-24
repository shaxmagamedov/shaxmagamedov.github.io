function tab(){  
var buf; 
var input = document.createElement('input'); 
input.type='file'; 
input.onchange = function(){ 
var fr = new FileReader(); 

fr.onload= function(info){ 
text.innerHTML="<pre>"+info.target.result+"</pre>"; 
}; 
fr.readAsText(this.files[0]); 
}; 
input.click(); 
}