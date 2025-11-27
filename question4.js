// sum of first n natural numbers


function natural(n){
    let sum=0;
    for(let i =0 ;i<=n;i++){
        sum=sum+i;
    }
    return sum 
}

console.log(natural(5))