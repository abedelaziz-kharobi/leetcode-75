/**
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, 
 * starting with word1. If a string is longer than the other, append the additional letters onto the end of 
 * the merged string.
 * Return the merged string.
 */

/**
 * Example 1:
 * Input: word1 = "abc", word2 = "pqr"
 * Output: "apbqcr|
 * Explanation: The merged string will be merged as so:
 * word1:  a   b   c
 * word2:    p   q   r
 * merged: a p b q c r
 */

/**
 * 
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let merge = "";
    let i = 0;

    while (i < word1.length || i < word2.length) {
        if (i < word1.length) {
            merge += word1[i];
        }
        if (i < word2.length) {
            merge += word2[i];
        }
        i++;
    }
    return merge;
};