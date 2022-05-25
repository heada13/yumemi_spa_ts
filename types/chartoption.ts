export type chartData = { name: string; data: number; x: number };

export type chartOption = {
  chart: {
    polar: boolean;
    // height: "500px",
    width: string;
  };
  title: {
    text: string;
  };
  // subtitle: {
  //   text: "Source: thesolarfoundation.com",
  // },
  yAxis: {
    title: {
      text: string;
    };

    // labels: {
    //   formatter: function () {
    //     return highchart.numberFormat(this.value, 0, "", ",") + " 千人";
    //   },
    // },
  };
  xAxis: {
    title: {
      text: string;
    };
    // labels: {
    //   formatter: function () {
    //     return this.value;
    //   },
    // },
    // tickInterval: 5,
    // accessibility: {
    //   rangeDescription: "Range: 2010 to 2017",
    // },
  };
  legend: {
    layout: string;
    align: string;
    verticalAlign: string;
  };
  plotOptions: {
    series: {
      label: {
        connectorAllowed: boolean;
      };
      pointStart: number;
    };
  };
  series: chartData[] | undefined;
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: number;
        };
        chartOptions: {
          legend: {
            layout: string;
            align: string;
            verticalAlign: string;
          };
        };
      }
    ];
  };
};
