// cases in js:  camel case, pascal case, snake case, kebab case
// camel case:  first letter of the first word is lowercase, and the first letter of each subsequent word is uppercase.  example: myVariableName
// pascal case:  first letter of each word is uppercase.  example: MyVariableName
// snake case:  all letters are lowercase, and words are separated by underscores.  example: my_variable_name
// kebab case:  all letters are lowercase, and words are separated by hyphens.  example: my-variable-name

console.log("hello world");

abc=document.getElementById("abc");
console.log(abc);

abc.textContent="hello world";
abc.style.color="black";
abc.style.backgroundColor="yellow";

function hi(){
    alert("hi");
    console.log("hi");
}

hi();