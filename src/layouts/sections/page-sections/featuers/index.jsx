import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import FeaturesOne from "layouts/sections/page-sections/featuers/components/FeaturesOne";

export const InteractivePowerBIContent = () => {
  return (
    <View>
      <FeaturesOne />
    </View>
  );
};

function Features() {
  return (
    <BaseLayout
      title=""
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/features" },
        { label: "" },
      ]}
    >
      <InteractivePowerBIContent />
    </BaseLayout>
  );
}

export default Features;
