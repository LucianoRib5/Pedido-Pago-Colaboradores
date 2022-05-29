import { FunctionComponent } from "react";
import { 
    Container, 
    Logo, 
    User, 
    Img, 
    Text, 
    Title, 
    Subtitle,
    Content
} from "../../styles/header/styles";
import Image from 'next/image'
import logo from "../../../public/logo.svg"
import Avatar from '@material-ui/core/Avatar';

const Header: FunctionComponent = () => {
    return (
        <Container>
            <Logo>
                <Image
                    src={logo}
                    alt="Logo da Pedido Pago"
                    width={"35.47px"}
                    height={"34.69px"}
                />
            </Logo>
            <User>
                <Content>
                    <Img>
                        <Avatar style={{ 
                            width: "32px", 
                            height: "32px",
                            backgroundColor: "#B5F1DD",
                            color: "#000000" 
                        }}>
                            <p>LR</p>
                        </Avatar>
                    </Img>
                    <Text>
                        <Title>
                            <p>Luciano Ribeiro</p>
                        </Title>
                        <Subtitle>
                            <p>meus dados</p>
                        </Subtitle>
                    </Text>
                </Content>
            </User>
        </Container>
    );
};

export default Header;