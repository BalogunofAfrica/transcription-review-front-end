import axios from "@/api/axios";
import endpoints from "@/api/endpoints";
import { useMutation } from "@tanstack/react-query";
import type { Review } from "../../../../types";

const claimTranscript = async (body: {
  userId: number;
  transcriptId: number;
}): Promise<Review> => {
  return axios
    .post(endpoints.REVIEWS(), body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const errMessage =
        err?.response?.data?.message || "Please try again later";
      throw new Error(errMessage);
    });
};

export const useClaimTranscript = () =>
  useMutation({ mutationFn: claimTranscript });