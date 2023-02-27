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
  const some = "**********";
  const arrWordCode = expr.split(some);
  const arrWordDecode = arrWordCode.map((j) => {
    let newArrDecode = [];
    for (let i = 0; i < j.length; i += 10) {
      const decodeValue = j
        .slice(i, i + 10)
        .replace(/10/g, ".")
        .replace(/11/g, "-")
        .replace(/00/g, "");
        newArrDecode.push(MORSE_TABLE[decodeValue]);
    }
    return newArrDecode.join("");
  });
  return arrWordDecode.join(" ");
}


module.exports = {
    decode
}

