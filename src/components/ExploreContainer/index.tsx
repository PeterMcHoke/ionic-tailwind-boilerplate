import './index.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong className="text-xl">{name}</strong>
      <p className=" text-gray-400 font-semibold">
        Explore{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
          className="no-underline text-blue-500"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
