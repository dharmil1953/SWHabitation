import { PageBuilderType } from "../../../../lib/sanity/types/page";
import Section from "../Section";

export interface SectionViewProps {
  block: PageBuilderType;
  slug?:string
}
const SectionView: React.FC<SectionViewProps> = ({ block,slug}) => {
  const { content } = block || {};
  return (
    <>
      {Array.isArray(content) &&
        content.map((item, index) => <Section data={item} key={index}slug={slug}/>)}
    </>
  );
};
export default SectionView;
