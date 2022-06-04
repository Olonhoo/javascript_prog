function transformation(value) {
    if (Number.isInteger(value) == false || value < 0 || value > 999) {
        console.log('Число должно быть в диапазоне [0, 999]');
        return {};
    }
    return {
        hundreds: Math.floor(value / 100),
        tens: Math.floor(value / 10),
        units: Math.floor(value % 10)
    }
}

console.log(transformation(45));