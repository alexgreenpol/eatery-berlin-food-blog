import ButtonLink from "../ButtonLink/ButtonLink";
import "./ServicesList.scss";

const ServicesList = () => {
    return (
        <div className="services-list">
            <ButtonLink buttonUrl="/services/food-photographer-and-product-photographer">
                Food photography
            </ButtonLink>
            <ButtonLink buttonUrl="/services/video-production">
                Video production
            </ButtonLink>
            <ButtonLink buttonUrl="/services/recipe-creation">
                Recipe Creation
            </ButtonLink>
            <ButtonLink buttonUrl="/services/food-stylist">
                Food stylist
            </ButtonLink>
            <ButtonLink buttonUrl="/services/collaboration">
                Collaboration
            </ButtonLink>
            <ButtonLink buttonUrl="/services/cooking-classes">
                Cooking Classes
            </ButtonLink>
        </div>
    );
};

export default ServicesList;
