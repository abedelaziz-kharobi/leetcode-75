/**
 * You have a RecentCounter class which counts the number of recent requests 
 * within a certain time frame.
 * 
 * Implement the RecentCounter class:
 * RecentCounter() Initializes the counter with zero recent requests.
 * int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, 
 * and returns the number of requests that has happened in the past 3000 milliseconds 
 * (including the new request). Specifically, return the number of requests that have happened 
 * in the inclusive range [t - 3000, t].
 * 
 * It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.
 */
var RecentCounter = function () {
    this.head = 0;
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.queue.push(t);
    while (this.queue[this.head] < t - 3000) {
        this.head++;
    }
    return this.queue.length - this.head;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));
console.log(recentCounter.ping(100));
console.log(recentCounter.ping(3001));
console.log(recentCounter.ping(3002)); 
