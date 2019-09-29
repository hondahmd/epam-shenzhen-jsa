var car = {
    model:'Benz',
    color:'black',
    year:1886,
    doors:0,
    historical:true
};
var computer = {
    type: 'PC',
    monitor: {
        color: 'black',
        size: '16\"',
        HDMI: true,
        VGA: true
    },
    tower:{
        color: 'grey',
        CPU: 4.7,
        memory: 16,
        SSD: 128
    }
}

/*
//before ES6
var model = car.model;
var color = car.color;
var year = car.year;
var doors = car.doors;
var historical = car.historical;
var type = computer.type;
var monitorColor = computer.monitor.color;
var monitorSize = computer.monitor.size;
var monitorHDMI = computer.monitor.HDMI;
var monitorVGA = computer.monitor.VGA;
var towerColor = computer.tower.color;
var towerCPU = computer.tower.CPU;
var towerMemory = computer.tower.memory;
var towerSSD = computer.tower.SSD;
*/

//after ES6
let {model, color, year, doors, historical} = car;
let {type, 
    monitor: {
        color: monitorColor,
        size: monitorSize,
        HDMI: monitorHDMI,
        VGA: monitorVGA
    },
    tower: {
        color: towerColor,
        CPU: towerCPU,
        memory: towerMemory,
        SSD: towerSSD
    }
    } = computer;
