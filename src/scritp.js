const numero = document.getElementById("cardNumber");
var numeroVal = "";
if (numero) {
    numeroVal = numero.value;
}

const boton = document.getElementById("btn").addEventListener("click",validate);
const result = document.getElementById("result");
  if(numero == "") {
            result.InnerText =  "Debe colocar el numero de su tarjeta";
           
          }      
          
  function SoloNumeros(evt){
        
         if (window.event){
            keynum = evt.keycode;
          }
            else{
              keynum = evt.which;
            }
          if (keynum > 47 && keynum < 58 || keynum == 8 || keynum == 13){
            return true;
          }
            else{
              alert("solo números");
              return false;
            }
    }

          
  
function validate(){
     const valid = isValid(document.getElementById("cardNumber").value);
          if (valid){
            result.innerHTML = "Su tarjeta es valida"
          }
          else{
            result.innerHTML = "Su tarjeta es invalida"
          }

    }
    
    function isValid(numeroDeTarjeta){
      let array = numeroDeTarjeta.split("");
      const begin = Array;
      let suma = 0; 
        for  (let i=0; i<begin.length; i++){  
            const posicion = i + 1;
    
            if (posicion % 2 == 0){
              begin[i] = begin[i] *2;
            }
            if (begin[i] > 9){
            const num = begin[i].toStrign().split("");
            begin[i] = num[0] + num[1];
            suma += begin[i];
            }

            return suma % 10 == 0;
           
        }

    }
   
   
   
   
  
