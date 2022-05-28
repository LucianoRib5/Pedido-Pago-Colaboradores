import { FunctionComponent } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import {
    Container,
    Pages,
    TextSelect,
    Select,
    Selection,
    Arrows,
    TextArrow,
    ArrowLeft,
    ArrowRight
} from "../../styles/pagination/styles";

const Pagination: FunctionComponent = () =>{
    return(
        <Container>
            <Pages>                
                <Select>
                    <TextSelect>
                        <p>Mostrando 10 de 50 Registros</p>
                    </TextSelect>
                    <Selection>
                        <p>10</p>
                        <ExpandMoreIcon/>
                    </Selection>
                </Select>
                <Arrows>
                    <ArrowLeft>
                        <KeyboardArrowLeftIcon/>
                    </ArrowLeft>
                    <TextArrow>
                        <p>1 de 10</p>
                    </TextArrow>
                    <ArrowRight>
                        <KeyboardArrowRightIcon/>
                    </ArrowRight>
                </Arrows>                
            </Pages>
        </Container>
    );
};

export default Pagination;