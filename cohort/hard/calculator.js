/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator 
{
    constructor(x)
    {
        this.result =x;
    }
    add(x)
    {
        this.result+=x;
    }
    subtract(x)
    {
        this.result-=x;
    }
    multiply(x)
    {
        this.result*=x;
    }
    divide(x)
    {
        this.result/=x;
    }
    clear()
    {
        this.result=0;
    }
    getResult()
    {
        return this.result;
    }
}

function calculate(s)
{
    let space=true;
    let op='+';
    let ans= new Calculator(0);
    for(let i=0;i<s.length;i++)
    {
        let value;
        if(s[i]<'0' || s[i]>'9' && s[i]!=' ' && s[i]!='(' && s[i]!=')')
        {
            throw(Error);
            return;
        }
        if(s[i]=='(')
        {
            let str="";
            let j=i+1;
            for( ;j<s.length;j++)
            {
                if(s[j]==')')
                {
                    value = calculate(str);
                    break;
                }
                str.push(s[j]);
            }
            i=j;
        }
        else if(s[i]==' ' )
            space =true;
        else
        {
            value=s[i]-'0';
            let j=i+1;
            while(j<s.length && s[j]>='0' && s[j]<='9')
            {
                
            }
        }
        switch(op)
        {
            case '+':
                ans.add(value);
                break;
            
            case "-":
                ans.subtract(value);
                break;
            
            case '*':
                ans.multiply(value);
                break;
            case '/':
                ans.divide(value);
                break;
        }
    }
}

module.exports = Calculator;
