import { IconType } from "react-icons";
import { HiOutlineTerminal } from "react-icons/hi";
import { StructureBuilder } from "sanity/structure";
export const structureListType = ({
  S,
  title,
  type,
  icon = HiOutlineTerminal,
  filter,
}: {
  S: StructureBuilder;
  title: string;
  icon?: IconType;
  filter?: string;
  type: string;
}) => {
  if (filter) {
    return S.listItem()
      .title(title)
      .icon(icon)
      .child(S.document().schemaType(type).documentId(title));
  }
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(S.documentTypeList(type).schemaType(type).title(title));
};
