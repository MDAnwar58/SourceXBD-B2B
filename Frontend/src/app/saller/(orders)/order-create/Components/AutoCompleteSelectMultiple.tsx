"use client";
import { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import "@/assets/css/reactTags.css";

// Define the type for the tags
interface Tag {
   id: string;
   text: string;
}

type Props = {
   tags: Tag[];
   setTags: (tags: Tag[]) => void;
};

export default function TagsInput({ tags, setTags }: Props) {
   const handleDelete = (i: number) => {
      setTags(tags.filter((tag, index) => index !== i));
   };

   const handleAddition = (tag: Tag) => {
      setTags([...tags, tag]);
   };

   const suggestions: Tag[] = [];

   return (
      <ReactTags
         tags={tags}
         handleDelete={handleDelete}
         handleAddition={handleAddition}
         suggestions={suggestions}
         allowDragDrop={false}
      />
   );
}
