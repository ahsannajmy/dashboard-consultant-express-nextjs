"use client";

import { toast } from "react-toastify";

const base_url = process.env.NEXT_PUBLIC_BE_API_URL;

export const fetchAddEmployee = async (endpoint, method, body) => {
  try {
    const res = await fetch(`${base_url}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
      body: body,
    });

    const data = await res.json();

    if (!res.ok) {
      return toast.error(data.message);
    }

    return toast.success(data.message);
  } catch (err) {
    return err;
  }
};
