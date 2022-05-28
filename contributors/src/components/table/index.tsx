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

const Table: FunctionComponent<Props> = ({
    fullName,
    department,
    role,
    branch,
    status
}) =>{
    return(
        <Container>
            <FullName>
                <p>{fullName}</p>
            </FullName>
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
                <p>{status}</p>
            </Status>
        </Container>
    );
};

export default Table;