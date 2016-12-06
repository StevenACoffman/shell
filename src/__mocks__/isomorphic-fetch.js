export default function fetch(url, options) {
    //To see what is and is not using this, please turn the comment back on
    //console.log(`Mocking fetch with ${url} and ${options}`);
    return new Promise((resolve, reject) => {
        process.nextTick(() => {
            if(options !== undefined && options.method === "POST") {
                resolve({
                    status: 200,
                    ok: true,
                    statusText: "Yay",
                    json: () => {
                        return { body: "This is such a mockery" };
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
        });
    });
}
