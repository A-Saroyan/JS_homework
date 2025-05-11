let numbers  = [5,9,22,55,15,75];

const map_num = numbers.map((x) => x * 2 );    // aveli karch  u harmar en yntercanutyan u ogtagorcman mej,chunen this vori mijocov xusampum enq centext-i
                                               // het kapvac bug-eric 

const map_number = numbers.map(function(a) {return a * 2});


console.log(numbers);
console.log(map_num);
console.log(map_number);
