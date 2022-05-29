import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 902px;
    height: 60px;
    margin-bottom: 50px;
    padding: 24px 0px 0px;
    gap: 10px;
`;

export const Pages  = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 36px;
`;

export const Select =  styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    width: 330px;
    height: 36px;  
`;

export const TextSelect = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    width: 252px;
    height: 24px;

    p{
        font-weight: 400;
        font-size: 16px;
        text-align: center;
    };
`;

export const Selection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 78px;
    height: 36px;
    gap: 12px;
    border-radius: 8px;
    border: 2px solid #CAD6D1;
`;

export const Arrows = styled.div`
    display: flex;
`; 

export const TextArrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    width: 75px;
    height: 36px;

    p{
        font-weight: 600;
        font-size: 16px;
    };
    
`;

export const ArrowLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    width: 48px;
    height: 36px;
    border: 1.4px solid #CAD6D1;
    border-radius: 8px 0px 0px 8px;

`;

export const ArrowRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    justify-content: center;
    width: 48px;
    height: 36px;
    border: 1.4px solid #709085;
    border-radius: 0px 8px 8px 0px;
`;