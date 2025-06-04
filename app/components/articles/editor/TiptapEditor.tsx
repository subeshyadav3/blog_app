"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function TiptapEditor({ onChange }: { onChange: (val: string) => void }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Write your blog here...</p>',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return <EditorContent editor={editor} className="prose p-4 border rounded" />;
}
