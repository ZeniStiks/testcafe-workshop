const createTestCafe = require('testcafe');

(async() => {
    const testcafe = await createTestCafe('localhost', 1337, 1338);
    try {
        const runner = testcafe.createRunner();
        const failedCount = await runner
            .src(['tests'])
            .browsers(['chrome', 'firefox'])
            .reporter(['spec', {
                name: 'html',
                output: 'reports/report.html'
            }])
            .screenshots({
                path:        'screenshots/',
                takeOnFails: true,
                pathPattern: '${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png'
            })
            .concurrency(2)
            .run({ skipJsErrors: true });
        console.log('Tests failed: ' + failedCount);
    }
    finally {
        await testcafe.close();
    }
})();
