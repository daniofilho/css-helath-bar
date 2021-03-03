import React from "react";

import { Container } from "./styles";

type HealthbarProps = {
  maxLife: number;
  life: number;
};
const Healthbar: React.FC<HealthbarProps> = ({ ...rest }) => {
  return <Container {...rest} />;
};

export default Healthbar;
