import "../../enviroment.js";

import type cors from "cors";

const options: cors.CorsOptions = {
  origin: [
    process.env.LOCAL_SERVER!,
    process.env.LOCAL_CLIENT!,
    process.env.PRODUCTION_URL!,
  ],
};

export default options;
