import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 68px;
    padding: 16px;
    width: 902px;
    border-bottom: 1px solid #EAEFED;
`;

export const Avatar = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Name = styled.div`
    display: flex;
    align-items: center;
    width: 113px;
    height: 34px;
    font-weight: 600;
    font-size: 12px;
`;

export const Department = styled.div`
    width: 124px;
    height: 17px;
    font-weight: 400;
    font-size: 12px;
`;

export const Role = styled.div`
    width: 96px;
    height: 17px;
    font-weight: 400;
    font-size: 12px; 
`;

export const Branch = styled.div`
    width: 142px;
    height: 17px;
    font-weight: 400;
    font-size: 12px;   
`;

// interface to pass props to Status variable.
interface StatusColor {
    status: string;
};

export const Status = styled.div<StatusColor>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 72px;
    font-weight: 500;
    font-size: 14px;
    border-radius: 80px;
    padding: 4px, 8px;
    background: #B5F1DD;
    background: ${props => props.status === 'Ativo' ? '#B5F1DD' : '#EAEFED' };
`;

export const More = styled.div`
    display: flex;
`;