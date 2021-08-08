import React, {useCallback} from 'react';
import { useDropzone } from 'react-dropzone';

export default function ImgDropzone(handlChange) {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    
  
    const files = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
    return (
      <section className="container bg-white px-4 py-6 border-dashed border-2 border-light-gray-500 rounded">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} className="" />
          <p className="text-gray-700">Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside className="text-gray-700">
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </section>
    )
}
