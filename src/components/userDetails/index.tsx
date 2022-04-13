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
            <Description>{props?.bio}</Description>
        </Container>
    );
}

export default UserDetails;