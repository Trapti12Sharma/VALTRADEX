import React from "react";
import ImageTextDarkSmallBanner from "../common/ImageTextDarkSmallBanner";
// import calendarImage from "../../assets/economic-calendar.png"; // your image path

const EconomicCalendar = () => {
  return (
    <>
      <ImageTextDarkSmallBanner
        subtitle="Economic Calendar"
        title="CHART"
        highlight="YOUR COURSE"
        description="Timing is everything. Make it count with Valtradex' Economic Calendar."
        // image={calendarImage}
        reverse={false}
      />
    </>
  );
};

export default EconomicCalendar;
