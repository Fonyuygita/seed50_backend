// Function that performs a time-consuming operation and calls a callback when done
function calculateAsync(callback) {
    let result = 0;
    setTimeout(() => {
        for (let i = 0; i < 1000000000; i++) {
            result += i;
        }
        callback(result);
    }, 0);
}
// Function that performs a time-consuming operation and calls a callback when done
function calculateAsync(callback) {
    let result = 0;
    setTimeout(() => {
        for (let i = 0; i < 1000000000; i++) {
            result += i;
        }
        callback(result);
    }, 0);
}

// Using callbacks to handle asynchronous operation
function performCalculations(callback) {
    calculateAsync((result) => {
        console.log(result);
        console.log('This will run asynchronously after the calculations are done');
        if (callback) {
            callback();
        }
    });
}


function performCalculations(callback) {
    calculateAsync((result) => {
        console.log(result);
        console.log('This will run asynchronously after the calculations are done');

        callback();

    });
}

// Usage of the performCalculations function with a callback
performCalculations(() => {
    console.log('This will run after the calculations are done');
});
console.log('This will run before the calculations are done');