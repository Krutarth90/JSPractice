/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(s) 
{
    let ans=0;
    s=s.toLowerCase();
    for(let i=0;i<s.length ;i++)
        if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u')
            ans++;
    return ans;
}

module.exports = countVowels;