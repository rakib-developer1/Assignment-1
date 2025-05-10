/* eslint-disable */
const ServiceCard = ({ title, description, Icon }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center mb-2">
        <Icon className="w-5 h-5 text-green-500 dark:text-green-400 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;
