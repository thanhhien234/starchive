import { useState, useRef } from "react";

function useMarkdownEditor(initialValue: string = '') {
  const [markdown, setMarkdown] = useState<string>(initialValue);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleMarkdownChange = (value: string) => {
    setMarkdown(value);
  };

  const handleIconButtonClick = (action: string) => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const before = markdown.substring(0, start);
    const selected = markdown.substring(start, end);
    const after = markdown.substring(end);

    let prefix = "";
    let suffix = "";
    let placeholder = "텍스트";

    switch (action) {
      case "bold":
        prefix = "**";
        suffix = "**";
        break;
      case "italic":
        prefix = "_";
        suffix = "_";
        break;
      case "quote":
        prefix = "> ";
        suffix = "";
        placeholder = "인용구";
        break;
      case "link":
        prefix = "[";
        suffix = "](https://)";
        placeholder = "링크 텍스트";
        break;
      case "code":
        prefix = "```plaintext\n";
        suffix = "\n```";
        placeholder = "코드";
        break;
      default:
        break;
    }

    // 선택된 텍스트가 있으면 해당 텍스트를 문법으로 감쌈
    const newMarkdown = `${before}${prefix}${selected || placeholder}${suffix}${after}`;
    setMarkdown(newMarkdown);

    // 플레이스홀더 부분 선택
    setTimeout(() => {
      textarea.focus();
      const selectionStart = start + prefix.length;
      const selectionEnd = start + prefix.length + (selected ? selected.length : placeholder.length);
      textarea.setSelectionRange(selectionStart, selectionEnd);
    }, 0);
  };

  return {
    markdown,
    handleMarkdownChange,
    handleIconButtonClick,
    textareaRef,
  };
}

export default useMarkdownEditor;