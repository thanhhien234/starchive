import { InputContainer, StyledInput } from './NicknamePasswordInput.style';

interface NicknamePasswordInput {
  author: string,
  password: string,
  onAuthorChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
}

function NicknamePasswordInput({author, password, onAuthorChange, onPasswordChange}: NicknamePasswordInput) {
  return (
    <InputContainer>
      <StyledInput
        placeholder="닉네임을 입력하세요"
        value={author}
        onChange={(e) => onAuthorChange(e.target.value)}
        required
      />
      <StyledInput
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        required
      />
    </InputContainer>
  );
}

export default NicknamePasswordInput;