const f2 = require('./folder_name1/main.js')
const f3 = require('./folder_name2/main.js')
const f4 = require('./folder_name3/main.js')

async function mainFunction(){

    var data = "data from main";
    var result = "Data result in main ";

    resultF2 = await f2(data, result);
    console.log(resultF2)
    resultF3 = await f3(data, result);
    console.log(resultF3)
    resultF4 = await f4(data, result);
    console.log(resultF4)

    m1();

}


function m1(){
    console.log("function from main.======>5")
}
mainFunction();