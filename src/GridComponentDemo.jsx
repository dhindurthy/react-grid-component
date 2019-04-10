import React from "react";
import GridGrid from "./GridGrid";

class GridComponentDemo extends React.Component {
  render() {
    const bodydata = [
      {
        name: "Patton Tanner",
        idd: "DATACATOR",
        path: "pattontanner@datacator.com"
      },
      {
        name: "Priscilla Cash",
        idd: "CONFRENZY",
        path: "priscillacash@confrenzy.com"
      },
      {
        name: "Huffman Carney",
        idd: "GOLISTIC",
        path: "huffmancarney@golistic.com"
      },
      {
        name: "Lang Franks",
        idd: "INSURETY",
        path: "langfranks@insurety.com"
      },
      {
        name: "Mckenzie Calderon",
        idd: "SINGAVERA",
        path: "mckenziecalderon@singavera.com"
      },
      {
        name: "Bessie Stevens",
        idd: "SQUISH",
        path: "bessiestevens@squish.com"
      },
      {
        name: "Berry Day",
        idd: "OVATION",
        path: "berryday@ovation.com"
      },
      {
        name: "Pamela Lewis",
        idd: "SUREMAX",
        path: "pamelalewis@suremax.com"
      },
      {
        name: "Garner Robertson",
        idd: "DENTREX",
        path: "garnerrobertson@dentrex.com"
      },
      {
        name: "Marsha Craig",
        idd: "VERBUS",
        path: "marshacraig@verbus.com"
      },
      {
        name: "Adeline Velez",
        idd: "ONTAGENE",
        path: "adelinevelez@ontagene.com"
      },
      {
        name: "Luna Randall",
        idd: "CORPULSE",
        path: "lunarandall@corpulse.com"
      },
      {
        name: "Muriel Sims",
        idd: "UPDAT",
        path: "murielsims@updat.com"
      },
      {
        name: "Sabrina Woods",
        idd: "EPLODE",
        path: "sabrinawoods@eplode.com"
      }
    ];

    const headerdata = [
      {
        header: "name",
        sorting: true
      },
      {
        header: "idd",
        sorting: true
      },
      {
        header: "path",
        sorting: false
      }
    ];
    return <GridGrid bodydata={bodydata} headerdata={headerdata} />;
  }
}

export default GridComponentDemo;
