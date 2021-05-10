import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <AccountWrapper>
      {account ? (
        <ButtonAccount
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </ButtonAccount>
      ) : (
        <ButtonLogin
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </ButtonLogin>
      )}
    </AccountWrapper>
  );
};

const AccountWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: flex;
    height: 61px;
    align-items: center;
    justify-content: center;
  }
`

const ButtonAccount = styled.div`
  cursor: pointer;
  display: flex;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.primary};;
  border-radius: 6px;
  width: 225px;
  height: 40px;
  align-items: center;
  padding: 4px;
  font-size: 14px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s;
`

const ButtonLogin = styled.div`
  cursor: pointer;
  display: flex;
  color: #${({ theme }) => theme.colors.textSubtle};;
  background: ${({ theme }) => theme.colors.primary};;
  background-size: 400% 100%;
  border-radius: 6px;
  width: 225px;
  height: 40px;
  align-items: center;
  padding: 4px;
  font-size: 14px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s;

  &:hover {
    opacity: 0.65;
  }
`

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
