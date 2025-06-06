'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import 'react-quill-new/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],
    [{ size: ['small', false, 'large', 'huge'] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ['link', 'image', 'video'],
    ['clean'], // remove formatting
  ],
}

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent', 'script', 'direction',
  'color', 'background',
  'align',
  'link', 'image', 'video',
]

interface BlogEditorProps {
  value: string
  onChange: (content: string) => void
}

export default function BlogEditor({ value, onChange }: BlogEditorProps) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Write your awesome blog post here..."
        style={{ height: '400px', marginBottom: '100px' }}
      />
    </div>
  )
}
