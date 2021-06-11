export const fetchImagesFromManifest = (url: string): Promise<Blob> => {
  const manifest = [url];

  return fetch(manifest[0]).then(
    response => {
      if ( !response.ok ) {
        throw new Error('Failed to fetch image.');
      }
      return response.blob();
    }
  ).then(
    blob => {
      if ( !blob.type.startsWith('image/') ) {
        throw new Error(`Expected an image, received ${blob.type}`);
      }
      return blob;
    }
  );
}
