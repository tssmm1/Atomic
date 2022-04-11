import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SearchInput } from "./components/molecules/SerchInput";
import "./styles.css";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { BrowserRouter } from "react-router-dom";

const user = {
  name: "じゃけぇ",
  image: "https://source.unsplash.com/3tYZjGSBwbk",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "http://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <HeaderOnly>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </HeaderOnly>
    </BrowserRouter>
  );
}
