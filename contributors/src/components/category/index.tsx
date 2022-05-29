import { FunctionComponent } from "react";
import { Container, Contributors, Roles } from "../../styles/category/styles";

interface Options {
    contributors: string;
    roles: string;
    borderContributors: string
}

const Category: FunctionComponent<Options> = ({
    contributors,
    roles,
    borderContributors
}) =>{
    return(
        <Container>
            <Contributors borderContributors={borderContributors}>
                <p>{contributors}</p>
            </Contributors>
            <Roles>
                <p>{roles}</p>
            </Roles>
        </Container>
    );
};

export default Category;