import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <p className="my-3">Opsss! This page doesn&apos;t exist 😱</p>

      <Link to="" className="btn btn-primary">
        Open home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
