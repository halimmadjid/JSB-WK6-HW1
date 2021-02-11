//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(stra, lstb)
{
    let x = stra.replace(',' , '').split(' ');
    for (let i = 0; i < x.length; i++ )
    {
        for(let j = 0; j < lstb.length; j++)
        {
            if (lstb[j].toLowerCase() == x[i].toLowerCase())
            {
                they_match = true;
                return console.log('Matched dog_name');
                
            } 
        }
    }
    console.log('No Matches');
}
findWords(dog_string,dog_names)

// they_match = False
// def findWord(stra, lstb):
//   x = stra.replace(',','').split(' ')  
//   for i in x:
//     for j in lstb:   
//       if j.lower() == i.lower():
//         they_match = True
//         print(they_match)
//       break

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
arrb = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

funciton replaceEvens(arr){
}

function replaceEvens(arr){
    console.log('test')
    for (var i = arr.length; i >= 0; i-- )
    {
        if (i % 2 == 0)
        {
            arr.splice([i],1,'even index')
        }
    } 
    console.log(arr);
}
replaceEvens(arrb)

// def replaceEvens(lst):
//   for i in range(len(lst)): 
//     if i % 2 == 0:
//       lst[i] = "even index"
//   print(lst)

// replaceEvens(arr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
