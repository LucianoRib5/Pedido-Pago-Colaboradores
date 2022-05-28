import { FunctionComponent } from "react";
import { 
    Container,
    FullName,
    Department,
    Role,
    Branch,
    Status
} from "../../styles/table/styles";

type Props = {
    fullName: string,
    department: string,
    role: string,
    branch: string,
    status: string
};

const Table: FunctionComponent<Props> = (props) =>{
    return(
        <Container>
            <FullName>
                <p>{props.fullName}</p>
            </FullName>
            <Department>
                <p>{props.department}</p>
            </Department>
            <Role>
                <p>{props.role}</p>
            </Role>
            <Branch>
                <p>{props.branch}</p>
            </Branch>
            <Status>
                <p>{props.status}</p>
            </Status>
        </Container>
    );
};

export default Table;