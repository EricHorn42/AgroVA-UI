import { useState, useEffect, useRef, FormEvent } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { HOMEROUTE, SIGNUPROUTE } from "../../routes";
import useAuth from "../../hooks/useAuth";
import { loginUser } from "../../services";
import { UserLogin } from "../../types/shared/UserLogin";

const Signin = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const {auth} = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef?.current?.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [email, password]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await loginUser({email: email, password: password} as UserLogin);
      const token = response.data.token;
      auth?.setToken
      setEmail("");
      setPassword("");
      setSuccess(true);
    } catch (error) {
      
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Logado</h1>
          <br />
          <p>
            <a href="#">Home</a>
          </p>
        </section>
      ) : (
        <C.Container>
          <p ref={errRef} className={errorMsg ? "errmsg" : "offscrren"} aria-live="assertive">{errorMsg}</p>
          <C.Label>Sign In</C.Label>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={userRef}
              required
            />

            <input
              type="password"
              placeholder="Digite sua Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button type="submit">Sign In</Button>
            <C.LabelSignup>
              Não tem uma conta?
              <C.Strong>
                <Link to={SIGNUPROUTE}>&nbsp;Registre-se</Link>
              </C.Strong>
            </C.LabelSignup>
          </form>
        </C.Container>
      )}
    </>
  );
};

export default Signin;
