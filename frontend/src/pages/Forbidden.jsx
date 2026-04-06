import ErrorPage from "../components/ErrorPage";

function Forbidden() {
  return (
    <ErrorPage
      code="403"
      title="Access Forbidden"
      emoji="🔎"
      message="We checked, but you don’t have permission to access this page."
    />
  );
}

export default Forbidden;