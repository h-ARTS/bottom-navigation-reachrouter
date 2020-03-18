import React from "react";
// MUI Components
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// MUI Icons
import HomeIcon from '@material-ui/icons/HomeTwoTone';
import PublicIcon from '@material-ui/icons/PublicTwoTone';
import BellIcon from '@material-ui/icons/NotificationsTwoTone';
import BookmarksIcon from '@material-ui/icons/BookmarksTwoTone';

export default function TabBar({value, handlePath}) {
  return (
  <BottomNavigation onChange={handlePath} value={value}>
    <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
    <BottomNavigationAction label="Public" value="/public" icon={<PublicIcon />} />
    <BottomNavigationAction label="Notifications" value="/notifications" icon={<BellIcon />} />
    <BottomNavigationAction label="Bookmarks" value="/bookmarks" icon={<BookmarksIcon />} />
  </BottomNavigation>
  )
}
