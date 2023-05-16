const getImageUrl = (person: { imageId: string; }) => {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        's.jpg'
    );
}

export default getImageUrl;
  