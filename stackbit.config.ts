import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "custom",
   "postInstallCommand": "npm i --no-save @stackbit/types" ,
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      devCommand: "npx http-server ./ -p {PORT}",
      contentDirs: ["content"],
      models: [
        {
          name: "Page", // Define the model as a page model
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [
            {
              name: "title",
              type: "string",
              required: true
            }
          ]
        }
      ]
    })

  ],
  postInstallCommand: "npm i --no-save @stackbit/types"
});
