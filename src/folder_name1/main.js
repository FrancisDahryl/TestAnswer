mainFn2 = (data, result) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Received data from folder 2", data)
            resolve(result + "from folder 2")
        }, 5000);
    })

        
  

    
}

module.exports = mainFn2