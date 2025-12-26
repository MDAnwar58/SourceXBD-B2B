"use client";
import React, {
   useState,
   useMemo,
   useImperativeHandle,
   forwardRef,
   useEffect,
} from "react";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

type TextEditorProps = {
   placeholder?: string;
   height?: string;
   width?: string;
   initialValue?: string;
   onChange?: (newValue: string) => void;
};

// Define the methods that the parent component can access via the ref
export interface TextEditorHandle {
   getEditorValue: () => string;
}

// Use `forwardRef` and pass the correct type for `ref`
const TextEditor = forwardRef<TextEditorHandle, TextEditorProps>(
   ({ placeholder, height, width, initialValue, onChange }, ref) => {
      const [content, setContent] = useState(initialValue || "");

      useEffect(() => {
         setContent(initialValue || ""); // Update content when initialValue changes
      }, [initialValue]);

      const config = useMemo(
         () => ({
            readonly: false,
            placeholder: "",
            tabIndex: 1,
            height: height || "300px",
            width: width || "100%",
         }),
         [placeholder, height, width]
      );

      // Use `useImperativeHandle` to expose the `getEditorValue` method
      useImperativeHandle(ref, () => ({
         getEditorValue: () => content, // Return the current content
      }));

      return (
         <JoditEditor
            value={content}
            config={config}
            onBlur={(newContent) => {
               setContent(newContent); // Update local state with new content
               if (onChange) {
                  onChange(newContent); // Notify parent of changes
               }
            }}
         />
      );
   }
);

export default TextEditor;
