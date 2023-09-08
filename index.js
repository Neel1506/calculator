 var display =document.querySelector('#display');
  var btns=document.querySelectorAll('.btn');
   var operand1 =0;
 var operand2 =null;
 var operator =null;
 var result="";

 
     document.addEventListener('keypress',function(e){
         var key = String.fromCharCode(e.key);
         if(e.key=='+'){
            operator = '+';
            operand1=parseFloat(display.textContent);
            display.innerText='';
        }

        else if(e.key=='-'){
            operator = '-';
            operand1=parseFloat(display.textContent);
            display.innerText=''
        }
        else if(e.key=='*'){
            operator = '*';
            operand1=parseFloat(display.textContent);
            display.innerText=''
        }
        else if(e.key=='/'){
            operator = '/';
            operand1=parseFloat(display.textContent);
            display.innerText=''
        }
        else if(e.key==='Enter'){

            
            if(operator=='+'){
                operand2=parseFloat(display.textContent);
                result = operand1+operand2;
                // display.innerText='';
                display.innerText=result;
                }
    
                else if(operator=='-'){
                    operand2=parseFloat(display.textContent);
                    result = operand1-operand2;
                    // display.innerText='';
                    display.innerText=result;
                    }
    
                    else if(operator=='*'){
                        operand2=parseFloat(display.textContent);
                        result = operand1*operand2;
                        // display.innerText='';
                        display.innerText=result;
                        }
    
                    else if(operator=='÷'){
                    operand2=parseFloat(display.textContent);
                    result = operand1/operand2;
                    // display.innerText='';
                    display.innerText=result;
                    }
                    
             }
            else 
            {
                display.innerText+=value;
     
            }

        });

        // ______________________________________________________________________
        for(var i = 0; i < btns.length ; i++)
      btns[i].addEventListener('click'||'keypress',function(e){
          var value = this.getAttribute('data-value');
        //   let key = String.fromCharCode(e.key);
        //     if(e.key=='+'){
        //         console.log('+');
        //     }

         if(value == '+')
        {
             operator = '+';
            operand1=parseFloat(display.textContent);
            display.innerText=''
        }

        else if(value == '-')
        {
            operator = '-';
            operand1=parseFloat(display.textContent);
            display.innerText=''
        }
        else if(value == 'x')
        {
            operator = '*';
            operand1=parseFloat(display.textContent);
            display.innerText=''
        }
        else if(value == '÷')
        {
            operator = '÷';
            operand1=parseFloat(display.textContent);
            display.innerText=''
        }

        else if(value =='AC')
        {
            display.innerText='';
        }
        else if(value == '=')
        {
            if(operator=='+'){
            operand2=parseFloat(display.textContent);
            result = operand1+operand2;
            // display.innerText='';
            display.innerText=result;
            }

            else if(operator=='-'){
                operand2=parseFloat(display.textContent);
                result = operand1-operand2;
                // display.innerText='';
                display.innerText=result;
                }

                else if(operator=='*'){
                    operand2=parseFloat(display.textContent);
                    result = operand1*operand2;
                    // display.innerText='';
                    display.innerText=result;
                    }

                else if(operator=='÷'){
                operand2=parseFloat(display.textContent);
                result = operand1/operand2;
                // display.innerText='';
                display.innerText=result;
                }
                
         }
        else 
        {
            display.innerText+=value;
    
        }
        
    });
    