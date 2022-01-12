import React from "react"
import { Link } from "react-router-dom"
import { useAppState } from "../AppState"

const Nav = (props) => {
    const { state, dispatch } = useAppState();
  
    return (
      <header>
        <img src="https://document-export.canva.com/Yn1-M/DAE1LFYn1-M/18/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220111%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220111T040936Z&X-Amz-Expires=68457&X-Amz-Signature=e25d2ef6920eba6dca66848221ca255faaf2cc655e62cb437d3d79106cd36a72&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2011%20Jan%202022%2023%3A10%3A33%20GMT" alt="" className="logo"/>
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