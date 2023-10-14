var json='{"name":"john", "age":30,"city":"New York"}';
var obj=JSON.parse(json);
console.log(obj);
var response=[obj];
//console.log("JSON Object", response);
console.log(" ");
console.log(" ");


console.log("************for loop*****************");

for(var i=0; i<response.length; i++)
{
    console.log(response[i]);
}
console.log("  ");
console.log("  ");
console.log("************for of loop*****************");

for(var val of response)
{
    console.log(val);
}
console.log("  ");
console.log("  ");
console.log("************for in loop*****************");

for(var res in response)
{
    console.log(val);
}
console.log("  ");
console.log("  ");
console.log("************forEach loop*****************");

response.forEach((person)=>{
    console.log(person);
})
