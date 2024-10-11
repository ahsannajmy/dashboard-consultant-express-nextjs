export const formRequest = async (endpoint, form_object, method) => {
  const base_url = process.env.NEXT_PUBLIC_BE_API_URL;

  try {
    const res = await fetch(`${base_url}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
      body: JSON.stringify(form_object),
    });

    const data = await res.json();
  } catch (err) {
    throw new Error(err);
  }
};
