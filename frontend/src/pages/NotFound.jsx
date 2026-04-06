import ErrorPage from "../components/ErrorPage";

function NotFound() {
  return (
    <ErrorPage
      code="404"
      title="Page Not Found"
      emoji="😔"
      message="Sorry, the page you’re looking for doesn’t exist or may have been moved."
    />
  );
}

export default NotFound;