import React from 'react';
import { Button, Container, Imagem, Left, Right, Title } from './styles';
import SearchIcon from "@material-ui/icons/Search";
import { TextField, IconButton } from '@material-ui/core';
import iconGit from '../../assets/images/iconGit.png'
import './styles.css';

const Home: React.FC = () => {
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
          InputProps={{
            startAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        <Button>
          Pesquisar
        </Button>
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