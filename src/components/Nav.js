import React from "react"
import { Link } from "react-router-dom"
import { useAppState } from "../AppState"

const Nav = (props) => {
    const { state, dispatch } = useAppState();
  
    return (
      <header>
        <img src="https://document-export.canva.com/Yn1-M/DAE1LFYn1-M/15/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220111%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220111T010045Z&X-Amz-Expires=78823&X-Amz-Signature=7e95a081d0fc07a7301540e1d51acfdf8ebca9cef472c7859bd2de1d081c5a81&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2011%20Jan%202022%2022%3A54%3A28%20GMT" alt="Team-Coacher" className="logo"/>
        <nav>
          {!state.token ? (
            <>
              <Link to="/">
                <button>Home</button>
              </Link>
              <Link to="/auth/signup">
                <button>Signup</button>
              </Link>
              <Link to="/auth/login">
                <button>Login</button>
              </Link>
            </>
          ) : null}
          {state.token ? (
            <button
              onClick={() => {
                dispatch({ type: "logout" });
                props.history.push("/");
              }}
            >
              Logout
            </button>
          ) : null}
        </nav>
      </header>
    );
  };
  
  export default Nav;