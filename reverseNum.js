function rev(num)
{
    return Number(num.toString().split("").reverse().join(""))
}

console.log(rev(304))