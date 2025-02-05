import axios from "axios";

const GITHUB_USERNAME = process.env.REACT_APP_GITHUB_USERNAME
const REPO_NAME = process.env.REACT_APP_REPO_NAME
const BRANCH = process.env.REACT_APP_BRANCH;
const GITHUB_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const uploadToGithub = async (file) => {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onloadend = async () => {
            const base64String = reader.result.split(",")[1];

            const fileName = `${Date.now()}-${file.name}`;

            console.log("Token: ", GITHUB_TOKEN);

            try {
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
                console.log("GitHub Response:", response);

                const imageUrl = response.data.content.download_url;
                console.log("Image uploaded successfully:", imageUrl);
                resolve(imageUrl);
            } catch (error) {
                console.error("Github upload Failed:", error);
                reject(error);
            }
        };

        reader.readAsDataURL(file);
    });
};

export default uploadToGithub;