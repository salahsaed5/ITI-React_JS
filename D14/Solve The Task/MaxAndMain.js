const maxMin = (params) => {
    const min = Math.min(...params);
    const max = Math.max(...params);
    return { min, max };
};

var arr = [1, 5, 6, 84, 6, 2, 54, 23, 46, 0, 235, 111];

console.log(maxMin(arr));
