"use server";

import { sanityClient } from "./sanityClient";

interface SanityVisitsItem {
  visits: number;
}

export const fetchVisits = async (): Promise<number> => {
  try {
    const response: SanityVisitsItem[] = await sanityClient.fetch(
      `*[_type == "visitCounter"]`
    );

    // isNew && sanityClient.patch("visitCounter").inc({ visits: 1 }).commit();

    return response[0].visits + 1;
  } catch (error) {
    console.error("Error adding visit", error);
    throw new Error("An error occurred adding visit");
  }
};