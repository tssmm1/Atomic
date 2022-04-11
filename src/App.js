import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SearchInput } from "./components/molecules/SerchInput";
import "./styles.css";
import { UserCard } from "./components/organisms/user/UserCard";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard />
    </div>
  );
}
