const radius = [2,4,6,8]

const area = function (radius){
    return Math.PI * radius * radius
};

const circumference = function (radius){
    return 2 * Math.PI * radius
};

const diameter = function (radius){
    return radius * 2
};

const calculate = function (radius, logic){
    const output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

