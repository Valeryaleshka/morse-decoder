const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};



function decode(expr) {

  

    let expressions = expr.split("**********");
    let expressions2 = [expressions.length];
    let temp = [];
    
    let z = ""
    let zero = new RegExp("00", 'g');
    let dot = new RegExp("10", 'g');
    let dash = new RegExp("11", 'g');
   
    for(let i = 0 ; i< expressions.length;i++){
                       
        while (expressions[i].length>0){
            z = expressions[i].substr(0,10).replace(zero,"").replace(dot,".").replace(dash,"-");            
            expressions[i] = expressions[i].slice(10);
            temp.push(z);
        }
        
        expressions2[i] = temp;
        temp = [];
    } 
    
    for (let i = 0 ; i< expressions2.length;i++){
        for (let j = 0 ; j< expressions2[i].length;j++){
            expressions2[i][j] = MORSE_TABLE[expressions2[i][j]];
        }
    }
    
    for( let i = 0; i< expressions2.length; i++){
        expressions2[i] = expressions2[i].join("");
    }

    return expressions2.join(" ");

    }

module.exports = {
    decode
}