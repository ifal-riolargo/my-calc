// Limpar os dados do visor.
function limpar() {
    document.getElementById('visor').value = '';
  }
  
  // Passar os valores para o visor e evitar repetição de sinais.
  function preencher(valor) {
    // Passar os valores.
    document.getElementById('visor').value += valor;
    
    // Evitar repetições.
    var displayRes = document.getElementById('visor').value;
    var nRes = displayRes.replace('++', '+') .replace('1(','1') .replace(')1',')')
                         .replace('--', '-') .replace('2(','2') .replace(')2',')')
                         .replace('+-', '-') .replace('3(','3') .replace(')3',')')
                         .replace('-+', '+') .replace('4(','4') .replace(')4',')')
                         .replace('xx', 'x') .replace('5(','5') .replace(')5',')')
                         .replace('x+', '+') .replace('6(','6') .replace(')6',')')
                         .replace('+x', 'x') .replace('7(','7') .replace(')7',')')
                         .replace('x-', '-') .replace('8(','8') .replace(')8',')')
                         .replace('-x', 'x') .replace('9(','9') .replace(')9',')')
                         .replace('÷÷', '÷') .replace('0(','0') .replace(')0',')')
                         .replace('÷x', 'x') .replace('x)','x')
                         .replace('x÷', '÷') .replace('-)','-')
                         .replace('+÷', '÷') .replace('+)','+')
                         .replace('÷+', '+') .replace('÷)','÷')
                         .replace('-÷', '÷') .replace('(÷','(')
                         .replace('÷-', '-') .replace('(x','(')
                         .replace('((', '(') 
                         .replace('()', '(') 
                         .replace(')(', ')') 
                         .replace('))', ')') 
                         .replace('..', '.') 
    document.getElementById('visor').value = nRes;
    
    // Evitar caracteres como iniciais.
    var vals = document.getElementById('visor').value;
    if(vals.substring(0,1) == 'x' || vals.substring(0,1) == '÷' || vals.substring(0,1) == ')' || vals.substring(0,1) == '.'){
      document.getElementById('visor').value = '';
    }
    
  //   Validação dos parenteses   
    
  }
  
  // Efetuar os calculos.
  function calcular() {
    
   var vis = document.getElementById('visor').value;
  var nvis = vis.charAt(vis.length-1);
   if(nvis == '+' || nvis == '-'){
     vis = vis.slice(0,-1);
    document.getElementById('visor').value = vis;
   }
    
    var resultado = 0;
    resultado = document.getElementById('visor').value;
    resultado = resultado.replace(/÷/g,'/').replace(/x/g,'*');
    document.getElementById('visor').value = eval(resultado);
    
    // Evitar descrição undefined no visor.
    var res = document.getElementById('visor').value;
    if(res == 'undefined'){
      document.getElementById('visor').value = '';
    }
    
  }
  
  // Apagar os caracteres do visor.
  function excluir() {
    var caracter = document.getElementById('visor').value;
    caracter = caracter.slice(0, -1);
    document.getElementById('visor').value = caracter;
  }
  
  // Calcular a raiz quadrada e válidação de caracteres inválidos.
  function razQ(){
    var num = document.getElementById('visor').value;
    var razRes = Math.sqrt(num);
    document.getElementById('visor').value = razRes;
  
    if(
     num.includes('+') || 
     num.includes('-') || 
     num.includes('x') ||
     num.includes('÷') ||
     num.includes('(') ||
     num.includes(')') || 
     num.substring(0,1) == ''){
     document.getElementById('visor').value = '';
  }
  
  }
  
  
  
  
  
  
  
  //percent
  
  function percent(){
    var val = document.getElementById('visor').value;
     
    
    var nVal = val.lastIndexOf('+');
    
        var xal =  val.substring(nVal) ;
  
    
    document.getElementById('ig').innerHTML = xal;
    }