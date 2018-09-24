import { Track } from './track';

export interface Album {
  releaseDate : string,
  coverImage : string,
  tracks : Track[]
}
