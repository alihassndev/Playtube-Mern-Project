import { asyncHandler } from "../utils/asyncHandler.js";

const getAllVideos = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query;

  //   Todo: get all the videos based on query, sort and paginate
});

const publishVideo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  //   Todo: get video, upload on cloudinary, create video
});

const getVideoById = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  //   Todo: get video by id
});

const updateVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  //   Todo: update video details like title, description, thumbnail
});

const deleteVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  //   Todo: delete video
});

const togglePublishStatus = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  //   Todo: delete video
});

export {
  togglePublishStatus,
  deleteVideo,
  updateVideo,
  getVideoById,
  publishVideo,
  getAllVideos,
};
