import axios from "axios";

const GITHUB_USERNAME = "harish-ramar";
const REPO_NAME = "blog-images";
const BRANCH = "main";
const GITHUB_TOKEN = process.env.REACT_APP_ACCESS_TOKEN || "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";

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
                            Authorization: `Bearer ${GITHUB_TOKEN}`,
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