
let output = document.getElementById("input")
function display(num)
{
    output.value += num;
}
function result()
{
    try{
        output.value = eval(output.value);
    }
    catch(err)
    {
        alert("Invalid")
    }
}
function cl()
{
    output.value="";
}
function del()
{
    output.value = output.value.slice(0,-1)
}