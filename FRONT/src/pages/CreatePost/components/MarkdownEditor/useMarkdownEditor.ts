import { useState, useRef } from "react";
import { postImage } from "@_services/createPostApi.ts";

interface PostImageResponse {
  data: {
    id: number;
    imagePath: string;
  };
}

function useMarkdownEditor(initialValue: string = "") {
  const [markdown, setMarkdown] = useState<string>(initialValue);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const tempMarkdown = `\n![이미지](Uploading...)\n`;
      setMarkdown((prev) => `${prev}${tempMarkdown}`);

      postImage(file)
        .then((response: PostImageResponse) => {
          const imageUrl = response.data.imagePath;
          setMarkdown((prev) =>prev.replace("![이미지](Uploading...)", `![이미지](${imageUrl})`));
        })
        .catch((error: string) => {
          alert("이미지 업로드에 실패했습니다.");
          console.error(error);
          setMarkdown((prev) => prev.replace("![이미지](Uploading...)", ""));
        });
    } else {
      alert("이미지 파일을 선택할 수 없습니다");
    }
  };

  return {
    markdown,
    handleMarkdownChange,
    handleIconButtonClick,
    handleFileUpload,
    textareaRef,
    fileInputRef,
  };
}

export default useMarkdownEditor;
