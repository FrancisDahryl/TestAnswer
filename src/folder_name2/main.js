mainFn3 = (data, result) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Received data from folder 3", data)
            resolve(result + "from folder 3")
        }, 7000);
    })

        
  

    
}

module.exports = mainFn3