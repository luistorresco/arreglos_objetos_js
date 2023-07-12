//var fruta ="mango";
//var fruta2 ="manzana";
//var fruta3 ="fresa";

/*var frutas=["sandia", "banano", "kiwi"]
var sancocho=[
    "papa",
     "false", 
     "65457", 
     function(){return "hola desde funcion";},
     ["cebolla", "3435","true"]
];*/
/*document.write("fruta:"+ sancocho[]()+"<br>");*/


//var frutas = ["sandia", "banano", "kiwi"];
//frutas.push("fresas");
//frutas.unshift("manzana");
//var dato = frutas.shift();
//var rango= [frutas.slice(0,1), frutas.slice(2,3)];
//frutas.splice("fresas",0,3 );
//document.write("dato: " + (frutas.length)+"<br>");
//document.write("dato: "+frutas+"<br>");
//document.write("dato: "+dato+"<br>"); 

//var frutas=[];
//var numero=parseInt(prompt("digite numero de la fruta"));
/*for (var i=0; 1 < numero; i++) {
    //frutas.push(prompt("digite nombre de la fruta"));
    frutas[i]=prompt("digite el nombre de la fruta");

}

for (var j = 0; j <frutas.length; j++) {
    document.write("frutas: " + frutas[j]+"<br>");
}

frutas.forEach((dato, pos ) => {
    document.write("fruta: " +pos+ ":"+ dato+ "<br>");
})*/

/*var num1 = [3,45,22,50,32,34];
var num2=[5,67,43,23,43,12];
var suma1=0;
var suma2=0;
for (var x=0; x <num1.length; x++){
    document.write(num1[x]+"+" +num2[x]+"=" +(num1[x]+num2[x])+"<br>" )
    suma1+= num1[x];
    suma2 += num2[x];
}

document.write(suma1+"+"+suma2+"="+(suma1+suma2));*/


/*var verduras ={
    "v1":"tomate",
    "v2": 4565463,
    "v3": true,
    "v4": function(){
        return "hola funcion"; 
},
    "v5": ["maggi",952535,false],
    "v6": {
        "y1": "cilantro",
        "y2": 9846
    }
}
document.write("verdura :"+verduras.v1+"<br>");
document.write("verdura :" + verduras.v3+ "<br>");
document.write("verdura :"+verduras.v2 + "<br>");
document.write("verdura :"+verduras.v4() + "<br>");
document.write("verdura :"+verduras.v5[0] + "<br>");
document.write("verdura :"+verduras.v6.y1 + "<br>");*/


/*var verduras= {
    "v1": "tomate",
    "v2": "Cebolla",
    "v3": "zanahoria"
}
document.write("numero de ref :" + Object.keys(verduras).length+"<br>");
document.write("numero de ref :" + Object.keys(verduras)+"<br>");
document.write("numero de ref :" + Object.values(verduras)+"<br>");
document.write("numero de ref :" + Object.entries(verduras)+"<br>");*/


var empleados ={};
var empleados2 ={
    "nombre": "",
    "profesion": "",
    "salario": ""
}

empleados.nombres= "juan",
empleados.profesiones= "odontologo",
empleados.salarios="45255";

empleados2nombre ="carlos";
empleados2.profesion="programador";
empleados2.salario="50000";

document.write("nombre :" +empleados.nombres);