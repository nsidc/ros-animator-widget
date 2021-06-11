const imageUrl = (manifestUrl: string, imagePath: string): string => {
  // We assume that the image paths are relative to the manifest...
  const url_arr = manifestUrl.split('/');
  url_arr.pop();
  const rootUrl = url_arr.join('/');

  return `${rootUrl}/${imagePath}`;
}

export const fetchImagesFromManifest = (manifestUrl: string): Promise<Blob[]>  => {
  return fetch(manifestUrl).then((response) => {
    if ( !response.ok ) {
      throw new Error('Failed to fetch animation manifest.');
    }
    return response.json()
  }).then((imagePaths: string[]): Promise<Blob[]> => {
    return Promise.all(
      imagePaths.map((imagePath) =>
        fetchImage(imageUrl(manifestUrl, imagePath))
      )
    );
  });
}


const fetchImage = (url: string): Promise<Blob> => {
  return fetch(url).then(
    response => {
      if ( !response.ok ) {
        throw new Error('Failed to fetch image.');
      }
      return response.blob();
    }
  ).then(
    blob => {
      if ( !blob.type.startsWith('image/') ) {
        throw new Error(
          `Expected an image, received '${blob.type}' from '${url}'`
        );
      }
      return blob;
    }
  );
}
