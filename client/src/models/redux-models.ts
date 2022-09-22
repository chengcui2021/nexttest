export interface AlbumModel {
    "artistName": string,
    "collectionName": string,
    "trackName": string,
}
export interface AlbumArrayModel {
    all_albums: AlbumModel[],
}