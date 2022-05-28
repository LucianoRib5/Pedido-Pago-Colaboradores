import { FunctionComponent } from "react";
import { Container, Text } from "../../styles/subtitle/styles";

interface Text {
    subtitle: string;
};

const Subtitle: FunctionComponent<Text> = ({subtitle}) =>{
    return(
        <Container>
            <Text>
                <p>{subtitle}</p>
            </Text>
        </Container>
    );
};

export default Subtitle;