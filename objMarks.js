let marks = {
  math: 33,
  Science: 45,
  Hindi: 49,
};

for (let i = 0; i < Object.keys(marks).length; i++) 
    {
        console.log('Marks Of '+Object.keys(marks)[i]+" is "+marks[Object.keys(marks)[i]]);
    }
