/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(s) 
{
    s=s.toLowerCase();
    let l=0,r=s.length-1;
    while(l<r)
    {
        while(l<r && (s[l]<'a' || s[l]>'z'))
            l++;
        while(l<r && (s[r]<'a' || s[r]>'z'))
            r--;
        if(s[l]!=s[r])
            return false;
        l++;
        r--;
    }
    return true;
}

module.exports = isPalindrome;
