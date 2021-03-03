import React, { useState, useCallback } from "react";

import Healthbar from "../../components/Healthbar";

import { Container } from "./styles";

const Home: React.FC = () => {
  const [life, setLife] = useState(5);
  const [maxLife, setMaxLife] = useState(10);

  const handleSubLife = useCallback(() => {
    let newValue = life - 1;
    newValue = newValue < 0 ? 0 : newValue;
    setLife(newValue);
  }, [life]);

  const handleAddLife = useCallback(() => {
    let newValue = life + 1;
    newValue = newValue >= maxLife ? maxLife : newValue;
    setLife(newValue);
  }, [life, maxLife]);

  const handleSubMaxLife = useCallback(() => {
    let newValue = maxLife - 1;
    newValue = newValue < life ? life : newValue;
    setMaxLife(newValue);
  }, [maxLife, life]);

  const handleAddMaxLife = useCallback(() => {
    setMaxLife(maxLife + 1);
  }, [maxLife]);

  return (
    <Container>
      <section>
        <div>
          <button type="button" onClick={handleSubLife}>
            -
          </button>
          <label>
            Life: <span>{life}</span>
          </label>
          <button type="button" onClick={handleAddLife}>
            +
          </button>
        </div>

        <div>
          <button type="button" onClick={handleSubMaxLife}>
            -
          </button>
          <label>
            Max Life: <span>{maxLife}</span>
          </label>
          <button type="button" onClick={handleAddMaxLife}>
            +
          </button>
        </div>
      </section>

      <Healthbar life={life} maxLife={maxLife} />
    </Container>
  );
};

export default Home;
