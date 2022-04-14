import {
    Container,
    Name,
    Username,
    Description
} from './styles';

const UserDetails = (props: any) => {
    return (
        <Container>
            <Name>{props?.name}</Name>
            <Username>{props?.login}</Username>
            <Description>{props?.repositorio}</Description>
        </Container>
    );
}

export default UserDetails;