var newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./Weatherbit.postman_collection.json'),
    reporters: ['cli', 'html'],
    reporter: {
        html: {export : './TestReport.html'}
    },
    iterationData : './Weatherbit-data.csv'

}, 

function (err) {
    if (err) { throw err; }
    console.log('Test run complete!');
});