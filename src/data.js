const somedata = [
  {
    selected: true,
    name: "Buck Church",
    idd: "ZORROMOP",
    path: "buckchurch@zorromop.com"
  },
  {
    selected: true,
    name: "Martin Frederick",
    idd: "PAPRIKUT",
    path: "martinfrederick@paprikut.com"
  },
  {
    selected: false,
    name: "Evans Raymond",
    idd: "ZENTIX",
    path: "evansraymond@zentix.com"
  },
  {
    selected: false,
    name: "Rosalie Mclean",
    idd: "ANIVET",
    path: "rosaliemclean@anivet.com"
  },
  {
    selected: true,
    name: "Violet Roach",
    idd: "ZILPHUR",
    path: "violetroach@zilphur.com"
  },
  {
    selected: false,
    name: "Judy Brown",
    idd: "OVOLO",
    path: "judybrown@ovolo.com"
  },
  {
    selected: false,
    name: "Fulton Alvarez",
    idd: "SPRINGBEE",
    path: "fultonalvarez@springbee.com"
  },
  {
    selected: true,
    name: "Lois Kirkland",
    idd: "PORTICA",
    path: "loiskirkland@portica.com"
  },
  {
    selected: false,
    name: "Gates Pace",
    idd: "ENORMO",
    path: "gatespace@enormo.com"
  },
  {
    selected: true,
    name: "Norma Foley",
    idd: "SECURIA",
    path: "normafoley@securia.com"
  },
  {
    selected: true,
    name: "Penelope Glover",
    idd: "EXOSTREAM",
    path: "penelopeglover@exostream.com"
  },
  {
    selected: true,
    name: "Carmella Kelly",
    idd: "ZOLAREX",
    path: "carmellakelly@zolarex.com"
  },
  {
    selected: true,
    name: "Mai Kennedy",
    idd: "VISALIA",
    path: "maikennedy@visalia.com"
  }
  // {
  //   selected: true,
  //   name: "Reynolds Sharp",
  //   idd: "XIIX",
  //   path: "reynoldssharp@xiix.com"
  // },
  // {
  //   selected: true,
  //   name: "Riley Finch",
  //   idd: "SENMAO",
  //   path: "rileyfinch@senmao.com"
  // },
  // {
  //   selected: false,
  //   name: "Victoria Mcfadden",
  //   idd: "HOUSEDOWN",
  //   path: "victoriamcfadden@housedown.com"
  // },
  // {
  //   selected: true,
  //   name: "Hopkins Gould",
  //   idd: "ZILENCIO",
  //   path: "hopkinsgould@zilencio.com"
  // },
  // {
  //   selected: true,
  //   name: "Adrienne Herrera",
  //   idd: "STRALUM",
  //   path: "adrienneherrera@stralum.com"
  // },
  // {
  //   selected: false,
  //   name: "Carey Hunt",
  //   idd: "ZOID",
  //   path: "careyhunt@zoid.com"
  // },
  // {
  //   selected: false,
  //   name: "Waller Eaton",
  //   idd: "CEDWARD",
  //   path: "wallereaton@cedward.com"
  // },
  // {
  //   selected: false,
  //   name: "Wilkinson Snider",
  //   idd: "STELAECOR",
  //   path: "wilkinsonsnider@stelaecor.com"
  // },
  // {
  //   selected: true,
  //   name: "Hendrix Serrano",
  //   idd: "AUSTECH",
  //   path: "hendrixserrano@austech.com"
  // },
  // {
  //   selected: false,
  //   name: "Zelma Farmer",
  //   idd: "APPLICA",
  //   path: "zelmafarmer@applica.com"
  // },
  // {
  //   selected: false,
  //   name: "Randall Gutierrez",
  //   idd: "BLANET",
  //   path: "randallgutierrez@blanet.com"
  // },
  // {
  //   selected: false,
  //   name: "Conway Thomas",
  //   idd: "ZINCA",
  //   path: "conwaythomas@zinca.com"
  // },
  // {
  //   selected: true,
  //   name: "Chandra Slater",
  //   idd: "CALLFLEX",
  //   path: "chandraslater@callflex.com"
  // },
  // {
  //   selected: true,
  //   name: "Hensley Lester",
  //   idd: "XYMONK",
  //   path: "hensleylester@xymonk.com"
  // },
  // {
  //   selected: true,
  //   name: "Haney Fuentes",
  //   idd: "TINGLES",
  //   path: "haneyfuentes@tingles.com"
  // },
  // {
  //   selected: true,
  //   name: "Tami Reynolds",
  //   idd: "ACUMENTOR",
  //   path: "tamireynolds@acumentor.com"
  // },
  // {
  //   selected: true,
  //   name: "Nora Ramos",
  //   idd: "ZYPLE",
  //   path: "noraramos@zyple.com"
  // },
  // {
  //   selected: false,
  //   name: "Payne Emerson",
  //   idd: "KENEGY",
  //   path: "payneemerson@kenegy.com"
  // },
  // {
  //   selected: true,
  //   name: "Slater Doyle",
  //   idd: "ZAGGLE",
  //   path: "slaterdoyle@zaggle.com"
  // },
  // {
  //   selected: true,
  //   name: "Cline Michael",
  //   idd: "MOREGANIC",
  //   path: "clinemichael@moreganic.com"
  // },
  // {
  //   selected: true,
  //   name: "Alvarado Mann",
  //   idd: "LUNCHPOD",
  //   path: "alvaradomann@lunchpod.com"
  // },
  // {
  //   selected: true,
  //   name: "Dominguez Ochoa",
  //   idd: "GYNK",
  //   path: "dominguezochoa@gynk.com"
  // },
  // {
  //   selected: true,
  //   name: "Bird Workman",
  //   idd: "FISHLAND",
  //   path: "birdworkman@fishland.com"
  // },
  // {
  //   selected: false,
  //   name: "Mona Wade",
  //   idd: "CENTICE",
  //   path: "monawade@centice.com"
  // },
  // {
  //   selected: false,
  //   name: "Perkins Bullock",
  //   idd: "ENERVATE",
  //   path: "perkinsbullock@enervate.com"
  // },
  // {
  //   selected: false,
  //   name: "Horn Ellison",
  //   idd: "GEEKUS",
  //   path: "hornellison@geekus.com"
  // },
  // {
  //   selected: false,
  //   name: "Alyce Wynn",
  //   idd: "TALKOLA",
  //   path: "alycewynn@talkola.com"
  // },
  // {
  //   selected: false,
  //   name: "Spence Moon",
  //   idd: "ZIGGLES",
  //   path: "spencemoon@ziggles.com"
  // },
  // {
  //   selected: true,
  //   name: "Faye Larsen",
  //   idd: "SULTRAXIN",
  //   path: "fayelarsen@sultraxin.com"
  // },
  // {
  //   selected: true,
  //   name: "Lisa Hardin",
  //   idd: "ISOSWITCH",
  //   path: "lisahardin@isoswitch.com"
  // },
  // {
  //   selected: true,
  //   name: "Lelia Parrish",
  //   idd: "FURNITECH",
  //   path: "leliaparrish@furnitech.com"
  // },
  // {
  //   selected: true,
  //   name: "Kramer Baldwin",
  //   idd: "VICON",
  //   path: "kramerbaldwin@vicon.com"
  // },
  // {
  //   selected: false,
  //   name: "Trisha Kemp",
  //   idd: "QUILTIGEN",
  //   path: "trishakemp@quiltigen.com"
  // },
  // {
  //   selected: false,
  //   name: "Frankie Wells",
  //   idd: "PHUEL",
  //   path: "frankiewells@phuel.com"
  // },
  // {
  //   selected: false,
  //   name: "Willa Powers",
  //   idd: "VIDTO",
  //   path: "willapowers@vidto.com"
  // },
  // {
  //   selected: false,
  //   name: "Christa York",
  //   idd: "QUIZKA",
  //   path: "christayork@quizka.com"
  // },
  // {
  //   selected: true,
  //   name: "Wolfe Manning",
  //   idd: "OLUCORE",
  //   path: "wolfemanning@olucore.com"
  // },
  // {
  //   selected: false,
  //   name: "Gloria Giles",
  //   idd: "FUTURITY",
  //   path: "gloriagiles@futurity.com"
  // },
  // {
  //   selected: true,
  //   name: "Moran Bass",
  //   idd: "TECHADE",
  //   path: "moranbass@techade.com"
  // },
  // {
  //   selected: false,
  //   name: "Beach Maddox",
  //   idd: "GINKOGENE",
  //   path: "beachmaddox@ginkogene.com"
  // },
  // {
  //   selected: false,
  //   name: "Sellers Nieves",
  //   idd: "FARMAGE",
  //   path: "sellersnieves@farmage.com"
  // },
  // {
  //   selected: false,
  //   name: "Aguilar Tanner",
  //   idd: "FORTEAN",
  //   path: "aguilartanner@fortean.com"
  // },
  // {
  //   selected: false,
  //   name: "Brooke Riggs",
  //   idd: "FLEXIGEN",
  //   path: "brookeriggs@flexigen.com"
  // },
  // {
  //   selected: true,
  //   name: "Deleon Sellers",
  //   idd: "ZEROLOGY",
  //   path: "deleonsellers@zerology.com"
  // },
  // {
  //   selected: false,
  //   name: "Leticia Marshall",
  //   idd: "LUDAK",
  //   path: "leticiamarshall@ludak.com"
  // },
  // {
  //   selected: true,
  //   name: "Paige Morse",
  //   idd: "MEDIFAX",
  //   path: "paigemorse@medifax.com"
  // },
  // {
  //   selected: true,
  //   name: "Bean Rollins",
  //   idd: "MEDCOM",
  //   path: "beanrollins@medcom.com"
  // },
  // {
  //   selected: false,
  //   name: "Annette House",
  //   idd: "ASSITIA",
  //   path: "annettehouse@assitia.com"
  // },
  // {
  //   selected: false,
  //   name: "Romero Bright",
  //   idd: "TWIIST",
  //   path: "romerobright@twiist.com"
  // },
  // {
  //   selected: false,
  //   name: "Dena Suarez",
  //   idd: "OPTYK",
  //   path: "denasuarez@optyk.com"
  // },
  // {
  //   selected: true,
  //   name: "Mccarty Dillon",
  //   idd: "PARCOE",
  //   path: "mccartydillon@parcoe.com"
  // },
  // {
  //   selected: false,
  //   name: "Terra Lawson",
  //   idd: "SULTRAX",
  //   path: "terralawson@sultrax.com"
  // },
  // {
  //   selected: true,
  //   name: "Mara Erickson",
  //   idd: "IMKAN",
  //   path: "maraerickson@imkan.com"
  // },
  // {
  //   selected: true,
  //   name: "Solis Dixon",
  //   idd: "FIBRODYNE",
  //   path: "solisdixon@fibrodyne.com"
  // },
  // {
  //   selected: false,
  //   name: "Irwin Francis",
  //   idd: "ASIMILINE",
  //   path: "irwinfrancis@asimiline.com"
  // },
  // {
  //   selected: true,
  //   name: "Williamson Baker",
  //   idd: "MAGNAFONE",
  //   path: "williamsonbaker@magnafone.com"
  // },
  // {
  //   selected: true,
  //   name: "Conner Norton",
  //   idd: "INTERLOO",
  //   path: "connernorton@interloo.com"
  // },
  // {
  //   selected: true,
  //   name: "Angel Ramsey",
  //   idd: "CAPSCREEN",
  //   path: "angelramsey@capscreen.com"
  // },
  // {
  //   selected: false,
  //   name: "Mary Buckner",
  //   idd: "MOLTONIC",
  //   path: "marybuckner@moltonic.com"
  // },
  // {
  //   selected: false,
  //   name: "Cherie Davenport",
  //   idd: "CIPROMOX",
  //   path: "cheriedavenport@cipromox.com"
  // },
  // {
  //   selected: true,
  //   name: "Lolita Gardner",
  //   idd: "CRUSTATIA",
  //   path: "lolitagardner@crustatia.com"
  // },
  // {
  //   selected: true,
  //   name: "Iris Obrien",
  //   idd: "PLEXIA",
  //   path: "irisobrien@plexia.com"
  // },
  // {
  //   selected: true,
  //   name: "Horton Meadows",
  //   idd: "WAZZU",
  //   path: "hortonmeadows@wazzu.com"
  // },
  // {
  //   selected: true,
  //   name: "Melinda Goff",
  //   idd: "CENTREE",
  //   path: "melindagoff@centree.com"
  // },
  // {
  //   selected: true,
  //   name: "Nichols Guthrie",
  //   idd: "SUREMAX",
  //   path: "nicholsguthrie@suremax.com"
  // },
  // {
  //   selected: false,
  //   name: "Trujillo Benson",
  //   idd: "KINDALOO",
  //   path: "trujillobenson@kindaloo.com"
  // },
  // {
  //   selected: false,
  //   name: "Gale Sanchez",
  //   idd: "SOFTMICRO",
  //   path: "galesanchez@softmicro.com"
  // },
  // {
  //   selected: false,
  //   name: "Maura Peck",
  //   idd: "OHMNET",
  //   path: "maurapeck@ohmnet.com"
  // },
  // {
  //   selected: true,
  //   name: "England Elliott",
  //   idd: "STEELTAB",
  //   path: "englandelliott@steeltab.com"
  // },
  // {
  //   selected: true,
  //   name: "Nelda Webster",
  //   idd: "VETRON",
  //   path: "neldawebster@vetron.com"
  // },
  // {
  //   selected: false,
  //   name: "Reeves Hewitt",
  //   idd: "DOGNOST",
  //   path: "reeveshewitt@dognost.com"
  // },
  // {
  //   selected: true,
  //   name: "Delores Kerr",
  //   idd: "PAWNAGRA",
  //   path: "deloreskerr@pawnagra.com"
  // },
  // {
  //   selected: false,
  //   name: "Brigitte Pruitt",
  //   idd: "GEEKOSIS",
  //   path: "brigittepruitt@geekosis.com"
  // },
  // {
  //   selected: false,
  //   name: "Kelly Roman",
  //   idd: "ARCTIQ",
  //   path: "kellyroman@arctiq.com"
  // },
  // {
  //   selected: true,
  //   name: "Constance Sanford",
  //   idd: "PORTICO",
  //   path: "constancesanford@portico.com"
  // },
  // {
  //   selected: true,
  //   name: "Josephine Pierce",
  //   idd: "SPLINX",
  //   path: "josephinepierce@splinx.com"
  // },
  // {
  //   selected: true,
  //   name: "Nita Beach",
  //   idd: "COMTRACT",
  //   path: "nitabeach@comtract.com"
  // },
  // {
  //   selected: true,
  //   name: "Mckee Blair",
  //   idd: "ECOSYS",
  //   path: "mckeeblair@ecosys.com"
  // },
  // {
  //   selected: false,
  //   name: "Osborn Williamson",
  //   idd: "XYQAG",
  //   path: "osbornwilliamson@xyqag.com"
  // },
  // {
  //   selected: false,
  //   name: "Estelle Mitchell",
  //   idd: "MEDESIGN",
  //   path: "estellemitchell@medesign.com"
  // },
  // {
  //   selected: false,
  //   name: "Harrington Salazar",
  //   idd: "DOGNOSIS",
  //   path: "harringtonsalazar@dognosis.com"
  // },
  // {
  //   selected: true,
  //   name: "Tonia Hartman",
  //   idd: "XIXAN",
  //   path: "toniahartman@xixan.com"
  // },
  // {
  //   selected: false,
  //   name: "Willis Pacheco",
  //   idd: "ZERBINA",
  //   path: "willispacheco@zerbina.com"
  // },
  // {
  //   selected: false,
  //   name: "Kimberley Farrell",
  //   idd: "ZENOLUX",
  //   path: "kimberleyfarrell@zenolux.com"
  // },
  // {
  //   selected: true,
  //   name: "Turner Watts",
  //   idd: "PHEAST",
  //   path: "turnerwatts@pheast.com"
  // },
  // {
  //   selected: false,
  //   name: "Ladonna Lowery",
  //   idd: "ZANYMAX",
  //   path: "ladonnalowery@zanymax.com"
  // },
  // {
  //   selected: true,
  //   name: "Tara Pennington",
  //   idd: "KEENGEN",
  //   path: "tarapennington@keengen.com"
  // }
];
export default somedata;
