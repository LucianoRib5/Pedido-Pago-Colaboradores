import { ReactNode, FunctionComponent } from "react";
import { 
    Container,
    Avatar,
    Name,
    Department,
    Role,
    Branch,
    Status,
    TxtStatus,
    More
} from "../../styles/card/styles";

type Props = {
    img: ReactNode;
    name: string,
    department: string,
    role: string,
    branch: string,
    status: string,
    more: ReactNode
};

const Card: FunctionComponent<Props> = ({
    img,
    name,
    department,
    role,
    branch,
    status,
    more
}) =>{
    return(
        <Container>
            <Avatar>
                {img}
                <Name>
                    <p>{name}</p>
                </Name>
            </Avatar>
            <Department>
                <p>{department}</p>
            </Department>
            <Role>
                <p>{role}</p>
            </Role>
            <Branch>
                <p>{branch}</p>
            </Branch>
            <Status>
                <TxtStatus status={status}>
                    <p>{status}</p>
                </TxtStatus>
            </Status>
            <More>
                {more}                        
            </More>            
        </Container>
    );
};

export default Card;