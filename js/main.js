// chart object to loop through
const charts = {
    // section 1
    "#vis-01": "specs/section_1_01_freqtable.vg.json",
    "#vis-12": "specs/section_1_ausplay_age_group_lollipop.vg.json", 
    "#vis-02": "specs/section_1_02_choropleth.vg.json",
    "#vis-03": "specs/section_1_03_propsym.vg.json",
    // section 2
    "#vis-04": "specs/section_2_01_tilemap.vg.json",
    "#vis-05": "specs/section_2_02_multiline.vg.json",
    "#vis-06": "specs/section_2_03_slope.vg.json",
    // section 3
    "#vis-07": "specs/section_3_01_techdumbbell.vg.json",
    "#vis-08": "specs/section_3_02_diverglollipop.vg.json",
    "#vis-09": "specs/section_3_03_barrierheatmap.vg.json",
    // section 4
    "#vis-10": "specs/section_4_01_butterfly.vg.json",
    "#vis-11": "specs/section_4_02_bumpchart.vg.json",
    "#vis-13": "specs/section_4_motivations.vg.json",
    // section 5
    "#vis-14": "specs/child_national_participation.vg.json",
};

// set fonts globally
const fontConfig = {
    font: "Google Sans",
    title: { font: "Google Sans", subtitleFont: "Google Sans" },
    axis: { labelFont: "Google Sans", titleFont: "Google Sans" },
    legend: { labelFont: "Google Sans", titleFont: "Google Sans" },
    header: { labelFont: "Google Sans", titleFont: "Google Sans" },
    text: { font: "Google Sans" }
};

// Loop through the chart object and render each visualization without the action menu
// catch rendering errors
for (const [selector, specPath] of Object.entries(charts)) {
    vegaEmbed(selector, specPath, {
        actions: false
    }).catch(error => {
        console.error(`Failed to render ${selector}:`, error);
    });
}