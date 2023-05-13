interface User {
    name: string;
    imageUrl: string;
    imageSize: number;
  }

const HedyImage = () => {
    const user: User = {
      name: 'Hedy Lamarr',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90
    };
    return (
      <div>
        <>
          <h1>{user.name}</h1>
          <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize
            }}
          />
        </>
      </div>
    );
  }

  export default HedyImage;