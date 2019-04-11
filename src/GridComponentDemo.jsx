import React from "react";
import GridGrid from "./GridGrid";

class GridComponentDemo extends React.Component {
  render() {
    const bodydata = [
      {
        selected: false,
        name: "Sykes Burnett",
        idd: "TRASOLA",
        path: "sykesburnett@trasola.com"
      },
      {
        selected: false,
        name: "Byers Lara",
        idd: "BRAINCLIP",
        path: "byerslara@brainclip.com"
      },
      {
        selected: false,
        name: "Frieda Wooten",
        idd: "POLARIUM",
        path: "friedawooten@polarium.com"
      },
      {
        selected: true,
        name: "Brittney Rowland",
        idd: "SOFTMICRO",
        path: "brittneyrowland@softmicro.com"
      },
      {
        selected: true,
        name: "Hinton Peck",
        idd: "EARBANG",
        path: "hintonpeck@earbang.com"
      },
      {
        selected: true,
        name: "Branch Strong",
        idd: "NIKUDA",
        path: "branchstrong@nikuda.com"
      },
      {
        selected: false,
        name: "Holmes Leonard",
        idd: "COMVENE",
        path: "holmesleonard@comvene.com"
      },
      {
        selected: false,
        name: "Moss Skinner",
        idd: "GENESYNK",
        path: "mossskinner@genesynk.com"
      },
      {
        selected: false,
        name: "Rachelle Whitehead",
        idd: "HYPLEX",
        path: "rachellewhitehead@hyplex.com"
      },
      {
        selected: false,
        name: "Marla Gutierrez",
        idd: "ZYTRAX",
        path: "marlagutierrez@zytrax.com"
      },
      {
        selected: false,
        name: "Leah Barlow",
        idd: "ENTHAZE",
        path: "leahbarlow@enthaze.com"
      }
    ];
    const headerdata = [
      {
        header: "",
        sorting: null
      },
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
