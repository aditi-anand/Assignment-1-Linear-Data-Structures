// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

console.log("Question 1:");

console.log("Printing all pairs of an array whose sum equals to given number")


    let arr = [ 1, 5, 7, -1, 5 ];
    let n1 = arr.length;
    let sum = 6;
function printPairs(arr, n1, sum)
{

    let count=0;
    for (let i = 0; i < n1; i++)
        for (let j = i + 1; j < n1; j++)
            if (arr[i] + arr[j] == sum){
                console.log("(" + arr[i] + ", "+ arr[j] + ")" );
                count++;
            }
              
              
    console.log("Number of pairs:", count);  
          
  }
 
 
  printPairs(arr, n1, sum);

console.log("---------------------------------------------");
   
// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
console.log("Question 2:");

let arr2=[1,2,3,4,5,6,7,8,9,10];

console.log("Array:" + arr2);
console.log("Reverse of array:" + arr2.reverse())

console.log("---------------------------------------------");


// Q3. Write a program to check if two strings are a rotation of each other?

console.log("Question 3:");



	function areRotations( str1, str2)
	{
	
		return (str1.length == str2.length) &&
			((str1 + str1).indexOf(str2) != -1);
	}
	


		var str1 = "ABCDEFG";
		var str2 = "EFGABCD";

		if (areRotations(str1, str2))
			console.log("Strings are rotations of each other");
		else
			console.log("Strings are not rotations of each other");

console.log("---------------------------------------------");


// Q4. Write a program to print the first non-repeated character from a string?

console.log("Question 4:");

const NO_OF_CHARS = 256
function firstNonRepeating(str)
{
	let arr = new Array(NO_OF_CHARS)
	for(let i=0;i<NO_OF_CHARS;i++){
		arr[i] = [0,0];
	}

	for (let i=0;i<str.length;i++) {
		arr[str.charCodeAt(i)][0]++;
		arr[str.charCodeAt(i)][1]= i;
	}

	let res = Number.MAX_VALUE;
	for (let i = 0; i < NO_OF_CHARS; i++)
		if (arr[i][0] == 1)
			res = Math.min(res, arr[i][1]);

	return res;
}
let str = "abcdebcdaefg";
let index = firstNonRepeating(str);
if (index == Number.MAX_VALUE)
	console.log("Either all characters are repeating or string is empty");
else
	console.log("First non-repeating character is ",str[index]);



console.log("---------------------------------------------");


// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
console.log("Question 5:");

function towerOfHanoi(num, from_rod,  to_rod,  aux_rod)
{
        if (num == 0)
        {
            return;
        }
        towerOfHanoi(num - 1, from_rod, aux_rod, to_rod);
        console.log("Move disk " + num + " from rod " + from_rod +
        " to rod " + to_rod);
        towerOfHanoi(num - 1, aux_rod, to_rod, from_rod);
    }
    const num = 4;
    towerOfHanoi(num, 'A', 'C', 'B'); 

console.log("---------------------------------------------");

// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

console.log("Question 6:");
console.log("Program to convert postfix to prefix");
     
  
    function isOperator(x)
    {
  
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        }
        return false;
    }
  
    function postToPre(post_exp)
    {
        let s = [];

        let length = post_exp.length;
  
        for (let i = 0; i < length; i++) {
  
            if (isOperator(post_exp[i])) {
  
                let op1 = s[s.length - 1];
                s.pop();
                let op2 = s[s.length - 1];
                s.pop();
                let temp = post_exp[i] + op2 + op1;

                s.push(temp);
            }
  
            else {
  
                s.push(post_exp[i] + "");
            }
        }
  
        let ans = "";
        while (s.length > 0)
            ans += s.pop();
        return ans;
    }
     
    let post_exp = "ABC/-IJ/K-*";
    console.log("Postfix: ", post_exp)
        
   console.log("Prefix : " + postToPre(post_exp));
console.log("---------------------------------------------");

// Q7. Write a program to convert prefix expression to infix expression.
console.log("Question 7:");

console.log("Program to convert prefix to Infix");       
    function isOperator(x)
    {
        switch(x)
        {
            case '+':
            case '-':
            case '*':
            case '/':
                return true;
        }
        return false;
    }
 
    function convert(str)
    {
        let stack = [];
 
        let l = str.length;
 
        for(let i = l - 1; i >= 0; i--)
        {
            let c = str[i];
 
            if (isOperator(c))
            {
                let op1 = stack[stack.length - 1];
                stack.pop()
                let op2 = stack[stack.length - 1];
                stack.pop()
 
                let temp = "(" + op1 + c + op2 + ")";
                stack.push(temp);
            }
            else
            {
 
                stack.push(c + "");
            }
        }
        return stack[stack.length - 1];
    }
     
    let exp = "*-A/BC-/IJK";
    console.log("Prefix : ", exp) 
  console.log("Infix : " + convert(exp));

console.log("---------------------------------------------");

// Q8. Write a program to check if all the brackets are closed in a given code snippet.
console.log("Question 8:");
function areBracketsBalanced(expr)
{
    let stack = [];
   
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
 
        if (x == '(' || x == '[' || x == '{')
        {
            stack.push(x);
            continue;
        }
 
         if (stack.length == 0)
         return false;
             
        let check;
        switch (x){
        case ')':
                   check = stack.pop();
                   if (check == '{' || check == '[')
                   return false;
                    break;
 
        case '}':
                   check = stack.pop();
                   if (check == '(' || check == '[')
                   return false;
                   break;
 
        case ']':
                 check = stack.pop();
                 if (check == '(' || check == '{')
                return false;
                 break;
        }
    }
     return (stack.length == 0);
}
 
let expr = "([{]}])";
 if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced ");

console.log("---------------------------------------------");

// Q9. Write a program to reverse a stack.
console.log("Question 9:");
let st = [];
function insert_at_bottom(x) {
  if (st.length == 0) st.push(x);
  else {
    let a = st.pop();
    insert_at_bottom(x);
    st.push(a);
  }
}
function reverse() {
  if (st.length > 0) {
    let x = st.pop();
    reverse();
    insert_at_bottom(x);
  }
}

st.push("1");
st.push("2");
st.push("3");
st.push("4");
st.push("5");

console.log("Original stack: ",st.join());
reverse();
console.log("Reversed stack: ",st.join());
console.log("---------------------------------------------");


// Q10. Write a program to find the smallest number using a stack.
console.log("Question 10:");

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  const stack = new Stack();
  function getMinimum() {
    const stack2 = new Stack();
    stack2.push(8);
    stack2.push(10);
    stack2.push(5);
    stack2.push(3);
    stack2.push(1);
    stack2.push(9);
    console.log("Stack: ",stack2.items)
    let first = stack2.pop();
  
    for (i = 0; i < stack2.items.length; i++) {
      if (!stack2.isEmpty()) {
        if (stack2.items[i] < first) {
          first = stack2.items[i];
        }
      }
    }

    
    console.log("Minimum value is ", first);
  }
  getMinimum();
  

console.log("---------------------------------------------");
