"use client";
import React, {
   useState,
   useMemo,
   useImperativeHandle,
   forwardRef,
   useEffect,
} from "react";
import dynamic from "next/dynamic";

// Dynamically import JoditEditor to prevent server-side rendering issues
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

type TextEditorProps = {
   placeholder?: string;
   height?: string;
   width?: string;
   initialValue?: string;
   onChange?: (newValue: string) => void;
};

// Define methods accessible to the parent component via ref
export interface TextEditorHandle {
   getEditorValue: () => string;
   resetEditorValue: () => void; // Method to reset editor content
}

const TextEditor = forwardRef<TextEditorHandle, TextEditorProps>(
   ({ placeholder, height, width, initialValue, onChange }, ref) => {
      const [content, setContent] = useState(initialValue || "");

      // Update content when initialValue changes
      useEffect(() => {
         setContent(initialValue || "");
      }, [initialValue]);

      // Memoize configuration for the editor to optimize rendering
      const config = useMemo(
         () => ({
            readonly: false,
            placeholder: placeholder || "Start typing...",
            tabIndex: 1,
            height: height || "300px",
            width: width || "100%",
         }),
         [placeholder, height, width]
      );

      // Expose methods via ref
      useImperativeHandle(ref, () => ({
         getEditorValue: () => content,
         resetEditorValue: () => setContent(""),
      }));

      return (
         <JoditEditor
            value={content}
            config={config}
            onBlur={(newContent) => {
               setContent(newContent); // Update local state with the new content
               if (onChange) {
                  onChange(newContent); // Notify parent of changes
               }
            }}
            onChange={() => {}} // Prevent editor warnings (Jodit expects onChange handler)
         />
      );
   }
);

export default TextEditor;
