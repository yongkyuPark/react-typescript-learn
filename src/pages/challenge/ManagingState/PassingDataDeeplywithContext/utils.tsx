export function getImageUrl(place: { imageId: string }): string {
    return 'https://i.imgur.com/' + place.imageId + 'l.jpg';
  }