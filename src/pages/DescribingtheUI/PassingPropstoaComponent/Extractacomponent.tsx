import getImageUrl from './utils';

interface Person {
  imageId: string;
  name: string;
  profession: string;
  discovery: string;
  awards: string[];
} 

interface ProfileProps {
  person: Person;
  imageSize?: number; // 있을수도 있고 없을수도 있다 -> ? 사용
}

const Profile = ({person, imageSize = 70} : ProfileProps) => {
    const imageSrc = getImageUrl(person.imageId);

  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={imageSrc}
        alt={person.name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession:</b> {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>
          ({person.awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovery}
        </li>
      </ul>
    </section>
  );
}

const Gallery = () => {
    return (
        <div>
          <h1>Notable Scientists</h1>
          <Profile
            person={{
              imageId: 'szV5sdG',
              name: 'Maria Skłodowska-Curie',
              profession: 'physicist and chemist',
              discovery: 'polonium (chemical element)',
              awards: [
                'Nobel Prize in Physics',
                'Nobel Prize in Chemistry',
                'Davy Medal',
                'Matteucci Medal',
              ],
            }}
          />
          <Profile
            person={{
              imageId: 'YfeOqp2',
              name: 'Katsuko Saruhashi',
              profession: 'geochemist',
              discovery: 'a method for measuring carbon dioxide in seawater',
              awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
            }}
          />
        </div>
      );
}

export default Gallery;
