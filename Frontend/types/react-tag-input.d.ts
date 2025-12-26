declare module "react-tag-input" {
   export interface Tag {
      id: string;
      text: string;
   }

   export interface ReactTagsProps {
      tags: Tag[];
      handleDelete: (index: number) => void;
      handleAddition: (tag: Tag) => void;
      suggestions: Tag[];
      allowDragDrop?: boolean;
   }

   export const WithContext: React.FC<ReactTagsProps>;
}
