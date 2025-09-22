import { Image, Text, useMantineColorScheme } from "@mantine/core";
import PropTypes from "prop-types";
import classes from "./Logo.module.css";
import T from "../i18n/T.jsx";

export const Logo = ({ type = "image" }) => {
  const { colorScheme } = useMantineColorScheme();
  const fg = colorScheme === "dark" ? "gray.6" : "gray.8";
  const accent = colorScheme === "dark" ? "red.4" : "red.8";

  switch (type) {
    case "text":
      return (
        <div>
          <Text size="xl" fw={900} className={classes.logo} tt="uppercase" c={fg}>
            Martín
            <Text span c={accent} inherit>
              Vera
            </Text>
          </Text>
          <Text size="xs" c="dimmed" ta="end">
            <T k="site.description" />
          </Text>
        </div>
      );

    case "gradient":
      return (
        <div>
          <Text
            size="xl"
            fw={900}
						className={classes.logo}
						tt="uppercase"
            variant="gradient"
            gradient={{ from: 'red.4', to: 'red.8' }}
          >
            MartínVera
          </Text>
          <Text size="xs" c="dimmed" ta="end">
            <T k="site.description" />
          </Text>
        </div>
      );

    default:
      return <Image src="/logo.svg" alt="Martín Vera" className={classes.logo} />;
  }
};

Logo.propTypes = {
  type: PropTypes.oneOf(["image", "text", "gradient"]),
};
