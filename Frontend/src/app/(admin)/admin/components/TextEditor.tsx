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
   placeholder?: string | undefined;
   height?: string | undefined;
   width?: string | undefined;
   initialValue?: string | undefined;
   onChange?: (newValue: string) => void | undefined;
   className?: string | undefined;
};

// Define the methods that the parent component can access via the ref
export interface TextEditorHandle {
   getEditorValue: () => string; // Retrieve current content
   setEditorValue: (value: string) => void; // Update content programmatically
}

const TextEditor = forwardRef<TextEditorHandle, TextEditorProps>(
   ({ placeholder, height, width, initialValue, onChange, className }, ref) => {
      const [content, setContent] = useState(initialValue || "");

      useEffect(() => {
         setContent(initialValue || ""); // Update content when initialValue changes
      }, [initialValue]);

      const config = useMemo(
         () => ({
            readonly: false,
            placeholder: placeholder || "Start typing...",
            tabIndex: 1,
            height: height || "300px",
            width: width || "100%",
            language: "en",
         }),
         [placeholder, height, width]
      );

      useImperativeHandle(ref, () => ({
         getEditorValue: () => content, // Return the current content
         setEditorValue: (value: string) => setContent(value), // Update editor content
      }));
      // console.log(content);
      return (
         <JoditEditor
            value={content}
            config={config}
            className={className}
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
