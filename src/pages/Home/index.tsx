import React, { useEffect, useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { TextField, IconButton } from '@material-ui/core';
import iconGit from '../../assets/images/iconGit.png'
import UserPicture from '../../components/userPicture';
import UserDetails from '../../components/userDetails';
import client from '../../services/client';
import { Button, Container, Imagem, Left, Lista, Right, Title, NumberContainer, Subtitle } from './styles';
import './styles.css';

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [username, setUsername] = useState<string>('')
  const [login, setLogin] = useState<string>('')
  const [avatar, setAvatar] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [repositorio, setRepositorio] = useState<string>('')
  const [followers, setFollowers] = useState<string>('')
  const [followings, setFollowings] = useState<string>('')
  const [split2, setSplit2] = useState<string>('');
  const [fork, setFork] = useState<string>('');
  const [issues, setIssues] = useState<any>();
  const [language, setLanguage] = useState<any>();
  const [size, setSize] = useState<any>();
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await client.get(`/${username}`);
        const repos = await client.get(`/${username}/repos`); // aqui tem forks as infos do repo
        setLogin(response.data.login)
        setAvatar(response.data.avatar_url)
        setName(response.data.name)
        setRepositorio(repos.data)
        setFollowers(response.data.followers)
        setFollowings(response.data.following)

        for (var i = 0; i < repos.data.length; i++) {
          if (repos.data[i].full_name === searchValue) {
            setFork(repos.data[i].forks)
            setIssues(repos.data[i].open_issues)
            setLanguage(repos.data[i].language)
            setSize(repos.data[i].size)
          }
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    getUserData();
  }, [username]);


  const handleClick = async (e: any) => {
    const split = e.split('/')
    setUsername(split[0])
    const sp = split[1] // nome do repositório
    setSplit2(sp)
    setShow(true)

    sp ? (<></>) : (alert('Digite o nome de um repositório!'));
    const repos = await client.get(`/${username}/repos`);

    for (var i = 0; i < repos.data.length; i++) {
      if (repos.data[i].full_name === e) {
        setFork(repos.data[i].forks)
        setIssues(repos.data[i].open_issues)
        setLanguage(repos.data[i].language)
        setSize(repos.data[i].size)
      }
    }
  }

  return (
    <Container>
      <Left>
        <Imagem>
          <img src={iconGit} />
        </Imagem>
      </Left>

      <Right>
        <Title>Pesquise repositórios</Title>
        <TextField
          className="search"
          placeholder="Digite o usuário/nome do repositório"
          style={{
            backgroundColor: 'rgb(231, 231, 231)',
            color: 'rgb(161, 161, 161)',
            fontSize: '30px !important',
            marginTop: '30px',
            marginLeft: '150px',
            borderRadius: '20px',
            width: '510px',
            marginBottom: '20px',
            height: '70px',
            float: 'left',
            paddingLeft: '10px',
            marginRight: '20px',
            border: '1px solid #535353'
          }}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />

        <Button onClick={() => {
          handleClick(searchValue)
        }}>
          Pesquisar
        </Button>

        {show ? (
          <Lista>
            <UserPicture url={avatar} alternativeText={login} />
            <UserDetails name={name} login={login} repositorio={split2} />

            <NumberContainer>
              <Subtitle>Repository</Subtitle>
              <h1>{repositorio.length}</h1>
            </NumberContainer>

            <NumberContainer>
              <Subtitle>Followers</Subtitle>
              <h1>{followers}</h1>
            </NumberContainer>

            <NumberContainer>
              <Subtitle>Followings</Subtitle>
              <h1>{followings}</h1>
            </NumberContainer>

            <NumberContainer>
              <Subtitle>Fork</Subtitle>
              <h1>{fork}</h1>
            </NumberContainer>

            <NumberContainer>
              <Subtitle>Issues</Subtitle>
              <h1>{issues}</h1>
            </NumberContainer>

            <NumberContainer>
              <Subtitle>Size</Subtitle>
              <h1>{size}</h1>
            </NumberContainer>

            <NumberContainer>
              <Subtitle>Language</Subtitle>
              <h1>{language}</h1>
            </NumberContainer>
          </Lista>
        ) : (<></>)}
      </Right>
    </Container>
  )
}

export default Home;