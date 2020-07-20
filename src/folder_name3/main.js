mainFn4 = (data, result) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Received data from folder 4", data)
            resolve(result + "from folder 4")
        },4000);
    })

        
  

    
}

module.exports = mainFn4