import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/input";
import styled from "styled-components";
import React, { memo } from "react";

export const SearchInput = memo(() => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper />
      <PrimaryButton>検索</PrimaryButton>
    </SContainer>
  );
});
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
