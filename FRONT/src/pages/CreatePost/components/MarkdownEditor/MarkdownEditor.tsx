import { useState } from "react";
import { Container, Editor, Preview } from "./MarkdownEditor.style";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";
import ToolBar from "../ToolBar/ToolBar";
import useMarkdownEditor from "./useMarkdownEditor";

function MarkdownEditor() {
  const {
    markdown,
    handleMarkdownChange,
    handleIconButtonClick,
    handleFileUpload,
    textareaRef,
    fileInputRef,
  } = useMarkdownEditor();
  
  const markdownGrammar = `# 제목\n## 부제목\n*기울임* _기울임_\n**굵게** __굵게__\n[링크](https://www.google.com)\n![이미지](이미지 주소)\n> 인용문\n* 순서가 없는 목록\n- 순서가 없는 목록\n1. 순서가 있는 목록\n1) 순서가 있는 목록\n띄어쓰기 3번 하고 목록 => 하위목록\n--- 수평선 *** 수평선\n\`한 줄 코드\`\n\`\`\`\n코드블럭\n\`\`\`\n여러 줄의 공백\n&nbsp;\n&nbsp;\n`;
  const [viewMode, setViewMode] = useState<'write' | 'preview'>('write');

  return (
    <Container>
      <ToolBar
        viewMode={viewMode}
        setViewMode={setViewMode}
        handleIconButtonClick={handleIconButtonClick}
        handleAddPhotoClick={() => fileInputRef.current?.click()}
      />
      {viewMode === "write" ? (
        <Editor
          ref={textareaRef}
          value={markdown}
          onChange={(e) => handleMarkdownChange(e.target.value)}
          placeholder={markdownGrammar}
        />
      ) : (
        <Preview>
          <Markdown
            children={markdown}
            remarkPlugins={[remarkGfm]}
            components={{
              code: CodeBlock,
              img: ({ src, alt }) => (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={src}
                    alt={alt}
                    style={{
                      maxWidth: "600px",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ),
            }}
          />
        </Preview>
      )}
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileUpload}
      />
    </Container>
  );
}

export default MarkdownEditor;