/**
 * For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t 
 * (i.e., t is concatenated with itself one or more times).
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 */
/**
 * Example 1:
 * Input: str1 = "ABCABC", str2 = "ABC"
 * Output: "ABC"
 */
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    let len1 = str1.length
    let len2 = str2.length
    let max = Math.max(len1, len2)
    let min = Math.min(len1, len2)
    let lim = 0
    if (str1 + str2 !== str2 + str1) return ""

    if (max % min == 0) {
        return str2.substring(0, min)
    }
    else {
        while ((max % min)) {
            lim = max % min
            max = min
            min = lim
        }

        return str2.substring(0, lim);

    }

};

console.log(gcdOfStrings("ABCABCABC", "ABCABC"))
console.log(gcdOfStrings("ABCABCABC", "ABC"))
console.log(gcdOfStrings("ABC", "ABCABCABC"))
console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"))
console.log(gcdOfStrings("CXTXNCXTXNCXTXNCXTXNCXTXN", "CXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXNCXTXN"))
