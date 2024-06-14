function addSpace(str)
{
    return str.split('').join(' ');
}

const inpString = "This Is A String In Java"
const inpSpace = addSpace(inpString)

console.log(inpSpace);
