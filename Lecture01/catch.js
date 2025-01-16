function criticalCode() {
    throw "throwing an exception";
    
}

function logError(theException) {
    console.log(theException);
    
}
console.log("\n*******Try..Catch*****\n");

try {
    criticalCode();
} catch (ex) {
    console.log("\n*******Throwing in Try..Catch********\n");
    
}
try {
    throw "An ex";
} catch (ex) {
    console.log("got error");
    logError(ex);
}
console.log("\n********Try..Catch..Finally*******\n");

try {
    criticalCode();
} catch (ex) {
    console.log("got error");
    logError(ex);
} finally {
    console.log("Code run");
    
}
function hello() {
    console.log("\n******Throwing W******\n");
    
}
    
