const chosenDevice = ['device-1', 'device-3'];

const allDevice = [{
        name: 'device-1',
        selected: false
    },
    {
        name: 'device-2',
        selected: false
    },
    {
        name: 'device-3',
        selected: false
    }
];

for (let de = 0; de < allDevice.length; de++) {
    console.log('Current Device', allDevice[de]);

    if (chosenDevice.some(device => device === allDevice[de].name)) {
        console.log('Match Device', allDevice[de]);

        allDevice[de].selected = true;
    }
}

console.log(allDevice);