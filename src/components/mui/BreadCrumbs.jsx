import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

function BasicBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography
              sx={{ fontSize: "19px" }}
              key={name}
              color="text.primary"
              className="text-xl"
            >
              {name}
            </Typography>
          ) : (
            <Link className="hover:text-primaryText text-[19px]" to={routeTo}>
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}

export default BasicBreadcrumbs;
