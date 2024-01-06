import styled from "styled-components";
import {Form as FormikForm} from "formik";

export const RecoverContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
width: 100%;
height: 76.5vh;

h2 {
    font-size: 40px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: black;
    width: 70%;
}
`;

export const Form = styled(FormikForm)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 40px;
margin-top: 4rem;
`;
