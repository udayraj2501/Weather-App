const uno = () => {
    return "I am One";
   
}

const dos = () => {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve( "I am two");    
         }, 3000); 
    })
    
}

const tres = () => {
    console.log("I am three");
   
}

const callMe = () => {
    let valOne = uno();
    console.log(valOne);

    let valtwo =  dos();
    console.log(valtwo);

    let valThree = tres();
    console.log(valThree);
}

callMe();