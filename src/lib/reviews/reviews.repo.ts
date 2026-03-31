import { addReviewService } from "./addReview.service";
import { getProductReviewsService } from "./getProductReviews.service";
import { getReviewsService } from "./getReviews.service";
import { getReviewByIdService } from "./getReviewById.service";
import { updateReviewService } from "./updateReview.service";
import { deleteReviewService } from "./deleteReview.service";

export const ReviewsRepo = {
  addReview: addReviewService,
  getProductReviews: getProductReviewsService,
  getReviews: getReviewsService,
  getReviewById: getReviewByIdService,
  updateReview: updateReviewService,
  deleteReview: deleteReviewService,
};
