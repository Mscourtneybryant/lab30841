
let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

//console.log(csv)
//PART 1
// const sections = csv.split('\n')
// //console.log(sections)

// for(let i = 0 ; i <= sections.length-1 ;i++){
//  console.log(sections[i])
// }



// PART 2


//console.log(csv.split("\n"))


function becomeNested(str){
    let splitArray = str.split("\n")
    let new_arr = []
    for(let i = 0 ; i <= splitArray.length-1 ;i++){
        const subArr = splitArray[i].split(',')
        new_arr.push(subArr)

    }
    return new_arr
}
console.log(becomeNested(csv))

/**
 * take the data stored under the first nested array and group it according to each item in the array. 
 * the ID numbers should be grouped with ID, name should be grouped with names, occupation should be grouped with occupation titles
 * and ages should be grouped with age. 
 */


let transformNestedArray = [ [ 'ID', 'Name', 'Occupation', 'Age' ],
[ '42', 'Bruce', 'Knight', '41' ],
[ '57', 'Bob', 'Fry Cook', '19' ],
[ '63', 'Blaine', 'Quiz Master', '58' ],
[ '98', 'Bill', 'Doctor’s Assistant', '26' ]];

// let nestedArrayToObj = Object.fromEntries(transformNestedArray)
// console.log(nestedArrayToObj)

function arrToObject(nestedArr){
    //create an empty object to hold the values
    let obj = {}
    //create a variable that will access the first array inside the nested array 
    const keys = nestedArr[0]
    //create a variable with an empty array to hold the new array that will be pushed into it
    let newArr = []
 
    
       
    
    //looping through the assigned keys
    for(let i = 1 ; i <= nestedArr.length-1; i++){
        //console.log(nestedArr[i]) //creating a variable to store each key
        let sub_arr_length = nestedArr[i].length-1
         //looping through the values
        for(let j = 0 ; j <= sub_arr_length; j++){
            //assigning the value of const keys to j which will represent the values
            const key = keys[j]
            //setting the new array by assign the keys respresented by i and the values represented by j
            const value = nestedArr[i][j]
            //set the object to hold the new object
            obj[key] = value
           
            
        }
        //pushing the new values into the empty array
        newArr.push(obj)
        obj = {}
    }

    return newArr
    

}
console.log(arrToObject(transformNestedArray))




// remove the last element from the sorted array


let nestedArray = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
   { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]

let myNewArray = nestedArray.pop()

console.log(nestedArray)



//insert a new object into index 1 of the array
 


let myNestedArray = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
   { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]

   let mutatedArray = myNestedArray.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" })

console.log(myNestedArray)


//insert a new object into the end of the array


let doubleMutatedArray = myNestedArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

console.log(myNestedArray)


//find the average of the ages in the array

const averageAge = (arr = []) => {

    const { sum, count } = arr.reduce
    ((acc, val) => {
        let { sum, count } = acc;
        sum += val.age;
        count++;
        return { sum, count };
    } , {
        sum: 0, count: 0
    });

    return (sum / (count || 1))
};
console.log(averageAge(myNestedArray))



// turn the array back into csv format



const objectToCsv = function (res) {
     
    const csvRows = [];
    const headers = Object.keys(res[0]);
 
    csvRows.push(headers.join(','));
 
    for (const row of res) {
        const values = headers.map(header => {
            const val = row[header]
            return `"${val}"`;
        });
 
        csvRows.push(values.join(','));
    }
 
    return csvRows.join('\n');
};
 
const res = [
    { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
    { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
    {
      id: '98', name: 'Bill', occupation: 'Doctor’s Assistant', age: '26'},
    { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
  ]
 
const csvData = objectToCsv(res);
console.log(csvData); 













