// Задача 1
function maxDiff(arr) {
  let minEl = arr[0];
  let maxDiff = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minEl) {
      minEl = arr[i];
    } else if (arr[i] - minEl > maxDiff) {
      maxDiff = arr[i] - minEl;
    }
  }
  return maxDiff;
}
console.log(maxDiff([1, 2, 3, 4, 5]));

function removeDup(arr) {
  return [...new Set(arr)];
}
console.log(removeDup([1, 2, 2, 3, 3, 4]));

function filterDone(tasks) {
  return tasks.filter(task => task.isDone);
}
console.log(filterDone([{id: 1, isDone: true}, {id: 2, isDone: false}, {id: 3, isDone: true}]));

// Задача 2
function filterNum(arr, num) {
  return arr.filter(el => el > num);
}
console.log(filterNum([1, 4, 6, 3, 2], 2));

function flatten(arr) {
  return arr.flat(Infinity);
}
console.log(flatten([1, 4, [34, 1, 20], [6, [6, 12, 8], 6]]));

// Задача3
function countPairs(arr) {
  let pairsCount = new Map();
  
  for (let num of arr) {
    if (pairsCount.has(-num)) {
      pairsCount.set(num, pairsCount.get(num) + pairsCount.get(-num));
    } else {
      pairsCount.set(num, (pairsCount.get(num) || 0) +1);
    }
    
    pairsCount.set(-num, (pairsCount.get(-num) || 0));
    
    if(pairsCount.get(num) > pairsCount.get(-num)){
      pairsCount.set(num,pairsCount.get(num)-pairsCount.get(-num));
      pairsCount.set(-num,0);
    }else{
      pairsCount.set(-num,pairsCount.get(-num)-pairsCount.get(num));
      pairsCount.set(num,0);
    }
    
    if(pairsCount.get(num)==0){
      pairsCount.delete(num);
    }
    
    if(pairsCount.get(-num)==0){
      pairsCount.delete(-num);
    }
    
    if(pairsCount.has(0)){
      pairsCount.set(0,pairsCount.get(0)/2);
    }
    
    return [...pairsCount.values()].reduce((acc,val)=>acc+val);
    
}
console.log(countPairs([-7 ,12 ,4 ,6 ,-4 ,-12 ,0]));

// Задача4
function* genRand(min,max){
   while(true){
     yield Math.floor(Math.random() * (max - min +1)) + min;
   }
}
const randGen = genRand(1 ,10);
console.log(randGen.next().value);

// Задача5
function* genPadovan(){
   let padovanSeq = [1 ,1 ,1];
  
   yield* padovanSeq;
  
   while(true){
     padovanSeq.push(padovanSeq[padovanSeq.length-padovanSeq[padovanSeq.length-2]]+padovanSeq[padovanSeq.length-padovanSeq[padovanSeq.length-3]]);
     yield padovanSeq[padovanSeq.length-1];
   }
}
const padovanGen = genPadovan();
console.log(padovanGen.next().value);

// Задача6
function* genPrime(){
   function checkPrime(number){
     for(let i =2; i<= Math.sqrt(number); i++)
       if(number % i ===0) return false;
     return number >1;
   }

   let num =2;

   while(true){
     if(checkPrime(num)){
       yield num;
     }
     num++;
   }
}
const primeGen = genPrime();
console.log(primeGen.next().value);

// Задача7
function countOccur(string){
   const words = string.split(' ');
   const map = new Map();

   words.forEach(word => map.set(word,(map.get(word)||0)+1));

   return map;
}
console.log(countOccur("Hello world!"));

// Задача8
function findPrime(n){
   function checkPrime(number){
     for(let i =2n; i<= number /2n; i++)
       if(number % i ===0n) return false;
     return number >1;
   }

   let count =0n;
   let num =2n;

   while(count < n){
     if(checkPrime(num)){
       count++;
     }
     num++;
   }

   return num-1n;
}
console.log(findPrime(10));
