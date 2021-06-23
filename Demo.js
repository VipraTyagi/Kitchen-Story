console.log("Vipra Tyagi")
console.log(2*6)
function arrdemo(){

    const arr=[5,2,6,8,9]
    console.log("Arrays numebrs are") 
    for (let i=0;i<=6;i++){
        
        console.log(arr[i])
    }
    arr.sort()

    for (let i = 0; i < 6; i++)  
    {  
    for (let j = i + 1; j < 6; j++)   
    {  
    let tmp = 0;  
    if (arr[i] > arr[j])   
    {  
    tmp = arr[i];  
    arr[i] = arr[j];  
    arr[j] = tmp;  
    }  
    } 
    console.log("Sorted Arrays numberrs are") 

    for (let i=0;i<=6;i++){
    
        console.log(arr[i])
    }}}
    
arrdemo();