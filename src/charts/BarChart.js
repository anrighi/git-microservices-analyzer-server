import React from "react";
import {ResponsiveBar} from "@nivo/bar";

export default function BarChart(props) {
    return <div style={{height: "100vh"}}>
        <h1 style={{textAlign: "center", fontFamily: "Roboto Mono, monospace"}}>Modules' occurrences in more than a
            commit</h1>
        <p style={{fontFamily: "Roboto Mono, monospace"}}><b>Metric explanation:</b> when more than a module is present
            in a commit, for both of them are computed these presences. In the graph, it is possible to see how many
            times this occurred.</p>
        <ResponsiveBar
            data={props.matrix}
            keys={props.keys}
            indexBy={"directory"}
            margin={{top: 100, right: 250, bottom: 250, left: 50}}
            padding={0.3}
            valueScale={{type: 'linear'}}
            indexScale={{type: 'band', round: true}}
            colors={{scheme: 'nivo'}}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -90,
                legend: '',
                legendPosition: 'right',
                legendOffset: 150
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'directory',
                legendPosition: 'center',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    </div>;
}