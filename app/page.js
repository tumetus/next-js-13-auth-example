import LoginBtn from "./login-btn";
import AppDescription from "./app-description";

export default function Page() {
  return (
    <div>
      <h1>Auth testing</h1>
      <div>
        <LoginBtn>
          <AppDescription />
        </LoginBtn>
      </div>
    </div>
  );
}
