import React, { useState } from 'react';
import { EditorProvider, Editor, Toolbar, BtnBold, BtnItalic } from 'react-simple-wysiwyg';

function RichTextEditor() {
    const [value, setValue] = useState("");

    return (
        <div>
            <EditorProvider>
                <Editor
                    value={value || ""} // Ensure value is always a string
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                >
                    <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    );
}

export default RichTextEditor;




