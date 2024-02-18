import {
  Amount,
  LinkStyle,
  ListStyle,
  SectionStyle,
  Text,
  Wrapper,
} from "./HomePage.styled";

const HomePage = () => {
  const random = Math.floor(Math.random() * 4);
  const imageURL = `img${random}.jpg`;
  return (
    <main>
      <SectionStyle>
        <Wrapper $randomNumber={random}>
          <h1>
            Unlock your potential with the best <span>language</span> tutors
          </h1>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <LinkStyle to="/teachers" $randomNumber={random}>
            Get started
          </LinkStyle>
        </Wrapper>
        <img src={imageURL} alt="home image"></img>
        <ListStyle $randomNumber={random}>
          <li>
            <Amount>32,000 +</Amount>
            <Text>Experienced tutors</Text>
          </li>
          <li>
            <Amount>300,000 +</Amount>
            <Text>5-star tutor reviews</Text>
          </li>
          <li>
            <Amount>120 +</Amount>
            <Text>Subjects taught</Text>
          </li>
          <li>
            <Amount>200 +</Amount>
            <Text>Tutor nationalities</Text>
          </li>
        </ListStyle>
      </SectionStyle>
    </main>
  );
};

export default HomePage;
