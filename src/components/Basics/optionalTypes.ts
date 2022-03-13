function callMom(message?: string) {
    if (!message) {
        console.log('Hi mom. Love you. Bye.');
    } else {
        console.log(message);
    }
}

// Interface describing an object containing an optional property
interface Person {
    name: string;
    age: number;
    favoriteColor?: string; // This property is optional
}