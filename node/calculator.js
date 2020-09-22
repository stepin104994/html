exports.add=function(num1,num2){
    dontExportThis();
    return parseInt(num1,2)+parseInt(num2,2);
}
exports.product=function(num1,num2){
    dontExportThis();
    return parseInt(num1,10)*parseInt(num2,10);
}
exports.message='gello world';
function dontExportThis(){
    console.log("calculator");
}