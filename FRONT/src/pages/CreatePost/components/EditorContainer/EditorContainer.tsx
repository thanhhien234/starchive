import { useState } from "react";
import { Container, Group, Icon, Editor, Preview, ModeToggle, Header } from "./EditorContainer.style";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import addPhotoIcon from '@_assets/icons/add-photo.svg';
import CodeBlock from "./CodeBlock";

function EditorContainer() {
  const markdownGrammar = `# 제목\n## 부제목\n*기울임* _기울임_\n**굵게** __굵게__\n[링크](https://www.google.com)\n![이미지](이미지 주소)\n> 인용문\n* 순서가 없는 목록\n- 순서가 없는 목록\n1. 순서가 있는 목록\n1) 순서가 있는 목록\n띄어쓰기 3번 하고 목록 => 하위목록\n--- 수평선 *** 수평선\n\`한 줄 코드\`\n\`\`\`\n코드블럭\n\`\`\`\n여러 줄의 공백\n&nbsp;\n&nbsp;\n`;
  const [markdown, setMarkdown] = useState<string>('');
  const [viewMode, setViewMode] = useState<'write' | 'preview'>('write');

  return (
    <Container>
      <Header>
        <Group>
          <Icon src={addPhotoIcon} alt="사진 추가" />
        </Group>
        <Group>
          <ModeToggle $active={viewMode === 'write'} onClick={() => setViewMode('write')}>Write</ModeToggle>
          <ModeToggle $active={viewMode === 'preview'} onClick={() => setViewMode('preview')}>Preview</ModeToggle>
        </Group>
      </Header>
      {viewMode === 'write' ? (
        <Editor
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder={markdownGrammar}
        />
      ) : (
        <Preview>
          <Markdown
            children={markdown}
            remarkPlugins={[remarkGfm]}
            components={{code: CodeBlock}}
          />
        </Preview>
        )
      }
    </Container>
  );
}

export default EditorContainer;