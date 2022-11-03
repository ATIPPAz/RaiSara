const number = [6,5,7,8,4,3,1,2]
let sort = [...number]
sort = sort.sort() 
let count = 0
for(let i = 0;i< number.length;i+=2){
  if(number[i] > number[i+1]){
    const temp = number[i]
    number[i] = number[i+1]
    number[i+1] = temp
    count+=1
  }
}
for(let i = 1;i<= number.length;i+=4){
  if(number[i] > number[i+1]){
    const temp1 = number[i-1]
    const temp2 = number[i]
    number[i-1] = number[i+1]
    number[i] = number[i+2]
    number[i+1] = temp1
    number[i+2] = temp2
    count+=1
  }
}
for(let i = 3;i< number.length;i+=4){
  if(number[i] > number[i+1]){
    const temp1 = number[i]
    const temp2 = number[i-1]
    const temp3 = number[i-2]
    const temp4 = number[i-3]
    number[i] = number[i+4]
    number[i-1] = number[i+3]
    number[i-2] = number[i+2]
    number[i-3] = number[i+1]
    number[i+4] = temp1
    number[i+3] = temp2 
    number[i+2] = temp3
    number[i+1] = temp4
    count+=1
  }
}
let isEqual = true
for(let i =0;i<number.length;i++){
  if(number[i] !== sort[i]){
    isEqual = false
  }
}
if(!isEqual){
  count = -1
}
console.log(number)
console.log(count)
