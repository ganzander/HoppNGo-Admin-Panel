"use client";
import React from "react";
import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

export default function TinyMCEEditor({ name, control }) {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Editor
            {...field}
            apiKey={process.env.NEXT_PUBLIC_TINYMCE}
            init={{
              plugins: [
                "anchor",
                "autolink",
                "link",
                "lists",
                "wordcount",
                "mediaembed",
                "formatpainter",
                "emoticons",
              ],
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline | align | numlist bullist | emoticons",
              ai_request: (request, respondWith) =>
                respondWith.string(() =>
                  Promise.reject("See docs to implement AI Assistant")
                ),
              height: 300,
              menubar: false,
              statusbar: false,
              placeholder: "Enter text here...",
            }}
            value={field.value}
            onEditorChange={(content) => field.onChange(content)}
          />
        )}
      />
    </div>
  );
}
