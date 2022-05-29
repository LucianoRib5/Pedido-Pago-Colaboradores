import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 30px;
    width: 902px;
    margin: 50px 0 40px 0;
    border-bottom: 2px solid #EAEFED;
`;

// interface to pass props to Contributors variable.
interface BorderBottom {
    borderContributors?: string;
    borderRoles?: string;
};

export const Contributors = styled.div<BorderBottom>`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 196px;
    height: 30px;
    border-bottom: ${props => props.borderContributors};

    p {
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        text-align: center;
    };

`;
export const Roles = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 196px;
    height: 30px;

    p {
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        text-align: center;
        color: #A3B8B0;

        
    };
`;