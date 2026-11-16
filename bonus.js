const create_counter = function (init) {
    i = init;
    return {
        increment: function() {
            return ++i;
        },
        decrement: function() {
            return --i;
        },
        reset: function () {
            i = init;
            return i;
        }
    }
};


const counter = create_counter(5);
console.log(counter.increment()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement()); // 4
console.log(counter.increment()); // 5
console.log(counter.increment()); // 6
console.log(counter.reset());     // 5
