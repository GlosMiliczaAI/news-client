"use server";

import {
  mapToCommentSummaryItem,
  SanityCommentItem,
} from "../sanity-types/SanityCommentItem";
import { sanityClient } from "../sanityClient";

export const fetchArticleComments = async (_id: string) => {
  if (_id !== undefined) {
    const responseComments: SanityCommentItem[] = await sanityClient.fetch(
      `*[_type == "comment" && post._ref == "${_id}" && !(_id in path('drafts.**'))]{author, _createdAt, likes, _id, text, post->} | order(_createdAt desc)`
    );

    return mapToCommentSummaryItem(responseComments);
  }
};
