import axios from "axios";
import getCredentials from "./config";

const uploadToGithub = async (file) => {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onloadend = async () => {
            const base64String = reader.result.split(",")[1];

            const fileName = `${Date.now()}-${file.name}`;

            try {
                const credentials = await getCredentials();
                const GITHUB_USERNAME = credentials.GITHUB_USERNAME;
                const REPO_NAME = credentials.REPO_NAME;
                const BRANCH = credentials.BRANCH;
                const GITHUB_TOKEN = credentials.ACCESS_TOKEN;

                const response = await axios.put(
                    `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/${fileName}`,
                    {
                        message: `Upload ${fileName}`,
                        content: base64String,
                        branch: BRANCH,
                    },
                    {
                        headers: {
                            Authorization: `token ${GITHUB_TOKEN}`,
                            Accept: "application/vnd.github.v3+json",
                        },
                    }
                );

                const imageUrl = response.data.content.download_url;
                resolve(imageUrl);
            } catch (error) {
                reject(error);
            }
        };

        reader.readAsDataURL(file);
    });
};

export default uploadToGithub;