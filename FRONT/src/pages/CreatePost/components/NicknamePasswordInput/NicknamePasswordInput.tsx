import { useState } from 'react';
import { InputContainer, StyledInput } from './NicknamePasswordInput.style';

function NicknamePasswordInput() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  return (
    <InputContainer>
      <StyledInput
        placeholder="닉네임을 입력하세요"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <StyledInput
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </InputContainer>
  );
}

export default NicknamePasswordInput;