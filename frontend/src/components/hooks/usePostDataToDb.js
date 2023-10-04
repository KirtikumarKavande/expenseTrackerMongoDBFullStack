import React from "react";
import { BASE_URL } from "../utilities/constant";

const usepostDataToDb = async (url, obj) => {
  try {
    const res = await fetch(`${BASE_URL}/${url}`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: { "content-type": "application/json" },
    });

    const data = await res.json();
    return data;
  } catch (err) {
    return err
  }
};

export default usepostDataToDb;
