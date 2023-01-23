import { useState, useEffect } from "react";
import { DiCodeBadge, DiGithubBadge } from "react-icons/di";
import { Link } from "react-router-dom";
import {
  Container,
  RepoContainer,
  Title,
  ProjectName,
  Name,
  ProjectContent,
  Language,
  UserProfile,
  NavContainer,
  HomeButtonContainer,
  HomeButton,
} from "./style";

const UserRepos = () => {
  type Profile = {
    name: string;
    id: number;
    language: string;
  };

  const [data, setData] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(false);

  const getName = localStorage.getItem("user");
  const name = JSON.stringify(getName);
  const newUser = name.replace(/["]/g, "");

  useEffect(() => {
    const getUser = async (user: string) => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.github.com/users/${user}/repos?per_page=5`
        );
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getUser(newUser);
  }, []);

  console.log(data);
  return (
    <>
      <NavContainer>
        <DiGithubBadge fontSize={150} />
        <Title>Repositórios</Title>
      </NavContainer>
      <HomeButtonContainer>
        <HomeButton>
          <Link to="/">Voltar para Home</Link>
        </HomeButton>
      </HomeButtonContainer>
      <Container>
        {loading === true && <p>Carregando....</p>}
        {data !== null && (
          <RepoContainer>
            <Name>Projetos:</Name>
            {data.map((repo) => (
              <ProjectContent key={repo.id}>
                {repo.language ? (
                  <Language>
                    <DiCodeBadge fontSize={25} />
                    {repo.language}
                  </Language>
                ) : (
                  <Language>
                    <DiCodeBadge fontSize={25} />
                    Forked
                  </Language>
                )}
                <ProjectName>{repo.name}</ProjectName>
              </ProjectContent>
            ))}
            <UserProfile
              href={`https://github.com/${newUser}?tab=repositories`}
              target="_blank"
            >
              Ver mais
            </UserProfile>
          </RepoContainer>
        )}
      </Container>
    </>
  );
};
export default UserRepos;
