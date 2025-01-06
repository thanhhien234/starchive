import { InlineCode } from "./EditorContainer.style";

const CodeBlock = ({ inline, className, children }: { inline?: boolean; className?: string; children: React.ReactNode }) => {
  if (inline) {
    return <InlineCode>{children}</InlineCode>;
  }
  const language = className?.replace('language-', '') || 'plaintext';
  const codeString = String(children).replace(/\n$/, '');
  return (
    <pre className={className}>
      <code className={`language-${language}`}>{codeString}</code>
    </pre>
  );
};

export default CodeBlock;