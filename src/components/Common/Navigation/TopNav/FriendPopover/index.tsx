import * as React from 'react';

import { IUser } from '@utils/dbTypes';

import { Box, Button, Popover } from '@mui/material';

type propsType = {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  userData: IUser | null;
  errorCode: String | null;
};

export default function FriendPopover({ isOpen, anchorEl, onClose, userData, errorCode }: propsType) {
  const errorMessage = errorCode == '404' ? '아이디를 확인해주세요 :(' : '서버와의 통신이 원활하지 않네요 :(';
  const ErrorMessage = () => {
    return <Box sx={{ padding: 1 }}>{errorMessage}</Box>;
  };

  const onClickFriendAdd = () => {};
  const PopOverContent = () => {
    return (
      <Box sx={{ padding: 1.5 }}>
        <span>
          {userData?.nickname}({userData?.id})님에게
        </span>
        <Button variant="text" onClick={onClickFriendAdd}>
          친구 요청 보내기
        </Button>
      </Box>
    );
  };

  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      {errorCode ? ErrorMessage() : PopOverContent()}
    </Popover>
  );
}