import { FunctionComponent } from "react";
import { Container } from "../../styles/input/styles";

const Input: FunctionComponent = () => {
    return (
        <form>
            <Container
                placeholder="Pesquise por nome ou cpf"
            />
        </form>
    );
};

export default Input;