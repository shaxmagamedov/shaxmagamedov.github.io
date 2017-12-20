var mtx = new Array(10);
var max = -100;
var a,b;
for (i=0; i<mtx.length; i++){
    mtx[i]= new Array(10);
}
for (i = 0; i<=9; i++){
    for (j=0; j<=9; j++){
        mtx[i][j]=Math.floor(Math.random()*90)+10; 
        if (mtx[i][j]>max){
            max=mtx[i][j];
        }
    }
}
document.write("Max: "+max);
document.write("<br>");
document.write("<br>");
for (i=0;i<=9;i++){
    for (j=0;j<=9;j++){
        if (mtx[i][j]==max){
            a=i;
            b=j;
        }
    }
}
document.write("<div>")
for (i=0; i<=9; i++){
    for (j=0; j<=9; j++){
        if (i==a || j==b){
            document.write(mtx[i][j]+"<span>_</span>");
        }
        else {
            document.write("<span>___</span>");    
        }
    }
    document.write("<br>");
	
	
}
document.write("</div>")
