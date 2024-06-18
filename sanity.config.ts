/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\pages\studio\[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure'
import { schema } from "./sanity/schema";
import { developmentschema } from "./sanity-development/schema";
import { deskStructure } from "./sanity/desk/deskStructure";
import { deskStructure as developmentDeskStructure } from "./sanity-development/desk/deskStructure";
import { previewDocumentNode as previewDocumentNodeDev } from "./sanity-development/plugins/previewPane";
import { previewDocumentNode  } from "./sanity/plugins/previewPane";
import { settingsPlugin as settingsPluginDev} from "./sanity-development/plugins/settings";
import { settingsPlugin } from "./sanity/plugins/settings";
import { colorInput } from "@sanity/color-input";
import { noteField } from "sanity-plugin-note-field";
import { apiVersion } from "./lib/sanity";
import { table } from "@sanity/table";

export default defineConfig([
  {
    name: "production",
    title: "SW-Habitation (production)",

    projectId: "dx4erc3j",
    dataset: "production",
    basePath: "/studio/production",
    plugins: [
      structureTool({
        structure: deskStructure,
        defaultDocumentNode: previewDocumentNode(),
      }),
      // Vision is a tool that lets you query your content with GROQ in the studio
      // https://www.sanity.io/docs/the-vision-plugin
      visionTool({ defaultApiVersion: apiVersion }),
      colorInput(),
      noteField(),
      table(),
      settingsPlugin({ type: "settings" }),
    ],

    schema: schema,
  },
  {
    name: "development",
    title: "SW-Habitation (development)",

    projectId: "dx4erc3j",
    dataset: "development",
    basePath: "/studio/development",
    plugins: [
      structureTool({
        structure: developmentDeskStructure,
        defaultDocumentNode: previewDocumentNodeDev(),
      }),
      // Vision is a tool that lets you query your content with GROQ in the studio
      // https://www.sanity.io/docs/the-vision-plugin
      visionTool({ defaultApiVersion: apiVersion }),
      colorInput(),
      noteField(),
      table(),
      settingsPluginDev({ type: "settings" }),
    ],
    schema: developmentschema,
  },
]);
