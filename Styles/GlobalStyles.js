import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing:border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        background-color: #eff3f7;
        height: 100%;
    }
    a {
        color:${(props) => props.theme.blueColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
`;
