"use client";

import { toast } from "react-toastify";

const base_url = process.env.NEXT_PUBLIC_BE_API_URL;

export const fetchData = async (endpoint, method) => {
  try {
    const res = await fetch(`${base_url}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
    });

    const data = await res.json();

    if (!res.ok) {
      return toast.error(data.message);
    }

    return data;
  } catch (err) {
    return err;
  }
};
