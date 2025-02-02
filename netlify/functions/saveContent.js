import fs from "fs";
import path from "path";

export default async function handler(req, res) {
    if (req.method === "POST"){
        const{ title, content} = req.body;

        const safeTitle= title.replace(/[^a-zA-Z0-9_-]/g, "");
        const filePath = path.join(process.cwd(), "public/content", `${safeTitle || "document"}.html`);

        try{
            fs.writeFileSync(filePath, content, "utf8");
            res.status(200).json({message: "Content saved successfully! "});
        } catch(error) {
            res.status(500).json({message: "Error saving content"});
        }
        } else {
            res.status(405).json({message: "Method Not Allowed"});
        }
}
    
