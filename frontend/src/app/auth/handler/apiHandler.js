"use client";

import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const base_url = process.env.NEXT_PUBLIC_BE_API_URL;

export const fetchLogin = async (endpoint, method, body, router, setData) => {
  try {
    const res = await fetch(`${base_url}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
      body: body,
      credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
      return toast.error(data.message);
    }

    const decodeToken = jwtDecode(data.token);
    localStorage.setItem("token", data.token);
    setData(decodeToken);
    router.push("/");
    return toast.success(data.message);
  } catch (err) {
    return err;
  }
};

export const fetchLogout = async (endpoint, method, router) => {
  try {
    const res = await fetch(`${base_url}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
      credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
      return toast.error(data.message);
    }

    localStorage.removeItem("token");
    router.push("/auth/logout");

    return toast.success(data.message);
  } catch (err) {
    return err;
  }
};
