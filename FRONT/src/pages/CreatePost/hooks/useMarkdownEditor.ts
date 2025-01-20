import { useRef } from "react";
import { postImage } from "@_services/createPostApi.ts";

interface PostImageResponse {
  data: {
    id: number;
    imagePath: string;
  };
}

interface useMarkdownEditorProps {
  initialMarkdown: string,
  imageIds: number[],
  onContentChange: (value: string) => void,
  onImageIdsChange: (value: number[]) => void;
}

function useMarkdownEditor({
  initialMarkdown,
  imageIds,
  onContentChange,
  onImageIdsChange,
}: useMarkdownEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const getSelectionContext = () => {
    if (!textareaRef.current) return null;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    return {
      textarea,
      start,
      end,
      before: initialMarkdown.substring(0, start),
      selected: initialMarkdown.substring(start, end),
      after: initialMarkdown.substring(end),
    };
  };

  const updateContent = (
    before: string,
    content: string,
    after: string,
    focusOffsets?: { start: number; end: number }
  ) => {
    const newMarkdown = `${before}${content}${after}`;
    onContentChange(newMarkdown);

    if (focusOffsets) {
      setTimeout(() => {
        const { start, end } = focusOffsets;
        textareaRef.current?.focus();
        textareaRef.current?.setSelectionRange(start, end);
      }, 0);
    }
  };

  const handleIconButtonClick = (action: string) => {
    const context = getSelectionContext();
    if (!context) return;
    const { before, selected, after, start } = context;

    const actions: Record<string, { prefix: string; suffix: string; placeholder: string }> = {
      bold: { prefix: "**", suffix: "**", placeholder: "텍스트" },
      italic: { prefix: "_", suffix: "_", placeholder: "텍스트" },
      strikethrough: { prefix: "~~", suffix: "~~", placeholder: "텍스트" },
      quote: { prefix: "> ", suffix: "", placeholder: "인용구" },
      link: { prefix: "[", suffix: "](https://)", placeholder: "링크 텍스트" },
      code: { prefix: "```plaintext\n", suffix: "\n```", placeholder: "코드" },
    };

    const { prefix, suffix, placeholder } = actions[action] || {
      prefix: "", suffix: "", placeholder: "텍스트"
    };

    const content = `${prefix}${selected || placeholder}${suffix}`;
    const focusOffsets = {
      start: start + prefix.length,
      end: start + prefix.length + (selected ? selected.length : placeholder.length),
    };

    updateContent(before, content, after, focusOffsets);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const context = getSelectionContext();
    if (!context) return;
    const { before, after } = context;

    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const tempMarkdown = `\n![이미지](Uploading...)\n`;
      updateContent(before, tempMarkdown, after);

      postImage(file)
      .then((response: PostImageResponse) => {
        const { id, imagePath: imageUrl } = response.data;
        updateContent(before, `![이미지](${imageUrl})`, after);
        onImageIdsChange([...imageIds, id]);
      })
      .catch((error: string) => {
        alert("이미지 업로드에 실패했습니다.");
        updateContent(before, "", after);
        console.error(error);
      });
    } else {
      alert("이미지 파일을 선택할 수 없습니다");
    }
  };

  return {
    handleIconButtonClick,
    handleFileUpload,
    textareaRef,
    fileInputRef,
  };
}

export default useMarkdownEditor;
