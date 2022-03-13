const fillArray = <T>(len: number, elem: T) => {
    return new Array<T>(len).fill(elem);
};

const newArray = fillArray<string>(3, 'hi'); // => ['hi', 'hi', 'hi']

newArray.push('bye'); 
// newArray.push(true);