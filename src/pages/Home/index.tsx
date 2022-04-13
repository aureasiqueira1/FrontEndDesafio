import React, { useContext, useEffect, useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { TextField, IconButton } from '@material-ui/core';
import iconGit from '../../assets/images/iconGit.png'
import './styles.css';
import UserPicture from '../../components/userPicture';
import UserDetails from '../../components/userDetails';
import client from '../../services/client';
import { Button, Container, Imagem, Left, Lista, Right, Title, NumberContainer } from './styles';

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [username, setUsername] = useState<string>('')
  const [login, setLogin] = useState<string>('')
  const [avatar, setAvatar] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [bio, setBio] = useState<string>('')
  const [followers, setFollowers] = useState<string>('')
  const [followings, setFollowings] = useState<string>('')
  const [dataRepositorio2, setDataRepositorio2] = useState([]);
  const [split2, setSplit2] = useState<string>('');
  const [fork, setFork] = useState<string>('');

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await client.get(`/${username}`);
        const repos = await client.get(`/${username}/repos`); // aqui tem forks as infos do repo
        setLogin(response.data.login)
        setAvatar(response.data.avatar_url)
        setName(response.data.name)
        setBio(response.data.bio)
        setDataRepositorio2(repos.data)
        setFollowers(response.data.followers)
        setFollowings(response.data.following)
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

    const repos = await client.get(`/${username}/repos`);

    for (var i = 0; i < repos.data.length; i++) {
      if (repos.data[i].full_name === e && repos.data[i].name === split2) {
        setFork(repos.data[i].forks)
      }
    }
  }

  return (
    <Container>
      <Left>
        <Title>Pesquise repositórios</Title>
        <TextField
          placeholder="Digite o nome do repositório"
          style={{
            backgroundColor: '#E7E7E7',
            color: '#A1A1A1',
            fontSize: '24px',
            marginTop: '300px',
            marginLeft: '90px',
            borderRadius: '20px',
            width: '450px',
            marginBottom: '20px',
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

        <Button onClick={() => handleClick(searchValue)}>
          Pesquisar
        </Button>

        <Lista>
          <UserPicture url={avatar} alternativeText={login} />
          <UserDetails name={name} login={login} bio={bio} />
          <NumberContainer>
            <h1>{dataRepositorio2.length}</h1>
            <h2>Repositórios</h2>
          </NumberContainer>

          <NumberContainer>
            <h1>{followers}</h1>
            <h2>Seguidores</h2>
          </NumberContainer>

          <NumberContainer>
            <h1>{followings}</h1>
            <h2>Seguindo</h2>
          </NumberContainer>

          <NumberContainer>
            <h1>{fork}</h1>
            <h2>Fork</h2>
          </NumberContainer>

        </Lista>
      </Left>

      <Right>
        <Imagem>
          <img src={iconGit} />
        </Imagem>
      </Right>
    </Container>
  )
}

export default Home;