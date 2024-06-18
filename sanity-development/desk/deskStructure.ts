import { AiFillBook, AiOutlineGlobal } from "react-icons/ai";
import { structureListType } from "./helper/structure-list-type";
import { HiChat, HiOutlineTerminal } from "react-icons/hi";
import { RiPagesLine } from "react-icons/ri";
import { SiMicrodotblog } from "react-icons/si";
import { CogIcon } from "@sanity/icons";
import { FaUser } from "react-icons/fa6";
import { BiCategoryAlt } from "react-icons/bi";
import { StructureBuilder } from "sanity/structure";

export const deskStructure = (S: StructureBuilder) => {
  const settingsItem = S.listItem()
    .title("settings")
    .icon(CogIcon)
    .child(
      S.editor().id("settings").schemaType("settings").documentId("settings")
    );
  return S.list()
    .title("Documents")
    .items([
      settingsItem,
      S.listItem()
        .title("Global")
        .icon(AiOutlineGlobal)
        .child(
          S.list()
            .title("Global")
            .items([
              structureListType({
                S,
                type: "section",
                title: "Section",
                icon: HiOutlineTerminal,
              }),
              structureListType({
                S,
                type: "newsLetter",
                title: "News Letter",
              }),
            ])
        ),
      S.divider(),
      structureListType({
        S,
        type: "page",
        title: "Page",
        icon: RiPagesLine,
      }),
      S.divider(),
      structureListType({
        S,
        title: "Blog Filter",
        type: "blogFilter",
        icon: BiCategoryAlt,
      }),
      structureListType({
        S,
        title: "Resource Filter",
        type: "resourceFilter",
        icon: BiCategoryAlt,
      }),
      structureListType({
        S,
        title: "Category",
        type: "category",
        icon: BiCategoryAlt,
      }),
      structureListType({
        S,
        title: "Author",
        type: "author",
        icon: FaUser,
      }),
      S.divider(),
      structureListType({
        S,
        type: "blogs",
        title: "Blogs",
        icon: SiMicrodotblog,
      }),
      structureListType({
        S,
        type: "resources",
        title: "Resources",
        icon: SiMicrodotblog,
      }),
      structureListType({
        S,
        type: "stories",
        title: "Stories",
        icon: AiFillBook,
      }),
      S.divider(),
      structureListType({
        S,
        type: "messageSendRequest",
        title: "Messages",
        icon: HiChat,
      }),
    ]);
};
