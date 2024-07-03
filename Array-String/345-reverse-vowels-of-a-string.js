/** 
 * Given a string s, reverse only all the vowels in the string and return it.
 * 
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 * */
/**
 * Example 1:
 * Input: s = "hello"
 * Output: "holle"
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let left = 0;
    let right = s.length - 1;
    let str = s.split("");
    while (left < right) {
        while (!vowels.includes(str[left]) && left < right) {
            left++;
        }
        while (!vowels.includes(str[right]) && left < right) {
            right--;
        }
        let temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--
    }

    return str.join("")
};


console.log(reverseVowels("hello"))
console.log(reverseVowels("leetcode"))
console.log(reverseVowels("lietcodae"))
console.log(reverseVowels("hllmsplao"))
