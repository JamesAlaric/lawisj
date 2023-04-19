import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export function FeatureCard({path, color, icon, title, description }) {
  return (
    <>
    <Card className="rounded-xl shadow-lg shadow-gray-500/10">
      <CardBody className="px-6 text-center">
      
        <IconButton
          variant="gradient"
          size="lg"
          color={color}
          className="pointer-events-none mb-6 rounded-full"
        >
          {icon}
        </IconButton>
        <Typography variant="h5" className="mb-2" color="blue-gray">
          {title}
        </Typography>
        <Typography className="font-normal text-blue-gray-600">
          {description}
        </Typography>
        <div className="mt-10 flex w-full justify-center px-4 lg:order-4 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
          <a href= {path} > <Button className="bg-blue-400">voir + </Button></a>
        </div>
      </CardBody>
    </Card>
  </>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
