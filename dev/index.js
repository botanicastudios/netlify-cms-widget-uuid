import "./bootstrap.js";
import CMS, { init } from "netlify-cms";
import "netlify-cms/dist/cms.css";
import { Control } from "../src";

const config = {
	backend: {
		name: "test-repo",
		login: false
	},
	media_folder: "assets",
	collections: [
		{
			name: "test",
			label: "test",
			files: [
				{
					file: "./src/test.yml",
					name: "uuid_test",
					label: "UUID Test",
					fields: [
						{
							name: "id",
							label: "id",
							widget: "uuid"
						}
					]
				}
			]
		}
	]
};

CMS.registerWidget("uuid", Control);

init({ config });
