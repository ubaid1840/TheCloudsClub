import Link from "next/link";
import React, { Component, useEffect, useState } from "react";
import MyDrawer from "./myDrawer";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import {
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

function Header() {
  const pathName = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = Cookies.get("cloudClubAuthToken") === "true";
    const userID = Cookies.get("cloudClubUserId");

    if (userID && isAuthenticated) {
      if (!userInfo)
        axios
          .get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/getuserinfo.php?userId=${userID}`,
            {
              withCredentials: false,
            }
          )
          .then((response) => {
            if(response?.data?.info?.id){
              setUserInfo(response?.data?.info);
            }
          })
          .catch((error) => {
            console.error("Error fetching user information:", error);
          });
    }
  }, [userInfo]);

  async function handleLogout() {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/logout.php`
      );
      if (response.status == 200) {
        Cookies.remove("cloudClubAuthToken");
        Cookies.remove("cloudClubUserId");
        setUserInfo();
        router.refresh();
      }
    } catch (error) {
      console.error("Logout error:", error);
      // Handle network or other errors
    }
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        position: "fixed",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "black",
        height: "40px",
        zIndex: 2,
        alignItems: "center",
      }}
    >
      <MyDrawer />

      <div>
        {pathName === "/" ? (
          !userInfo ? (
            <Link href="/login">
              <div className="link">Login</div>
            </Link>
          ) : null
        ) : null}
      </div>
      <div>
        {userInfo ? (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <Avatar
                  style={{ marginRight: 10, marginTop: 5 }}
                  size="sm"
                  src="https://bit.ly/broken-link"
                />
              }
              variant="unstyled"
            />
            <MenuList style={{ marginRight: "10px" }}>
              <MenuItem>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : null}
      </div>
      {/* <div>
        {userInfo ? (
          <div style={{ color: "white", marginRight: 20 }}>{userInfo.name}</div>
        ) : null}
      </div> */}
    </div>
  );
}

export default Header;
