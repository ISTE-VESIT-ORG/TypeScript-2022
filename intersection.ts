type Student = {
    id: string;
    age: number;
};

type Employee = {
    companyId: string;
};

let person: Student & Employee;

person.age = 21; 
person.companyId = 'SP302334'; 
person.id = '10033402'; 
// person.name = 'Henry'; 