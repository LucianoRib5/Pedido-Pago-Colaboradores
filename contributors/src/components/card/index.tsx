import { ReactNode, FunctionComponent } from "react";
import { 
    Container,
    Avatar,
    Name,
    Department,
    Role,
    Branch,
    Status,
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

const Card: FunctionComponent<Props> = (props) =>{
    return(
        <Container>
            <Avatar>
                {props.img}
                <Name>
                    <p>{props.name}</p>
                </Name>
            </Avatar>
            <Department>
                <p>{props.department}</p>
            </Department>
            <Role>
                <p>{props.role}</p>
            </Role>
            <Branch>
                <p>{props.branch}</p>
            </Branch>
            <Status status={props.status}>
                <p>{props.status}</p>
            </Status>
            <More>
                {props.more}                        
            </More>            
        </Container>
    );
};

export default Card;