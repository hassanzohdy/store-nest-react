import { useEffect, useState } from "react";
import { Banner } from "src/apps/front-office/utils/types";
import { getHome } from "../../../services/home-service";

export function useGetDailyBestSellsBanner() {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<string>("");
  const [banner, setBanner] = useState<Banner | undefined>(undefined);
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  useEffect(() => {
    getHome()
      .then(response => {
        const banner = response.data.rows[4].columns[0].module.banner!;
        setBanner(banner);
        setloading(false);
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  }, []);

  return { loading, error, banner };
}
