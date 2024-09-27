export enum SORTING_OPTIONS {
  SORT_AZ = 'Sort A - Z',
  SORT_ZA = 'Sort Z - A',
  FROM_NEWEST = 'Sort from newest',
  FROM_OLDEST = 'Sort from oldest'
}

export const sortingOptions = [SORTING_OPTIONS.SORT_AZ, SORTING_OPTIONS.SORT_ZA, SORTING_OPTIONS.FROM_NEWEST, SORTING_OPTIONS.FROM_OLDEST];

const video1 = require("../files/videos/video1.mp4");
const video2 = require("../files/videos/video2.mp4");
const video3 = require("../files/videos/video3.mp4");

const videos = [video1, video2, video3];

export const getRandomItem = () => {
  return videos[Math.floor(Math.random() * videos.length)];
}
