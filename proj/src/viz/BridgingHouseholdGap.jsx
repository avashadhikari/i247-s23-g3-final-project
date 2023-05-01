import { useEffect } from "react";

export default function BridgingHouseholdGap() {
  useEffect(() => {
    const divElement = document.getElementById("viz1682372971996");
    const vizElement = divElement.getElementsByTagName("object")[0];
    vizElement.style.height = "550px";
    vizElement.style.width = "100%";
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  });

  return (
    <div>
      <p>
        {" "}
        Over the years, the gap between married couple households and non-family
        households have bridged.
        <br />
        Click on the <strong>Play</strong> button next to the chart below to see
        how the gap has bridged over time
      </p>
      <div
        class="tableauPlaceholder"
        id="viz1682372971996"
        // style="position: relative"
      >
        <noscript>
          <a href="#">
            <img
              alt="Year- 1964 "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ho&#47;Householdconditions&#47;Householdconditions&#47;1_rss.png"
              style="border: none"
            />
          </a>
        </noscript>
        <object class="tableauViz">
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param
            name="name"
            value="Householdconditions&#47;Householdconditions"
          />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ho&#47;Householdconditions&#47;Householdconditions&#47;1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
        </object>
      </div>
    </div>
  );
}
