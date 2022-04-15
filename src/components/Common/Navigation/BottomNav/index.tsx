import * as React from 'react';

import useSWR from 'swr';
import fetcher from '@utils/swrFetcehr';
import { IFriends } from '@utils/dbTypes';

import UserMenuDrawer from '@components/Common/Drawer/UserMenu';
import FriendDrawer from '@components/Common/Drawer/Friend';
import { Badge } from '@mui/material';
import { Home, People, Menu } from '@mui/icons-material';
import Footer from './GithubFooter';
import { Wrapper, Div } from './style';

export default function BottomNav() {
  const { data: friendData, error, mutate } = useSWR<IFriends>(`/friend`, fetcher);

  const [isUserMenuDrawerOpen, setIsUserMenuDrawerOpen] = React.useState(false);
  const closeUserMenuDrawer = () => {
    setIsUserMenuDrawerOpen(false);
  };
  const openUserMenuDrawer = () => {
    setIsUserMenuDrawerOpen(true);
  };

  const [isFriendDrawerOpen, setIsFriendDrawerOpen] = React.useState(false);
  const closeFriendDrawer = () => {
    setIsFriendDrawerOpen(false);
  };
  const opneFriendDrawer = () => {
    setIsFriendDrawerOpen(true);
  };

  return (
    <>
      <Wrapper>
        <Div>
          <Home fontSize="large" className="nav-items hover" />
        </Div>
        <Div>
          <Footer />
        </Div>
        <Div side="right">
          {friendData?.followers !== undefined && friendData.followers.length > 0 ? (
            <Badge badgeContent={friendData.followers.length} className="nav-items hover" color="error">
              <People fontSize="large" onClick={opneFriendDrawer} />
            </Badge>
          ) : (
            <People fontSize="large" className="nav-items hover" onClick={opneFriendDrawer} />
          )}
          <Menu fontSize="large" className="nav-items hover" onClick={openUserMenuDrawer} />
        </Div>
      </Wrapper>

      <UserMenuDrawer isOpen={isUserMenuDrawerOpen} closeDrawer={closeUserMenuDrawer} openDrawer={openUserMenuDrawer} />
      <FriendDrawer isOpen={isFriendDrawerOpen} closeDrawer={closeFriendDrawer} />
    </>
  );
}
