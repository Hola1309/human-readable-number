module.exports = function toReadable (number) {
  const tw = [
 		"",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
  ];
  const tn = [
  		"",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
  ];
  if (number === 0) return "zero";
  	
  		let a = Math.floor(number / 100);
  		a = tw[a];
  		let b = number % 100;
  		let c,d,e;
  		
  		if (b < 20 ) {
  			b = tw[b];
  			c = ''
  			d = ''
  		} else { 
  			b = Math.floor(b / 10); 
  			b = tn[b];
  			c = number % 10;
  			c = tw[c];
  			if (number % 10 == 0 || number % 100 == 0) {
  			d = ''
  		} else { d = ' ' }
  		}
  		if (number >= 100) {
  			e = ' hundred '
  		} else { e = ''}
  		if (number % 100 == 0) { e = ' hundred'}
  		
  	return a + e + b + d + c;
}

