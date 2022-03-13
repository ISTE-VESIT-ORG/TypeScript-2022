let x = 10; // x is given the number type
const tweetLength = (message = 'A default tweet') => {
    return message.length;
};
function add(a: number, b: number) {
    return a + b;
}

const result = add(2, 4);

result.toFixed(2); 
//wrong
// result.length;

let list = [10, 22, 4, null, 5];

list.push(6); // ✅
list.push(null); // ✅
// list.push('nope');