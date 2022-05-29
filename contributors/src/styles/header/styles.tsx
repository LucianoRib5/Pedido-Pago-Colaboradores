import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 0px, 32px, 0px, 32px;
    gap: 80px;
    width: 1920px;   
    height: 61px;
    background-color: #FFFFFF;

    // Remover está borda!
    border: solid 1px #EAEFED;
`;

export const Logo = styled.div`
    display: flex;
    justify-items: center;
    height: 100%;
    width: 67.47px;
    margin-left: 32px;
    border-right: solid 1px #EAEFED;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 184px;
    margin-right: 32px;
    border-left: solid 1px #EAEFED;
`;

export const Content = styled.div`
    display: flex;
    width: 152px;
    height: 32px;
    gap: 10px;
`;

export const Img =  styled.div`
    width: 32px;
    height: 32px;

    p {
        font-size: 14px;
        font-weight: 400;
        text-align: left;
    };
`;

export const Text =  styled.div`
    display: flex;
    flex-direction: column;
    width: 110px;
    height: 30px;
    gap: 2px;
`;

export const Title = styled.div`
    width: 110px;
    height: 14px;

    p {
        font-weight: 600;
        font-size: 14px;
    };
`;

export const Subtitle = styled.div`
    width: 76px;
    height: 14px;

    p {
        font-weight: 400;
        font-size: 12px;
    };
`;