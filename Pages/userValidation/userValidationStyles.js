import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const ValidationContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:6rem;
margin-top: -21.4rem;
height: 100vh;
`;

export const Form = styled(FormikForm)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 4px;
gap: 16px;
`;

