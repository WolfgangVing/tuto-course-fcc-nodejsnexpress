const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`the sum is: ${num1 + num2}`);    
}

addValues()

/** 
 * if you require/import an file(.js) without assign to a variable
 * and thus file have a invoked function, then that function will be executed if thought you aren't calling/invoking it
 * after import the file.
 * */ 