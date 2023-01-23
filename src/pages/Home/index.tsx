import {
  Container,
  Form,
  Text,
  Subtitle,
  Input,
  Button,
  Image,
  Content,
  Info,
  NameContent,
  ReposNumber,
  UserName,
  White,
  ButtonContainer,
  RepoButton,
  Icon,
} from "./styles";
import { FaSistrix } from "react-icons/fa";
import { GoFileDirectory } from "react-icons/go";
import { useState } from "react";
import { ChangeEvent } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  type Profile = {
    avatar_url: string;
    public_repos: number;
    login: string;
    followers: number;
  };
  const [user, setUser] = useState<string>();
  const [data, setData] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // setUser(e.target.value);
    setUser(value);
    localStorage.setItem("user", value);
  };

  const getUser = async () => {
    // setLoading(true);
    // fetch(`https://api.github.com/users/${user}`)
    //   .then((r) => r.json())
    //   .then((data) => {
    //     setData(data), setLoading(true);
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => setLoading(false));
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Text>Github API</Text>
      <Form>
        <Subtitle>Busque por usuários:</Subtitle>
        <Input
          onChange={handleSubmit}
          type="text"
          placeholder="Digite o usuário..."
        />
        <Button onClick={getUser}>
          <FaSistrix />
        </Button>
        {loading === true && <p>Carregando...</p>}
        {data !== null && (
          <Content>
            <UserName>{data.login}</UserName>
            <Image src={data.avatar_url} />
            <Info>
              <NameContent>Repositórios:</NameContent>
              <NameContent>Followers:</NameContent>
            </Info>
            <Info>
              <White>
                <GoFileDirectory fontSize={30} />
                <ReposNumber>{data.public_repos}</ReposNumber>
              </White>
              <White>
                <BsFillPersonFill fontSize={30} />
                <ReposNumber>{data.followers}</ReposNumber>
              </White>
            </Info>
            {/* <InfoFollowers>
              </InfoFollowers> */}
            <ButtonContainer>
              <RepoButton>
                <Icon>
                  <AiOutlineFileText fontSize={20} />
                </Icon>
                <Link to="/userRepos">Ver repositórios</Link>
              </RepoButton>
            </ButtonContainer>
          </Content>
        )}
      </Form>
    </Container>
  );
};

export default Home;
