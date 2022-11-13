let a = document.getElementById('button2')
let b = document.getElementById('screen1')
function buton(val)
{
    b.value += val
}
function clearb()
{
    b.value = ""
}
function evali()
{

    let t = document.getElementById('screen1').value
     let result= eval(t)
     document.getElementById('screen1').value = result
}