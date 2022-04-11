import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <SContainer>
      <input placeholder="検索条件を入力" />
      <SbuttonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SbuttonWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SbuttonWrapper = styled.div`
  padding-left: 8px;
`;
