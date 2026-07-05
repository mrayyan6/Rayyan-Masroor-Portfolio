import { Item } from "./motion";

export default function SectionHeading({ eyebrow, title, className = "" }) {
  return (
    <div className={className}>
      <Item as="p" className="eyebrow">
        {eyebrow}
      </Item>
      <Item
        as="h2"
        className="mt-3 text-2xl font-semibold tracking-tight text-primary sm:text-[2rem]"
      >
        {title}
      </Item>
    </div>
  );
}
