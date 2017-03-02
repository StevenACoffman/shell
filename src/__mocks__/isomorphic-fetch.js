export default jest.fn(function fetch(url, options) {
    //To see what is and is not using this, please turn the comment back on
    //console.log(`Mocking fetch with ${url} and ${options}`);
    return new Promise((resolve, reject) => {
        // If we want to test true async, we can use next line
        // but we would need to use `await` in our tests
        // Which we should as soon as node8 release in April 2017
        // process.nextTick(() => {
        if(options !== undefined && options.method === "POST") {
            resolve({
                status: 200,
                ok: true,
                statusText: "Yay",
                json: () => {
                    return { body: "This is such a mockery",
                        success: true };
                }
            });
        }
        else if(url === "http://somedata") {
            resolve({
                status: 200,
                json: () => {
                    return { someKey: "someValue" };
                }
            });
        }
        else if(url === "https://api.github.com/user") {
            if(options.method === "GET") {
                if(/^token\s\w{40}$/.test(options.headers.Authorization)) {
                    resolve({
                        status: 200,
                        json: () => {
                            return { login: "someLogin" };
                        }
                    });
                }
                else {
                    resolve({
                        status: 400,
                        statusText: "Requires authentication"
                    });
                }
            }
        }
        else {
            resolve({
                status: 404,
                statusText: "Not found"
            });
        }
        //});
    });
});
