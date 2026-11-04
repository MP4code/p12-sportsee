import "./NutrientCard.css";

const NutrientCard = ({ icon, value, unit, label, type }) => {
  return (
    <div className="nutrient-card">
      <div className={`nutrient-card__icon nutrient-card__icon--${type}`}>
        <img src={icon} alt="" />
      </div>

      <div>
        <p className="nutrient-card__value">
          {value}
          {unit}
        </p>
        <p className="nutrient-card__label">{label}</p>
      </div>
    </div>
  );
};

export default NutrientCard;
