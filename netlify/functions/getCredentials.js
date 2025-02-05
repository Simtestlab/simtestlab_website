exports.handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            API_KEY: process.env.API_KEY,
            AUTH_DOMAIN: process.env.AUTH_DOMAIN,
            PROJECT_ID: process.env.PROJECT_ID,
            STORAGE_BUCKET: process.env.STORAGE_BUCKET,
            MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
            APP_ID: process.env.APP_ID,
            MEASUREMENT_ID: process.env.MEASUREMENT_ID,
            ACCESS_TOKEN: process.env.ACCESS_TOKEN,
            GITHUB_USERNAME: process.env.GITHUB_USERNAME,
            REPO_NAME: process.env.REPO_NAME,
            GITHUB_BRANCH: process.env.GITHUB_BRANCH,
        }),
    };
};