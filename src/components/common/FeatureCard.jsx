import AnimationWrapper from "./AnimationWrapper";

const FeatureCard = ({ title, description, icon: Icon, delay }) => (
  <AnimationWrapper delay={delay}>
    <div className="p-6 bg-grayish hover:bg-dark border border-gold/20 rounded-2xl transition-all text-center">
      <Icon className="text-gold text-4xl mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </AnimationWrapper>
);

export default FeatureCard;
