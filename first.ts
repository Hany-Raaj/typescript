let myMoney: number = 100;
console.log(myMoney);

function add(num1:number, num2:number){
    return num1+num2
}

add(3, 6);


function fullName(firstName: string, lastName: string): string{
    return firstName + " " + lastName;
}

const user:string = fullName('Ben', 'adam');


function doubleItAndConsole(num:number):void{
    const result = num * 2;
    console.log(result);
}

const output:void = doubleItAndConsole(10);
console.log(output);


const multiply = (x:number, y:number):number => x * y;
console.log(multiply(25, 6));


let division: (p: number, q: number) => number
division = (p, q) => p/q;

const numbers: number[] = [12, 32, 5, 23, 54,34, 76, 75];
numbers.push(11);

const friends:string[] = ['adam', 'goni', 'abdul', 'gofur'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if(friend.length > megaName.length){
        megaName = friend
    }
}

console.log("Friend with largest name: ", megaName);


// object
const friend:{ name: string, age: number} = {
    name: 'adam',
    age: 12
}

let player: {
    club: string,
    salary: number    
} = {
    club: 'adam',
    salary: 12
}

interface Player {
    club: string,
    name: string, 
    salary: number,
    wife?: string,
    isPlaying: boolean
}

const messy: Player = {
    club: 'real madrid',
    name: 'Messy',
    salary: 23000000,
    wife: 'someone',
    isPlaying: true
}

const ronaldo: Player = {
    club: 'real madrid',
    name: 'Messy',
    salary: 23000000,
    isPlaying: true
}

function getBonus(player: {salary: number}){
    return player.salary * 0.1;
}

const poorPlayer = {salary: 10000}
getBonus(poorPlayer);

class Person {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    getName(): string{
        return this.name;
    }
}

const sam = new Person('Samuel');
console.log('name', sam.name);
const samName: string = sam.getName()
