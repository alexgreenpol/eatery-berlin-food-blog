import ButtonLink from "../ButtonLink/ButtonLink";
import "./ServicesList.scss";

const ServicesList = () => {
    return (
        <div className="services-list">
            <ButtonLink buttonUrl="/services/food-photography">
                Food photography
            </ButtonLink>
            <ButtonLink buttonUrl="/services/video-production">
                Video production
            </ButtonLink>
            <ButtonLink buttonUrl="/services/recipe-creation">
                Recipe creation
            </ButtonLink>
            <ButtonLink buttonUrl="/services/collaboration">
                Collaboration
            </ButtonLink>
            <ButtonLink buttonUrl="/services/cooking-classes">
                Cooking classes
            </ButtonLink>
        </div>
    );
};

export default ServicesList;
