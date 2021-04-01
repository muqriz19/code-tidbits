//Finding un-included element of one array (A) to another array (B)

const arrayA = [
    {
        name: 'graph',
        permission: 'r' 
    },
    {
        name: 'stream',
        permission: 'r' 
    },
    {
        name: 'new',
        permission: 'r' 
    }
    ];
const arrayB = [
    {
        name: 'graph',
        permission: 'r' 
    },
    {
        name: 'stream',
        permission: 'r' 
    },
];

const data = arrayA.filter((elem) => !arrayB.find(({name}) => elem.name === name))

console.log(data);