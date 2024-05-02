import Header from "@src/components/Base/Header/Header";
import { LayoutWrapper } from "@src/components/Base/Layout/Layout.styled";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
