"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { CustomToast } from "../../components/myToast";
import { redirect, useRouter } from "next/navigation";


function Page() {
  const [emails, setEmails] = useState([]);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { addToast } = CustomToast();
  const router = useRouter();
  const [totalUsers, setTotalUsers] = useState(0);
  const [page, setPage] = useState("Dashboard");
  const [memberData, setMemberData] = useState([]);

  useEffect(() => {
    const isAuthenticated = Cookies.get("cloudClubAuthToken") === "true";
    const userID = Cookies.get("cloudClubUserId");
    if (userID == 1 && isAuthenticated) {
      router.replace('/admin-panel/dashboard')
    } else {
      router.replace("/");
    }
  }, []);
}

export default Page;
