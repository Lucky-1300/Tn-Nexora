import ErrorPage from "../components/ErrorPage";

function ServerError() {
  return (
    <ErrorPage
      code="500"
      title="Server Error"
      emoji="🔧"
      message="Something went wrong on our side. We're fixing it. Please try again later."
    />
  );
}

export default ServerError;