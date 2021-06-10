import React from "react";
import {ResponsiveChord} from "@nivo/chord";

export default function ChordChart(props) {
    return <div style={{height: "120vh"}}>
        <h1 style={{textAlign: "center", fontFamily: "Roboto Mono, monospace"}}>Modules' binding</h1>
        <p style={{fontFamily: "Roboto Mono, monospace"}}><b>Metric explanation:</b> when two modules are present in the
            same commit, their lines are computed and shown in the chart. The biggest is the the sum of lines' count,
            the worse is the metric</p>
        <ResponsiveChord
            matrix={props.matrix}
            keys={props.keys}
            margin={{top: 100, right: 250, bottom: 250, left: 50}}
            valueFormat=".2f"
            padAngle={0.02}
            innerRadiusRatio={0.96}
            innerRadiusOffset={0.02}
            colors={{scheme: "nivo"}}
            arcOpacity={1}
            arcBorderWidth={1}
            arcBorderColor={{from: "color", modifiers: [["darker", 0.4]]}}
            ribbonOpacity={0.5}
            ribbonBorderWidth={1}
            ribbonBorderColor={{from: "color", modifiers: [["darker", 0.4]]}}
            enableLabel={true}
            label="id"
            labelOffset={12}
            labelRotation={-90}
            labelTextColor={{from: "color", modifiers: [["darker", 1]]}}
            isInteractive={true}
            arcHoverOpacity={1}
            arcHoverOthersOpacity={0.25}
            ribbonHoverOpacity={0.75}
            ribbonHoverOthersOpacity={0.25}
            animate={true}
            motionStiffness={90}
            motionDamping={7}
            legends={[
                {
                    anchor: "right",
                    direction: "column",
                    justify: false,
                    translateX: 150,
                    translateY: 0,
                    itemWidth: 80,
                    itemHeight: 14,
                    itemsSpacing: 0,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    symbolSize: 12,
                    symbolShape: "circle",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemTextColor: "#000"
                            }
                        }
                    ]
                }
            ]}
        />
    </div>;
}